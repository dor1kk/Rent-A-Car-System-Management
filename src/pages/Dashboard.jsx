import React from 'react';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaUserAlt, FaCarAlt, FaDollarSign, FaChartLine, FaUsers, FaCalendarCheck, FaStar } from 'react-icons/fa';

const Dashboard = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Car Rentals',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [4500, 6900, 6000, 9100, 7600, 6500],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const doughnutData = {
    labels: ['Sedan', 'SUV', 'Truck'],
    datasets: [
      {
        label: 'Car Types Rented',
        data: [300, 500, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  const pieData = {
    labels: ['New Customers', 'Returning Customers'],
    datasets: [
      {
        label: 'Customer Type',
        data: [60, 40],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  const activeCustomersData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Active Customers',
        data: [800, 900, 1000, 1100, 1200, 1300],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  return (
    <div className="p-8 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Car Rentals Bar Chart
          </h2>
          <div className="h-40">
            <Bar data={barData} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Revenue Line Chart
          </h2>
          <div className="h-40">
            <Line data={lineData} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Car Types Rented Doughnut Chart
          </h2>
          <div className="h-40">
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Active Customers Line Chart
          </h2>
          <div className="h-40">
            <Line data={activeCustomersData} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Bookings Today
          </h2>
          <p className="text-2xl font-bold">75</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Total Revenue
          </h2>
          <p className="text-2xl font-bold">$45,000</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Customer Type Pie Chart
          </h2>
          <div className="h-40">
            <Pie data={pieData} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Most Popular Car
          </h2>
          <img src="https://www.smarttoyota.com/blogs/2398/wp-content/uploads/2023/01/white_se_34-1024x480.png" alt="Toyota Corolla" className="w-auto mt-12 h-32 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
