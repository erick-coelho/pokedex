import { useEffect, useState } from 'react';
import axios from 'axios'
import Pokemon from './Pokemon';
import { Container, Grid } from '@mui/material';
import Navbar from '../Navbar/Navbar'

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

    const PokemonFilter = (searchName) => {
        searchName = searchName.toLowerCase()
        var filteredPokemons = [];
        if(searchName === "") {
            fetchList();
        }
        for (var i in list) {
            if (list[i].name.includes(searchName))
                filteredPokemons.push(list[i]);
        }
        
        setList(filteredPokemons);
    };

    return (
        <>
            <Navbar PokemonFilter={PokemonFilter}/>
            <Container maxWidth="xl">
                <Grid container spacing={0.5}>
                    {list.map((item) => (
                        <Grid item key={item.name} >
                            <Pokemon data={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default PokemonList;