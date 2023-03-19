import React from 'react'

function Table(tableHeading: string) {
    return (
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200 overflow-x-scroll">
            {tableHeading && <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">{tableHeading}</h2>
            </header>}
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Agency</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">From</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">To</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Price</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Seats</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Travellers</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-gray-100">
                            {/* Row */}
                            <tr>
                                <td className="p-2">
                                    <div className="text-gray-800">Github.com</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">2.4K</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-500">$3,877</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">267</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">4.7%</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">3.9%</div>
                                </td>
                            </tr>
                            {/* Row */}
                            <tr>
                                <td className="p-2">
                                    <div className="text-gray-800">Github.com</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">2.2K</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-500">$3,426</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">249</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">4.4%</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">3.9%</div>
                                </td>
                            </tr>
                            {/* Row */}
                            <tr>
                                <td className="p-2">
                                    <div className="text-gray-800">Github.com</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">2.0K</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-500">$2,444</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">224</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">4.2%</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">3.9%</div>
                                </td>
                            </tr>
                            {/* Row */}
                            <tr>
                                <td className="p-2">
                                    <div className="text-gray-800">Github.com</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">1.9K</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-500">$2,236</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">220</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">4.2%</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">3.9%</div>
                                </td>
                            </tr>
                            {/* Row */}
                            <tr>
                                <td className="p-2">
                                    <div className="text-gray-800">Github.com</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">1.7K</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-500">$2,034</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">204</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">3.9%</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-light-blue-500">3.9%</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Table
