import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme, makeStyles } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const headingStyle = {
    topTitle:{
      fontFamily: "Gotham Bold",
      textTransform: "none",
      fontWeight: 400,
      color: theme.kickGreen,
      fontSize: "2rem",
      flexGrow: 1
    },
    newCamps:{

    }

  }
  
  return (
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: isMobile ? "space-between" : "flex-end" }}>
          <Typography  variant="h2" sx= {headingStyle.topTitle} to="/">
            CrowdCoin
          </Typography>
          {isMobile ? (
            <Button  to="/campaigns/new" variant="contained" color="secondary">
              New
            </Button>
          ) : (
            <>
              <Button to="/campaigns" sx={{ mr: 2 }} color="inherit">
                Campaigns
              </Button>
              <Button to="/campaigns/new" variant="contained" color="secondary">
                New Campaign
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
