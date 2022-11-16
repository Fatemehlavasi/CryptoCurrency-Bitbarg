import { Grid , Container , CircularProgress} from '@mui/material'
import Cart from "../components/home/MainPage/Cart"
import { options } from '../Api/Api'
import { DataContext } from '../contex/contex'
import { useContext, useEffect , useState } from 'react'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const { dataCoins, setDataCoins } = useContext(DataContext)
    const handleData = async () => {
        const data = await options('/coins').then(res => res.data.data.coins)
        setDataCoins(data)
        setLoading(false)
    }
    useEffect(() => {
        handleData()
    }, [])

    if (loading) {
        return 
        <Grid container item xs={12} alignItems={'center'} justifyContent={'center'}>
            <CircularProgress />
        </Grid>
    }

    return (
        <Grid>
            <Container>

            <Cart dataCoins={dataCoins} />
            </Container>
        </Grid>
    )
}

export default Home