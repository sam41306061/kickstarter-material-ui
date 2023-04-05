import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from "@mui/material";


// scroll function
function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// theme styling 
const useStyles = makeStyles(theme =>({
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
}))

function Header() {
  const classes = useStyles();
  return (
    <ElevationScroll container justify="flex-end" alignItems="center" direction="row">
      <AppBar position="static" color="primary" sm className={classes.heroTextContainer}>
        <Toolbar>
          <Typography variant="topTitle" to="/" sx={{ flexGrow: 1 }}>
            CrowdCoin
          </Typography>
          <Button to="/campaigns" sx={{ mr: 2 }} color="inherit">
            Campaigns
          </Button>
          <Button to="/campaigns/new" variant="contained" color="secondary">
            New Campaign
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
