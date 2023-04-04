import React, { useState } from 'react';

function Profile() {
  const [profileOptions, setProfileOptions] = useState([
    {
      Name: 'Teyim Asobo',
      DateofBirth: '',
      Gender: 'Male',
      IDCardNumber: '008298390012',
    },
    {
      Mobile: '+237672267677',
      Email: 'teyimasobo@gmail.com',
      Password: '******',
    },
  ]);

  return (
    // <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    //   <div className=" mx-auto w-11/12 bg-white shadow-sm rounded-sm border border-gray-200 font-rubik ">
    //     <div className="px-5 py-5 ">
    //       <div className="md:flex justify-between">
    //         <div>
    //           <h2 className="text-3xl font-semibold text-gray-700 mb-1 uppercase">
    //             PROFILE
    //           </h2>
    //           <h3 className="text-md text-gray-400  mb-1">
    //             Basic info, for a faster booking experience
    //           </h3>
    //         </div>
    //         <div>
    //           {/* <Button
    //                             customStyle={
    //                                 " " +
    //                                 "border border-gray-400 text-gray-600 font-semibold py-2 px-4 my-2 md:my-0"
    //                             }>
    //                             Edit
    //                         </Button> */}
    //         </div>
    //       </div>
    //       {Object.keys(profileOptions[0] as any).map((keyName, i) => (
    //         <div className="my-3 border-b p-2 md:flex" key={i}>
    //           <h2 className="text-gray-600 w-2/5">{keyName}</h2>
    //           {(profileOptions[0][keyName] as string) === '' ? (
    //             <h2 className="text-md font-semibold text-blue-600 w-2/5">
    //               + Add
    //             </h2>
    //           ) : (
    //             <h2 className="text-md font-semibold text-gray-600 w-2/5">
    //               {profileOptions[0][keyName] as string}
    //             </h2>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className=" mx-auto w-11/12 bg-white shadow-sm rounded-sm border border-gray-200 font-rubik mt-8">
    //     <div className="px-5 py-5">
    //       <div className="md:flex justify-between">
    //         <div>
    //           <h2 className="text-3xl font-semibold text-gray-700 mb-1 uppercase">
    //             Login Info
    //           </h2>
    //           <h3 className="text-md text-gray-400  mb-1">
    //             Basic Authentication information
    //           </h3>
    //         </div>
    //         <div>
    //           {/* <Button
    //             customStyle={
    //               ' ' +
    //               'border border-gray-400 text-gray-600 font-semibold py-2 px-4 my-2 md:my-0'
    //             }
    //           >
    //             Edit
    //           </Button> */}
    //         </div>
    //       </div>
    //       {Object.keys(profileOptions[1]).map((keyName, i) => (
    //         <div className="my-3 border-b p-2 md:flex" key={i}>
    //           <h2 className="text-gray-600 w-2/5">{keyName}</h2>
    //           {profileOptions[1][keyName] === '' ? (
    //             <h2 className="text-md font-semibold text-blue-600 w-2/5">
    //               + Add
    //             </h2>
    //           ) : (
    //             <h2 className="text-md font-semibold text-gray-600 w-2/5">
    //               {profileOptions[1][keyName]}
    //             </h2>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>Profile</div>
  );
}

export default Profile;
