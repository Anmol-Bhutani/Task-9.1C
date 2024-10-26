import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Create a New Account</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
