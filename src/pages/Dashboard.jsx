import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Ticket Sales',
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
    labels: ['Food & Drinks', 'Tickets', 'Merchandise'],
    datasets: [
      {
        label: 'Revenue Breakdown',
        data: [3000, 5000, 1000],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Ticket Sales Bar Chart</h2>
          <div className="h-40">
            <Bar data={barData} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Revenue Line Chart</h2>
          <div className="h-40">
            <Line data={lineData} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Revenue Breakdown Doughnut Chart</h2>
          <div className="h-40">
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Active Customers</h2>
          <p className="text-2xl font-bold">1,024</p>
        </div>
 
      </div>
    </div>
  );
};

export default Dashboard;
