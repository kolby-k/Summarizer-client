import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/summary" className="hover:underline">
            Summary Tool
          </Link>
        </li>
        <li>
          <Link to="/grammar-spelling" className="hover:underline">
            Grammar and Spelling Tool
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Banner;
