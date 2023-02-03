import { useState, useEffect, useCallback } from "react"
import axios from "axios"


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
}; export default EvolutionChain;