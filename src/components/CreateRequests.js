import * as React from "react";

// comp
import { Typography, Box, TextField, Button } from "@mui/material";

// styles
import { useTheme } from "@mui/material/styles";

export default function CreateRequests() {
  const theme = useTheme();
  const styles = {
    container: {
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1),
      },
      [theme.breakpoints.down(899)]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        padding: theme.spacing(1),
      },
      [theme.breakpoints.down(600)]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: theme.spacing(0.5),
      },
    },
    title: {
      marginBottom: theme.spacing(1),
      fontWeight: "bold",
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
      [theme.breakpoints.down(899)]: {
        fontSize: "1.2rem",
        marginBottom: theme.spacing(0.5),
      },
      [theme.breakpoints.down(600)]: {
        fontSize: "1rem",
        marginBottom: theme.spacing(0.25),
      },
    },
    subheading: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      fontWeight: "bold",
      fontSize: "1.25rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down(899)]: {
        fontSize: "1rem",
        marginBottom: theme.spacing(0.5),
      },
      [theme.breakpoints.down(600)]: {
        fontSize: "0.9rem",
        marginBottom: theme.spacing(0.25),
      },
    },
    textField: {
      marginLeft: theme.spacing(2.5),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(1),
      },
      [theme.breakpoints.down(899)]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.down(600)]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    button: {
      alignSelf: "flex-start",
      width: "10em",
      marginLeft: theme.spacing(2.5),
      [theme.breakpoints.down(899)]: {
        width: "8em",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.down(600)]: {
        width: "6em",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
  };

  

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title} variant="h4">
        Create Requests
      </Typography>
      <Typography sx={styles.subheading} variant="subtitle1">
        Description
      </Typography>
      <TextField sx={styles.textField} label="Buy Cases" variant="outlined" />
      <Typography sx={styles.subheading} variant="subtitle1">
        Amount in Ether
      </Typography>
      <TextField sx={styles.textField} label="100" variant="outlined" />
      <Typography sx={styles.subheading} variant="subtitle1">
        Recipient
      </Typography>
      <TextField sx={styles.textField} label="0x000000" variant="outlined" />
      <Button sx={styles.button} variant="contained" color="primary">
        Create
      </Button>
    </Box>
  );
}
