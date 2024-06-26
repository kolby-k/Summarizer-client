import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSummary } from "../context/SummaryContext";
import { BiSolidBookReader } from "react-icons/bi";
const Banner = () => {
  const { user, logout } = useAuth();
  const { removeSummary } = useSummary();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    removeSummary();
    navigate("/");
  };

  console.log(location.pathname);

  return (
    <nav className="bg-blue-600 p-4 text-slate-200 sticky top-0">
      <div className="flex justify-between items-centermb-2">
        {/* Left aligned items */}
        <div className="mt-2">
          {!user ? (
            <Link to="/" className="hover:underline">
              Home
            </Link>
          ) : (
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          )}
        </div>

        {/* Right aligned items */}
        {user && (
          <div className="flex mt-2 space-x-4">
            <Link
              to="/summary"
              className={`hover:underline ${
                location.pathname === "/summary" ? "font-bold" : null
              }`}
            >
              Article Summarizer
            </Link>
            <Link
              to="/bookmarks"
              className={`hover:underline ${
                location.pathname === "/bookmarks" ? "font-bold" : null
              }`}
            >
              Saved Articles
            </Link>
          </div>
        )}
      </div>

      {/* Centered items */}
      <Link to="/">
        <div className="absolute cursor-pointer left-1/2 top-2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="flex flex-col items-center justify-center">
            <BiSolidBookReader size={28} />
            <span className="font-thin text-sm ml-2 text-slate-200">
              Summarizer
            </span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Banner;
