/* eslint-disable @typescript-eslint/no-explicit-any */
import DropdownSelect from '@components/UI/dropdownSelect';
import { NextPage } from 'next';
import { schools } from 'data/schools';
import { useCallback, useState, useEffect } from 'react';
import { useDepartments } from 'hooks/useDepartments';
import { useForm } from 'react-hook-form';
import { levels } from 'data/levels';
import { RegisterInput, SelectOption } from 'types';
import { signUp } from 'helpers/userHelpers';
import { useMutation } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Signup: NextPage = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const department = useDepartments(selectedSchool);

  const formSchema = Yup.object().shape({
    fullName: Yup.string()
      .trim()
      .required('first name is required')
      .min(6, 'first name must be atleat 6 character')
      .max(30, 'first name must be at most 15 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .trim()
      .matches(/^.*@gmail.com$/, 'Email must end with gmail.com')
      .required('Your email is required'),
    matricule: Yup.string()
      .trim()
      .min(10, 'Your matricule needs to be 10 characters')
      .max(10, 'Your matricule exceeds 10 characters')
      .matches(
        /^(UBa)(1[0-9]|2[0-2])(G|A|H|L|S|E|C|P|Z|M|TP|T|Z|R)(\d{4})/,
        'matricule is not valid'
      )
      .required('matricule is mandatory'),
    password: Yup.string()
      .trim()
      .required('Password is mendatory')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character'
      )
      .min(8, 'Password must be at 8 char long'),
    confirmPwd: Yup.string()
      .trim()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const router = useRouter();

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm(formOptions);

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //     setSelectedDepartment('');
  //     setSelectedLevel(0);
  //     setSelectedSchool('');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSubmitSuccessful]);

  const { mutate, isLoading } = useMutation((userData: RegisterInput) =>
    signUp(userData)
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

  function submitHandler(signUpData: any) {
    // ? Execute the mutate;
    const data = {
      ...signUpData,
      level: selectedLevel,
      school: selectedSchool,
      department: selectedDepartment,
    };

    delete data.confirmPwd;
    console.log(signUpData);

    mutate(data, {
      onSuccess(data) {
        toast.success(data?.message);
        router.replace('/login');
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
    });
  }

  return (
    <div className="w-screen h-screen mx-auto z-10 top-0 fixed flex flex-col justify-center items-center px-5 md:px-0">
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
            <div className="mb-6 md:w-3/12">
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
              />
              <span className="text-sm text-red-500">
                {errors?.fullName?.message as string}
              </span>
            </div>
            <div className="mb-6 md:w-3/12">
              <label
                htmlFor="lastname"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Matricule
              </label>
              <input
                type="text"
                {...register('matricule')}
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md "
                placeholder="Uba19S0363"
              />
              <span className="text-sm text-red-500">
                {errors?.matricule?.message as string}
              </span>
            </div>
            <div className="mb-3 md:w-3/12">
              <label
                htmlFor="email"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md "
                placeholder="example@gmail.com"
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
              />
              <span className="text-sm text-red-500">
                {errors?.password?.message as string}
              </span>
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
                className=" border border-black text-gray-900 text-sm block w-full p-2.5 rounded-md"
                {...register('confirmPwd')}
                placeholder="Confirm password"
              />
              <span className="text-sm text-red-500">
                {errors?.confirmPwd?.message as string}
              </span>
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
          <Link passHref href="/login">
            <a className="font-semibold cursor-pointer hover:text-violet-600 hover:underline">
              Login
            </a>
          </Link>
        </h3>
      </div>
    </div>
  );
};
export default Signup;
