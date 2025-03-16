import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const DetailsModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed pb-20 inset-0 bg-slate-700/90 flex justify-center items-center">
      <div className="relative border-[0.5px] border-slate-800 bg-slate-900 text-slate-300 font-light p-6 rounded-lg shadow-lg max-w-4xl max-h-[95%] overflow-y-auto mx-4 px-8">
        <IoMdCloseCircle
          onClick={onClose}
          className="absolute top-3 right-4 mb-4 cursor-pointer text-lg md:text-3xl"
          color="#817D82"
        />

        <h2 className="text-2xl md:text-3xl font-semibold py-4 text-center">
          Additional Information
        </h2>
        <p className="md:mb-2 text-lg md:text-2xl font-medium text-gray-100">
          Bias Analysis:
        </p>
        <p className="mb-8 md:text-lg font-normal text-gray-300">
          {article.bias}
        </p>
        <p className="mb-1 font-light text-sm md:text-base text-gray-400">
          Created Time: {new Date(article.date).toLocaleString()}
        </p>
        <p className="mb-2 font-light text-sm md:text-base text-gray-400">
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
