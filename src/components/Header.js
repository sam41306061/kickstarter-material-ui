import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1 }}
        >
          CrowdCoin
        </Typography>
        <Button
          component={RouterLink}
          to="/campaigns"
          sx={{ mr: 2 }}
          color="inherit"
        >
          Campaigns
        </Button>
        <Button
          component={RouterLink}
          to="/campaigns/new"
          variant="contained"
          startIcon={<AddIcon />}
          color="secondary"
        >
          New Campaign
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
