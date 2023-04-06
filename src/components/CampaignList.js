import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from "@mui/material/styles";

export default function CampaignList() {
  const theme = useTheme();
  const mainContainerStyle = {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  };
  const columns = [
    {feild: 'id', headerName:'Open Campaigns', width: 90},
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ]
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={mainContainerStyle}>
        <Box sx={{ bgcolor: "#efefef", height: "100vh" }}> 
          <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
        
      </Container>
    </React.Fragment>
  );
}
