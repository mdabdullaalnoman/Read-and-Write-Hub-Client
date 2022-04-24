import React from 'react';
import { FaBars } from 'react-icons/fa';
const DashboardNav = ({ dashToggleF, dashToggle }) => {


    return (
        <div className={`flex justify-between align-center p-5 bg-darker border-b-2 border-primaryDarker text-whiter`}>
            <div className="d-left" onClick={() => dashToggleF()}>
                <FaBars />
            </div>
            <div className="d-left">
                side right
            </div>
        </div>
    );
};

export default DashboardNav;