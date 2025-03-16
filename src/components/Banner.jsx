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
        <div className="sticky top-0 w-[100vw] bg-slate-900 border-b-white border-b-2">
          <p className="text-center p-2">
            Summarizer is a demo web application created by{" "}
            <a href="https://kolbyk.ca" className="underline text-blue-400">
              Kolby Klassen
            </a>
          </p>
          <button
            className="absolute right-10 top-[25%] text-sm font-thin cursor-pointer"
            onClick={() => {
              sessionStorage.setItem("hide-banner", "true");
              setShowBanner(false);
              return;
            }}
          >
            <IoIosCloseCircleOutline size={20} />
          </button>
        </div>
      )}
      <nav className="bg-blue-600 p-4 text-slate-200 sticky top-0">
        <div className="flex justify-between items-centermb-2">
          {/* Left aligned items */}
          <div className="mt-2">
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
    </>
  );
};

export default Banner;
