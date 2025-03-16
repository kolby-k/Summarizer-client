import React, { useState } from "react";
import SummaryInput from "../components/SummaryInput";
import SummaryCard from "../components/SummaryCard";
import { useSummary } from "../context/SummaryContext";
import DetailsModal from "../components/DetailsModal";
import useProtectedRoute from "../hooks/useProtectedRoute";

const SummaryPage = () => {
  const { currentSummary } = useSummary();
  const [detailModalContent, setDetailModalContent] = useState(null);

  useProtectedRoute();

  const showDetailsModal = (article) => {
    setDetailModalContent(article);
  };

  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold pt-4 mb-8">
        Summarize Website Articles
      </h1>
      <SummaryInput />
      {currentSummary ? (
        <div className="flex flex-col items-center justify-center mt-8 border-t border-zinc-600 pt-8">
          <p className="text-center text-2xl font-semibold mb-4">
            Current Summary
          </p>
          <SummaryCard
            article={currentSummary}
            showDetailsModal={showDetailsModal}
          />
        </div>
      ) : (
        <div className="w-full text-sm absolute bottom-10 left-1/2 -translate-x-1/2 font-thin">
          <p className="mt-32 text-center">
            Note: The backend server is hosted on a{" "}
            <a
              className="underline text-blue-400"
              href="https://docs.render.com/web-services"
              target="_blank"
            >
              free Render instance
            </a>
            , so the initial request might take longer due to server startup
            delays.
          </p>
        </div>
      )}
      {detailModalContent && (
        <DetailsModal
          article={detailModalContent}
          onClose={() => setDetailModalContent(null)}
        />
      )}
    </div>
  );
};

export default SummaryPage;
