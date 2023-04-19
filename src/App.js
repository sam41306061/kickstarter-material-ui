import React from "react";
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





// boilerplate materialui
import { ThemeProvider } from "@mui/material";

function App() {
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
