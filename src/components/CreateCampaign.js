import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

export default function CreateCampaign() {
  const [minimumContribution, setMinimumContribution] = useState("");

  const handleMinimumContributionChange = (event) => {
    setMinimumContribution(event.target.value);
  };

  const handleCreateClick = () => {};

  const theme = useTheme();

  const mainContainerStyle = {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "2em",
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: "25vh",
    width: "100%",
    maxWidth: "400px",
    padding: "2em",
    marginTop: "2em",
  };

  return (
    <Container maxWidth="xl" sx={mainContainerStyle}>
      <Box sx={boxStyle}>
        <Typography variant="h5">Create a Campaign</Typography>
        <TextField
          id="minimum-contribution"
          label="Minimum Contribution (Wei)"
          value={minimumContribution}
          onChange={handleMinimumContributionChange}
          fullWidth
          sx={{ marginTop: "3em" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateClick}
          sx={{ marginTop: "1.75em", width: "12rem", background: "#87c442" }}
        >
          Create
        </Button>
      </Box>
    </Container>
  );
}
