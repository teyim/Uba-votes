/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { userLoginInput } from 'types';
import { login } from 'helpers/userHelpers';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { IUser } from 'helpers/types';
import shallow from 'zustand/shallow';
import { useUserStore } from '../utils/storage';

const Login: NextPage = () => {
  const formSchema = Yup.object().shape({
    matricule: Yup.string()
      .trim()
      .min(10, 'Your matricule needs to be 10 characters')
      .max(10, 'Your matricule exceeds 10 characters')
      .matches(
        /^(UBa)(1[0-9]|2[0-2])(G|A|H|L|S|E|C|P|Z|M|TP|T|Z|R)(\d{4})/,
        'matricule is not valid'
      ),
    password: Yup.string()
      .trim()
      .required('Password is mendatory')
      .min(8, 'Password must be at 8 char long'),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const queryClient = useQueryClient();

  const router = useRouter();
  const { setUser, user } = useUserStore((state) => ({
    setUser: state.setUser,
    user: state.user,
  }));
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm(formOptions);

  const { mutate, isLoading } = useMutation(
    (userData: userLoginInput) => login(userData),
    {
      onSuccess(data) {
        queryClient.setQueryData(['userData'], data);
      },
    }
  );

  function submitHandler(data: any) {
    // ? Execute the mutate;
    mutate(data, {
      onSuccess() {
        toast.success('Login Successfull');
        const data = queryClient.getQueryData(['userData']);
        setUser(data as IUser);
        const item = localStorage.getItem('user');
        if (item) {
          const token = JSON.parse(item).state?.user?.token;
          if (token) {
            router.push('/campaigns');
          }
        }
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
          Login
        </h1>
        <h2 className="text-lg text-center my-1 text-slate-600">
          Please enter login credentials
        </h2>
      </div>
      <div className="relative w-full md:w-4/12 flex flex-col ring-1 rounded-md shadow-sm ring-gray-600 py-8 px-6 ">
        <form className="mt-2 md:px-7" onSubmit={handleSubmit(submitHandler)}>
          <div className="">
            <div className="mb-6">
              <label
                htmlFor="matricule"
                className="block  mb-2 text-lg  font-medium text-gray-900 "
              >
                Matricule
              </label>
              <input
                type="text"
                {...register('matricule')}
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md "
                placeholder="UBa19S0111"
              />
              <span className="text-sm text-red-500">
                {errors?.matricule?.message as string}
              </span>
            </div>
            <div className="mb-6 ">
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
          </div>
          <button
            type="submit"
            className="py-2 px-4  hover:border-2 text-black block ring-2 ring-gray-700 hover:bg-violet-600 hover:text-white rounded-md text-lg font-semibold mx-auto my-4 disabled:bg-gray-500 disabled:text-black disabled:ring-0 disabled:border-0"
            disabled={isLoading ? true : false}
          >
            {isLoading ? 'Loging in...' : 'Login'}
          </button>
        </form>

        <h3 className="text-center my-2">
          Dont have an account?{' '}
          <Link passHref href="/signup">
            <a className="font-semibold cursor-pointer hover:text-violet-600 hover:underline">
              Signup
            </a>
          </Link>
        </h3>
      </div>
    </div>
  );
};
export default Login;
