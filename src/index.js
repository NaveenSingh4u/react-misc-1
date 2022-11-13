import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json';
import { NasaAPIV2 } from './NasaAPIV2';
import { ClassBinding } from './ClassBinding';
import { SimpleFormValidation } from './SimpleFormValidation';
import { Tutorial } from './Tutorial';
import { RouterDemo1 } from './RouterDemo1';
import { CookiesProvider } from 'react-cookie';
import { ShoppingIndex } from './ShoppingIndex';
import { CustomerForm } from './CustomerForm';
import FormForPostApi from './FormForPostApi';
import { Userlist } from './Userlist';
import EditUserlist from './EditUserlist';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Userlist/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
