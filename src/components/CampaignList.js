import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Button from '@mui/material/Button';
import { getCampaigns } from '../api/campaigns';

function CampaignList() {
  const [campaigns, setCampaigns] = React.useState([]);

  React.useEffect(() => {
    async function fetchCampaigns() {
      const campaigns = await getCampaigns();
      setCampaigns(campaigns);
    }

    fetchCampaigns();
  }, []);

  return (
    <List>
      {campaigns.map((campaign) => (
        <ListItem
          key={campaign.id}
          button
          component={RouterLink}
          to={`/campaigns/${campaign.id}`}
        >
          <ListItemText
            primary={campaign.title}
            secondary={`Goal: ${campaign.goal} ETH`}
          />
          <ListItemSecondaryAction>
            <Button
              component={RouterLink}
              to={`/campaigns/${campaign.id}`}
              color="primary"
            >
              View
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default CampaignList;
