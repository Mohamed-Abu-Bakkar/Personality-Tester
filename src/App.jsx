import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as SCThemeProvider } from "styled-components";

import Home from "./Home";
import Test from "./Test";
import Result from "./Result";

const queryClient = new QueryClient();

// (Optional) Define styled-components theme object
const theme = {
  colors: {
    primary: "#ff4d4d",
    secondary: "#0f172a",
  },
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SCThemeProvider theme={theme}>
      {/* Reset MUI + CSS defaults */}
      <CssBaseline />

      {/* Router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </SCThemeProvider>
  </QueryClientProvider>
);

export default App;
