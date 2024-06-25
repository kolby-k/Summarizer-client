import React, { useState, useEffect } from "react";
import { CiBookmarkPlus, CiBookmarkMinus } from "react-icons/ci";

const BookmarkCard = ({
  title,
  url,
  summary,
  bias,
  date,
  isBookmarked,
  addBookmark,
  removeBookmark,
  toggleDetailsModal,
}) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  console.log("Is bookmakred? ", isBookmarked, title);
  useEffect(() => {
    console.log("Is bookmakred2? ", isBookmarked, title);
    setBookmarked(isBookmarked);
    console.log("Is bookmakred3? ", isBookmarked, title);
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
        {bookmarked ? (
          <CiBookmarkMinus
            onClick={handleBookmark}
            className="cursor-pointer"
            size={28}
            color="red"
          />
        ) : (
          <CiBookmarkPlus
            onClick={handleBookmark}
            className="cursor-pointer"
            size={28}
            color="green"
          />
        )}
      </div>
      <div className="p-4 flex-col items-start">
        <h2 className="text-xl text-center font-semibold mb-4">{title}</h2>
        <p className="mb-6 text-md font-medium">
          <strong>Summary: </strong>
          {summary}
        </p>
        <span className="flex justify-center">
          <button
            onClick={toggleDetailsModal}
            className="text-md border-black bg-blue-700/80 rounded-lg px-4 py-2 text-slate-100 font-semibold"
          >
            See More
          </button>
        </span>
      </div>
    </div>
  );
};

export default BookmarkCard;
