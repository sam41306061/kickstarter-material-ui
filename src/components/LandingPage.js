import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CampaignList from './CampaignList';
import { Container } from '@mui/system';

function LandingPage() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Landing Page!!!!
      </Typography>
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
      <CampaignList />
    </Box>
  );
}

export default LandingPage;
