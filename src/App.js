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
import config from "./config.json";

//redux imports
import { 
  loadProvider, 
  loadNetwork, 
  loadAccounts,
  loadCampaigns
}from "./store/interactions";

// boilerplate materialui
import { ThemeProvider } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  // load block chain
  const loadBlockchainData = async () => {
    
    // connect ethers to the blockchain
    const provider = loadProvider(dispatch);
    // Fetch current network's chainId (e.g. hardhat: 31337, kovan: 42)
    const chainId = await loadNetwork(provider, dispatch);

    // Reload page when network changes
    window.ethereum.on('chainChanged', () => {
      window.location.reload()
    });

  // Fetch current account & balance from Metamask when changed
    window.ethereum.on('accountsChanged', () => {
      loadAccounts(provider, dispatch)
    })

    // campgain contract instances
    const camp1 = config[chainId].campaign1;
    const camp2 = config[chainId].campaign2;
    const camp3 = config[chainId].campaign3;

    // load campaigns contracts 
    await loadCampaigns(provider,[camp1.address,camp2.address,camp3.address], dispatch);
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
