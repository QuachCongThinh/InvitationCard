import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Confirm from "./components/ConfirmAttendance";
import Layout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </Router>
  );
}

export default App;
