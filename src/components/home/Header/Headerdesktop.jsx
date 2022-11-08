import * as React from 'react';
import { Datanavbar } from "../../../data/DataNavbar/Datanavbar"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Logo from "../../../assets/images/header-logo.svg"
import { Link } from 'react-router-dom';
const Headerdesktop = () => {
  return (
    <Grid container item sx={{ color: 'black', width: '100%', height: '75px', justifyContent: 'space-between', alignItems: 'center' }}>
      <Grid item sx={{ width: '45%', display: 'flex', justifyContent: 'space-between', paddingRight: '0', alignItems: 'center' }}>
        <Button sx={{ color: '#000' }}>
          <SegmentRoundedIcon fontSize="large" />
          <Typography>منو</Typography>
        </Button>
        {
          Datanavbar.map((item, index) => (
            <Grid key={index}>
              <Link to={item.href}>
                <Button >
                  <Typography variant='button' >{item.name}</Typography>
                </Button>
              </Link>
            </Grid>
          ))
        }
      </Grid>
      <Grid item sx={{ width: '25%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

        <Grid  >
          <Button variant="mainButton">
            {"ورود / ثبت نام"}
          </Button>
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
        <Grid sx={{ width: '118px', height: '48px' }} >
          <img src={Logo} alt="Logo" sx={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Grid>




  );
}

export default Headerdesktop