import DropdownSelect from '@components/UI/dropdownSelect';
import { NextPage } from 'next';
import { schools } from 'data/schools';
import { useCallback, useState } from 'react';
import { useDepartments } from 'hooks/useDepartments';
import { useForm } from 'react-hook-form';
import { levels } from 'data/levels';
import { SelectOption } from 'types';

const Signup: NextPage = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(200);
  const department = useDepartments(selectedSchool);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  function submitHandler(data: object) {
    console.log(data);
  }
  console.log(selectedLevel);
  console.log(selectedDepartment);
  console.log(selectedSchool);

  return (
    <div className="w-screen h-screen mx-auto z-50 top-0 fixed flex justify-center items-center px-5 md:px-0">
      <div className="relative md:w-2/3 2xl:w-2/4 max-w-2/3 h-[80%] md:h[90%] flex flex-col ring-1 rounded-md shadow-sm ring-gray-600 py-8 px-6 overflow-y-scroll">
        <h1 className="bold text-4xl text-center text-violet-600 font-bold font-unbounded">
          Create Account
        </h1>
        <h2 className="text-lg text-center my-1 text-slate-600">
          Please enter credentials for new account
        </h2>
        <form className="mt-2 md:px-7" onSubmit={handleSubmit(submitHandler)}>
          <hr className="my-4"></hr>
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
                data={levels}
                chosenOption={levelSelectHandler}
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
                data={schools}
                chosenOption={schoolSelectHandler}
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
                data={department}
                chosenOption={departmentSelectHandler}
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
                name="password"
                className=" border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md"
                placeholder="Enter password"
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
            className="py-2 px-4  hover:border-2 text-black block ring-2 ring-gray-700 hover:bg-violet-600 hover:text-white rounded-md text-lg font-semibold mx-auto my-4"
          >
            Create Account
          </button>
        </form>
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
