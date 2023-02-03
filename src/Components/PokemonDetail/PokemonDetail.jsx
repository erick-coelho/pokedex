import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams, redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
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
    }, [id, fetchPokemon, pokemon, fetchSpecie])

    const PokemonFilter = (searchName) => {
        redirect('/')
    };

    if ((pokemon && specie) === null) {
        return (
            <>
                <Navbar PokemonFilter={PokemonFilter} />
                <NotFound />
            </>
        );
    }

    return (
        <>
            <Navbar PokemonFilter={PokemonFilter} />
            <Container maxWidth='lg' >
                <Typography textAlign={'center'} variant="h1" gutterBottom>{pokemon.name.toUpperCase()}</Typography>
                <Grid container>
                    <Grid item sm={4}>
                        <Box sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                        }}
                            component={"img"}
                            src={pokemon.sprites.front_default}
                        />
                    </Grid>
                    <Grid item sm={8} sx={{ alignItems: 'end' }}>
                        {pokemon.stats.map((item) =>
                            (<Typography variant="subtitle2" key={item.stat.name}>{item.stat.name}: {item.base_stat}<LinearProgress variant='determinate' value={item.base_stat / 2.5} /> </Typography>))}
                    </Grid>
                </Grid>
            </Container>
            <EvolutionChain name={pokemon.name} url={specie.evolution_chain?.url} id={pokemon.id} />
        </>
    );
};

export default PokemonDetail;

