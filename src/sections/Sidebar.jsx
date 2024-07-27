import React, { useState } from 'react';
import { FaHome, FaCar, FaTicketAlt, FaUserFriends, FaChartBar, FaClock, FaCalendar } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FaMessage } from 'react-icons/fa6';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const listItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
    { name: 'Cars', icon: <FaCar />, path: '/cars' },
    { name: 'Bookings', icon: <FaTicketAlt />, path: '/bookings' },
    { name: 'Car Report', icon: <FaChartBar />, path: '/car-report' },
    { name: 'Messages', icon: <FaMessage />, path: '/messages' },

    { name: 'Calendar', icon: <FaCalendar />, path: '/calendar' },
    { name: 'Settings', icon: <CiSettings />, path: '/settings' },
  ];

  return (
    <div className="bg-blue-500 w-16 flex flex-col items-center py-4 h-full">
      <div className="mb-16">
        <img
          src="https://seeklogo.com/images/A/azure-synapse-analytics-logo-B87A556A9C-seeklogo.com.png"
          className="w-12 h-12"
          alt="logo"
        />
      </div>
      <ul className="flex flex-col items-center gap-4">
        {listItems.map((item) => (
          <li
            key={item.name}
            onClick={() => handleItemClick(item.name)}
            className={`relative cursor-pointer p-2 transition-all duration-200 ${
              activeItem === item.name ? 'bg-white text-blue-500 rounded-full' : 'text-white'
            }`}
          >
            <Link to={item.path} className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:bg-white/20">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
