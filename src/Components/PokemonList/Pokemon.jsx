import { useCallback, useEffect, useState } from 'react';
import axios from 'axios'
import PokemonCard from '../Assets/PokemonCard';

const Pokemon = ({ data }) => {
    const [detail, setDetail] = useState(null);

    const fetchDetail = useCallback(() => {
        axios.get(data.url).then((response) => {
            setDetail(response.data)
        })
    }, [data.url])

    useEffect(() => {
        if (data !== null) {
            fetchDetail()
        }
    }, [data, fetchDetail])

    if (detail === null) {
        return (
            <></>
        );
    }

    return (
        <PokemonCard data={detail} />
    );
}; export default Pokemon;