import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from "@mui/material/styles";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";

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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef",
    height: "60vh",
    padding: "2rem",
   
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, key: 1 },
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={mainContainerStyle}>
          <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          key={rows.id}
          experimentalFeatures={{ newEditingApi: true }}
        />
        <Button component={Link} to="./create" 
        variant="contained" 
        color="primary" 
        sx={{margin: "1em"}}> Create Campaign</Button> 
        <Button component={Link} to="./create/campdash" 
        variant="contained" 
        color="primary" 
        sx={{margin: "1em"}}> Existing Campaigns</Button> 
        </Container>
    </React.Fragment>
  );
}
