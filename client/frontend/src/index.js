import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider} from 'react-cookie'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <CookiesProvider defaultSetOptions={{ path: '/', maxAge: 86400 }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CookiesProvider>
  </>
);

