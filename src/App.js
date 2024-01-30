import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Header/Home";
import Shop from "./Header/Shop";
import Blog from "./Header/Blog";
import About from "./Header/About";
import Contact from "./Header/Contact";
import Pages404 from "./pages/page404";
import Layout from "./Component/Layout";
import { Navbar } from "react-bootstrap";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/*" element={<Pages404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
