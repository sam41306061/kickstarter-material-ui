import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CampaignList from './CampaignList';

function LandingPage() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Open Campaigns
      </Typography>
      <CampaignList />
    </Box>
  );
}

export default LandingPage;
