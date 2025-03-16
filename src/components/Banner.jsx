import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSummary } from "../context/SummaryContext";
import { BiSolidBookReader } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Banner = () => {
  const { user, logout } = useAuth();
  const { removeSummary } = useSummary();
  const navigate = useNavigate();
  const location = useLocation();
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const hideBanner = sessionStorage.getItem("hide-banner");
    if (hideBanner === "true") {
      setShowBanner(false);
    }
  }, []);

  const handleLogout = () => {
    logout();
    removeSummary();
    navigate("/");
  };

  return (
    <>
      {showBanner && (
        <div className="sticky top-0 w-full bg-slate-900 border-b border-white">
          <div className="p-2 text-center text-sm">
            Summarizer is a demo web application created by{" "}
            <a href="https://kolbyk.ca" className="underline text-blue-400">
              Kolby Klassen
            </a>
          </div>
          <button
            className="block md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 text-red-400 cursor-pointer text-sm p-2"
            onClick={() => {
              sessionStorage.setItem("hide-banner", "true");
              setShowBanner(false);
            }}
          >
            Hide <IoIosCloseCircleOutline size={20} className="inline ml-1" />
          </button>
        </div>
      )}
      <nav className="bg-blue-600 p-2 text-slate-200 sticky top-0">
        <div className="flex flex-col md:flex-row px-2 md:px-4 justify-between items-center">
          {/* Left section: Login/Logout and Logo */}
          <div className="w-full flex justify-between items-center">
            {/* Centered logo is now part of the flex container */}
            <Link to="/" className="flex flex-col items-center">
              <BiSolidBookReader size={28} />
              <span className="font-thin text-sm text-slate-200">
                Summarizer
              </span>
            </Link>
            {user ? (
              <button onClick={handleLogout} className="hover:underline">
                Logout
              </button>
            ) : (
              <Link to="/sign-in">
                <button className="hover:underline">Login</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
      {user && (
        <div className="h-10 flex flex-row justify-center items-center gap-4 md:gap-8 text-gray-900 bg-blue-200">
          <Link
            to="/summary"
            className={`mt-1 hover:underline ${
              location.pathname === "/summary" ? "font-semibold" : ""
            }`}
          >
            Summarize Article
          </Link>
          <Link
            to="/bookmarks"
            className={`mt-1 hover:underline ${
              location.pathname === "/bookmarks" ? "font-semibold" : ""
            }`}
          >
            View Bookmarks
          </Link>
        </div>
      )}
    </>
  );
};

export default Banner;
