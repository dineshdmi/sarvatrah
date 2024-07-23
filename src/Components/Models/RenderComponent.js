import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi'; // Example icon from react-icons

const RenderComponent = ({ index }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const showPanel = (panelIndex, colorCode) => {
        setActiveTab(panelIndex);
        document.documentElement.style.setProperty('--colorCode', colorCode);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    switch (index) {
        case 0:
            return (
                <div className="flex flex-col items-center">
                    <div className="w-full h-[280px]">
                        <div className="flex h-[15%]">
                            <button
                                onClick={() => showPanel(0, "white")}
                                className={`w-1/6 h-full p-2 font-sans text-sm relative ${activeTab === 0 ? 'text-black border-r-2 border-t-4 border-l-2 border-sky-400' : ''}`}
                            >
                                Packages
                                {activeTab === 0 && (
                                    <div className="absolute top-[38px] left-[0%] h-[5px] w-[100%] bg-white"></div>
                                )}
                            </button>
                            <button
                                onClick={() => showPanel(1, "white")}
                                className={`w-1/6 h-full p-2 font-sans text-sm relative ${activeTab === 1 ? 'text-black border-r-2 border-t-4 border-l-2 border-sky-400' : ''}`}
                            >
                                Activity / Adventure
                                {activeTab === 1 && (
                                    <div className="absolute top-[38px] left-[0%] h-[5px] w-[101%] bg-white"></div>
                                )}
                            </button>
                        </div>
                        <div className={`h-[85%] flex flex-col items-start justify-center text-lg font-sans p-5 ${activeTab === 0 ? 'block' : 'hidden'} bg-[var(--colorCode)] border-4 border-sky-400`}>
                            <p className='block'>Looks empty, you've no upcoming bookings 1.</p>
                            <p className='font-thin block'>Great! Looks like you’ve no upcoming bookings.1</p>
                            <button className='w-32 h-12 bg-purple-500 rounded-full block mt-10 hover:bg-red-500'>Plan a Trip</button>
                        </div>
                        <div className={`h-[85%] flex flex-col items-start justify-center text-lg font-sans p-5 ${activeTab === 1 ? 'block' : 'hidden'} bg-[var(--colorCode)] border-4 border-sky-400`}>
                            <p className='block'>Looks empty, you've no upcoming bookings.</p>
                            <p className='font-thin block'>Great! Looks like you’ve no upcoming bookings.1</p>
                            <button className='w-32 h-12 bg-purple-500 rounded-full block mt-10 hover:bg-red-500'>Plan a Trip 1</button>
                        </div>
                    </div>
                </div>
            );
        case 1:
            return (
                <div className="flex flex-col items-center">
                    <div className="w-full h-[280px]">
                        <div className="flex h-[15%]">
                            <button
                                onClick={() => showPanel(0, "white")}
                                className={`w-1/6 h-full p-2 font-sans text-sm relative ${activeTab === 0 ? 'text-black border-r-2 border-t-4 border-l-2 border-sky-400' : ''}`}
                            >
                                Packages
                                {activeTab === 0 && (
                                    <div className="absolute top-[38px] left-[0%] h-[5px] w-[100%] bg-white"></div>
                                )}
                            </button>
                            <button
                                onClick={() => showPanel(1, "white")}
                                className={`w-1/6 h-full p-2 font-sans text-sm relative ${activeTab === 1 ? 'text-black border-r-2 border-t-4 border-l-2 border-sky-400' : ''}`}
                            >
                                Activity / Adventure
                                {activeTab === 1 && (
                                    <div className="absolute top-[38px] left-[0%] h-[5px] w-[101%] bg-white"></div>
                                )}
                            </button>
                        </div>
                        <div className={`h-[85%] flex flex-col items-start justify-center text-lg font-sans p-5 ${activeTab === 0 ? 'block' : 'hidden'} bg-[var(--colorCode)] border-4 border-sky-400`}>
                            <p className='block'>Looks empty, you've no upcoming bookings.2</p>
                            <p className='font-thin block'>Great! Looks like you’ve no upcoming bookings. 2</p>
                            <button className='w-32 h-12 bg-purple-500 rounded-full block mt-10 hover:bg-red-500'>Plan a Trip</button>
                        </div>
                        <div className={`h-[85%] flex flex-col items-start justify-center text-lg font-sans p-5 ${activeTab === 1 ? 'block' : 'hidden'} bg-[var(--colorCode)] border-4 border-sky-400`}>
                            <p className='block'>Looks empty, you've no upcoming bookings.2</p>
                            <p className='font-thin block'>Great! Looks like you’ve no upcoming bookings. 2</p>
                            <button className='w-32 h-12 bg-purple-500 rounded-full block mt-10 hover:bg-red-500'>Plan a Trip</button>
                        </div>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="flex flex-col items-center">
                    <div className="w-full h-[280px]">
                        <div className="flex h-[15%]">
                            <button
                                onClick={() => showPanel(0, "white")}
                                className={`w-1/6 h-full p-2 font-sans text-sm relative ${activeTab === 0 ? 'text-black border-r-2 border-t-4 border-l-2 border-sky-400' : ''}`}
                            >
                                Packages
                                {activeTab === 0 && (
                                    <div className="absolute top-[38px] left-[0%] h-[5px] w-[100%] bg-white"></div>
                                )}
                            </button>
                            <button
                                onClick={() => showPanel(1, "white")}
                                className={`w-1/6 h-full p-2 font-sans text-sm relative ${activeTab === 1 ? 'text-black border-r-2 border-t-4 border-l-2 border-sky-400' : ''}`}
                            >
                                Activity / Adventure
                                {activeTab === 1 && (
                                    <div className="absolute top-[38px] left-[0%] h-[5px] w-[101%] bg-white"></div>
                                )}
                            </button>
                        </div>
                        <div className={`h-[85%] flex flex-col items-start justify-center text-lg font-sans p-5 ${activeTab === 0 ? 'block' : 'hidden'} bg-[var(--colorCode)] border-4 border-sky-400`}>
                            <div className="relative">
                                <p className='block'>Looks empty, you've no upcoming bookings.3</p>
                                <p className='font-thin block'>Great! Looks like you’ve no upcoming bookings.3</p>
                                <div className="relative">
                                    <button className='w-32 h-12 bg-purple-500 rounded-full block mt-10 hover:bg-red-500'>Plan a Trip</button>
                                    {/* Dropdown Icon */}
                                    <HiChevronDown
                                        onClick={handleDropdownToggle}
                                        className="absolute top-[10px] left-[260%] cursor-pointer"
                                    />
                                </div>
                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute top-[100px] left-[191%] w-[250px] bg-white shadow-lg border border-gray-300 rounded-lg p-4">
                                        <p className="font-semibold">Package Details</p>
                                        <ul className="list-disc pl-5 mt-2">
                                            <li><strong>Package Name:</strong> Example Package</li>
                                            <li><strong>Travel Date:</strong> 2024-08-15</li>
                                            <li><strong>PAX:</strong> 2</li>
                                            <li><strong>Price:</strong> $500</li>
                                        </ul>
                                        <button className="mt-4 w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-600">Completed</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={`h-[85%] flex flex-col items-start justify-center text-lg font-sans p-5 ${activeTab === 1 ? 'block' : 'hidden'} bg-[var(--colorCode)] border-4 border-sky-400`}>
                            <p className='block'>Looks empty, you've no upcoming bookings.3</p>
                            <p className='font-thin block'>Great! Looks like you’ve no upcoming bookings.3</p>
                            <button className='w-32 h-12 bg-purple-500 rounded-full block mt-10 hover:bg-red-500'>Plan a Trip </button>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default RenderComponent;
