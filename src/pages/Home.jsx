import React, { useState } from 'react';
import Navbar from '../sections/Navbar';
import Sidebar from '../sections/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CarRentalManagement from './Cars';
import MyBookings from './MyBookings';
import CarReport from './CarReport';
import CalendarComponent from './Calendar';
import Settings from './Setttings';
import Chat from './Messages';
import Blog from './Blog';


const Home = ({ user }) => {
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col flex-1 transition-all duration-300 md:ml-16`}>
        <Navbar search={search} setSearch={setSearch} user={user} toggleSidebar={toggleSidebar} />
        <div className="overflow-auto flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cars" element={<CarRentalManagement user={user} />} />
            <Route path="/bookings" element={<MyBookings user={user} />} />
            <Route path="/car-report" element={<CarReport />} />
            <Route path="/calendar" element={<CalendarComponent />} />
            <Route path="/settings" element={<Settings user={user} />} />
            <Route path="/messages" element={<Chat user={user} />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
