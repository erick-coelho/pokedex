import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { Grid, Typography, Container } from "@mui/material";

const EvolutionChain = ({ url, name }) => {
    const [evolutionChain, setEvolutionChain] = useState(null)

    const fetchEvolutionChain = useCallback(() => {
        axios.get(url)
            .then((response) => {
                setEvolutionChain(response.data)
            })
    }, [url])

    useEffect(() => {
        if (url) {
            fetchEvolutionChain()
        }
    }, [url, fetchEvolutionChain])

    if (evolutionChain === null) {
        return (
            <>
                {name}
            </>
        )
    }

    return (
        <Container maxWidth={'lg'}>
            <Typography sx={{ textAlign: 'center' }} variant="h2" >EVOLUÇÕES</Typography>
            <Grid container sx={{ display: "flex", alignItems: "baseline"}} spacing={2}>
                {/*primeiro nome */}
                <Grid item  xs={3}>
                    <Typography sx={{textAlign:'initial'}} variant='h6'>{evolutionChain.chain.species.name}</Typography>
                </Grid>
                {evolutionChain.chain.evolves_to.length > 0 &&
                    (<>
                        {/*setinha*/}
                        <Grid item xs={2}>
                            <Typography sx={{textAlign:'center'}} variant='h4'>{' > '}</Typography>
                        </Grid>
                        {evolutionChain.chain.evolves_to.map((item, key) => (
                            <>
                                {/*segundo nome */}
                                <Grid item xs={item.evolves_to.length > 0 ? 3 : 7} >
                                    <Typography sx={{textAlign:'center'}} variant='h6'>{item.species.name}</Typography>
                                </Grid>
                                {item.evolves_to.length > 0 && (
                                    <>
                                        {/*segunda seta */}
                                        <Grid item xs={2}>
                                            <Typography sx={{textAlign:'center'}} variant='h4'>{' > '}</Typography>
                                        </Grid>
                                        {item.evolves_to.map((item, key) => (
                                            <>
                                                {/*terceiro nome */}
                                                <Grid item xs={2} >
                                                    <Typography sx={{textAlign:'end'}} variant='h6'>{item.species.name}</Typography>
                                                </Grid>
                                            </>
                                        ))}
                                    </>
                                )}
                            </>
                        ))}
                    </>)}
            </Grid>
        </Container>
    )
}; export default EvolutionChain;