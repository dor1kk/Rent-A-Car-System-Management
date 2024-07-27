import React from 'react';
import { FaBell } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="flex flex-row justify-between px-16 py-4 ">
      <div className="flex items-center gap-4">
        <IoIosSearch />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tap to search"
          className="w-4/5 py-2 px-4 outline-none border-none bg-blue-50"
        />
      </div>
      <div className="flex items-center gap-4">
        <FaBell />
        <img
          src="https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp3_d7855f9562.webp"
          className="w-8 h-8 rounded-full"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
