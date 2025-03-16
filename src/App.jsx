import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import SummaryPage from "./pages/SummaryPage";
import BookmarkPage from "./pages/BookmarkPage";
import { AuthProvider } from "./context/AuthContext";
import { SummaryProvider } from "./context/SummaryContext";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import useHealthCheck from "./hooks/useHealthCheck";

function App() {
  const isRunning = useHealthCheck();
  console.log("Server health check: ", isRunning);

  return (
    <AuthProvider>
      <SummaryProvider>
        <Router>
          <div className="bg-slate-950 font-main text-slate-300 min-h-screen min-w-screen overflow-hidden">
            <Banner />
            <main className="container mx-auto p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/summary" element={<SummaryPage />} />
                <Route path="/bookmarks" element={<BookmarkPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </SummaryProvider>
    </AuthProvider>
  );
}

export default App;
