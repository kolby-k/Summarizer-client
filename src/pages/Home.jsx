import React from "react";
import { Link } from "react-router-dom";

const SignUpSignIn = () => (
  <section className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-blue-600 border-[0.5px] border-blue-500 p-6  rounded-lg shadow-md mb-8">
    <h3 className="text-2xl font-bold mb-4 text-center">
      Sign Up to Get Started!
    </h3>
    <Link
      to="/sign-up"
      className="bg-blue-500 text-white px-12 py-2 rounded-lg hover:bg-blue-400 border-2 border-blue-800 transition mb-4"
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
      Welcome to Summarizer, an efficient tool for quickly grasping the core
      ideas of online articles. Just enter the URL of the article, and within
      seconds, you'll receive an accurate and concise summary. Simplify your
      reading experience with just one click!
    </p>
  </section>
);

const HowItWorks = () => (
  <section className="bg-gradient-to-r from-slate-900 to-slate-800 border-[0.5px] border-slate-600/50 p-6 rounded-lg shadow-md mb-8 cursor-default  hover:scale-105 duration-300">
    <h3 className="text-xl font-bold mb-4">How it Works</h3>
    <p className="mb-4">
      When you provide a URL, the server processes the HTML content to extract
      the main text. This text is divided into three parts, each sent
      concurrently to a trained language model. Each part is analyzed
      independently in its own thread, ensuring quick and concise summaries with
      faster overall response times.
    </p>
  </section>
);

const WhoItsFor = () => (
  <section className="bg-gradient-to-r from-slate-800 to-slate-700 border-[0.5px] border-slate-600/50 p-6 rounded-lg shadow-md mb-8 cursor-default hover:scale-105 duration-300">
    <h3 className="text-xl font-bold mb-4">Who it's For</h3>
    <p className="mb-4">
      Summarizer is a versatile tool designed for students, professionals, and
      avid readers to quickly grasp main points of long articles. It delivers
      concise summaries, saving time and aiding quick understanding.
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
      </main>
    </div>
  );
};

export default Home;
