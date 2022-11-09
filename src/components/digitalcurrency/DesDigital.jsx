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
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const options = [' کمترین قیمت ', 'بیشترین قیمت'];

const DesDigital = ({ status, setSearch, unit , setUnit ,  }) => {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    const handleChangeButton = (e) => {
        setUnit(e.target.value);
    };
    return (

        <>
            <Grid item width={"100%"} pb={3}  >
                <Typography sx={{ fontWeight: "700" }} >{"قیمت لحظه‌ای"}</Typography>
            </Grid>
            <Grid item display={"flex"} justifyContent={'space-between'} sx={{ flexDirection: { xs: "column", md: "row" }, width: { xs: "100%" } }}  >
                <Grid item display={'flex'} sx={{ border: "1px solid #8888 ", borderRadius: "10px", mb: { xs: "10px" } }} xs={12} md={3}  >
                    <IconButton type="button" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase sx={{ flex: 1 }}
                        placeholder="جستجو"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={handleSearch}
                    />

                </Grid>
                <Grid item justifyContent={'space-evenly'} display={"flex"} sx={{ width: { lg: "75%", xs: "100%" } }} >

                    <Grid item display={"flex"} justifyContent={'center'} alignItems={"center"} >
                        <Button variant='outlined' startIcon={<StarOutlineRoundedIcon />} sx={{ backgroundColor: "#fafafa", color: "#000", border: '1px solid #e0e0e0 ',  height: "50px" , width: { md: "272px%", xs: "100%" } }}  >
                            {status ? <Button sx={{ color: "#000", width: { md: "272px%", xs: "140px" } }}  >نشان شده ها</Button> : <Button sx={{ color: "blue", width: { md: "272px%", xs: "140px" } }}  >نشان شده ها</Button>}
                        </Button>
                    </Grid>
                    <Grid item sx={{ minWidth: { md: '140px', xs: "100px" }, display: { xs: "none", sm: "block" } }}>
                        <Autocomplete xs={3}
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
                    <Grid item border={1} display={"flex"} justifyContent={'center'} alignItems={"center"} sx={{ minWidth: { md: '300px', xs: "100px" } , display:{xs: "none" , sm:"block"} }}>                       
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
                </Grid>


            </Grid>
        </>
    )
}

export default DesDigital