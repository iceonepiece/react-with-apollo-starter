import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../AuthContext';

import LoginCard from '../components/LoginCard';

const Login = () => {
  const history = useHistory();
  const { auth } = useAuth();

  const submitLogin = (username, password) => {
    if (username === 'ice') {
      auth.setCurrentUser({ username: 'ice' });
      history.push('/')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginCard submitLogin={submitLogin} />
    </div>
  )
}

export default Login;
