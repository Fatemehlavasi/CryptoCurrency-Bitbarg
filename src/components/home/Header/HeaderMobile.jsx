import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import  Logo  from "../../../assets/images/header-logo.svg"
import Button from "@mui/material/Button";
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Stack from "@mui/material/Stack";
import { Typography , Grid} from '@mui/material';
const HeaderMobile = () => {
    return ( 
     <Toolbar sx={{ justifyContent: "space-between" ,px:'0'}}>
        <Grid sx={{width:'118px',height:'48px' }} > <img src={Logo} alt="Logo" sx={{width:'100%'}} />; </Grid>
        <Stack direction="row" spacing={2}>
          {/* <IconButton color="secondary" > */}
          <Button
            variant="contained"
            startIcon={<HeadsetMicOutlinedIcon />}
            sx={{
              borderRadius: "25px",
              padding: "3px",
              backgroundColor: "rgba(0,0,0,.08)",
              color: "black",
            }}
          >
            <Typography variant='button' sx={{px:1}}>{"آیا نیاز به کمک دارید؟"}</Typography>
          </Button>
          {/* </IconButton> */}
        </Stack>
      </Toolbar>
     );
}
 
export default HeaderMobile;
