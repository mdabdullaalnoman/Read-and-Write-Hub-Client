import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../SharedComponent/Footer';
import Header from '../../SharedComponent/Header';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Header />
                <div className="dashboard grid grid-cols-[300px_minmax(900px,_1fr)]">
                    <div className="sidebar flex flex-col min-h-screen bg-violet-900 text-white p-5">
                        <Link to="/dashboard/approve">Approve</Link>
                        <Link to="/dashboard/chart">Chart </Link>
                        <Link to="/dashboard/myBlogs">My Blogs</Link>
                        <Link to="/dashboard/setting">Setting</Link>
                    </div>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;