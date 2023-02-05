import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PokemonButton = ({ data, value }) => {
    if (value === 'next pokemon') {
        return (
            <Button
                variant="contained"
                size="large"
                color='info'
                component={Link}
                fullWidth={true}
                to={data.id !== 151 ? "/pokedex/" + (data.id + 1) : "/pokedex/1"}
            >
                <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 56, height: 56 }}
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (data.id !== 151 ? data.id + 1 : 1) + ".png"} />
                {value}
            </Button>
        );
    }
    return (
        <Button
            variant="contained"
            size="large"
            color='info'
            component={Link}
            fullWidth={true}
            to={data.id !== 1 ? "/pokedex/" + (data.id - 1) : "/pokedex/151"}
        >
            <Avatar
                alt="Remy Sharp"
                sx={{ width: 56, height: 56 }}
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (data.id !== 1 ? data.id - 1 : 151) + ".png"} />
            {value}
        </Button>
    )
}; export default PokemonButton