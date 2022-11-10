import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Grid, IconButton, Typography, Button, InputLabel } from "@mui/material"
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SortFilterPrice from './SortFilterPrice';
import { useEffect } from 'react';
import { useCallback } from 'react';
import Search from '../search/Search';

const DesDigital = ({ status, setSearch, unit, setUnit, setFiltered, filtered }) => {


    const handleChangeButton = (e) => {
        setUnit(e.target.value);
    };
    // filter
    const [sortPrice, setSortPrice] = useState('')
    console.log(sortPrice)
    const handleDescendingPrice = useCallback(() => {
        const coinData = [...filtered]
        console.log(coinData)
        if (sortPrice === 'ascending') {
            setFiltered(coinData.sort((a, b) => a.price - b.price));
        } else if (sortPrice === 'descending') {
            setFiltered(coinData.sort((a, b) => b.price - a.price));

        }
    }, [sortPrice])


    useEffect(() => {
        handleDescendingPrice();
    }, [sortPrice]);

    return (

        <>
            <Grid item width={"100%"} pb={3}  >
                <Typography sx={{ fontWeight: "700" }} >{"قیمت لحظه‌ای"}</Typography>
            </Grid>
            <Grid container
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                marginBottom={2}
            >
                <Grid item xs={12} md={3} marginBottom={2} >
                    <Search setSearch={setSearch} minWidth={200} />
                </Grid>
                {/* <Grid item justifyContent={'space-evenly'} display={"flex"} sx={{ width: { lg: "75%", xs: "100%" }, flexDirection: { sm: 'row', xs: 'column' } }} > */}

                  
                    <Grid item sx={{ minWidth: "150px" }} xs={6} md={2} marginBottom={2}>
                        <SortFilterPrice sortPrice={sortPrice} setSortPrice={setSortPrice} />
                    </Grid>
                    <Grid item
                        display={"flex"}
                        xs={6}
                        md={4}
                        maxWidth={"100%"}
                        width={200}
                        borderRadius={1}
                        border={"1px solid #ccc0c0"}
                        p={0.6}
                        marginBottom={2}>
                        <ToggleButtonGroup
                            fullWidth={true}
                            color="primary"
                            value={unit}
                            exclusive
                            onChange={handleChangeButton}
                            aria-label="Platform"
                            sx={{ "&.MuiToggleButton-root": { border: "1 solid #909090" } }}
                        >
                            <ToggleButton
                                value={"Toman"}
                                sx={{ "&.MuiToggleButton-root": { border: "none" } }}
                            >
                                {" "}
                                {"تومان"}
                            </ToggleButton>
                            <ToggleButton
                                value={"Tether "}
                                sx={{ "&.MuiToggleButton-root": { border: "none" } }}
                            >
                                {"تتر"}
                            </ToggleButton>
                        </ToggleButtonGroup>


                    </Grid>

                    <Grid item display={"flex"} justifyContent={'center'} alignItems={"center"} >
                        <Button variant='outlined' startIcon={<StarOutlineRoundedIcon />} sx={{ backgroundColor: "#fafafa", color: "#000", border: '1px solid #e0e0e0 ', height: "45px", width: { md: "272px%", xs: "80" } }}  >
                            {status ? <Button sx={{ color: "#000", width: { md: "272px%", xs: "140px" } }}  >نشان شده ها</Button> : <Button sx={{ color: "blue", width: { md: "272px%", xs: "140px" } }}  >نشان شده ها</Button>}
                        </Button>
                    </Grid>
                </Grid>

            {/* </Grid> */}
        </>
    )
}

export default DesDigital