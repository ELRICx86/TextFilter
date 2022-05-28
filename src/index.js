import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
  <BrowserRouter>
  <App />
    <Routes>
    <Route path="/" element={<TextForm />} />
      <Route path="/TextForm" element={<TextForm />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
