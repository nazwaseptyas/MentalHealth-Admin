import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Tabelartikel from './tabelartikel';
import Tabelkonsultasi from './tabelkonsultasi';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tabelartikel" element={<Tabelartikel />} />
          <Route path="/tabelkonsultasi" element={<Tabelkonsultasi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
