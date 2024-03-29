import { Side } from '@tanstack/react-query-devtools/build/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdCampaign } from 'react-icons/md';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTabs: (pageName: string) => void;
};

function Sidebar({ sidebarOpen, setSidebarOpen, toggleTabs }: SidebarProps) {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  //change to a single state object
  const [showHome, setShowHome] = useState(true);
  const [showCampaignsPage, setshowCampaignsPage] = useState(false);
  const [showCandidatesPage, setshowCandidatesPage] = useState(false);

  const handleLogOut = () => {
    alert('logout');
  };

  // close on click outside
  // useEffect(() => {
  //     const clickHandler = ({ target }): void => {
  //         if (!sidebar?.current || !trigger?.current) return;
  //         if (!sidebarOpen || sidebar?.current?.contains(target) || trigger?.current?.contains(target)) return;
  //         setSidebarOpen(false);
  //     };
  //     document.addEventListener('click', clickHandler);
  //     return () => document.removeEventListener('click', clickHandler);
  // });

  const togglePages = (pageName: string) => {
    //refactor this code
    if (pageName === 'home') {
      setshowCandidatesPage(false);
      setshowCampaignsPage(false);
      setShowHome(true);
      toggleTabs(pageName);
    }
    if (pageName === 'campaigns') {
      setshowCandidatesPage(false);
      setShowHome(false);
      setshowCampaignsPage(true);
      toggleTabs(pageName);
    }
    if (pageName === 'candidates') {
      setShowHome(false);
      setshowCampaignsPage(false);
      setshowCandidatesPage(true);
      toggleTabs(pageName);
    }
  };

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
        </div>

        {/* Links */}
        <div>
          <ul className="mt-8">
            {/* Dashboard */}
            <li
              className={`px-3 py-3 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                showHome && 'bg-gray-900'
              }`}
              onClick={() => togglePages('home')}
            >
              <div
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  showHome && 'hover:text-gray-200'
                }`}
              >
                <div className="flex flex-grow">
                  <AiFillHome
                    className={`flex-shrink-0 w-6 h-6 mr-2  text-gray-400 ${
                      showHome && 'text-indigo-600'
                    }`}
                  />
                  <span className="text-sm font-medium my-auto">Home</span>
                </div>
              </div>
            </li>
            <li
              className={`px-3 py-3 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                showCampaignsPage && 'bg-gray-900'
              }`}
              onClick={() => togglePages('campaigns')}
            >
              <div
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  showCampaignsPage && 'hover:text-gray-200'
                }`}
              >
                <div className="flex flex-grow">
                  <MdCampaign
                    className={`flex-shrink-0 w-6 h-6 mr-2  text-gray-400 ${
                      showCampaignsPage && 'text-indigo-600'
                    }`}
                  />
                  <span className="text-sm font-medium">Campaigns</span>
                </div>
              </div>
            </li>
            <li
              className={`px-3 py-4 rounded-sm mb-0.5 last:mb-0 cursor-pointer ${
                showCandidatesPage && 'bg-gray-900'
              }`}
              onClick={() => togglePages('candidates')}
            >
              <div
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  showCandidatesPage && 'hover:text-gray-200'
                }`}
              >
                <div className="flex flex-grow">
                  <BsPeopleFill
                    className={`flex-shrink-0 w-6 h-6 mr-2  text-gray-400 ${
                      showCandidatesPage && 'text-indigo-600'
                    }`}
                  />
                  <span className="text-sm font-medium">Candidates</span>
                </div>
              </div>
            </li>
            <li
              className={`px-3 py-8 rounded-sm mb-0.5 last:mb-0 cursor-pointer`}
            >
              <div
                className={`block text-gray-200 hover:text-white transition duration-150`}
              >
                <div className="flex flex-grow" onClick={handleLogOut}>
                  <RiLogoutCircleRFill
                    className={`flex-shrink-0 w-6 h-6 mr-2  text-gray-400`}
                  />
                  <span className="text-sm font-medium">Logout</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
