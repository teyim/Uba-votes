import React, { useState } from 'react'
import DashboardCard from '../DashboardCard'
import WelcomeBanner from '../WelcomeBanner'
import Table from '../Table'


export default function Home() {
    const [cardData, setcardData] = useState([{
        heading: 'Cities Visited',
        subHeading: 'total number of cities travelled',
        value: 2
    },
    {
        heading: 'Distance travelled',
        subHeading: 'total distance of covered travelling',
        value: 2
    },
    {
        heading: 'Amount Spent',
        subHeading: 'total amount spent travelling',
        value: '25,000'
    },
    ])


    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto font-rubik">

                {/* Welcome banner */}
                <WelcomeBanner />

                {/* Cards */}
                <div className="grid grid-cols-12 gap-6">
                    {cardData.map((data) => (
                        <DashboardCard key={data.value} heading={data.heading} subHeading={data.subHeading} value={data.value} />
                    ))}
                </div>
                {/* <div className='my-8'>
                    <Table tableHeading='Recent Bookings'></Table>
                </div> */}
            </div>
        </div>
    )
}
