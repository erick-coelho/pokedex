import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ChipType from './ChipType';



export default function PokemonCard({ data }) {


    return (
        <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
            <CardContent>
                <Link to={'' + data.id}>
                    <CardMedia
                        sx={{ objectFit: "contain", backgroundColor: '#efefef'}}
                        component="img"
                        image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png"}
                        alt={data.name + " image"}
                    />
                </Link>
                <Typography variant='subtitle1' sx={{ textAlign: 'left' }}>{'#' + data.id}</Typography>
                <Typography sx={{ textAlign: 'Left' }} variant='h5'>{data.name.toUpperCase()}</Typography>
                <Grid container>
                    {data.types.map((item) => (
                        <Grid item key={item.slot}>
                            <ChipType type={item.type} />
                        </Grid>))}
                </Grid>
            </CardContent>
        </Card>
    );
}
