// src/SignIn.js
import React from 'react';
import { Form, Input, Button, Typography, Checkbox } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row h-screen w-full">
        <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/digital-modern-minimalistic-bluethemed-car-graphic-design_1106493-112052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=ais_user')" }}>
          <img src="https://img.freepik.com/premium-photo/digital-modern-minimalistic-bluethemed-car-graphic-design_1106493-112052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=ais_user" alt="Car" className="w-full h-full object-cover hidden" />
        </div>
        <div className="flex-1 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-sm">
            <div className="flex justify-center mb-6">
              <img src="https://seeklogo.com/images/A/azure-synapse-analytics-logo-B87A556A9C-seeklogo.com.png" alt="Logo" className="h-12" />
            </div>
            <Title level={2} className="text-center italic ">Welcome back</Title>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="User Name" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div className="flex justify-center my-4">
              <Button type="default" icon={<GoogleOutlined />} className="w-full">
                Login with Google
              </Button>
            </div>
            <Text type="secondary" className="block text-center">
              <a href="#" className="text-teal-500 hover:text-teal-700">Forgot?</a>
            </Text>
            <Text type="secondary" className="block text-center mt-4">
              Don't have an account? <Link to={'/register'} className="text-teal-500 hover:text-teal-700">Sign up</Link>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
