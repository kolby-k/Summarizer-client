import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { useSummary } from "../context/SummaryContext";
const SummaryCard = ({ article, showDetailsModal }) => {
  const { clearSummary, addBookmark, removeBookmark, bookmarks } = useSummary();
  const [isBookmarked, setIsBookmarked] = useState(null);

  if (!article) return null;

  const { summary, title, url } = article;

  useEffect(() => {
    if (Array.isArray(bookmarks))
      setIsBookmarked(bookmarks.some((bookmark) => bookmark.url === url));

    return () => setIsBookmarked(false);
  }, [bookmarks, url]);

  const sentences = summary
    .split("|")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);

  return (
    <div className="relative bg-slate-800 border border-zinc-700 shadow-2xl shadow-gray-500/20 rounded-lg h-auto w-auto py-8 mb-2 overflow-hidden">
      <div className="absolute right-4 top-4">
        {isBookmarked ? (
          <FaStar
            onClick={() => removeBookmark(article.url)}
            className="cursor-pointer"
            size={28}
            color="yellow"
          />
        ) : (
          <CiStar
            onClick={() => addBookmark(article)}
            className="cursor-pointer"
            size={28}
            color="gray"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 mt-4 justify-evenly items-center">
        <h2 className="text-3xl text-center font-medium">{title}</h2>
        <span className="border-b-[1px] border-gray-500 w-[30%] mt-2 mb-4 mx-auto"></span>
        <div className="w-[90%] mx-auto">
          {sentences.map((sentence, idx) => (
            <p key={idx} className="mb-6 text-[19px] font-normal">
              - {sentence}
            </p>
          ))}
        </div>
        <span className="flex w-full">
          <button
            onClick={() => showDetailsModal(article)}
            className="text-lg bg-blue-500 border border-blue-400 rounded-lg w-1/2 mx-auto py-3 text-slate-100 font-medium hover:bg-blue-400"
          >
            See More
          </button>
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
