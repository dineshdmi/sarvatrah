import React, { useState } from 'react';
import RenderComponent from '../../Components/Models/RenderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faBan, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PageManagement = () => {
    const [buttons, setButtons] = useState(0);

    return (
        <div className='flex flex-col md:flex-row items-center p-4 md:pl-52 md:pt-8'>
            <div className='w-full md:w-96 h-auto md:h-[180px] bg-indigo-200 mb-4 md:mb-0'>
                <button
                    className={`w-full h-1/3 ${buttons === 0 ? "bg-sky-400" : ""} hover:font-semibold shadow-lg block rounded-lg mb-2 md:mb-0`}
                    onClick={() => { setButtons(0) }}
                >
                    <FontAwesomeIcon icon={faCalendarAlt} className="inline-block mr-2 h-7 text-2xl" />
                    <span className="text-lg font-medium">Upcoming</span>
                </button>
                <button
                    className={`w-full h-1/3 ${buttons === 1 ? "bg-sky-400" : ""} hover:font-semibold shadow-lg block rounded-lg mb-2 md:mb-0`}
                    onClick={() => { setButtons(1) }}
                >
                    <FontAwesomeIcon icon={faBan} className="inline-block mr-5 h-7 text-2xl" />
                    <span className="font-medium text-lg mr-1">Cancelled</span>
                </button>
                <button
                    className={`w-full h-1/3 ${buttons === 2 ? "bg-sky-400" : ""} hover:font-semibold shadow-lg block rounded-lg`}
                    onClick={() => { setButtons(2) }}
                >
                    <FontAwesomeIcon icon={faCheckCircle} className="inline-block mr-2 h-7 text-2xl" />
                    <span className="font-medium text-lg">Completed</span>
                </button>
            </div>
            <div className='w-full md:w-2/3 h-auto md:h-80 md:ml-10 md:mr-32 border-2 border-white shadow-xl p-5'>
                <RenderComponent index={buttons} />
            </div>
        </div>
    );
}

export default PageManagement;
