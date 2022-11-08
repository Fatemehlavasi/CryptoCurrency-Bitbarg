import React, { useContext, useState, useEffect } from 'react'
import { Grid, useTheme, useMediaQuery, } from "@mui/material"
import { DataContext } from '../../contex/contex'
import image from "../../assets/images/backbitbarg.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DesDigital from './DesDigital';
import TableِPricDigi from "./TableِPricDigi"
import MobileCurrencyDigi from './MobileCurrencyDigi';


const CurrencyDigi = () => {
    const { dataCoins, setDataCoins } = useContext(DataContext)
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const [status, setStatus] = useState(false)
    const [filtered, setFiltered] = useState([]);
    const handleStatus = () => {
        if (status) {
            setFiltered(dataCoins.filter((coin) => coin.lVolume === true));
        } else {
            setFiltered(dataCoins);
        }
    };

    useEffect(() => {
        handleStatus();
    }, [status, dataCoins, filtered]);


    const handelCheck = uuid => {
        setDataCoins(dataCoins.map(coin => coin.uuid === uuid ? { ...coin, lVolume: !coin.lVolume } : coin))
    }
    // const [search, setSearch] = useState()

    return (
        <Grid container width={"100%"} display={"flex"} flexWrap={"wrap"} justifyContent={'center'} alignItems={'center'} borderRadius={8}  mt={5} p={5}
            sx={{ backgroundImage: `url(${image.src}  "no-repeat" "center" )` , flexDirection:{ xs: "column", md: "row" }}}
        >
                <DesDigital setStatus={setStatus} status={status}  />
            <Grid  borderRadius={"3px"} sx={{ width:{ lg: "75%", md: "100%" }}} >
                <Table width={"80%"} sx={{ minWidth: " 75% " }} >
                    {isDesktop ?
                        <TableHead bgcolor={"#fafafa"}>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell sx={{ textAlign: "center" }}>نشانه کردن </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>تغییرات </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>نمودار </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>قیمت فروش </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>قیمت خرید </TableCell>
                                <TableCell sx={{ textAlign: "left" }}> ارز دیجیتال  </TableCell>
                            </TableRow>
                        </TableHead> : null}

                    <TableBody>
                        {dataCoins.map((coin) => (
                            (isDesktop ?
                                <TableِPricDigi coin={coin} handelCheck={handelCheck} /> :
                                <MobileCurrencyDigi handelCheck={handelCheck} coin={coin} />)
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

export default CurrencyDigi