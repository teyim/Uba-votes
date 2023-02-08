import DropdownSelect from '@components/UI/dropdownSelect';
import { NextPage } from 'next';
import { schools } from 'data/schools';
import { HND_Departments } from 'data/departments';

const Signup: NextPage = () => {
  return (
    <div className="w-screen h-screen mx-auto z-50 top-0 fixed flex justify-center items-center px-5 md:px-0">
      <div className="relative md:w-2/3 2xl:w-2/4 max-w-2/3 h-[80%] md:h[90%] flex flex-col ring-1 rounded-md shadow-sm ring-gray-600 py-8 px-6 overflow-y-scroll">
        <h1 className="bold text-4xl text-center text-violet-600 font-bold font-unbounded">
          Create Account
        </h1>
        <h2 className="text-lg text-center my-1 text-slate-600">
          Please enter credentials for new account
        </h2>
        <form className="mt-2 md:px-7">
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
                name="fullName"
                className="border border-black text-gray-900 text-sm  block w-full p-2.5 rounded-md"
                placeholder="John martin"
                required
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
                name="matricule"
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md "
                placeholder="Uba19S0363"
                required
              />
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
                name="email"
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md "
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>
          <div className="md:flex justify-evenly">
            <div className="mb-6 md:w-2/5">
              <label
                htmlFor="lastname"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                School
              </label>
              <DropdownSelect
                data={schools}
                chosenOption={(value) => alert(value?.value)}
                height={40}
              />
            </div>
            <div className="mb-6 md:w-2/5">
              <label
                htmlFor="lastname"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Department
              </label>
              <DropdownSelect
                data={HND_Departments}
                chosenOption={(value) => alert(value?.value)}
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
