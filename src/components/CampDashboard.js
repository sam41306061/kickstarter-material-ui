import React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function CampDashboard() {
  const theme = useTheme();
  const styles = {
    container: {
      flexGrow: 1,
      padding: theme.spacing(1),
      marginTop: "10em",
      padding: "2em",
      backgroundColor: theme.palette.background.default,
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      height: "40em",
    },
    leftContainer: {
      flexGrow: 1,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.default,
      textAlign: "center",
      boxShadow: "0px 0px 8px 0px #ccc",
      marginRight: theme.spacing(2),
      borderRadius: "10px",
    },
    rightContainer: {
      display: "flex",  
      padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  textAlign: "center",
  marginRight: theme.spacing(2),
  width: "60%",
  height: 350,
  justifyContent: "center",
  alignItems: "center"
    },
    title: {
      marginBottom: theme.spacing(2),
      marginTop: "3em",
    },
    textField: {
      marginTop: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
      width: "50%",
      fontSize: "1.1em",
    },
    card: {
      height: 175,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  };

  return (
    <Box sx={styles.container}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={styles.leftContainer}
      >
        <Grid item xs={6}>
          <Card sx={styles.card}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Campaign Balance
              </Typography>
              <Typography variant="h4">12.1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={styles.card}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Minimum Contribution
              </Typography>
              <Typography variant="h4">100</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={styles.card}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pending Requests
              </Typography>
              <Typography variant="h4">3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={styles.card}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contributors
              </Typography>
              <Typography variant="h4">300</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        sx={styles.rightContainer}
        item
        xs={6}
        sm={6}
        container
      >
        <Typography variant="h4" sx={styles.title}>
          Contribute to this Campaign
        </Typography>
        <TextField
          id="filled-basic"
          label="Contribution in ETH"
          variant="filled"
          fullWidth
          sx={styles.textField}
        />
        <Button sx={styles.button} variant="contained" color="primary">
          Submit Contribution
        </Button>
        <Button
          component={Link}
          to="./pending"
          sx={styles.button}
          variant="contained"
          color="primary"
        >
          Pending Requests
        </Button>
        <Button
          component={Link}
          to="./newrequest"
          sx={styles.button}
          variant="contained"
          color="primary"
        >
          Create New Request
        </Button>
      </Grid>
    </Box>
  );
}
