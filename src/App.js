import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useDispatch } from "react-redux";


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
import CAMPAIGN_ABI from "./abis/Campaign.json";
import config from "./config.json";
import { ethers } from "ethers";



// import { 
//   loadProvider, 
//   loadNetwork, 
//   loadAccounts, 
//   loadCampaign 
// }from "./store/interactions";

// boilerplate materialui
import { ThemeProvider } from "@mui/material";
// import { ethers } from "hardhat";
// import { campaign } from "./store/reducers";


// remove later 
// const CAMPAIGN_ABI = [
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_minimumContribution",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address",
//         "name": "_manager",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_approvalCount",
//         "type": "uint256"
//       }
//     ],
//     "name": "approverRequest",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "approvers",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "approversCount",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "contribute",
//     "outputs": [],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_description",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address payable",
//         "name": "_recipient",
//         "type": "address"
//       }
//     ],
//     "name": "createRequest",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "index",
//         "type": "uint256"
//       }
//     ],
//     "name": "finalizeRequest",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "manager",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "minimumContribution",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "requests",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "id",
//         "type": "uint256"
//       },
//       {
//         "internalType": "string",
//         "name": "description",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address payable",
//         "name": "recipient",
//         "type": "address"
//       },
//       {
//         "internalType": "bool",
//         "name": "complete",
//         "type": "bool"
//       },
//       {
//         "internalType": "uint256",
//         "name": "approvalCount",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]





function App() {

  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts[0]);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork();
    console.log(chainId);

    const campaign = new ethers.Contract(
      config[chainId].campaign1.address,
      CAMPAIGN_ABI,
      provider
    );
    console.log(campaign.address);
    const manager = await campaign.manager();
    console.log(manager);
  };



  // const dispatch = useDispatch();
  // // load block chain
  // const loadBlockchainData = async () => {
  //   const account = await loadAccounts(dispatch);
  //   console.log(account);

  //   // connect ethers to the blockchain
  //  const provider = loadProvider(dispatch);
  //   const  chainId  = await loadNetwork(provider,dispatch);
  //   //console.log(chainId);

  //   // campgain contract instance
  //   await loadCampaign(provider, config[chainId],campaign.address, dispatch);
  //   console.log(campaign);

    
  //   const approversCount = await campaign.approversCount();
  //   console.log(approversCount);
  // };

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
