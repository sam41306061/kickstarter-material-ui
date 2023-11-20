import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import config from '../../config.json';

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";



import { useSelector, useDispatch } from 'react-redux';
import { accountActions } from "../../store/accounts";

const ElevationScroll = (props) => {
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const account = useSelector((state) => state.accounts.account);
  const balance = useSelector((state) => state.accounts.balance);
  const chainId = useSelector((state) => state.accounts.chainId);

  const connectHandler = async() => {
    dispatch(accountActions.account());
  }

  const headingStyle = {
    topTitle: {
      fontFamily: "Gotham Bold",
      textTransform: "none",
      fontWeight: 400,
      color: theme.kickGreen,
      fontSize: "2rem",
      flexGrow: 1
    },
    newCamps: {
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
    },
    accountTitle: {
      fontFamily: "Gotham Bold",
      textTransform: "none",
      fontWeight: 200,
      color: theme.kickGreen,
      fontSize: "1.4em",
      marginRight: "2em"
    },
    balanceTitle:{
      fontFamily: "Gotham Bold",
      textTransform: "none",
      fontWeight: 200,
      color: theme.kickGreen,
      fontSize: "1.4em",
      marginRight: "2em"
    }

  }

  


  return (
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: isMobile ? "space-between" : "flex-end" }}>
          <Typography variant="h2" sx={headingStyle.topTitle} to="/">
            CrowdCoin
          </Typography>
          {account ? (
            <Typography sx={headingStyle.accountTitle} variant="h6" href={config[chainId] ? `${config[chainId].explorerURL}/address/${account}` : `#`}>{account.slice(0,5) + '...' + account.slice(38,42)}</Typography>
          ):(
            <Button href={config[chainId] ? `${config[chainId].explorerURL}/address/${account}` : `#`} sx={{ mr: 2 }} color="inherit" onClick={connectHandler}>
              Connect your Wallet
            </Button>
          )}
          {balance ? (
            <Typography sx={headingStyle.balanceTitle} variant="h8" gutterBottom>
            {balance}
          </Typography>
          ):(
            <Typography variant="h5" gutterBottom>
              #0000
            </Typography>
          )}
          {isMobile ? (
            <Button component={Link} to="./create" variant="contained" color="secondary">
              New
            </Button>
          ) : (
            <>
              <Button component={Link} to="/" sx={{ mr: 2 }} color="inherit">
                Campaigns
              </Button>
              <Button component={Link} to="./create" variant="contained" color="secondary">
                New Campaign
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}


