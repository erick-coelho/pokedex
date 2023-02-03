import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PokemonList from '../Components/PokemonList/PokemonList';
import NotFound from '../Components/NotFound/NotFound';
import PokemonDetail from '../Components/PokemonDetail/PokemonDetail';

export default function root() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/pokedex" />} />
                <Route path={'/pokedex'} element={<PokemonList />} />
                {/* 
                */}
                <Route exact path='/pokedex/:id' element={< PokemonDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}