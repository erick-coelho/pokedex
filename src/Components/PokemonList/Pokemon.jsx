import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Pokemon = ({ data }) => {
    const [detail, setDetail] = useState(null);

    const fetchDetail = useCallback(() => {
        axios.get(data.url).then((response) => {
            setDetail(response.data)
        })
    }, [data.url])

    useEffect(() => {
        fetchDetail()
    }, [fetchDetail])

    if (detail === null) {
        return (
            <>-</>
        );
    }

    return (
        <div>
            <Link to={''+detail.id}>
                <span>{detail.name} {detail.types.map((item) => (<span key={item.slot}>{item.type.name} </span>))}</span>
                <img alt='pokemon' src={detail.sprites.front_default} width={50} />
            </Link>
        </div>
    );
}; export default Pokemon;