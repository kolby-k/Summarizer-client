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
      <h2 className="text-2xl text-center font-semibold my-2">
        Your Saved Articles
      </h2>
      <div className="flex flex-col max-w-[80%] h-full self-center">
        {bookmarks.map((bookmark) => (
          <BookmarkCard
            key={bookmark.url}
            title={bookmark.title}
            url={bookmark.url}
            summary={bookmark.summary}
            bias={bookmark.bias}
            date={bookmark.date}
            user_id={bookmark.user_id}
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
