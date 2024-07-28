// SignUp.js
import React from 'react';
import { Form, Input, Button, Typography, Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../backend/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const { Title, Text } = Typography;


const Register = () => {
    const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      console.log('Success:', userCredential.user);
      navigate('/home');

    } catch (error) {
      console.error('Error signing up:', error);
    }
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
            <Title level={2} className="text-center italic">Create an account</Title>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder="Email" />
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
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
            <Text type="secondary" className="block text-center mt-4">
              Already have an account? <Link to={'/signin'} className="text-teal-500 hover:text-teal-700">Sign in</Link>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
