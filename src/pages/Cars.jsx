import React, { useState } from 'react';
import { cars } from '../constants';



const CarRentalManagement = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const uniqueCategories = Array.from(new Set(cars.map((car) => car.category)));

  const filteredCars = cars.filter(
    (car) => selectedCategories.length === 0 || selectedCategories.includes(car.category)
  );

  return (
    <div className="flex h-full">
      <div className="flex-1 p-4 overflow-auto">
        <h2 className="text-lg font-bold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-3 py-1 rounded-md text-gray-500 ${
                selectedCategories.includes(category) ? 'bg-gray-200' : 'bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCars.map((car, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg cursor-pointer"
              onClick={() => setSelectedCar(car)}
            >
              <img alt={car.title} src={car.image} className="object-cover h-40 w-full rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{car.title}</h3>
                <p className="text-gray-600 mb-2">{car.category}</p>
                <p className="text-gray-600 mb-2"><strong>Price:</strong> {car.price}</p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < car.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21 16.54 14.94 22 10.7l-6.2-.55L12 4 8.2 10.15 2 10.7l5.46 4.24L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-80 bg-gray-100 text-gray-600 p-6 h-full overflow-hidden">
        {selectedCar ? (
          <>
            <h2 className="text-2xl font-bold mb-4">{selectedCar.title}</h2>
            <img
              src={selectedCar.image}
              alt={selectedCar.title}
              className="object-cover w-full h-40 mb-4 rounded-lg"
            />
            <p className="mb-4">{selectedCar.description}</p>
            <p className="mb-4"><strong>Category:</strong> {selectedCar.category}</p>
            <p className="mb-4"><strong>Available Dates:</strong> {selectedCar.availability.join(', ')}</p>
            <p className="mb-4"><strong>Price:</strong> {selectedCar.price}</p>
            <button className="w-full bg-blue-600 text-white p-2 rounded-md mb-4">
              Book Now
            </button>
          </>
        ) : (
          <p>Select a car to see the details.</p>
        )}
      </div>
    </div>
  );
};

export default CarRentalManagement;