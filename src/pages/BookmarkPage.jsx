import React, { useState } from "react";
import Bookmarks from "../components/Bookmarks";
import DetailsModal from "../components/DetailsModal";
import { useBookmarks } from "../context/BookmarkContext";

const BookmarkPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  const handleDetailsModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Saved Articles</h1>
      <Bookmarks
        bookmarks={bookmarks}
        addBookmark={addBookmark}
        removeBookmark={removeBookmark}
        onToggleDetailsModal={handleDetailsModal}
      />
      {isModalOpen && (
        <DetailsModal article={selectedArticle} onClose={closeModal} />
      )}
    </div>
  );
};

export default BookmarkPage;
