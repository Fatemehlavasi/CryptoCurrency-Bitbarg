import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Grid, IconButton, Typography, Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const TableِPricDigi = ({ coin, handelCheck, unit }) => {

  return (
    <>
      <TableRow
        key={coin.uuid}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          textAlign: "center",
        }}
      >
         <TableCell sx={{ textAlign: "center" }}>
        <IconButton onClick={() => handelCheck(coin.uuid)}>
          {coin.star ? <StarIcon sx={{ color: "gold" }}  />  : <StarBorderIcon sx={{ color: "gold" }}  />}
        </IconButton>
      </TableCell>
        <TableCell
          sx={{ textAlign: "center", direction: "rtl" }}
        >{`${coin.change}%`}</TableCell>
        {/* <TableCell sx={{ textAlign: "center" }}>
                <Chart coin={coin}/>
                </TableCell> */}
        <TableCell sx={{ textAlign: "center" }}>
          {unit === "Toman"
            ? Math.ceil(coin.marketCap / 34000)
            : Math.ceil(coin.marketCap)}
          {unit === "Toman" ? "تومان" : <CurrencyRupeeIcon />}
        </TableCell>
        <TableCell sx={{ textAlign: "center" }}>
          {unit === "Toman"
            ? Math.ceil(coin.price * 34000)
            : Math.ceil(coin.price)}
          {unit === "Toman" ? "تومان" : <CurrencyRupeeIcon />}
        </TableCell>
        <TableCell sx={{ textAlign: "right" }}>
          <Grid
            container
            item
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <Grid
              container
              item
              width={"60%"}
              display={"flex"}
              justifyContent={"space-evenly"}
            >
              <Grid item>
                <Typography variant="subtitle1" marginBottom={1}>
                  {coin.name}
                </Typography>
                <Grid display={"flex"}>
                  <Typography variant="subtitle1" color={"#909090"}>
                    {coin.symbol}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={"#000"}
                    sx={{
                      backgroundColor: "#e0e0e0",
                      width: "18px",
                      textAlign: "center",
                      mr: 1,
                      borderRadius: 1,
                    }}
                  >
                    {coin.rank}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <img width={"35px"} height={"35px"} src={coin.iconUrl} />
              </Grid>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableِPricDigi;
