import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './all2';
import { AuthContextProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App2 />
    </AuthContextProvider>
  </React.StrictMode>,
  rootElement
);
