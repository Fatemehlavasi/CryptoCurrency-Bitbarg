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
    const [unit, setUnit] = useState(true)
    const [status, setStatus] = useState(false)
    const [filtered, setFiltered] = useState([]);
    const handleStatus = () => {
        if (status) {
            setFiltered(dataCoins.filter((coin) => coin.lVolume === true));
        } else {
            setFiltered(dataCoins);
        }
    };

   

    const handelCheck = uuid => {
        setDataCoins(dataCoins.map(coin => coin.uuid === uuid ? { ...coin, lVolume: !coin.lVolume } : coin))
    }
    const [search, setSearch] = useState('')

    return (
        <Grid container  display={"flex"} flexWrap={"wrap"} justifyContent={'center'} alignItems={'center'} borderRadius={8}  mt={5} 
            sx={{flexDirection:{ xs: "column", md: "row" } , width:{xs: "100%"}}}
        >
                <DesDigital setStatus={setStatus} status={status}  setSearch={setSearch} unit={unit} setUnit={setUnit} handleStatus={handleStatus}/>
            {/* <Grid   borderRadius={"3px"} sx={{ width:{  md: "100%" }}} bgcolor="red" > */}
                <Table  sx={{ width:{ sm:"100%" , xs:"70%" } }} >
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
                        {dataCoins.filter(item => item.name.toUpperCase().includes(search.toUpperCase())).map((coin) => (
                         
                            (isDesktop ?
                                <TableِPricDigi coin={coin} handelCheck={handelCheck} unit={unit}/> :
                                <MobileCurrencyDigi handelCheck={handelCheck} coin={coin} />)
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        // </Grid>
    )
}

export default CurrencyDigi