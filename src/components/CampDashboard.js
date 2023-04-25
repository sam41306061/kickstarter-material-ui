import * as React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Typography, Box, Paper, Grid, Button, TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: theme.spacing(8),
  color: theme.palette.text.secondary,
}));

export default function CampDashboad() {
  const theme = useTheme();
  const styles = {
    container: {
      flexGrow: 1,
      padding: theme.spacing(1),
      marginTop: theme.spacing(12),
      backgroundColor: theme.palette.background.default,
      textAlign: "center",
      justifyContent: "space-between",
    },

    leftContainer: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.default,
      textAlign: "center",
      boxShadow: "0px 0px 8px 0px #ccc",
      marginRight: theme.spacing(5),
      borderRadius: "10px",
      width: "50%",
      marginBottom: theme.spacing(2),
      height: 400,
      float: "left",
      "@media (max-width: 600px)": {
        width: "80%",
        marginLeft: "2em",
        justifyContent: "flex-start",

      },
    },
    rightContainer: {
      display: "flex",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.k,
      textAlign: "center",
      width: "40%",
      height: 450,
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 899px)": {
        width: "80%",
        marginLeft: "2em",
        justifyContent: "flex-start",
      },
      "@media (max-width: 600px)": {
        width: "80%",
        marginLeft: "2em",
        justifyContent: "flex-start",
      },
    },
    button: {
      marginTop: theme.spacing(2),
      width: "40%",
      fontSize: "1.1em",
      color: theme.palette.background.kickStarter,
      "@media (max-width: 899px)": {
        width: "80%",
        marginLeft: "2em",
        justifyContent: "flex-start",
      },
      "@media (max-width: 600px)": {
        width: "80%",
        marginLeft: "2em",
        justifyContent: "flex-start",
      },
    },
    title: {
      marginBottom: theme.spacing(2),
      fontSize: "2.5em",
    },
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftContainer}>
        <Typography sx={styles.title}>Title Here</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Typography>12.1</Typography>
              <Typography>Campaign Balance</Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography>100</Typography>
              <Typography>Minimum Contribution</Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography>3</Typography>
              <Typography>Pending Requests</Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography>Contributors</Typography>
              <Typography>300</Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={styles.button}>
              Veiw Details
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.rightContainer}>
        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={12}>
            <Typography sx={styles.title}>Contribute to this Campaign!</Typography>
            <TextField 
            id="outlined-number"
          label="$100:(50,000,000 gwei)"
          type="number"
          sx={{ width:"60%", marginTop: "1em"}}>
            </TextField>
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" sx={styles.button}>Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </Box> 
  );
}
