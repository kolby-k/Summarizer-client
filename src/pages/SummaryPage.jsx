import React, { useState } from "react";
import SummaryInput from "../components/SummaryInput";
import SummaryCard from "../components/SummaryCard";

const SummaryPage = () => {
  const [summaryList, setSummaryList] = useState([]);

  const handleSummaryResponse = (response) => {
    const newSummary = {
      title: response.title,
      summary: response.content.summary,
      conclusion: response.content.conclusion,
      bias: response.content.bias,
      url: response.url,
      date: response.date,
      user_id: response.user_id,
    };
    setSummaryList((prev) => [newSummary, ...prev]);
  };
  console.log("summary state: ", JSON.stringify(summaryList));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Generate Summary with AI:</h1>
      <SummaryInput onSuccess={handleSummaryResponse} />
      <ul className="mt-6 space-y-4">
        {summaryList.map((summary, index) => (
          <SummaryCard
            key={index}
            title={summary.title}
            summary={summary.summary}
            conclusion={summary.conclusion}
            bias={summary.bias}
            url={summary.url}
            date={summary.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default SummaryPage;
