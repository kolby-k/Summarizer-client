import React, { useState } from "react";
import SummaryInput from "../components/SummaryInput";
import SummaryCard from "../components/SummaryCard";
import { useSummary } from "../context/SummaryContext";
import { useBookmarks } from "../context/BookmarkContext";
import DetailsModal from "../components/DetailsModal";
import useProtectedRoute from "../hooks/useProtectedRoute";

const SummaryPage = () => {
  const { summary, addSummary } = useSummary();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  useProtectedRoute();

  const handleDetailsModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

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
      <h1 className="text-3xl text-center font-bold mb-6">
        Summarize Website Articles
      </h1>
      <SummaryInput onSuccess={handleSummaryResponse} />
      {summary ? (
        <div className="flex flex-col items-center justify-center mt-8 border-t border-zinc-600 pt-8">
          <p className="text-center text-2xl font-semibold mb-4">
            Current Summary
          </p>
          <SummaryCard
            title={summary.title}
            summary={summary.summary}
            isBookmarked={isBookmarked(summary.url)}
            addBookmark={() => addBookmark(summary)}
            removeBookmark={() => removeBookmark(summary.url)}
            toggleDetailsModal={() => handleDetailsModal(summary)}
          />
        </div>
      ) : (
        <div>
          <p className="mt-32 text-center">
            Please note that the server is hosted on a free instance of{" "}
            <a
              className="underline text-blue-400"
              href="https://docs.render.com/web-services"
              target="_blank"
            >
              Renders web service
            </a>
            . As a result, it may take up to 60 seconds to initialize the
            server. Therefore, your first request could take significantly
            longer, possibly up to 1-2 minutes.
          </p>
        </div>
      )}
      {selectedArticle && (
        <DetailsModal article={selectedArticle} onClose={closeModal} />
      )}
    </div>
  );
};

export default SummaryPage;
