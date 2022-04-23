import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
            <div className="dashboard grid grid-cols-6">
                <div className="sidebar flex flex-col min-h-screen bg-violet-900 text-white p-5">
                    <Link to="/dashboard/approve">Approve</Link>
                    <Link to="/dashboard/chart">Chart </Link>
                    <Link to="/dashboard/myBlogs">My Blogs</Link>
                    <Link to="/dashboard/setting">Setting</Link>
                </div>
                <div className="col-span-5">
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;