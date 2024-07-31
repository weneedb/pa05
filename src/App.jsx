import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import Cover from "./views/Cover";
import smooth from "./utils/smooth";
import link from "./utils/link";

const App = () => {
  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/homeview/*" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
