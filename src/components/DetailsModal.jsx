import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const parseConclusion = (conclusion) => {
  // Split the conclusion string into an array of bullet points
  return conclusion
    .split("\n")
    .map((point) => point.substring(1).trim())
    .filter((point) => point.length > 0);
};

const DetailsModal = ({ article, onClose }) => {
  if (!article) return null;

  const bulletPoints = parseConclusion(article.conclusion);

  return (
    <div className="fixed pb-20 inset-0 bg-slate-700/90 flex justify-center items-center">
      <div className="relative border-[0.5px] border-slate-800 bg-slate-900 text-slate-300 font-light p-6 rounded-lg shadow-lg max-w-4xl max-h-[85%] overflow-y-auto px-8">
        <IoMdCloseCircle
          onClick={onClose}
          className="absolute top-3 right-4 mb-4 cursor-pointer"
          size={24}
          color="#817D82"
        />

        <h2 className="text-xl font-bold mb-2 py-3 text-center">
          Additional Information about this Article:
        </h2>

        <p className="mb-1">
          <strong className="relative group cursor-help font-semibold">
            TLDR:
            <span className="absolute bottom-full left-16 transform -translate-x-1/2 mb-2 w-36 p-2 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Too Long, Didn't Read
            </span>
          </strong>
        </p>
        <ul className="mb-8 ml-6 list-disc list-inside">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className="mb-8">
          <strong className="font-semibold">Bias?</strong> {article.bias}
        </p>
        <p className="mb-1 font-extralight text-sm">
          Created Time: {new Date(article.date).toLocaleString()}
        </p>
        <p className="mb-2 font-extralight text-sm">
          Original Source:{" "}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {article.url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default DetailsModal;
