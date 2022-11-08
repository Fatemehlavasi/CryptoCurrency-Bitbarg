import { Grid } from '@mui/material'
import Cart from "../components/home/MainPage/Cart"
import { options } from '../Api/Api'
import { DataContext } from '../contex/contex'
import { useContext, useEffect } from 'react'
const Home = () => {
    const { dataCoins, setDataCoins } = useContext(DataContext)
    const handleData = async () => {
        const data = await options('/coins').then(res => res.data.data.coins)
        setDataCoins(data)
    }
    useEffect(() => {
        handleData()
    }, [])

    return (
        <Grid>
            <Cart dataCoins={dataCoins} />
        </Grid>
    )
}

export default Home