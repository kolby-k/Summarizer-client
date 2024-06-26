import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSummary } from "../context/SummaryContext";
const Banner = () => {
  const { user, logout } = useAuth();
  const { removeSummary } = useSummary();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    removeSummary();
    navigate("/");
  };

  return (
    <nav className="bg-blue-500 p-4 text-white px-8 sticky top-0">
      <ul className="flex space-x-4">
        <li>
          {!user ? (
            <Link to="/" className="hover:underline">
              Home
            </Link>
          ) : (
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          )}
        </li>
        {user && (
          <span className="absolute right-10 flex space-x-4">
            <li>
              <Link to="/summary" className="hover:underline">
                Article Summarizer
              </Link>
            </li>
            <li>
              <Link to="/bookmarks" className="hover:underline">
                Saved Articles
              </Link>
            </li>
          </span>
        )}
      </ul>
    </nav>
  );
};

export default Banner;
