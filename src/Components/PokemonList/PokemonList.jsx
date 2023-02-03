import { useEffect, useState } from 'react';
import axios from 'axios'
import Pokemon from './Pokemon';

const PokemonList = () => {

    const [list, setList] = useState([]);

    const fetchList = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
            setList(response.data.results)
        })
    }

    useEffect(() => {
        fetchList();
    }, [])

    return (
        <div>
            {list.map((item) => (
                <Pokemon data={item} key={item.name} />
            ))}
        </div>
    );
}

export default PokemonList;