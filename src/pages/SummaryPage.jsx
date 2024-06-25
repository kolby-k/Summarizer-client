import React, { useState, useEffect } from "react";
import SummaryInput from "../components/SummaryInput";
import SummaryCard from "../components/SummaryCard";
import { useSummary } from "../context/SummaryContext";
import { useBookmarks } from "../context/BookmarkContext";

const SummaryPage = () => {
  const { summary, addSummary } = useSummary();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  const handleSummaryResponse = (response) => {
    const newSummary = {
      title: response.title,
      summary: response.content.summary,
      conclusion: response.content.conclusion,
      bias: response.content.bias,
      url: response.url,
      date: response.date,
      user_id: response.user_id,
    };
    addSummary(newSummary);
  };

  const isBookmarked = (url) =>
    bookmarks.some((bookmark) => bookmark.url === url);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Summarize Website Articles:</h1>
      <SummaryInput onSuccess={handleSummaryResponse} />
      {summary && (
        <>
          <h2 className="text-2xl font-bold mt-6 mb-4">Previous Summary</h2>
          <SummaryCard
            title={summary.title}
            summary={summary.summary}
            conclusion={summary.conclusion}
            bias={summary.bias}
            url={summary.url}
            date={summary.date}
            isBookmarked={isBookmarked(summary.url)}
            addBookmark={() => addBookmark(summary)}
            removeBookmark={() => removeBookmark(summary.url)}
          />
        </>
      )}
    </div>
  );
};

export default SummaryPage;
