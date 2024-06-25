import React, { createContext, useContext, useState } from "react";

// Create a Context for summary
const SummaryContext = createContext();

// Create a provider component
export const SummaryProvider = ({ children }) => {
  const [summary, setSummary] = useState(null);

  const addSummary = (article) => {
    setSummary(article);
  };

  const removeSummary = () => {
    setSummary(null);
  };

  return (
    <SummaryContext.Provider value={{ summary, addSummary, removeSummary }}>
      {children}
    </SummaryContext.Provider>
  );
};

// Custom hook to use the SummaryContext
export const useSummary = () => {
  return useContext(SummaryContext);
};
