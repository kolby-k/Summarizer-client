import React, { useState } from "react";
import SummaryInput from "../components/SummaryInput";
import SummaryCard from "../components/SummaryCard";
import { useSummary } from "../context/SummaryContext";
import DetailsModal from "../components/DetailsModal";
import useProtectedRoute from "../hooks/useProtectedRoute";
import Examples from "../components/Examples";

const SummaryPage = () => {
  const { currentSummary } = useSummary();
  const [detailModalContent, setDetailModalContent] = useState(null);
  const [exampleUrl, setExampleUrl] = useState("");

  useProtectedRoute();

  const showDetailsModal = (article) => {
    setDetailModalContent(article);
  };

  return (
    <div className="flex flex-col">
      <span className="flex flex-col justify-center">
        <h1 className="text-3xl text-center font-bold pt-4 mb-2">
          Summarize Website Articles
        </h1>
        <h2 className="text-lg md:text-xl font-normal leading-[1.2] mb-10 text-center">
          Enter the URL of an article to summarize
        </h2>
      </span>
      <SummaryInput
        exampleUrl={exampleUrl}
        resetExample={() => setExampleUrl("")}
      />
      {currentSummary && (
        <div className="flex flex-col items-center justify-center mt-8 border-t border-zinc-600 pt-8">
          <p className="text-center text-2xl font-semibold mb-4">
            Current Summary
          </p>
          <SummaryCard
            article={currentSummary}
            showDetailsModal={showDetailsModal}
          />
        </div>
      )}

      <Examples setExample={setExampleUrl} activeExampleUrl={exampleUrl} />
      <div className="w-full text-sm  font-thin">
        <p className="mt-32 text-center">
          The server is hosted on a{" "}
          <a
            className="underline text-blue-400"
            href="https://docs.render.com/web-services"
            target="_blank"
          >
            free Render instance
          </a>
          , which may cause the initial request to take longer due to server
          startup delays.
        </p>
      </div>
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
