import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserInfo } from './controllers/User.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserInfo>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </UserInfo>
);
