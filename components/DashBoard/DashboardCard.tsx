import React from 'react'
import Icon from '../../Assets/images/icon-01.svg'
import Image from 'next/image'

function DashboardCard(heading: string, subHeading: string, value: number) {
    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200 font-rubik">
            <div className="px-5 py-5">
                <header className="flex justify-between items-start mb-2">
                    {/* Icon */}
                    <Image src={Icon} alt="Icon 01" />
                </header>
                <h2 className="text-lg font-bold text-blue-700 mb-1 uppercase">{heading}</h2>
                <div className="text-xs font-semibold text-gray-400 uppercase mb-1">{subHeading}</div>
                <div className="flex items-start">
                    <div className="text-3xl font-bold text-gray-700 mr-2">{value}</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard
