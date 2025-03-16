import React, { useState } from "react";
import Bookmarks from "../components/Bookmarks";
import DetailsModal from "../components/DetailsModal";
import useProtectedRoute from "../hooks/useProtectedRoute";
import { useSummary } from "../context/SummaryContext";

const BookmarkPage = () => {
  const [detailModalContent, setDetailModalContent] = useState(null);
  const { bookmarks } = useSummary();

  useProtectedRoute();

  const handleShowDetailsModal = (summary) => {
    setDetailModalContent(summary);
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-6">Saved Articles</h1>
      <Bookmarks
        bookmarks={bookmarks}
        showDetailsModal={handleShowDetailsModal}
      />
      {detailModalContent && (
        <DetailsModal
          article={detailModalContent}
          onClose={() => setDetailModalContent(null)}
        />
      )}
    </div>
  );
};

export default BookmarkPage;
