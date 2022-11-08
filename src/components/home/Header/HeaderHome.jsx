
import {  useMediaQuery, useTheme } from "@mui/material";
import HeaderMobile from "./HeaderMobile";
import Headerdesktop from "./Headerdesktop";
import { Container , Grid } from '@mui/material';

const HeaderHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
   
      <Container>
          {isMobile ? (
            <HeaderMobile/>
          ) : (
            <Headerdesktop/>
          )}
      </Container>
    
  );
};

export default HeaderHome;