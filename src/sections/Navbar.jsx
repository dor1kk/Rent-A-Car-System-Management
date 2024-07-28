import React from 'react';
import { FaBell } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { auth } from '../../backend/firebaseConfig'; // Import auth from firebaseConfig
import { signOut } from 'firebase/auth'; // Import signOut from firebase/auth

const Navbar = ({ search, setSearch, user }) => {
  const navigate = useNavigate();

  const getInitial = (email) => {
    return email ? email.charAt(0).toUpperCase() : 'G';
  };

  const getColor = (initial) => {
    const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#607D8B'];
    const index = initial.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const initial = getInitial(user?.email);
  const color = getColor(initial);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
      navigate('/sign-in'); // Redirect to sign-in page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex flex-row justify-between px-16 py-4">
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
        {user ? (
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 focus:outline-none">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: color }}
              >
                {initial}
              </div>
              <ChevronDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <div className="px-4 py-2">
                <p className="text-sm text-gray-700">{user.email}</p>
              </div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } w-full text-left px-4 py-2 text-sm text-gray-700`}
                    onClick={() => navigate('settings') }
                  >
                  Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } w-full text-left px-4 py-2 text-sm text-gray-700`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </Link>
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
