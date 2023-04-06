/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { adminLoginInput } from 'types';
import { login } from 'helpers/adminHelpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useAdminStore } from 'utils/storage';

const Admin: NextPage = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string().trim().required('Your email is required'),
    password: Yup.string().trim().required('Password is mendatory'),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const queryClient = useQueryClient();

  const router = useRouter();
  const { setAdminToken, adminToken } = useAdminStore((state) => ({
    setAdminToken: state.setAdminToken,
    adminToken: state.adminToken,
  }));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const { mutate, isLoading } = useMutation(
    (userData: adminLoginInput) => login(userData),
    {
      onSuccess(data) {
        queryClient.setQueryData(['adminToken'], data);
      },
    }
  );

  function submitHandler(data: any) {
    // ? Execute the mutate;
    mutate(data, {
      onSuccess() {
        toast.success('Login Successfull');
        const data = queryClient.getQueryData(['adminToken']);
        setAdminToken(data as string);
        if (data) {
          router.push('/dashboard');
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
                Username
              </label>
              <input
                type="text"
                {...register('username')}
                className="border border-black text-gray-900 text-sm   block w-full p-2.5 rounded-md "
                placeholder="enter username"
              />
              <span className="text-sm text-red-500">
                {errors?.username?.message as string}
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
      </div>
    </div>
  );
};
export default Admin;
