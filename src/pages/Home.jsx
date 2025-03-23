import React from "react";
import { Link } from "react-router-dom";

const SignUpSignIn = () => (
  <section className="flex flex-col flex-1 justify-center items-center text-center bg-gradient-to-r from-blue-900 to-blue-600 border-[0.5px] border-blue-500 rounded-lg shadow-md mb-8">
    <h3 className="text-2xl md:text-3xl font-medium p-8">
      Sign Up to Get Started!
    </h3>
    <Link
      to="/sign-up"
      className="bg-blue-500 text-white text-xl px-20 py-3 rounded-lg hover:bg-blue-400 border-2 border-blue-800 transition"
    >
      Sign Up for Free
    </Link>
    <Link
      to="/sign-in"
      className="text-blue-300 hover:text-blue-200 text-base md:text-[18px] py-8 px-4 rounded  cursor-pointer transition"
    >
      Already have an account? Sign in here!
    </Link>
  </section>
);

const AboutSummarizer = () => (
  <section className="bg-gradient-to-r from-slate-900 to-slate-700 border-[0.5px] border-slate-600/50 p-6 rounded-lg shadow-md mb-8 cursor-default hover:scale-105 duration-300">
    <h3 className="text-2xl font-bold mb-4">
      Quick and Accurate Article Summaries
    </h3>
    <p className="mb-4 text-lg">
      Summarizer helps you quickly understand the key points of any online
      article. Just enter the URL, and in seconds, you'll get a clear, concise
      summary. Save time and streamline your reading with one click.
    </p>
  </section>
);

const HowItWorks = () => (
  <section className="bg-gradient-to-r from-slate-900 to-slate-800 border-[0.5px] border-slate-600/50 p-6 rounded-lg shadow-md mb-8 cursor-default  hover:scale-105 duration-300">
    <h3 className="text-xl font-bold mb-4">How it Works</h3>
    <p className="mb-4">
      When you enter a URL, Summarizer extracts and parses the main text from
      the article’s HTML. The content is then split into smaller sections for
      faster processing, with each section analyzed simultaneously by a trained
      language model.
    </p>
    <p className="mb-4">
      The model is instructed to detect potential bias, extracts key points, and
      generates a concise bullet-point summary for quick comprehension.
    </p>
  </section>
);

const WhoItsFor = () => (
  <section className="bg-gradient-to-r from-slate-800 to-slate-700 border-[0.5px] border-slate-600/50 p-6 rounded-lg shadow-md mb-8 cursor-default hover:scale-105 duration-300">
    <h3 className="text-xl font-bold mb-4">Why Summarizer?</h3>
    <p className="mb-4">
      I created Summarizer out of a personal passion for web development and
      artificial intelligence.
    </p>
    <p className="mb-4">
      With the growing accessibility of large language models like ChatGPT, I
      saw an opportunity to challenge myself by building a practical tool that
      integrates AI into a web app.
    </p>
  </section>
);

const Home = () => {
  return (
    <div className="p-2 rounded-xl h-full items-center flex flex-col">
      <div className="text-center py-2 mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome to <span className="underline">Summarizer</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-normal mb-4">
          Generate quick, accurate article summaries with just a single URL!
        </h2>
      </div>

      <div className="w-full max-w-6xl">
        <SignUpSignIn />
        <AboutSummarizer />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HowItWorks />
          <WhoItsFor />
        </div>
        <div className="w-full mx-auto ">
          <p className="text-slate-400 font-thin text-center text-sm">
            Note: This website is part of{" "}
            <a
              className="underline text-blue-500"
              target="_blank"
              href="https://kolbyk.ca/"
            >
              Kolby Klassen's
            </a>{" "}
            personal portfolio and is intended for demonstration purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
