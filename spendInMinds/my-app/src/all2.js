import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Login from './pages/Login';
import Register from './pages/Register';
import RenderApp from './all';
function App2() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<RenderApp />} />
      </Routes>
    </Router>
  );
}

export default App2;
