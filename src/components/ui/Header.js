import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { useTheme } from "@mui/material/styles";
import { Avatar, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import config from '../../config.json';
import { loadAccounts } from '../../store/interactions'

// sticky header effect 
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

 
  const provider = useSelector(state => state.provider.connection)
  const account = useSelector((state) => state.provider.accounts);
  const chainId = useSelector((state) => state.provider.chainId);

  const dispatch = useDispatch();

  const connectHandler = async () => {
    await loadAccounts(provider, dispatch)
  }

  // styling
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
      fontSize: "15px",
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
        <Toolbar sx={{ display: "flex", justifyContent: isMobile ? "space-between" : "flex-end" }}>
          <Avatar src="../images/crowd-coin.jpg" variant="h2" sx= {headingStyle.topTitle} to="/">
          
          </Avatar>
          
            <Typography  sx= {headingStyle.newCamps} to="/">
              {account ? (
               <a 
               href={config[chainId] ? `${config[chainId].explorerURL}/address/${account}` : `#`}
               target='_blank'
               rel='noreferrer'
             >
               {account.slice(0,5) + '...' + account.slice(38,42)}
               <Typography
                 seed={account}
                 size={10}
                 scale={3}
                 color="#2187D0"
                 bgColor="#F1F2F9"
                 spotColor="#767F92"
                 className="identicon"
               />
             </a>
            ):(
              <Button onClick={connectHandler} sx={{ mr: 2 }} color="inherit">
              Connect your Wallet
            </Button>
            )}</Typography>
          {isMobile ? (
            <Button component={Link}  to="./create" variant="contained" color="secondary">
              New
            </Button>
          ) : (
            <> 
              <Button component={Link} to="/" sx={{ mr: 2 }} color="inherit">
                Campaigns
              </Button>
              <Button component={Link} to="./create"  variant="contained" color="secondary">
                New Campaign
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}


