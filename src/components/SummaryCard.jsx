import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
const SummaryCard = ({
  title,
  summary,
  isBookmarked,
  addBookmark,
  removeBookmark,
  toggleDetailsModal,
}) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  useEffect(() => {
    setBookmarked(isBookmarked);
  }, [isBookmarked]);

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark();
    } else {
      addBookmark();
    }
    setBookmarked(!bookmarked);
  };

  return (
    <div className="bg-slate-400/30 border border-zinc-700 rounded-lg h-auto w-auto p-2 mb-2">
      <div className="flex justify-end mr-2 -mb-4">
        {isBookmarked ? (
          <FaStar
            onClick={handleBookmark}
            className="cursor-pointer"
            size={28}
            color="yellow"
          />
        ) : (
          <CiStar
            onClick={handleBookmark}
            className="cursor-pointer"
            size={28}
            color="yellow"
          />
        )}
      </div>
      <div className="p-4 flex-col items-start">
        <h2 className="text-2xl text-center font-semibold mb-4">{title}</h2>
        <p className="mb-6 text-md font-normal">{summary}</p>
        <span className="flex justify-center">
          <button
            onClick={toggleDetailsModal}
            className="text-md bg-blue-500 border border-blue-400 rounded-lg px-4 py-2 text-slate-100 font-semibold hover:bg-blue-600"
          >
            See More
          </button>
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
