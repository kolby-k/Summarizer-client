import React, { useState } from "react";
import "./App.css";
import SummaryInput from "./components/SummaryInput";

function App() {
  const [summaryList, setSummaryList] = useState([]);

  const handleSummaryResponse = (response) => {
    // Assuming the response contains a `summary` field
    const summaryText = response.summary;
    setSummaryList((prev) => [summaryText, ...prev]);
  };

  return (
    <>
      <div>
        <h1>Generate Summary with AI:</h1>
        <SummaryInput onSuccess={handleSummaryResponse} />
        <ul>
          {summaryList.map((summary, index) => (
            <li key={index}>{summary}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
