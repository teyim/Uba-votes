import React, { useState } from 'react';
import DashboardCard from '../DashboardCard';
import WelcomeBanner from '../WelcomeBanner';
import Table from '../Table';

export default function Home() {
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto font-rubik">
        {/* Welcome banner */}
        <WelcomeBanner />
        <div>hello</div>
      </div>
    </div>
  );
}
