import React from "react";

// ui compoentns 
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

// pages


// boiler plate materialui
import { ThemeProvider } from "@mui/material";

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Header/>
  </ThemeProvider>
 
  );
}
export default App;
