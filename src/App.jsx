import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import SummaryPage from "./pages/SummaryPage";
import GrammarSpellingPage from "./pages/GrammarSpellingPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen min-w-screen text-gray-900">
        <Banner />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/grammar-spelling" element={<GrammarSpellingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
