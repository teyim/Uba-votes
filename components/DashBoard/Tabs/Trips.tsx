import React from "react";
import Table from "../Table";
import thinkingEmoji from '../../../Assets/images/thinking_face.svg'
// import SingleSelect from "Components/CustomSelect/SingleSelect";
// import Calender from "Components/Calender/Calender";

// const Tabs = ({ color }) => {
//     const [openTab, setOpenTab] = React.useState(1);
//     const emptyCompPlaceHolder=(tabOption)=>(
//         <div className=''>
//             <img src={thinkingEmoji} alt='smiley emoji' className='w-20 h-20 mx-auto my-2 '></img>
//             <h2 className='text-lg font-semibold uppercase text-center text-gray-800'>Looks empty, you've no {tabOption} bookings.</h2>
//             <h3 className='text-md text-center '>When you book a trip, you will see your itinerary here.</h3>
//         </div>
//     )
//     return (
//         <>
//             <div className="flex flex-wrap font-rubik">
//                 <div className="w-full px-6">
//                     <ul
//                         className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
//                         role="tablist"
//                     >
//                         <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//                             <button
//                                 className={
//                                     "text-sm font-semibold uppercase px-5 py-3 shadow-sm border rounded-xs block leading-normal " +
//                                     (openTab === 1
//                                         ? "text-white bg-" + color + "-600"
//                                         : "text-" + color + "-600 bg-white")
//                                 }
//                                 onClick={e => {
//                                     e.preventDefault();
//                                     setOpenTab(1);
//                                 }}
//                                 data-toggle="tab"
//                                 role="tablist"
//                             >
//                                 Upcoming
//                             </button>
//                         </li>
//                         <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
//                             <button
//                                 className={
//                                     "text-sm font-semibold uppercase px-5 py-3 shadow-sm border rounded-xs block leading-normal " +
//                                     (openTab === 2
//                                         ? "text-white bg-" + color + "-600"
//                                         : "text-" + color + "-600 bg-white")
//                                 }
//                                 onClick={e => {
//                                     e.preventDefault();
//                                     setOpenTab(2);
//                                 }}
//                                 data-toggle="tab"
//                                 role="tablist"
//                             >
//                                 cancelled
//                             </button>
//                         </li>
//                         <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//                             <button
//                                 className={
//                                     "text-sm font-semibold uppercase px-5 py-3 shadow-sm border rounded-xs block leading-normal " +
//                                     (openTab === 3
//                                         ? "text-white bg-" + color + "-600"
//                                         : "text-" + color + "-600 bg-white")
//                                 }
//                                 onClick={e => {
//                                     e.preventDefault();
//                                     setOpenTab(3);
//                                 }}
//                                 data-toggle="tab"
//                                 role="tablist"
//                             >
//                                 completed
//                             </button>
//                         </li>
//                     </ul>
//                     <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                       
//                       <Table></Table>
//                        {/* {emptyCompPlaceHolder('Upcoming')} */}
//                     </div>
//                     <div className={openTab === 2 ? "block" : "hidden"} id="link2">
//                         {/*<Table></Table>*/}
//                         {emptyCompPlaceHolder('Cancelled')}
//                     </div>
//                     <div className={openTab === 3 ? "block" : "hidden"} id="link3">
//                         <div className='md:flex my-3 justify-end'>
//                             <div className="md:mx-1 w-full md:w-2/12">
//                                 <Calender padding='py-2'></Calender>
//                             </div>

//                             <div className='w-full md:w-2/12 md:mx-1 md:my-0 my-2 '>
//                                 <SingleSelect ></SingleSelect>
//                             </div>
//                             <div className='w-full md:w-2/12 md:mx-1 md:my-0 my-2'>
//                                 <SingleSelect ></SingleSelect>
//                             </div>

//                         </div>
//                         <Table></Table>
//                         {/* {emptyCompPlaceHolder('Completed')} */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// function Trips() {
//     return (
//         <div>
//             <Tabs color="blue" />
//         </div>
//     )
// }

// export default Trips

