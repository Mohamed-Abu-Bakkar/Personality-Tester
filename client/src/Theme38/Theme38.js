// src/themes/Theme38/Theme38.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalThemeStyle } from "./style";

// Components
import Theme38Home from "./Theme38Home";
import Theme38Test from "./Theme38Test";
import Theme38Result from "./Theme38Result";
import Theme38NotFound from "./Theme38NotFound";

const Theme38 = () => {
  return (
    <>
      <GlobalThemeStyle />
      <Routes>
        <Route path="/" element={<Theme38Home />} />
        <Route path="/test" element={<Theme38Test />} />
        <Route path="/result" element={<Theme38Result />} />
        <Route path="*" element={<Theme38NotFound />} />
      </Routes>
    </>
  );
};

export default Theme38;
