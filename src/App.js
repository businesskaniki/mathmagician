import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/quote';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import './index.css';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>

);
export default App;
