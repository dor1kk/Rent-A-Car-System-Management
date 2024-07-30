import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../backend/firebaseConfig'; // Adjust the path as needed
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

const CarRentalManagement = ({ user }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      const carCollection = collection(firestore, 'cars');
      const carSnapshot = await getDocs(carCollection);
      const carList = carSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCars(carList);
      if (carList.length > 0) {
        setSelectedCar(carList[0]);
      }
    };

    fetchCars();
  }, []);

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

  const formatTimestamp = (timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleDateString(); // Format as needed, e.g., 'MM/DD/YYYY' or 'DD/MM/YYYY'
  };

  const handleBookNow = async () => {
    if (user && selectedCar) {
      const bookingData = {
        id: uuidv4(), // Add a random id
        carId: selectedCar.id,
        carTitle: selectedCar.title,
        userId: user.uid,
        userEmail: user.email,
        bookedAt: new Date(),
        image: selectedCar.image
      };

      try {
        const docRef = await addDoc(collection(firestore, 'bookings'), bookingData);
        console.log('Booking successful with ID: ', docRef.id);
        toast.success('Successfully booked!');
        setTimeout(() => navigate('/bookings'), 3000); // Navigate after 3 seconds
      } catch (e) {
        console.error('Error adding document: ', e);
        toast.error('Booking failed. Please try again.');
      }
    } else {
      console.log('User not signed in or no car selected');
      toast.error('User not signed in or no car selected');
    }
  };

  return (
    <div className="lg:flex lg:h-full p-8 md:px-8">
      <ToastContainer />
      <div className="lg:flex-1 overflow-auto">
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
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white shadow-lg rounded-lg cursor-pointer"
              onClick={() => setSelectedCar(car)}
            >
              <img alt={car.title} src={car.image} className="object-cover h-40 w-full rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{car.title}</h3>
                <p className="text-gray-600 mb-2">{car.category}</p>
                <p className="text-gray-600 mb-2"><strong>Price:</strong> {car.price}/day</p>
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
      <div className="w-full lg:w-80 bg-gray-100 text-gray-600 p-6 h-full overflow-auto">
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
            <p className="mb-4"><strong>Available Dates:</strong> {selectedCar.availability.map(formatTimestamp).join(', ')}</p>
            <p className="mb-4"><strong>Price:</strong> {selectedCar.price}/day</p>
            <button onClick={handleBookNow} className="w-full bg-blue-600 text-white p-2 rounded-md mb-4">
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
