import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonDetail } from '../components/Pokemon-Detail/PokemonDetail';


export const AppRoutes = ({ children }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={children} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};
