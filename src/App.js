// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Views/Header';
import HomePage from './Views/HomePage';
import MenuPage from './Views/MenuPage';
import Events from './Views/Events';
import OrderPage from './Views/OrderPage';
import Footer from './components/Footer'; // ✅ Import footer

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
        <Footer /> {/* Show footer below routes */}
      </div>
    </Router>
  );
}

export default App;
