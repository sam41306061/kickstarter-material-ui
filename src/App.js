import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ui components
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

// components
import LandingPage from "./components/LandingPage";
import CreateCampaign from "./components/CreateCampaign";
import CampDashboard from "./components/CampDashboard";
import PendingRequests from "./components/PendingRequests";
import CreateRequest from "./components/CreateRequests";

// redux related imports
import { useDispatch } from "react-redux";
import * as ethers from "ethers";
import config from "./config";

// styling
import { ThemeProvider } from "@mui/material";


function App() {
  const dispatch = useDispatch();

  // connnect to web3, metamask and etherum test net 

  const loadBlockchainData = async () => {
    // load account
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts[0]);

    // connect ethers to blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    store.dispatch({type:'PROVIDER_LOADED', connection: provider})
    const {childId} = await provider.getNetwork();
    console.log(childId);

    // campagin smart contract
    const campaignContract = new ethers.Contract(config[childId].campaignContractAddress, config[childId].campaignContractABI, provider);
    console.log(campaignContract);
  }
  useEffect(() => {
    loadBlockchainData();
  });


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateCampaign />}/>
          <Route path="/create/campdash" element={<CampDashboard />} />
          <Route path="/create/campdash/pending" element={<PendingRequests />} />
          <Route path="/create/campdash/newrequest" element={<CreateRequest />} />


        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
