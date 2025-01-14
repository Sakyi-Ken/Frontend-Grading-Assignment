// Login.js
import React, { useState } from 'react';
import './login.css'; 
import logImage from '../images/log.png';


const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (studentId === 'yourStudentId' && pin === 'yourPin') {
      console.log('Login successful');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    
    <div className="login-container">
      <div className="image-container">
        <img src={logImage} alt="Profile" className="profile-image" />
      </div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="studentId"></label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="ID / Username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin"></label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="PIN"
            required
          />
        </div>
        <button  type="submit" className='butt'>Login</button>
      </form>
      <div className="social-buttons">
        <button className="github-button">Login with GitHub</button>
        <button className="google-button">Login with Google</button>
      </div>
    </div>
    
  );
};

export default Login;
