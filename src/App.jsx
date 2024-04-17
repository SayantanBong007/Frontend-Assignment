import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Metrics from "./pages/Metrics";
import Logs from "./pages/Logs";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {" "}
        {/* Use Routes component to define routing */}
        <Route path="/" element={<Metrics />} /> {/* Use 'element' prop */}
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </div>
  );
}

export default App;
