import React from "react";

// ui compoentns 
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

// comp
// import CampaignList from './components/CampaignList';
import LandingPage from "./components/LandingPage";


// boiler plate materialui
import { ThemeProvider } from "@mui/material";

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Header/>
    <LandingPage></LandingPage>
  </ThemeProvider>

 
  );
}
export default App;
