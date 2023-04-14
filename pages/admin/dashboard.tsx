import Header from '@components/DashBoard/Header';
import Sidebar from '@components/DashBoard/Sidebar';
import Home from '@components/DashBoard/Tabs/Home';
import React, { useState } from 'react';
import Trips from '@components/DashBoard/Tabs/Trips';
import Campaigns from '@components/DashBoard/Tabs/Campaigns';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showCampaignsPage, setShowCampaignsPage] = useState(false);
  const [showTripsPage, setshowTripsPage] = useState(false);

  const togglePages = (pageName: string) => {
    //refactor this code
    if (pageName === 'home' && showHome !== true) {
      setshowTripsPage(false);
      setShowCampaignsPage(false);
      setShowHome(!showHome);
    }
    if (pageName === 'campaigns' && showCampaignsPage !== true) {
      setshowTripsPage(false);
      setShowHome(false);
      setShowCampaignsPage(!showCampaignsPage);
    }
    if (pageName === 'tripsPage' && showTripsPage !== true) {
      setShowHome(false);
      setShowCampaignsPage(false);
      setshowTripsPage(!showTripsPage);
    }
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden ">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          toggleTabs={(pageName: string) => togglePages(pageName)}
        />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-blue-50">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            {showHome && <Home></Home>}
            {showCampaignsPage&& <Campaigns />}
            {showTripsPage && <Trips />}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
