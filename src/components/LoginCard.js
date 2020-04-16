import React, { useState } from 'react';

const LoginCard = ({ submitLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <React.Fragment>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button onClick={() => submitLogin(username, password)}>Login</button>
    </React.Fragment>
  )
}

export default LoginCard;
