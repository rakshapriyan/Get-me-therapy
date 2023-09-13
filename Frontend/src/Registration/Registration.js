import React, { useState } from 'react';
import './registration.css';

export default function Registration() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateInputs = () => {
    let isValid = true;

    // Validate Name
    if (name.trim() === '') {
      setNameError('*Name cannot be empty');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate Phone Number
    if (phone.trim() === '') {
      setPhoneError('*Phone number cannot be empty');
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError('*Invalid phone number format (should be 10 digits)');
      isValid = false;
    } else {
      setPhoneError('');
    }

    // Validate Email
    if (email.trim() === '') {
      setEmailError('*Email cannot be empty');
      isValid = false;
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
      setEmailError('*Invalid email address format');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate Password
    if (password.trim() === '') {
      setPasswordError('*Password cannot be empty');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('*Password must be at least 8 characters long');
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('*Password must contain at least one uppercase letter');
      isValid = false;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError('*Password must contain at least one lowercase letter');
      isValid = false;
    } else if (!/[\W_]/.test(password)) {
      setPasswordError('*Password must contain at least one special character');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Validate Confirm Password
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('*Confirm password cannot be empty');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('*Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleRegister = () => {
    const isValid = validateInputs();

    if (isValid) {
      // You can proceed with registration logic here
      console.log('Registration successful');
    }
  };

  return (
    <div>
      <div>
        <img
          src="https://images.shiksha.com/mediadata/images/articles/1685339552phpBg6VDq.jpeg"
          id="reg-img"
        />
      </div>
      <div id="reg-fields">
        <img src="appointee.png" width="150px" id="reg-logo" /><br /><br /><br />
        <h2 id="welc">Welcome!!</h2>
        <input
          type="text"
          placeholder="Name"
          id="reg-name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <span className="error red-text" style={{color:"red"}}>{nameError}</span>
        <br /><br />
        <input
          type="text"
          placeholder="Phone"
          id="reg-name"
          value={phone}
          onChange={handlePhoneChange}
        />
        <br />
        <span className="error red-text" style={{color:"red"}}>{phoneError}</span>
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          id="reg-name"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <span className="error red-text" style={{color:"red"}}>{emailError}</span>
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          id="reg-name"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <span className="error red-text" style={{color:"red"}}>{passwordError}</span>
        <br /><br />
        <input
          type="password"
          placeholder="Confirm password"
          id="reg-name"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <br />
        <span className="error red-text" style={{color:"red"}}>{confirmPasswordError}</span>
        <br /><br />
        <button type="submit" id="log-but" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}
