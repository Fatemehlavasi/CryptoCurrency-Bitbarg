import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Search from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Grid, IconButton, Typography, Button } from "@mui/material"
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const options = [' کمترین قیمت ', 'بیشترین قیمت'];

const DesDigital = ({ setStatus, status, setSearch }) => {

    const [unit, setUnit] = useState(true);
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    // const handleSearch = (e) => {
    //     setSearch(e.target.value.toLowerCase())
    // }
    return (

        <>
            <Grid item width={"80%"} pb={3} >
                <Typography sx={{ fontWeight: "700" }} >{"قیمت لحظه‌ای"}</Typography>
            </Grid>
            <Grid item display={"flex"} justifyContent={'space-between'}  pb={3} sx={{flexDirection:{ xs: "column", md: "row" }, width:{ lg: "75%", md: "100%" }}}  >
                <Grid item display={'flex'} sx={{ border: "1px solid #8888 ", borderRadius: "10px" }} xs={12} md={3} >
                    <IconButton type="button" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase sx={{ flex: 1 }}
                        placeholder="جستجو"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        // onChange={handleSearch}
                    />
                </Grid>
                <Grid item  justifyContent={'space-evenly'} display={"flex"}  sx={{ width:{ lg: "75%", md: "100%" , xs:"100%" } , bgcolor:"red" }}>
                <Grid item display={"flex"} justifyContent={'center'} alignItems={"center"} xs={12} md={2} >
                    <Button variant='outlined'  startIcon={<StarOutlineRoundedIcon />} sx={{ backgroundColor: "#fafafa", color: "#000", border: '1px solid #e0e0e0 ' , minWidth: '180px' , height:"50px" }} xs={5} md={2} onClick={() => (setStatus(!status))} >
                         {status ?  <Button  sx={{color: "#000",minWidth: '140px'  }}  >نشان شده ها</Button> :  <Button  sx={{color: "blue",minWidth: '140px'  }}  >نشان شده ها</Button>}
                    </Button>
                </Grid>
                <Grid item sx={{ minWidth: {md:'140px' , xs:"100px" }}}>
                    <Autocomplete xs={3}
                        dir="rtl"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="قیمت بر اساس " />}
                    />
                </Grid>
                <Grid item border={1} display={"flex"} justifyContent={'center'} alignItems={"center"} xs={6} md={2}>
                    <Button onClick={() => setUnit(true)} sx={{ backgroundColor: "#fafafa", color: "#000", width: 100 }}>
                        {"تومان"}
                    </Button>
                    <Button onClick={() => setUnit(false)} sx={{ backgroundColor: "#fafafa", color: "#000", width: 100 }}>
                        {"تتر"}
                    </Button>
                    
                </Grid>
                </Grid>

                
            </Grid>
        </>
    )
}

export default DesDigital