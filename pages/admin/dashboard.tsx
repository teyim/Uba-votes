import Header from '@components/DashBoard/Header';
import Sidebar from '@components/DashBoard/Sidebar';
import Home from '@components/DashBoard/Tabs/Home';
import React, { useState } from 'react'


const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showHome, setShowHome] = useState(true)
    const [showprofilePage, setshowprofilePage] = useState(false)
    const [showTripsPage, setshowTripsPage] = useState(false)

    const togglePages = (pageName: string) => {
        //refactor this code
        if (pageName === 'dashboard' && showHome !== true) {
            setshowTripsPage(false)
            setshowprofilePage(false)
            setShowHome(!showHome)
        }
        if (pageName === 'profilePage' && showprofilePage !== true) {
            setshowTripsPage(false)
            setShowHome(false)
            setshowprofilePage(!showprofilePage)

        }
        if (pageName === 'tripsPage' && showTripsPage !== true) {
            setShowHome(false)
            setshowprofilePage(false)
            setshowTripsPage(!showTripsPage)
        }

    }
    return (
        <>
            <div className="flex h-screen overflow-hidden ">

                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} toggleTabs={(pageName: string) => togglePages(pageName)} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-blue-50">

                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <main>
                        {showHome && <Home></Home>}
                        {/* {showprofilePage && <Profile />}
                        {showTripsPage && <Trips />} */}
                    </main>

                </div>
            </div>
        </>
    )
}

export default Dashboard
