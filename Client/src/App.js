import React, { useState } from 'react';
import SignupModal from './components/SignupModal';
import SigninModal from './components/SigninModal';
import './components/styles.css';

function App() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="app-container">
      
      <div className="home-container">
        <button onClick={() => setOpenModal('signin')}>Sign In</button>
        <button onClick={() => setOpenModal('signup')}>Sign Up</button>
      </div>
      {openModal === 'signin' && <SigninModal setOpenModal={setOpenModal} />}
      {openModal === 'signup' && <SignupModal setOpenModal={setOpenModal} />}
    </div>
    
  );
}

export default App;
