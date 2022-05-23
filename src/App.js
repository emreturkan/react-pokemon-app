import React from 'react'
import Pokemon from './components/Pokemon'
import PokemonDetails from './components/PokemonDetails';
import {BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pokemon/>} />
        <Route path='pokemon/:id' element={<PokemonDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App