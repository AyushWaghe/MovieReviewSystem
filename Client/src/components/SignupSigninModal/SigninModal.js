import React, { useState } from 'react';
import './styles.css';
import {useNavigate} from 'react-router-dom';

function SigninModal({ setOpenModal }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sign in submitted:', username, password);
    setOpenModal(null);
    navigate('/movies');
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(null)}>X</button>
        </div>
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        </form>
        <div className="text-center mt-3">
          <p>Don't have an account? <button className="link-button" onClick={() => setOpenModal('signup')}>Sign Up</button></p>
        </div>
      </div>
    </div>
  );
}

export default SigninModal;
