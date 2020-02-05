import React from 'react';
import GlobalStyle from 'styles/global';
import LoginPopup from 'components/LoginPopup/LoginPopup';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <LoginPopup />
    </>
  );
}

export default App;
