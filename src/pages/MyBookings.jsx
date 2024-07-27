import React, { useState } from 'react';
import { cars } from '../constants';

const MyBookings = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4">
      {/* All Cars List */}
      <div className="lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4">All Cars</h2>
          {cars.map(car => (
            <div
              key={car.id}
              className="flex items-center justify-between mb-4 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition duration-200"
              onClick={() => handleCarClick(car)}
            >
              <div className="flex items-center">
                <img src={car.image} alt={car.title} className="w-12 h-12 rounded-full border border-gray-300" />
                <div className="ml-3">
                  <h3 className="text-md font-semibold text-gray-800">{car.title}</h3>
                  <p className="text-sm text-gray-500">Car no. {car.id}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${car.status === 'available' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
              >
                {car.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-2/3 p-6">
  {selectedCar ? (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-3xl font-bold text-gray-800">Car Information</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          Remove
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-6">
        <img src={selectedCar.image} alt={selectedCar.title} className="w-40 h-40 object-cover rounded-lg border border-gray-300 mb-4 md:mb-0" />
        <div className="ml-0 md:ml-6 flex-grow">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{selectedCar.title}</h3>
          <p className="text-sm text-gray-400 mb-2"><span className="font-medium">Description:</span> {selectedCar.description}</p>
          <p className="text-sm text-gray-400 mb-2"><span className="font-medium">Price:</span> <span className="font-semibold">{selectedCar.price}</span></p>
          <p className="text-sm text-gray-400 mb-2"><span className="font-medium">Rating:</span> <span className="font-semibold">{selectedCar.rating}</span></p>
          <p className="text-sm text-gray-400 mb-2"><span className="font-medium">Category:</span> <span className="font-semibold">{selectedCar.category}</span></p>
        </div>
      </div>

      

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>
            Features
          </p>
          <ul className="list-disc list-inside text-gray-800">
            {selectedCar.features.map((feature, index) => (
              <li key={index} className="text-md font-medium">{feature}</li>
            ))}
          </ul>
        </div>
      </div>

  ) : (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Select a Car to See Details</h2>
    </div>
  )}


        {/* Trip History */}
        {selectedCar && (
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold mb-4">Trip History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-2 px-4 text-left">No.</th>
                    <th className="py-2 px-4 text-left">Trip Details</th>
                    <th className="py-2 px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">01</td>
                    <td className="py-2 px-4 border-b">San Diego - Dallas</td>
                    <td className="py-2 px-4 border-b">
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-bold">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">02</td>
                    <td className="py-2 px-4 border-b">Phoenix - San Jose</td>
                    <td className="py-2 px-4 border-b">
                      <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full text-xs font-bold">Cancelled</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">03</td>
                    <td className="py-2 px-4 border-b">San Francisco - Austin</td>
                    <td className="py-2 px-4 border-b">
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-bold">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
