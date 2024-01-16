import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trips from "./pages/Trips";
import AddTripForm from './pages/AddTripForm';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path="/trips" element={<Trips/>} />
      <Route path='/addTrip' element={<AddTripForm/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
