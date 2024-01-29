import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <>
      <h1>Sustituir esto por un navbar</h1>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};
