import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Error404 } from "./components";
import HomePage from "./pages/Home/HomePage";

import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
