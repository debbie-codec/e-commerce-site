import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/indexpages/Home";
import NewArrivals from "./pages/indexpages/NewArrivals";
import BestSellers from "./pages/indexpages/BestSellers";
import Sale from "./pages/indexpages/Sale";
import Collections from "./pages/indexpages/Collections";
import Shop from "./pages/indexpages/Shop";
import About from "./pages/indexpages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;