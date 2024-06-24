// src/components/SummaryInput.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

const SummaryInput = ({ onSuccess }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/summary/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: inputValue }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      data.url = inputValue;
      onSuccess(data);
      setInputValue("");
    } catch (error) {
      setError("Error in fetching summary: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4">Enter a URL:</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="URL Input"
          className="p-2 border rounded"
          placeholder="https://example.com"
          required // Add required attribute for better UX
        />
        <button
          type="submit"
          disabled={loading}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Submit
        </button>
      </form>
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

SummaryInput.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default SummaryInput;
