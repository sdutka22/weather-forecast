import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUsPage from './AboutUs';
import ContactPage from './Contact';
import DatePicker from './DatePicker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/date-picker" element={<DatePicker />} />
      </Routes>
    </Router>
  );
}

export default App;
