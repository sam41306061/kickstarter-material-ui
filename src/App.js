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
  loadCampaign
}from "./store/interactions";

// boilerplate materialui
import { ThemeProvider } from "@mui/material";




function App() {
  const dispatch = useDispatch();
  // load block chain
  const loadBlockchainData = async () => {
    await loadAccounts(dispatch);

    // connect ethers to the blockchain
    const provider = loadProvider(dispatch);
    const chainId = await loadNetwork(provider, dispatch);
    
    // campgain contract instance
    await loadCampaign(provider, config[chainId].campaign1.address, dispatch);
    // console.log(config[chainId].campaign1.address);
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
