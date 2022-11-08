import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Logobitbarg from "../../../assets/images/bitbarg.webp"
import PhoneIcon from '@mui/icons-material/Phone';
import ModalBox from '../Modal/ModalBox';
const Cart = ({ dataCoins }) => {

    const [open, setOpen] = useState(false)
    const handelOpen = () => {
        setOpen(true)
    }

    const [dataForm, setDataForm] = useState({
        symbol: "Bitcoin",
        tier: 1,
        price: 21261.144289518743,
    })
    const handelchange = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    };

    return (
        <Grid container item sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column" }}>
            <Grid item maxWidth={{ xs: "150px", md: "272px" }}  >
                <img src={Logobitbarg} alt="Logo" width="100%" />
            </Grid>
            <Grid container component="form" item spacing={{ xs: 1, md: 0.5 }} sx={{ display: "flex", justifyContent: 'center', alignItems: "center" }} >
                <Grid item>
                    <TextField
                        id="outlined-name"
                        label="تومان"
                        value={dataForm.price * dataForm.tier}
                        onChange={handelchange}
                        name="price"

                    />
                </Grid >
                <Grid item>
                    <TextField
                        id="outlined-name"
                        label="واحد"
                        value={dataForm.tier}
                        name="tier"
                        onChange={handelchange}
                    />

                </Grid>
                <Grid item  >
                    <TextField
                        onClick={handelOpen}
                        id="outlined-name"
                        label="انتخاب ارز"
                        value={dataForm.symbol }
                        name="symbol"
                        onChange={handelchange}
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{ cursor: 'pointer', }}
                    />
                    <ModalBox open={open} setOpen={setOpen} dataCoins={dataCoins} setDataForm={setDataForm} />
                </Grid>

            </Grid>
            <Grid container item mt={5} spacing={1} sx={{ justifyContent: "center", alignItems: "center" }} xs={12} md={4} width={"100%"}>
                <Grid item>
                    <Button variant='mainButton' sx={{ width: '100%', minWidth: '150px' }} >
                        <Typography >  خرید  </Typography>

                    </Button>
                </Grid>
                <Grid item>
                    <Button variant='mainButton' 
                    sx={{ width: '100%', minWidth: '150px', background: "#ebedf1", color: "#000" }}>
                        <Typography > درخواست خرید  </Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid container item mt={5} sx={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }} xs={12} md={4} width={"100%"} >
                <Grid>
                    <Typography variant='subtitle1'>
                        {" پشتیبانــی ۲۴ ساعتـه"}
                        <br />
                        {"  حتی در روزهای تعطیل"}
                    </Typography>
                </Grid>
                <Grid mt={1} >
                    <Button item >
                        <Typography p={1} variant="subtitle1">{" 021-5547-8525"}</Typography>
                        <PhoneIcon />
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Cart