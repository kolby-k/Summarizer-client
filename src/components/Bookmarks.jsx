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
        {bookmarks.length < 1 ? (
          <div className="text-center pt-6">
            <h2>Nothing here to show yet!</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Bookmarks;
