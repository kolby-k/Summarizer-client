import React from "react";

const DetailsModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button onClick={onClose} className="mb-4">
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <p className="mb-4">
          <strong>URL:</strong>{" "}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {article.url}
          </a>
        </p>
        <p className="mb-4">
          <strong>Summary:</strong> {article.summary}
        </p>
        <p className="mb-4">
          <strong>Conclusion:</strong> {article.conclusion}
        </p>
        <p className="mb-4">
          <strong>Bias:</strong> {article.bias}
        </p>
        <p className="mb-4">
          <strong>Date:</strong> {new Date(article.date).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default DetailsModal;
