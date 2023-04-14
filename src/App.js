import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// ui components
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

// components
import LandingPage from "./components/LandingPage";
import CreateCampaign from "./components/CreateCampaign";

// boilerplate materialui
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateCampaign />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
