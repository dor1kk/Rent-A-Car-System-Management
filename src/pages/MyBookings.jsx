import React, { useState, useEffect } from 'react';
import { firestore } from '../../backend/firebaseConfig';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

const truncateBookingId = (id, length) => {
  if (id.length > length) {
    return id.substring(0, length) + '...';
  }
  return id;
};

const MyBookings = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      if (user) {
        try {
          const q = query(collection(firestore, 'bookings'), where('userId', '==', user.uid));
          const querySnapshot = await getDocs(q);
          const bookingsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setBookings(bookingsData);
          if (bookingsData.length > 0) {
            setSelectedBooking(bookingsData[0]);
          }
        } catch (error) {
          console.error("Error fetching bookings: ", error);
        }
      }
    };

    fetchBookings();
  }, [user]);

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
  };

  const handleUnbook = async (bookingId) => {
    try {
      await deleteDoc(doc(firestore, 'bookings', bookingId));
      setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
      setSelectedBooking(null);
    } catch (error) {
      console.error("Error removing booking: ", error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/3 p-4">
        <div className="bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-700 mb-4">My Bookings</h2>
          {bookings.length > 0 ? (
            bookings.map(booking => (
              <div
                key={booking.id}
                className="flex items-center justify-between mb-4 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition duration-200"
                onClick={() => handleBookingClick(booking)}
              >
                <div className="flex items-center">
                  <img src={booking.image} alt={booking.carTitle} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="ml-3">
                    <h3 className="text-md font-semibold text-gray-800">{booking.carTitle}</h3>
                    <p className="text-sm text-gray-500">Booking ID: {truncateBookingId(booking.id, 10)}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center lg:hidden">
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m2 5H7m4-16L5 6l4 4m4-4l4 4-4 4"
                />
              </svg>
              <p className="text-gray-500 mt-4">No bookings yet</p>
              <button
                className="mt-4 bg-blue-500 text-white px-8 py-2 rounded-lg"
                onClick={() => {}}
              >
                Book
              </button>
            </div>
          )}
        </div>
      </div>

      {bookings.length > 0 && selectedBooking && (
        <div className="lg:w-2/3 p-6">
          <div className={`bg-white rounded-lg p-6 mb-6 ${bookings.length === 0 && 'hidden lg:block'}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-600">Booking Information</h2>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleUnbook(selectedBooking.id)}
              >
                Unbook
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-6">
              <img src={selectedBooking.image} alt={selectedBooking.carTitle} className="w-96 h-96 object-cover rounded-lg mb-4 md:mb-0" />
              <div className="ml-0 md:ml-6 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{selectedBooking.carTitle}</h3>
                <p className="text-sm text-gray-400 mb-2"><span className="font-medium">User Email:</span> {selectedBooking.userEmail}</p>
                <p className="text-sm text-gray-400 mb-2"><span className="font-medium">Booking Date:</span> {new Date(selectedBooking.bookingDate).toLocaleDateString()}</p>
                <p className="text-sm text-gray-400 mb-2"><span className="font-medium">Return Date:</span> {new Date(selectedBooking.returnDate).toLocaleDateString()}</p>
                <p className="text-sm text-gray-400 mb-2"><span className="font-medium">Total Price:</span> ${selectedBooking.totalPrice}</p>
                <p className="text-sm text-gray-400 mb-2"><span className="font-medium">Booking Id:</span> {selectedBooking.id}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
