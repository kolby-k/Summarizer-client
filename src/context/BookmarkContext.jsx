import React, { createContext, useContext, useState } from "react";

// Create a Context for Bookmarks
const BookmarkContext = createContext();

// Create a provider component
export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (article) => {
    setBookmarks([article, ...bookmarks]);
  };

  const removeBookmark = (articleUrl) => {
    setBookmarks(bookmarks.filter((article) => article.url !== articleUrl));
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

// Custom hook to use the BookmarkContext
export const useBookmarks = () => {
  return useContext(BookmarkContext);
};
