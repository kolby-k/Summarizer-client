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
        <h2 className="text-2xl text-center font-semibold mb-4">{title}</h2>
        <p className="mb-6 text-lg font-medium">
          <strong>Summary: </strong>
          {summary}
        </p>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 pr-2">
            <p className="text-md">
              <strong>TLDR:</strong>
              <span className="block text-gray-700">{conclusion}</span>
            </p>
          </div>
          <div className="w-1/2 pl-2">
            <p className="text-md">
              <strong>Bias:</strong>
              <span className="block ">{bias}</span>
            </p>
          </div>
        </div>
        <span className="block">
          <p className="mt-8 text-sm">
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
        </span>
        <span className="">
          <p className="text-sm">
            Original Source:{" "}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {url}
            </a>
          </p>
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
