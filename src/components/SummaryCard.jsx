import React, { useState, useEffect } from "react";
import { CiBookmarkPlus, CiBookmarkMinus } from "react-icons/ci";

const SummaryCard = ({
  title,
  summary,
  conclusion,
  bias,
  url,
  date,
  isBookmarked,
  addBookmark,
  removeBookmark,
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
    <div className="bg-gray-700 border border-gray-500 text-gray-200 rounded-lg p-4 mb-4 shadow-lg">
      <div className="flex justify-end -mt-2">
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
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <p className="text-lg">
          <strong>Summary:</strong> {summary}
        </p>
        <div className="flex justify-between">
          <div className="w-1/2 pr-2">
            <p className="text-md">
              <strong>TLDR:</strong> {conclusion}
            </p>
          </div>
          <div className="w-1/2 pl-2">
            <p className="text-md">
              <strong>Bias:</strong> {bias}
            </p>
          </div>
        </div>
        <p className="text-sm">
          Summary Completed:{" "}
          {new Date(date).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}{" "}
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="text-sm">
          Original Source:{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
