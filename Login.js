// Login.js

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication here, e.g., check username and password
    // For simplicity, we'll just check if both fields are filled
    if (username && password) {
      onLogin(); // Call the onLogin function to set isLoggedIn to true and redirect to Upload page
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
