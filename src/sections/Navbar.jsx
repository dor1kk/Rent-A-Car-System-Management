import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../../backend/firebaseConfig'; // Import firestore from firebaseConfig
import { signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { usePopper } from 'react-popper';

const Navbar = ({ search, setSearch, user, toggleSidebar }) => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [dropdownRef, setDropdownRef] = useState(null);
  const [searchRef, setSearchRef] = useState(null);

  const { styles, attributes } = usePopper(searchRef, dropdownRef, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8], // Adjust the offset if needed
        },
      },
    ],
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'cars'));
        const carsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCars(carsData);
      } catch (error) {
        console.error('Error fetching cars: ', error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = cars.filter(car =>
        car.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars([]);
    }
  }, [search, cars]);

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
    <div className="relative">
      <div className="flex flex-row justify-between px-4 md:px-16 py-4">
        <div className="flex items-center gap-4 relative">
          <IoIosSearch />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tap to search"
            className="w-4/5 py-2 px-4 outline-none border-none bg-blue-50"
            ref={setSearchRef}
          />
          {filteredCars.length > 0 && (
            <div
              ref={setDropdownRef}
              style={styles.popper}
              {...attributes.popper}
              className="bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto w-full mt-2"
            >
              {filteredCars.map(car => (
                <div
                  key={car.id}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => navigate('cars')}
                >
                  <img src={car.image} alt={car.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{car.title}</h3>
                    <p className="text-gray-500 text-sm">{car.price}$/day</p>
                  </div>
                </div>
              ))}
            </div>
          )}
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
                      onClick={() => navigate('settings')}
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
              <Link to="/sign-in" className="text-white bg-blue-300 hover:underline">
                Sign In
              </Link>
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
