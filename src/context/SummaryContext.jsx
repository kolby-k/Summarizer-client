import React, { createContext, useContext, useEffect, useState } from "react";

const SummaryContext = createContext();

export const SummaryProvider = ({ children }) => {
  const [currentSummary, setCurrentSummary] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const currentBookmarks = getBookmarks();
    setBookmarks(currentBookmarks);
  }, []);

  const showSummary = (article) => {
    setCurrentSummary(article);
  };

  const clearSummary = () => {
    setCurrentSummary(null);
  };

  const getBookmarks = () => {
    const bookmarksJSON = localStorage.getItem("bookmarks");
    return bookmarksJSON ? JSON.parse(bookmarksJSON) : [];
  };

  const addBookmark = (summary) => {
    setBookmarks((prevBookmarks) => {
      if (!prevBookmarks.some((bookmark) => bookmark.url === summary.url)) {
        const updatedBookmarks = [...prevBookmarks, summary];
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
      }
      return prevBookmarks;
    });
  };

  const removeBookmark = (url) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = prevBookmarks.filter(
        (bookmark) => bookmark.url !== url
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  return (
    <SummaryContext.Provider
      value={{
        currentSummary,
        showSummary,
        clearSummary,
        addBookmark,
        removeBookmark,
        bookmarks,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

export const useSummary = () => useContext(SummaryContext);
