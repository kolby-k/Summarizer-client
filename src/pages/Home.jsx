import React from "react";
import { Link } from "react-router-dom";

const SignUpSignIn = () => (
  <section className="flex flex-col h-[25vh] justify-center gap-4 items-center bg-gradient-to-r from-blue-900 to-blue-600 border-[0.5px] border-blue-500 rounded-lg shadow-md mb-8">
    <h3 className="text-4xl font-semibold mb-4 text-center">
      Sign Up to Get Started!
    </h3>
    <Link
      to="/sign-up"
      className="bg-blue-500 text-white text-xl px-20 py-3 rounded-lg hover:bg-blue-400 border-2 border-blue-800 transition mb-4"
    >
      Sign Up
    </Link>
    <Link
      to="/sign-in"
      className="text-blue-300 hover:text-blue-200 text-[18px] px-4 py-2 rounded  cursor-pointer transition"
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
    <div className="p-6 rounded-xl h-full flex flex-col items-center">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold mb-2">
          Welcome to <span className="underline">Summarizer</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Generate quick, accurate article summaries with just a single URL!
        </h2>
      </div>

      <div className="w-full max-w-6xl">
        <SignUpSignIn />
        <AboutSummarizer />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HowItWorks />
          <WhoItsFor />
          <div className="flex w-[50vw]">
            <p className="text-slate-400 font-thin text-sm">
              Note: This website is part of{" "}
              <a
                className="underline"
                target="_blank"
                href="https://kolby-k.netlify.app/"
              >
                Kolby Klassen's
              </a>{" "}
              personal portfolio and is intended for demonstration purposes
              only. Consequently, the sign-up functionality is disabled, and
              access is available using a test account for login.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
