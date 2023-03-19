import type { NextPage } from 'next';
import Image from 'next/image';
import handImage from '@public/images/hand.png';
import Link from 'next/link';
import { useStore } from 'utils/storage';
import { useEffect, useState } from 'react';
import { IUser } from 'helpers/types';
import { useRouter } from 'next/router';


const Home: NextPage = () => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const { user } = useStore((state) => ({
    user: state.user,
  }));

  const router = useRouter();
  const isBaseRoute = router.pathname == '/' ? true : false

  useEffect(() => {
    setUserData(user);

  }, []);

  return (
    isBaseRoute ?
      <div className="h-screen md:w-screen  bg-gradient-to-tl from-indigo-500 to-violet-600 lg:px-8 px-3 py-8 font-roboto text-gray-200 overflow-hidden ">
        <nav className="max-w-screen-2xl  text-2xl font-unbounded lg:px-20 text-center lg:text-left">
          <ul className="">
            <li>
              <span className="font-semibold text-orange-300">U</span>ba-votes
            </li>
          </ul>
        </nav>
        <div className="max-w-screen-2xl lg:mt-6 mt-3 lg:p-5 p-2 lg:flex justify-center">
          <div className="lg:w-2/5 flex flex-col items-center text-center lg:text-left lg:items-start">
            <h1 className="text-4xl font-bold font-unbounded mt-20 text-orange-300 ">
              Cast Votes Online
            </h1>
            <h2 className="text-xl mt-5 text-gray-300 leading-normal">
              Easily take part in departmental and class elections from anywhere
              using your smart or pc .vote fast and get to see who will be your
              next Class/Department leader.
            </h2>
            {!userData ? (
              <>
                <Link href="/signup" passHref>
                  <a className="text-lg text-center mt-5 ring-1 ring-gray-300 bg-gray-300 bg-opacity-10 w-2/4 py-3 rounded-md hover:bg-orange-300 hover:ring-orange-300 hover:text-gray-800">
                    Signup
                  </a>
                </Link>

                <Link href="/login" passHref>
                  <a className="mt-5 w-2/4  text-orange-300 hover:underline ">
                    Already have an account?
                  </a>
                </Link>
              </>
            ) : (
              <Link href="/campaigns" passHref>
                <a className="text-lg text-center mt-5 ring-1 ring-gray-300 bg-gray-300 bg-opacity-10 w-2/4 py-3 rounded-md hover:bg-orange-300 hover:ring-orange-300 hover:text-gray-800">
                  View Campaigns
                </a>
              </Link>
            )}
          </div>
          <div className="hidden lg:flex p-2 w-1/2 ">
            <Image src={handImage} alt="hand image" />
          </div>
        </div>
      </div> : null
  );
};

export default Home;
