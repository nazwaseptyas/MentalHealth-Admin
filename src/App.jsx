import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Tabelartikel from './tabelartikel';
import Tabelkonsultasi from './tabelkonsultasi';
import Login from './login';
import Tabel from './tabel';
import Form from './form';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/tabelartikel" element={<Tabelartikel />} />
          <Route path="/tabelkonsultasi" element={<Tabelkonsultasi />} />
          <Route path="/tabel" element={<Tabel />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
