import React, { useState } from "react";

const SummaryInput = ({ onSuccess }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_SERVER_URL}/api/summary/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => onSuccess(data))
      .catch((error) => {
        console.error("Error in fetching summary: " + error);
      });
  };

  return (
    <div>
      <h2>Enter a URL:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SummaryInput;
