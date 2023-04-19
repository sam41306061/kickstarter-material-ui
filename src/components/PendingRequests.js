import * as React from 'react';

// comp
import { Typography, Box, Container, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

// styles
import { useTheme } from '@mui/material/styles';

// column data 
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
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
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  
];

export default function PendingRequests() {
  const theme = useTheme();
  const styles = {
    root: {
      marginTop: "8em",
      [theme.breakpoints.down("md")]: {
        marginTop: "3em",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "2em",
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      height: "60vh",
      padding: "2rem",
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
    },
    button: {
      marginLeft: theme.spacing(2),
    },
  }


  return (
    <Container sx={styles.root}>
      <Box sx={{ width: '100%'}}>
        <Typography variant="h4" component="h1" sx={styles.title}>
          Pending Requests
        </Typography>
        <Button component={Link} to="/create/campdash/newrequest" variant="contained" color="primary">
          Add Request
        </Button>
        <Box>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </Container>
  );
}
