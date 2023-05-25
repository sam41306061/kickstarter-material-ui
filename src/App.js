import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";


// ui components
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

// components
import LandingPage from "./components/LandingPage";
import CreateCampaign from "./components/CreateCampaign";
import CampDashboard from "./components/CampDashboard";
import PendingRequests from "./components/PendingRequests";
import CreateRequest from "./components/CreateRequests";

// ethers imports
// import CAMPAIGN_ABI from "./abis/Campaign.json";
import config from "./config.json";
// import { ethers } from "ethers";
import { 
  loadProvider, 
  loadNetwork, 
  loadAccounts, 
  loadCampaign 
}from "./store/interactions";

// boilerplate materialui
import { ThemeProvider } from "@mui/material";
import { campaign } from "./store/reducers";

function App() {
  const dispatch = useDispatch();
  // load block chain
  const loadBlockchainData = async () => {
    const account = await loadAccounts(dispatch);
    console.log(account);

    // connect ethers to the blockchain
   const provider = loadProvider(dispatch);
    const  chainId  = await loadNetwork(provider,dispatch);
    //console.log(chainId);

    // campgain contract instance
    await loadCampaign(provider, config[chainId],campaign.address, dispatch);
    console.log(campaign);

    
    const approversCount = await campaign.approversCount();
    console.log(approversCount);
  };

  useEffect(() => {
    loadBlockchainData();
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateCampaign />} />
          <Route path="/create/campdash" element={<CampDashboard />} />
          <Route
            path="/create/campdash/pending"
            element={<PendingRequests />}
          />
          <Route
            path="/create/campdash/newrequest"
            element={<CreateRequest />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
