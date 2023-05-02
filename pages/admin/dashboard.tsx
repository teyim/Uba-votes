/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Header from '@components/DashBoard/Header';
import Sidebar from '@components/DashBoard/Sidebar';
import Home from '@components/DashBoard/Tabs/Home';
import React, { useState, useEffect } from 'react';
import Candidates from '@components/DashBoard/Tabs/Candidates';
import Campaigns from '@components/DashBoard/Tabs/Campaigns';
import { useAllCampaignsQuery } from 'hooks/adminHooks';
import toast, { Toaster } from 'react-hot-toast';
import ComponentState from '@components/Layout/componentState';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showCampaignsPage, setShowCampaignsPage] = useState(false);
  const [showCandidatesPage, setshowCandidatesPage] = useState(false);

  const { data, isLoading, error, isError } = useAllCampaignsQuery();

  if (isError && error?.message) {
    toast.error(error?.response.data);
  }
  if (error?.message && isError) {
    toast.error(error?.message);
  }

  //
  let totalCampaigns = 0;
  let totalCandidates = 0;
  let totalVotes = 0;

  data?.forEach((campaign) => {
    totalCampaigns++;
    campaign.votingPositions.forEach((votingPosition) => {
      totalCandidates += votingPosition.candidates.length;
      votingPosition.candidates.forEach((candidate) => {
        totalVotes += candidate.votes;
      });
    });
  });

  const togglePages = (pageName: string) => {
    //refactor this code
    if (pageName === 'home' && showHome !== true) {
      setshowCandidatesPage(false);
      setShowCampaignsPage(false);
      setShowHome(!showHome);
    }
    if (pageName === 'campaigns' && showCampaignsPage !== true) {
      setshowCandidatesPage(false);
      setShowHome(false);
      setShowCampaignsPage(!showCampaignsPage);
    }
    if (pageName === 'candidates' && showCandidatesPage !== true) {
      setShowHome(false);
      setShowCampaignsPage(false);
      setshowCandidatesPage(!showCandidatesPage);
    }
  };

  function showCampaignCreationSuccessMessage(message: string) {
    toast.success(message);
  }

  return (
    <>
      <Toaster />
      {data && !isLoading ? (
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
              {showHome && (
                <Home
                  totalCampaigns={totalCampaigns}
                  totalCandidates={totalCandidates}
                  totalVotes={totalVotes}
                ></Home>
              )}
              {showCampaignsPage && (
                <Campaigns
                  data={data}
                  showSuccessMessage={(message) =>
                    showCampaignCreationSuccessMessage(message)
                  }
                />
              )}
              {showCandidatesPage && <Candidates />}
            </main>
          </div>
        </div>
      ) : (
        <ComponentState
          isError={isError}
          isLoading={isLoading}
          currentComponent="Admin"
        />
      )}
    </>
  );
};

export default Dashboard;
