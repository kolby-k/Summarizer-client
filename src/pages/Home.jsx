import React from "react";
import { Link } from "react-router-dom";

const SignUpSignIn = () => (
  <section className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-blue-500 border-[0.5px] border-blue-400 p-6  rounded-lg shadow-md mb-8">
    <h3 className="text-2xl font-bold mb-4 text-center">
      Sign Up to Get Started!
    </h3>
    <Link
      to="/sign-up"
      className="bg-blue-800 text-white px-12 py-2 rounded hover:bg-blue-500 border border-blue-800 transition mb-4"
    >
      Sign Up
    </Link>
    <Link
      to="/sign-in"
      className="text-blue-400 px-4 py-2 rounded hover:text-blue-300 cursor-pointer transition"
    >
      Already have an account? Sign in here!
    </Link>
  </section>
);

const AboutSummarizer = () => (
  <section className="bg-gradient-to-r from-slate-900 to-slate-700 border-[0.5px] border-slate-600/50 p-6 rounded-lg shadow-md mb-8 cursor-default hover:scale-105 duration-300">
    <h3 className="text-xl font-bold mb-4">About Summarizer</h3>
    <p className="mb-4">
      Welcome to Summarizer, your efficient tool for quickly grasping the core
      ideas of any online article. Just enter the URL of the article, and within
      seconds, you'll receive an accurate and concise summary. Simplify your
      reading experience with just one click!
    </p>
  </section>
);

const HowItWorks = () => (
  <section className="bg-gradient-to-r from-slate-900 to-slate-800 border-[0.5px] border-slate-600/50 p-6 rounded-lg shadow-md mb-8 cursor-default  hover:scale-105 duration-300">
    <h3 className="text-xl font-bold mb-4">How it Works</h3>
    <p className="mb-4">
      When you provide a URL, a server will process the HTML content of the
      page, extracting the main body of text. This text is then sent to a
      trained language model that analyzes it and generates a concise summary.
      To handle multiple requests efficiently, I use worker threads in Node.js,
      which allows concurrent processing without blocking the main event loop.
      Each request is processed in its own thread, ensuring independent handling
      for a quicker over all response.
    </p>
  </section>
);

const WhoItsFor = () => (
  <section className="bg-gradient-to-r from-slate-800 to-slate-700 border-[0.5px] border-slate-600/50 p-6 rounded-lg shadow-md mb-8 cursor-default hover:scale-105 duration-300">
    <h3 className="text-xl font-bold mb-4">Who it's For</h3>
    <p className="mb-4">
      Summarizer is a handy tool created to help a wide range of users. Whether
      you’re a student juggling multiple assignments, a professional needing
      quick insights, or an avid reader trying to stay up-to-date, Summarizer
      makes it easy. It delivers concise summaries that help you save time and
      quickly understand the main points of long articles. This project
      highlights my ability to develop efficient and user-friendly applications,
      demonstrating my skills in backend development and concurrent processing
      with Node.js.
    </p>
  </section>
);

const Home = () => {
  return (
    <div className="p-6 rounded-xl h-full flex gap-10 flex-col items-center">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold mb-2">
          Welcome to <span className="underline">Summarizer</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Generate quick, accurate article summaries with just a single URL!
        </h2>
      </header>

      <main className="w-full max-w-6xl">
        <SignUpSignIn />
        <AboutSummarizer />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HowItWorks />
          <WhoItsFor />
        </div>
      </main>
    </div>
  );
};

export default Home;
