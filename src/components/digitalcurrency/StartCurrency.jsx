import React from 'react'
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const StartCurrency = (unit , handleChangeButton) => {
    return (
        <>
            <ToggleButtonGroup fullWidth={true} color="primary" value={unit} exclusive onChange={handleChangeButton} aria-label="Platform"
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


        </>
    )
}

export default StartCurrency