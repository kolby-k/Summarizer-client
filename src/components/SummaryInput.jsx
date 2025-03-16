// src/components/SummaryInput.js
import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useSummary } from "../context/SummaryContext";

const SummaryInput = ({}) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { showSummary, bookmarks } = useSummary();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const existingBookmark = bookmarks.find(
      (bookmark) => bookmark.url === inputValue
    );

    if (existingBookmark) {
      showSummary(existingBookmark);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/summary/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: inputValue }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        console.error("Error in request: ", data);
        if (data.error === "Could not extract main article content") {
          throw new Error(
            "Sorry, the website you requested has prevented our tool from processing a summary. Please try again with a different website."
          );
        }
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const newSummary = {
        title: data.title,
        summary: data.summary,
        bias: data.bias,
        url: data.url,
        date: data.date,
        user_id: data.user_id,
      };
      showSummary(newSummary);
      setInputValue("");
    } catch (error) {
      setError("Error generating summary: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Enter the URL of the article you would like summarized:
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="URL Input"
          className="p-2 border-2 border-slate-300 rounded text-slate-700 w-[60%] self-center"
          placeholder="https://example.com"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="p-2 bg-blue-500 border border-blue-400 text-white rounded w-[25%] self-center hover:bg-blue-400 disabled:opacity-50"
        >
          Generate Summary
        </button>
      </form>
      {loading && <LoadingSpinner />}
      {error && (
        <p className="text-red-500 mt-6 text-lg text-center">{error}</p>
      )}
    </div>
  );
};

export default SummaryInput;
