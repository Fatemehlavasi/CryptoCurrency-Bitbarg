import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider'
const MobileCurrencyDigi = ({ coin, handelCheck, unit }) => {
    return (
        <>
            <Grid width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'space-between'} display={'flex'} my={1}>
                <Grid>
                    <IconButton onClick={() => handelCheck(coin.uuid)} sx={{ "&.MuiButtonBase-root": { padding: 0 } }}>
                        <h3>{coin.lVolume ? <StarIcon sx={{ Color: "red" }} /> : <StarBorderIcon />}</h3>
                    </IconButton>
                </Grid>
                <Grid>
                    <Grid display={"flex"} alignItems={'center'} justifyContent={"flex-end"} >
                        <Typography
                            variant="subtitle1"
                            color={"rgba(0, 0, 0, 0.6)"}
                            px={1}
                        >
                            {'خرید'}
                        </Typography>
                        <Typography variant="subtitle1">
                            {unit === 'Toman'
                                ? Math.ceil(coin.price * 34000)
                                : Math.ceil(coin.price)}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color={"rgba(0, 0, 0, 0.6)"}
                            px={1}
                        >
                            {unit === 'Toman' ? "تومان" : <CurrencyLiraIcon/>}
                        </Typography>
                    </Grid>

                </Grid>
                <Grid display={"flex"} justifyContent={'flex-start'}>
                    <Grid item>
                        <Typography variant="subtitle1" marginBottom={1} sx={{ direction: "ltr" }}>
                            {coin?.name}
                        </Typography>
                        <Grid display={"flex"}>
                            <Typography
                                variant="subtitle1"
                                //color={"rgba(0, 0, 0, 0.6)"}
                                sx={{
                                    direction: "ltr",
                                    marginLeft: 1
                                }}
                            >
                                {`${coin.change}%`}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color={"rgba(0, 0, 0, 0.6)"}
                            >
                                {coin?.symbol}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color={"rgba(0, 0, 0, 0.6)"}
                                sx={{
                                    backgroundColor: "#909090",
                                    width: "15px",
                                    textAlign: "center",
                                    marginRight: 1,
                                    borderRadius: 1,
                                }}
                            >
                                {coin?.rank}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item marginRight={1}>
                        <img
                            width={"40px"}
                            height={"40px"}
                            src={coin?.iconUrl}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" />
        </>
    );
}

export default MobileCurrencyDigi;