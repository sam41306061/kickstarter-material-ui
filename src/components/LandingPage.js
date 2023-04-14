import React from 'react';
import Box from '@mui/material/Box';
import CampaignList from './CampaignList';
import { Container } from '@mui/system';

function LandingPage() {
  return (
    <Box sx={{ mt: 4 }}>
      <Container>
        <Box>
          <CampaignList></CampaignList>
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;
