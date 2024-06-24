import React, { useState, useEffect } from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  const [secondsLeft, setSecondsLeft] = useState(9);
  const [showExtendedMessage, setShowExtendedMessage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    const extendedMessageTimer = setTimeout(() => {
      setShowExtendedMessage(true);
    }, 9000);

    return () => {
      clearInterval(timer);
      clearTimeout(extendedMessageTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center fixed inset-0 z-50 bg-slate-800 bg-opacity-80">
      <div className="flex space-x-5">
        <div className="w-6 h-6 bg-green-600 rounded-full animate-bounce-and-size"></div>
        <div
          className="w-8 h-8 bg-green-600 rounded-full animate-bounce-and-size"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-10 h-10 bg-green-600 rounded-full animate-bounce-and-size"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
      <h2 className="mt-8 text-xl text-green-500 font-mono">
        Summarizing Article
      </h2>
      <h2 className="mt-2 text-lg text-green-500 font-mono">
        {secondsLeft} seconds remaining ..
      </h2>
      {showExtendedMessage && (
        <h2 className="mt-6 text-md text-yellow-500 font-mono">
          Nearly complete, please wait a moment
        </h2>
      )}
    </div>
  );
};

export default LoadingSpinner;
