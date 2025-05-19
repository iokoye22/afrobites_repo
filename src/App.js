// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Views/Header';
import HomePage from './Views/HomePage';
import MenuPage from './Views/MenuPage';
import Events from './Views/Events';
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
        </Routes>
        <Footer /> {/* Show footer below routes */}
      </div>
    </Router>
  );
}

export default App;
