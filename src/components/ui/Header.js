import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";


// wagmi wallet connect
import { useAccount, useConnect, useDisconnect } from "wagmi";

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




 export default function Header() {
 

// wagmi hooks
const {activeConnector} = useConnect();
const { disconnect } = useDisconnect();
const { address } = useAccount();





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
      fontSize: "4rem",
      fontWeight: 400,
      color: theme.kickGreen,
      [theme.breakpoints.down("md")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    }

  }
  
  return (
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "space-between" : "flex-end",
          }}
        >
          <Typography variant="h2" sx={headingStyle.topTitle} to="/">
            CrowdCoin
          </Typography>
          {!activeConnector ? (
            <Button onClick={useConnect} sx={{ mr: 2 }} color="inherit">
              Connect your Wallet
            </Button>
          ) : (
            <Button sx={{ mr: 2 }} color="inherit" onClick={disconnect}>
              Disconnect
            </Button>
          )}
          {isMobile ? (
            <Button
              component={Link}
              to="./create"
              variant="contained"
              color="secondary"
            >
              New
            </Button>
          ) : (
            <>
              <Button component={Link} to="/" sx={{ mr: 2 }} color="inherit">
                Campaigns
              </Button>
              <Button
                component={Link}
                to="./create"
                variant="contained"
                color="secondary"
              >
                New Campaign
              </Button>
            </>
          )}
          
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}


