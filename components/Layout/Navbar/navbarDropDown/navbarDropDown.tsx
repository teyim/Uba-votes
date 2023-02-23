import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { CgUserlane } from 'react-icons/cg';
import { storage } from 'utils/storage';

export default function navbarDropdown(props: any) {
  const { customStyle } = props;
  const userFullNames = storage.getUser().fullName;

  const handlelogOut = () => {
    alert('hello');
  };
  return (
    <div className={customStyle + ' my-auto text-right font-rubik z-50 '}>
      <Menu as="div" className="inline-block text-left">
        <div className="">
          <Menu.Button className="inline-flex justify-evenly  w-full px-4 py-2 text-sm font-medium text-gray-700 text-md rounded-md ">
            <CgUserlane className="w-5 h-5 mx-1 text-violet-600" />
            <span className="my-auto">Hey! {userFullNames}</span>
            <BsChevronDown
              className="w-5 h-5 ml-2 -mr-1 my-auto text-gray-400 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 font-semibold origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'text-indigo-700' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                    onClick={handlelogOut}
                  >
                    {active ? (
                      <AiOutlineLogout
                        className="w-6 h-6 mr-2  text-indigo-700"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineLogout
                        className="w-6 h-6 mr-2 text-gray-600"
                        aria-hidden="true"
                      />
                    )}
                    <span className="mt-1 ">Logout</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
