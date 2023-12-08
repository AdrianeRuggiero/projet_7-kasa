import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/';
import About from './pages/About/';
import Error from './pages/Error/';
import Accommodation from './pages/Accommodation/';

// Use createRoot to create a root entry point
const root = createRoot(document.getElementById('root'));

// Define your app structure within createRoot().render()
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

