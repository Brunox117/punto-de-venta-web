import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <h1>Sustituir esto por un navbar</h1>
      <h2>Bruno branch</h2>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};
