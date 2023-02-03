import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        fetchPokemon();
        fetchSpecie();
    }, [fetchPokemon, fetchSpecie])

    if ((pokemon && specie) === null) {
        return (
            <>loading...</>
        );
    }

    return (
        <>
            <div>
                <span>{pokemon.name} - {pokemon.stats.map((item) => (<span key={item.stat.name}>{item.stat.name}: {item.base_stat} </span>))}</span>
            </div>
            <div>
                <EvolutionChain url={specie.evolution_chain.url} />
            </div>
        </>
    );
};

const EvolutionChain = ({ url }) => {
    const [evolutionChain, setEvolutionChain] = useState(null)

    const fetchEvolutionChain = useCallback(() => {
        axios.get(url)
            .then((response) => {
                setEvolutionChain(response.data)
            })
    }, [url])

    useEffect(() => {
        fetchEvolutionChain()
    }, [fetchEvolutionChain])

    if (evolutionChain === null) {
        return (
            <>
                loading...
            </>
        )
    }

    return (
        <>
            <span>{evolutionChain.chain.species.name} {' > '} </span>
            {evolutionChain.chain.evolves_to.length > 0 && (<>{evolutionChain.chain.evolves_to.map((item, key) => (
                <span key={key}>
                    {item.species.name}
                    {item.evolves_to.length > 0 && (<>{item.evolves_to.map((item, key) => (
                    <span key={key}> {' > '}{item.species.name}</span>
                ))}</>)}
                </span>
            ))}</>)}
        </>
    )
}

export default PokemonDetail;

