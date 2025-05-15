// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Views/Header';
import HomePage from './Views/HomePage';
import MenuPage from './Views/MenuPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
