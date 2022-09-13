import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarCategory from './components/CarCategory';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Review from './components/Review';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category/' element={<CarCategory />} />
      <Route path='/category/:category/:id' element={<Review />} />
    </Routes>
  </Router>
);

export default App;