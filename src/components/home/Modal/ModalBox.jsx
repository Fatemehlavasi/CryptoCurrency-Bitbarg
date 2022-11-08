import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton, List, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ModalOption from './ModalOption'
import React, { useState } from 'react'
const ModalBox = ({ open, setOpen, dataCoins, setDataForm }) => {
    const handelinput = (coin) => {
        setDataForm(coin)
        setOpen(false)
    }
    console.log(dataCoins)
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        borderRadius: '10px',
        boxShadow: 24,
        height: 680,
        maxHeight: '90%',
        p: 4,
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: 520,
        bgcolor: 'background.paper',
       
    };
    // const handleSearch=(e)=>{
    //     setSearch(e.target.value.toLowerCase())
    //   }
    //   const [search , setSearch] = useState()
    return (
       
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container  >
                        <Grid item conatainer display={'flex'} alignItems={'center'} justifyContent={'space-between'} xs={12} marginBottom={1}>
                            <Grid item>
                                <Typography variant='h2' sx={{ color: "#000" }} >{"قیمت ارز"}</Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={handleClose} >
                                    <CloseIcon sx={{ color: 'black' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ border: '1px solid #727272 ', borderRadius: '8px' }}  xs={12}>
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase sx={{ ml: 1, flex: 1 }}
                                placeholder="جستجو"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                // onChange={handleSearch}
                            />
                        </Grid>
                        <Grid item xs={12} marginTop={2}>
                            <Grid sx={{  height: '100%' , maxHeight: '500px', overflowY: 'auto' }}>
                                <List>
                                    {
                                        dataCoins.map((coin) => (
                                            <Grid key={coin.uuid} onClick={() => handelinput(coin)}>
                                                <ModalOption coin={coin} setDataForm={setDataForm} setOpen={setOpen} key={coin.uuid} />
                                                <Divider variant="middle" />
                                            </Grid>
                                        ))}
                                </List>

                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
      
    );
}

export default ModalBox;