import React, { useState } from 'react';
import NavBarDropDown from './navbarDropDown/navbarDropDown';
import Link from 'next/link';
import { useStore } from 'utils/storage';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [openmobilemenu, setOpenMobileMenu] = useState(false);
  const router = useRouter();

  const { clearUser } = useStore((state) => ({
    clearUser: state.clearUser,
  }));

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openmobilemenu);
  };
  const handleLogOut = () => {
    clearUser();
    router.replace('/');
  };
  return (
    <nav className="bg-gray-100  font-semibold py-3 shadow-sm border-b-2 px-12">
      <div className="max-w-8xl mx-auto  ">
        <div className="flex justify-between">
          <div className="flex justify-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center py-2 px-2 text-violet-600 font-unbounded text-3xl">
                Uba-votes
              </a>
            </Link>
          </div>
          <NavBarDropDown customStyle="hidden md:flex"></NavBarDropDown>
          <div className="md:hidden flex items-center text-gray-600">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-sm focus:ring-opacity-50"
              onClick={handleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openmobilemenu ? (
        <div className=" md:hidden text-center text-gray-700 flex flex-col content-evenly">
          <div className="font-light text-blue-700 flex flex-col">
            <button
              className=" py-3 text-sm hover:bg-blue-400 hover:text-white "
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
