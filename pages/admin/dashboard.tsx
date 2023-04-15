/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Header from '@components/DashBoard/Header';
import Sidebar from '@components/DashBoard/Sidebar';
import Home from '@components/DashBoard/Tabs/Home';
import React, { useState, useEffect } from 'react';
import Trips from '@components/DashBoard/Tabs/Trips';
import Campaigns from '@components/DashBoard/Tabs/Campaigns';
import { useAllCampaignsQuery } from 'hooks/adminHooks';
import toast, { Toaster } from 'react-hot-toast';
import ComponentState from '@components/Layout/componentState';
import { ICampaign } from 'helpers/types';
import { FilteredCampaign } from 'types';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showCampaignsPage, setShowCampaignsPage] = useState(false);
  const [showTripsPage, setshowTripsPage] = useState(false);

  const [filteredCampaignData, setFilteredCampaignData] = useState<
    FilteredCampaign[] | []
  >([]);
  const { data, isLoading, error, isError } = useAllCampaignsQuery();

  if (isError && error?.message) {
    toast.error(error?.response.data);
  }
  // if (error?.message && isError) {
  //   toast.error(error?.message);
  // }

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

  function getCampaignData(campaigns: ICampaign[] | []) {
    if (campaigns) {
      return campaigns.map((campaign) => {
        const votingPositions = campaign.votingPositions;
        const numCandidates = votingPositions.reduce((total, position) => {
          return total + position.candidates.length;
        }, 0);
        const numVotes = votingPositions.reduce((total, position) => {
          return (
            total +
            position.candidates.reduce((votesTotal, candidate) => {
              return votesTotal + candidate.votes;
            }, 0)
          );
        }, 0);
        return {
          name: campaign.name,
          id: campaign._id,
          startTime: campaign.startTime,
          endTime: campaign.endTime,
          numCandidates,
          numVotes,
        };
      });
    }
  }

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
                <Campaigns data={() => getCampaignData(data!)} />
              )}
              {showTripsPage && <Trips />}
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
