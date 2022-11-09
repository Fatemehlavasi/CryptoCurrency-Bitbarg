import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";

const MobileCurrencyDigi = ({ coin, handelCheck }) => {
    return (

<TableRow hover role="checkbox" >
            <TableCell sx={{ textAlign: "center" }}>
                <IconButton onClick={() => handelCheck(coin.uuid)}>
                    <h3>{coin.lVolume ? <StarIcon sx={{ Color: "red" }} /> : <StarBorderIcon />}</h3>
                </IconButton>
            </TableCell>

            <TableCell sx={{ textAlign: "center"   , display:{xs: "none" , sm:"block"} }} paddingLeft={0} >
                 <Grid display={"flex"} alignItems={'center'} justifyContent={"flex-end"} >
                    <Typography
                        variant="subtitle1"
                        color={"rgba(0, 0, 0, 0.6)"}
                        px={1}
                    >
                        {'خرید'}
                    </Typography>
                    <Typography variant="subtitle1">
                        {coin.price}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color={"rgba(0, 0, 0, 0.6)"}
                        px={1}
                    >
                    </Typography>
                </Grid> 
                <Grid display={"flex"} justifyContent={"flex-end"} >
                    <Typography
                        variant="subtitle1"
                        color={"rgba(0, 0, 0, 0.6)"}
                        px={1}
                       
                    >
                        {'فروش '}
                    </Typography>
                    <Typography variant="subtitle1" >
                        {coin.marketCap}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color={"rgba(0, 0, 0, 0.6)"}
                        px={1}
                    >
                        {"USDT"}
                    </Typography>

                </Grid> 
            </TableCell>
            <TableCell sx={{ textAlign: "left"  }}>
                <Grid display={"flex"} justifyContent={"flex-end"}>
                    <Grid item>
                        <Typography variant="subtitle1" marginBottom={1}>
                            {coin?.name}
                        </Typography>
                        <Grid display={"flex"}>
                            <Typography
                                variant="subtitle1"
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
            </TableCell>
        </TableRow>

      
    );
}

export default MobileCurrencyDigi;