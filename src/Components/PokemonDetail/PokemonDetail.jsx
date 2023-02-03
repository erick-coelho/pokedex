import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams, redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import PokemonList from "../PokemonList/PokemonList";
import EvolutionChain from "./EvolutionChain";

const PokemonDetail = () => {

    let { id } = useParams();

    const [pokemon, setPokemon] = useState(null);
    const [specie, setSpecie] = useState(null);



    const fetchPokemon = useCallback(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
            .then((response) => {
                setPokemon(response.data)
            })
    }, [id])
    const fetchSpecie = useCallback(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon-species/' + id)
            .then((response) => {
                setSpecie(response.data)
            })
    }, [id])


    useEffect(() => {
        if (id !== null && parseInt(id)) {
            fetchPokemon();
            if (pokemon !== null) {
                fetchSpecie();
            }
        }
    }, [id,fetchPokemon, pokemon, fetchSpecie])

    const PokemonFilter = (searchName) => {
        redirect('/')
    };

    if ((pokemon && specie) === null) {
        return (
            <NotFound />
        );
    }

    return (
        <>
        <Navbar PokemonFilter={PokemonFilter}/>
            <div>
                <span>{pokemon.name} - {pokemon.stats.map((item) => (<span key={item.stat.name}>{item.stat.name}: {item.base_stat} </span>))}</span>
            </div>
            <div>
                <EvolutionChain name={pokemon.name} url={specie.evolution_chain?.url} />
            </div>
        </>
    );
};

export default PokemonDetail;

