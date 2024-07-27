import React, { useState } from 'react';

const cars = [
  {
    title: 'Toyota Camry',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
    description: 'A reliable and comfortable sedan with excellent fuel efficiency.',
    category: 'Sedan',
    availability: ['2024-08-01', '2024-08-05', '2024-08-10'],
    rating: 4.5,
    price: '$30/day',
    bookingLink: 'https://example.com/book-toyota-camry',
    features: ['Automatic Transmission', 'Air Conditioning', 'Navigation System']
  },
  {
    title: 'Ford Mustang',
    image: 'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/azul-estorial/fbr-colorizer-mustang-gt-azul-estoril.jpg.dam.full.high.jpg/1711376846589.jpg',
    description: 'A powerful sports car with a sleek design and thrilling performance.',
    category: 'Sports',
    availability: ['2024-08-02', '2024-08-07', '2024-08-12'],
    rating: 4.7,
    price: '$60/day',
    bookingLink: 'https://example.com/book-ford-mustang',
    features: ['Manual Transmission', 'Leather Seats', 'Bluetooth']
  },
  {
    title: 'Honda CR-V',
    image: 'https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/uHxmlyLn0y4KQndhrof3S1E7GZLBoRiy4KSjeItZ.png',
    description: 'A spacious SUV with plenty of room and advanced safety features.',
    category: 'SUV',
    availability: ['2024-08-03', '2024-08-08', '2024-08-13'],
    rating: 4.8,
    price: '$50/day',
    bookingLink: 'https://example.com/book-honda-crv',
    features: ['All-Wheel Drive', 'Sunroof', 'Backup Camera']
  },
  // Additional cars
  {
    title: 'Chevrolet Bolt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aSkEsXFvbmsIgQfpkTj01oTcoXKUJHGJXw&s',
    description: 'An electric vehicle with impressive range and modern features.',
    category: 'Electric',
    availability: ['2024-08-04', '2024-08-09', '2024-08-14'],
    rating: 4.6,
    price: '$40/day',
    bookingLink: 'https://example.com/book-chevrolet-bolt',
    features: ['Electric', 'Navigation System', 'Heated Seats']
  },
  {
    title: 'Jeep Wrangler',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/174977/wrangler-facelift-right-front-three-quarter.jpeg?isig=0&q=80',
    description: 'A rugged SUV designed for off-road adventures with strong performance.',
    category: 'SUV',
    availability: ['2024-08-06', '2024-08-11', '2024-08-15'],
    rating: 4.9,
    price: '$55/day',
    bookingLink: 'https://example.com/book-jeep-wrangler',
    features: ['4WD', 'Convertible Top', 'Off-Road Tires']
  },
  {
    title: 'BMW 3 Series',
    image: 'https://prod.cosy.bmw.cloud/bmvis/cosySec?COSY-EU-100-2545J3qAHyFnz5cRoHSWRzMESDsVcRoH7QRzMESV59VMb3G6bUJ1rjGRPixrQbUoaFoGq0zdpbKHl38mrjGm7SErQbCUQMs2q0zRERW8J13882q0zAaFHdl382hhq0zkRNSQBL4QSW8zLAd8W8J1ExSnQNUMESQdo3uuRCqoQEdcNq0zkdHNqoQqRrjGr9oFGW8zWubDEqogqaJNQl3ilUQt9cRScH8ZAMbnMd03RyJGy5BYurQ%25r9SEUW8zWunFbqogqaGCel3ilU%25becRScHzj8MbnMdgsoyJGy5iKErQ%25r9St8W8zWunm7qogqaDjzl3ilUCzgcRScH48gMbnMdeoqyJGy5mgprQ%25r98RnW8zWuob9qogqa3Jnl3ilUR%256cRScHbR2MbnMdJCYyJGy55unrQ%25r993UW8zWuuRCqogqaaRdl3ilUUHecRScHHafMb3huCJit5W7%25mR59W8JfMESbde9uyJRObz6mrjGg8RyJR1lBgyJnH59Mb35q0z9D',
    description: 'A luxury sedan with a perfect blend of performance and comfort.',
    category: 'Luxury',
    availability: ['2024-08-07', '2024-08-12', '2024-08-16'],
    rating: 4.8,
    price: '$70/day',
    bookingLink: 'https://example.com/book-bmw-3-series',
    features: ['Leather Seats', 'Navigation System', 'Adaptive Cruise Control']
  }
];

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