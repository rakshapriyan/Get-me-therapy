import React, { useState } from 'react';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateInputs = () => {
    let isValid = true;

    if (username.trim() === '') {
      setUsernameError('Username cannot be empty');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = () => {
    const isValid = validateInputs();

    if (isValid) {
      console.log('Login successful');
    }
  };

  return (
    <div>
      <div>
        <img
          src="https://files.jotform.com/jotformapps/a0b5d7e5e5cce2962a6c722e8a0d4e78.png"
          id="log-img"
        />
      </div>
      <div id="fields">
        <img src="appointee.png" width="150px" id="logo" />
        <h2 id="wel">Welcome <br />back!</h2>
        <input
          type="text"
          placeholder="Username"
          id="user"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <span className="error" style={{ color: 'red' }}>
          {usernameError}
        </span>
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          id="pass-user"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <span className="error" style={{ color: 'red' }}>
          {passwordError}
        </span>
        <br /><br />
        <button type="submit" id="log-but" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

