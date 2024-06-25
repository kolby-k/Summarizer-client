import React from "react";
import { Link } from "react-router-dom";

const SignUpSignIn = () => (
  <section className="flex flex-col justify-center items-center bg-slate-400/30 p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-2xl font-bold mb-4 text-center">
      Sign Up to Get Started!
    </h3>
    <Link
      to="/sign-up"
      className="bg-blue-600 text-white px-12 py-2 rounded hover:bg-blue-500 transition mb-4"
    >
      Sign Up
    </Link>
    <Link
      to="/sign-in"
      className="text-blue-500 px-4 py-2 rounded hover:text-blue-400 cursor-pointer transition"
    >
      Already have an account? Sign in here!
    </Link>
  </section>
);

const AboutSummarizer = () => (
  <section className="bg-slate-400/30 p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-4">About Summarizer</h3>
    <p className="mb-4">
      Summarizer is a powerful tool designed to help you quickly grasp the key
      points of any article. Simply paste the URL of the article you want
      summarized, and within seconds, our AI-powered language model will
      generate a concise and accurate summary for you.
    </p>
  </section>
);

const HowItWorks = () => (
  <section className="bg-slate-400/30 p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-4">How it Works</h3>
    <p className="mb-4">
      In addition to a detailed summary, you'll also receive a brief TLDR (Too
      Long; Didn't Read) version for quick insights. Furthermore, our bias
      detection feature highlights any potential biases present in the article,
      helping you understand different perspectives.
    </p>
  </section>
);

const WhoItsFor = () => (
  <section className="bg-slate-400/30 p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-4">Who it's For</h3>
    <p className="mb-4">
      Whether you're a student, professional, or an avid reader, Summarizer
      makes it easy to get the information you need without having to read
      entire articles. Save time and stay informed with Summarizer!
    </p>
  </section>
);

const Home = () => {
  return (
    <div className="p-6 bg-slate-200/10 rounded-xl min-h-screen flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Summarizer!</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Generate quick, accurate summaries with just a single URL
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
