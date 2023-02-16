/* eslint-disable @typescript-eslint/no-explicit-any */
import DropdownSelect from '@components/UI/dropdownSelect';
import { NextPage } from 'next';
import { schools } from 'data/schools';
import { useCallback, useState, useEffect } from 'react';
import { useDepartments } from 'hooks/useDepartments';
import { useForm } from 'react-hook-form';
import { levels } from 'data/levels';
import { RegisterInput, SelectOption } from 'types';
import { signUp } from 'helpers/auth';
import { useMutation } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

const Signup: NextPage = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const department = useDepartments(selectedSchool);
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //     setSelectedDepartment('');
  //     setSelectedLevel(0);
  //     setSelectedSchool('');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSubmitSuccessful]);

  const { mutate, isLoading } = useMutation(
    (userData: RegisterInput) => signUp(userData),
    {
      onSuccess(data) {
        toast.success(data?.message);
      },
      onError(error: any) {
        if (Array.isArray((error as any).response.data.error)) {
          (error as any).response.data.error.forEach((el: any) =>
            toast.error(el.message)
          );
        } else {
          toast.error(error.response.data);
        }
      },
    }
  );

  const schoolSelectHandler = useCallback(
    (selectedValue: SelectOption | undefined) =>
      updateSchoolState(selectedValue?.value as string),
    []
  );
  const departmentSelectHandler = useCallback(
    (selectedValue: SelectOption | undefined) =>
      setSelectedDepartment(selectedValue?.value as string),
    []
  );

  const levelSelectHandler = useCallback(
    (selectedValue: SelectOption | undefined) =>
      setSelectedLevel(selectedValue?.value as number),
    []
  );

  function updateSchoolState(selectedValue: string | undefined) {
    setSelectedSchool(selectedValue ?? '');
    setSelectedDepartment('');
  }

  function submitHandler(data: any) {
    // ? Execute the M   mutate(data);
    const updatedData = {
      ...data,
      level: selectedLevel,
      school: selectedSchool,
      department: selectedDepartment,
    };
    mutate(updatedData);
  }

  return (
    <div className="w-screen h-screen mx-auto z-50 top-0 fixed flex flex-col justify-center items-center px-5 md:px-0">
      <Toaster />
      <div className="mx-auto mt-5">
        <h1 className="bold text-4xl text-center text-violet-600 font-bold font-unbounded">
          Create Account
        </h1>
        <h2 className="text-lg text-center my-1 text-slate-600">
          Please enter credentials for new account
        </h2>
      </div>
      <div className="relative w-full md:w-2/3 2xl:w-2/4 max-w-2/3  h-[80%] md:h[90%] flex flex-col ring-1 rounded-md shadow-sm ring-gray-600 py-8 px-6 overflow-y-scroll">
        <form className="mt-2 md:px-7" onSubmit={handleSubmit(submitHandler)}>
          <div className="md:flex justify-evenly">
            <div className="mb-6">
              <label
                htmlFor="fullname"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Full Name
              </label>
              <input
                type="text"
                className="border border-black text-gray-900 text-sm  block w-full p-2.5 rounded-md"
                placeholder="John martin"
                {...register('fullName')}
                required
                minLength={6}
                maxLength={15}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="lastname"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Matricule
              </label>
              <input
                type="text"
                {...register('matricule', {
                  pattern: {
                    value:
                      /^(UBa)(1[0-9]|2[0-2])(G|A|H|L|S|E|C|P|Z|M|TP|T|Z|R)(\d{4})/,
                    message: 'Matricule is invalid',
                  },
                })}
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md "
                placeholder="Uba19S0363"
                required
                minLength={10}
                maxLength={10}
              />
              <span className="text-sm text-red-500">
                {errors?.matricule?.message as string}
              </span>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                {...register('email', {
                  pattern: {
                    value: /^.*@gmail.com$/,
                    message: 'Email must end with gmail.com',
                  },
                })}
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md "
                placeholder="example@gmail.com"
                required
              />
              <span className="text-sm text-red-500">
                {errors?.email?.message as string}
              </span>
            </div>
          </div>
          <div className="md:flex justify-evenly">
            <div className="mb-6 md:w-[20%]">
              <label
                htmlFor="school"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Level
              </label>
              <DropdownSelect
                options={levels}
                onChange={levelSelectHandler}
                height={40}
              />
            </div>
            <div className="mb-6 md:w-2/6">
              <label
                htmlFor="school"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                School
              </label>
              <DropdownSelect
                options={schools}
                onChange={schoolSelectHandler}
                height={40}
              />
            </div>
            <div className="mb-6 md:w-2/6">
              <label
                htmlFor="lastname"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Department
              </label>
              <DropdownSelect
                options={department}
                onChange={departmentSelectHandler}
                height={40}
              />
            </div>
          </div>
          <div className="md:flex justify-evenly w-full">
            <div className="mb-6 md:w-2/5">
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md"
                placeholder="Enter password"
                {...register('password')}
                required
              />
            </div>
            <div className="mb-6 md:w-2/5">
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-medium text-gray-900 "
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="passwordConfirmation"
                className=" border border-black text-gray-900 text-sm block w-full p-2.5 rounded-md"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-2 px-4  hover:border-2 text-black block ring-2 ring-gray-700 hover:bg-violet-600 hover:text-white rounded-md text-lg font-semibold mx-auto my-4 disabled:bg-gray-500 disabled:text-black disabled:ring-0 disabled:border-0"
            disabled={
              !selectedDepartment ||
              !selectedLevel ||
              !selectedSchool ||
              isLoading
                ? true
                : false
            }
          >
            {isLoading ? 'Creating Account...' : ' Create Account'}
          </button>
        </form>
        {!selectedDepartment && selectedSchool ? (
          <span className="text-sm text-red-500 text-center">
            please select appropriate Department under the school{' '}
            {selectedSchool}
          </span>
        ) : (
          ''
        )}

        <h3 className="text-center my-2">
          Already have an account?{' '}
          <button className="font-semibold cursor-pointer hover:text-violet-600 hover:underline">
            Login
          </button>
        </h3>
      </div>
    </div>
  );
};
export default Signup;
