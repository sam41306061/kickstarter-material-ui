import * as React from 'react';

// comp
import { Typography, Box } from '@mui/material';


// styles
import { useTheme } from '@mui/material/styles';



export default function  PendingRequests() {    
    const theme = useTheme();
    const styles = {
        root: {marginTop: "5em",
        [theme.breakpoints.down("md")]: {
          marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
          marginTop: "2em",
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#efefef",
        height: "60vh",
        padding: "2rem",
    }
}
    return (
       <Box sx={styles.root}>
        <Typography>Create Requests</Typography>
       </Box>
    )
}

