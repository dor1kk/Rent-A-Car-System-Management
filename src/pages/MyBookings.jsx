import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { FaPlus } from 'react-icons/fa';

const bookedCars = [
  {
    title: 'Toyota Camry',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
    category: 'Sedan',
    bookingDate: '2024-08-01',
    returnDate: '2024-08-07',
    status: 'Booked',
    bookingLink: 'https://example.com/book-toyota-camry'
  },
  {
    title: 'Ford Mustang',
    image: 'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/azul-estorial/fbr-colorizer-mustang-gt-azul-estoril.jpg.dam.full.high.jpg/1711376846589.jpg',
    category: 'Sports',
    bookingDate: '2024-08-02',
    returnDate: '2024-08-12',
    status: 'Booked',
    bookingLink: 'https://example.com/book-ford-mustang'
  },
  // Additional booked cars
];

const MyBookings = () => {
  const handleUnbook = (title) => {
    // Logic to handle unbooking
    alert(`Unbooking ${title}`);
  };

  const handleEdit = (title) => {
    // Logic to handle editing
    alert(`Editing ${title}`);
  };

  const columns = [
    {
      title: 'Car',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <Space>
          <img alt={record.title} src={record.image} className="w-16 h-10 object-cover rounded-lg" />
          <span>{text}</span>
        </Space>
      )
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Booking Date',
      dataIndex: 'bookingDate',
      key: 'bookingDate',
    },
    {
      title: 'Return Date',
      dataIndex: 'returnDate',
      key: 'returnDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <Tag color={status === 'Booked' ? 'green' : 'red'}>{status}</Tag>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleEdit(record.title)}
            icon={<EditOutlined />}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleUnbook(record.title)}
            icon={<DeleteOutlined />}
            danger
          >
            Unbook
          </Button>
          <Button
            href={record.bookingLink}
            target="_blank"
            icon={<EyeOutlined />}
            type="link"
          >
            View Details
          </Button>
        </Space>
      )
    }
  ];

  return (
    <div className="p-6  ">
      <div className="container mx-auto">
        <h1 className="text-2xl text-gray-500 font-bold mb-6">My Bookings</h1>
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
            </div>
            <Button type="primary"><FaPlus /></Button>
          </div>
          <Table columns={columns} dataSource={bookedCars} rowKey="title" />
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
