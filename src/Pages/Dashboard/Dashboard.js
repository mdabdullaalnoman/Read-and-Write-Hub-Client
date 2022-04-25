import React, { useState } from 'react';
import { FaPinterest } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import DashboardNav from './DashboardNav';

const Dashboard = () => {
    // for dashboard navbar toggle
    const [dashToggle, setDashToggle] = useState(true);
    const handleDashToggle = () => {
        console.log(dashToggle);
        if (dashToggle === false) {
            setDashToggle(true)
        }
        else {
            setDashToggle(false)
        }
    }

    return (
        <div>
            <div className="dashboard grid grid-cols-6">
                <div className={` sidebar flex flex-col min-h-screen bg-darker text-white border-r-2 border-primaryDarker p-5  `} >
                    <h1 className='whites text-center mb-5 text-xl'>
                        <Link to="/">READ HUB</Link>
                    </h1>
                    <Link to="/dashboard/approve" className='flex  items-center	'><span className='pr-3'><FaPinterest /></span>Approve</Link>
                    <Link to="/dashboard/chart" className='flex  items-center'><span className='pr-3'><FaPinterest /></span>Chart </Link>
                    <Link to="/dashboard/myBlogs" className='flex  items-center	'><span className='pr-3'><FaPinterest /></span>My Blogs</Link>

                    {/* <Link to="/dashboard/setting" className='flex  items-center	'><span className='pr-3'><FaPinterest /></span>Setting</Link> */}
                </div>

                <div className={`col-span-5`}>
                    <DashboardNav dashToggleF={handleDashToggle} dashToggle={dashToggle} />
                    <div className='bg-darker'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;