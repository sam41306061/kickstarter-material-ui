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
import config from "./config.json";

// styling
import { ThemeProvider } from "@mui/material";


function App() {


  // connnect to web3, metamask and etherum test net 



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
