import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/material";
import theme from "./ui/Theme";

// theme style 

const useStyles = makeStyles(theme =>({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
}))

export default function CampaignList() {
  const classes = useStyles();
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
 
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.mainContainer}>
          <Box sx={{ bgcolor: "#efefef", height: "100vh" }} />
        </Container>
      </React.Fragment>
  
  );
}
