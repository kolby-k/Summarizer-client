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
      Welcome to Summarizer, your go-to tool for quickly understanding the
      essence of any online article. Just drop the URL of the article you need
      summarized, within seconds you'll receive an accurate and concise summary.
      Effortless reading, one click away!
    </p>
  </section>
);

const HowItWorks = () => (
  <section className="bg-slate-400/30 p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-4">How it Works</h3>
    <p className="mb-4">
      Ever wonder what goes on behind the scenes? It's pretty awesome! When you
      provide a URL, our servers start by processing the HTML content of the
      page. Once that's done, the article's text is sent to a trained language
      model where it reviews the content, understands the articles main ideas,
      and crafts a clear, original summary— all that in just a few seconds!
    </p>
  </section>
);

const WhoItsFor = () => (
  <section className="bg-slate-400/30 p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-4">Who it's For</h3>
    <p className="mb-4">
      Summarizer is for everyone! Whether you're a student trying to keep up
      with assignments, a professional needing quick insights, or an avid reader
      looking to stay informed, Summarizer makes it simple. Get the information
      you need without scrolling through endless text. Save time and stay smart
      with Summarizer!
    </p>
  </section>
);

const Home = () => {
  return (
    <div className="p-6 rounded-xl h-full flex gap-10 flex-col items-center">
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
