import React from "react";
import BookmarkCard from "./BookmarkCard";

const Bookmarks = ({
  bookmarks,
  addBookmark,
  removeBookmark,
  onToggleDetailsModal,
}) => {
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex flex-col w-full h-full self-center gap-2">
        {bookmarks.map((bookmark) => (
          <BookmarkCard
            key={bookmark.url}
            title={bookmark.title}
            summary={bookmark.summary}
            isBookmarked={true}
            addBookmark={() => addBookmark(bookmark)}
            removeBookmark={() => removeBookmark(bookmark.url)}
            toggleDetailsModal={() => onToggleDetailsModal(bookmark)}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
