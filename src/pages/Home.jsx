import React, { useState } from 'react';
import Navbar from '../sections/Navbar';
import Sidebar from '../sections/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CarRentalManagement from './Cars';
import MyBookings from './MyBookings';


const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar search={search} setSearch={setSearch} />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cars" element={<CarRentalManagement />} />
            <Route path="/bookings" element={<MyBookings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
