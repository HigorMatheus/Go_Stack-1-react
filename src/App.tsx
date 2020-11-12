import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlogalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlogalStyles />
    </>
  );
};

export default App;
