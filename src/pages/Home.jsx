import { Grid, Container, CircularProgress } from '@mui/material'
import Cart from "../components/home/MainPage/Cart"
import { DataContext } from '../contex/contex'
import { useContext, useEffect, useState } from 'react'
import { handleData } from "../Api/Api"
const Home = () => {
    const [loading, setLoading] = useState(true)
    const { dataCoins, setDataCoins } = useContext(DataContext)
    // const handleData = async () => {
    //     const data = await options('/coins').then(res => res.data.data.coins)
    //     setDataCoins((data))
    //     setLoading(false)
    // }
    const handleDataCoins = async () => {
        const data = await handleData()
        setLoading(false)
        setDataCoins(data.map((coin)=>({...coin,star:false})))
    }
    useEffect(() => {
        handleDataCoins()
    }, [])

    // if (loading) {
    //     return 
    //     <Grid container item xs={12} alignItems={'center'} justifyContent={'center'}>
    //         <CircularProgress />
    //     </Grid>
    // }

    return (
        <Grid>
            <Container>
                {
                    loading ?
                        <Grid display={'flex'} justifyContent={'center'} sx={{ marginTop: 10 }} >
                            <CircularProgress />
                        </Grid>
                        :

                        <Cart dataCoins={dataCoins} />


                } 
            </Container>
        </Grid>
    )
}

export default Home