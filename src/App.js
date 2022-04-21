import React, { useState } from 'react';

import Modal from './components/modal';
import LoginPage from './pages/login-page';

import { Button } from './styles/components';

const App = () => {
  
  const [ showModal, setShowModal ] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <>
      <LoginPage />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button onClick={openModal}>Open Modal</Button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h1 style={{}}>Hello</h1>
      </Modal>
    </>
  );
}

export default App;
