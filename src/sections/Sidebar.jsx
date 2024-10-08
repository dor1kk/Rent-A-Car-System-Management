import React from 'react';
import { FaHome, FaCar, FaTicketAlt, FaChartBar, FaCalendar, FaImage } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FaMessage } from 'react-icons/fa6';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = React.useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
    toggleSidebar(); 
  };

  const listItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/' },
    { name: 'Cars', icon: <FaCar />, path: '/cars' },
    { name: 'Bookings', icon: <FaTicketAlt />, path: '/bookings' },
    { name: 'Car Report', icon: <FaChartBar />, path: '/car-report' },
    { name: 'Blog', icon: <FaImage />, path: '/blog' },
    { name: 'Messages', icon: <FaMessage />, path: '/messages' },
    { name: 'Calendar', icon: <FaCalendar />, path: '/calendar' },
    { name: 'Settings', icon: <CiSettings />, path: '/settings' },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-blue-500 h-full transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-16 sm:w-24 md:translate-x-0 md:w-16`}
    >
      <div className="mb-16 flex justify-between items-center p-4">
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
