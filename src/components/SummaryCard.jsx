import React from "react";

const SummaryCard = ({ title, summary, conclusion, bias, url, date }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-semibold mb-4">{title}</h2>

      <p className="mb-6 text-lg font-medium">{summary}</p>

      <div className="flex justify-between mb-4">
        <div className="w-1/2 pr-2">
          <p className="text-md">
            <strong>Conclusion:</strong>
            <span className="block text-gray-700">{conclusion}</span>
          </p>
        </div>
        <div className="w-1/2 pl-2">
          <p className="text-md">
            <strong>Bias:</strong>
            <span className="block ">{bias}</span>
          </p>
        </div>
      </div>

      <span className="block">
        <p className="mt-8 text-sm">
          Summary Completed:{" "}
          {new Date(date).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}{" "}
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </span>

      <span className="">
        <p className="text-sm">
          Original Source:{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {url}
          </a>
        </p>
      </span>
    </div>
  );
};

export default SummaryCard;
