import React from "react";
import SummaryCard from "./SummaryCard";

const Bookmarks = ({ showDetailsModal, bookmarks }) => {
  return (
    <div className="flex flex-col h-full md:p-4">
      <div className="flex flex-col w-full h-full self-center gap-8">
        {bookmarks.map((bookmark) => (
          <SummaryCard
            key={bookmark.url}
            article={bookmark}
            showDetailsModal={() => showDetailsModal(bookmark)}
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
