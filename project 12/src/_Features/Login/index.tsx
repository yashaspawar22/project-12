import React from 'react';
import LeftSide from './components/LeftSide';
import LoginForm from './components/LoginForm';

const Login: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <LeftSide />
      <LoginForm />
    </div>
  );
};

export default Login;
