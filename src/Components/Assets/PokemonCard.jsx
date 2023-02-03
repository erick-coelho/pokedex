import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ChipType from './ChipType';



export default function PokemonCard({ data }) {


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        #{data.id}
                    </Avatar>
                }
                title={<Typography sx={{ textAlign: 'center' }} variant='h5'>{data.name.toUpperCase()}</Typography>}
            />
            <Link to={'' + data.id}>
                <CardMedia
                    component="img"
                    height="320"
                    image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png"}
                    alt={data.name + " image"}
                />
            </Link>
            <CardContent>
                <Grid container>
                    {data.types.map((item) => (
                        <Grid item key={item.slot}>
                            <ChipType type={item.type}/>
                        </Grid>))}
                </Grid>
            </CardContent>
        </Card>
    );
}
