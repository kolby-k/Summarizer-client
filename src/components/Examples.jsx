import React from "react";

const EXAMPLES = [
  {
    url: "https://en.wikipedia.org/wiki/Space_exploration",
    source: "Wikipedia.org",
    title: "Space Exploration",
  },
  {
    url: "https://www.nhl.com/news/sidney-crosby-misses-practice-again-with-upper-body-injury",
    source: "NHL.com",
    title: "Hockey News",
  },
  {
    url: "https://www.infoplease.com/year-music",
    source: "Infoplease.com",
    title: "2000's Music Review",
  },
  {
    url: "https://www.cbc.ca/radio/podcastnews/bre-x-minerals-gold-rush-podcast-1.7218496",
    source: "CBC.ca",
    title: "Bre-X Gold Scam",
  },
  {
    url: "https://www.independent.co.uk/news/world/americas/the-full-text-of-barack-obama-s-victory-speech-993008.html",
    source: "Independent.co",
    title: "Obama Victory Speech",
  },
];

function Examples({ setExample, activeExampleUrl }) {
  const handleSetExampleUrl = (url) => {
    setExample(url);
  };
  return (
    <div className="flex flex-col gap-2 text-center my-10 p-8 border-slate-600 border-t-[2px]">
      <span className="flex flex-col">
        <h1 className="font-medium text-2xl text-slate-300">Try an Example:</h1>
        <p className="text-lg font-medium">
          Click an example below, then press{" "}
          <span className="font-bold underline">Generate Summary</span>
        </p>
      </span>
      <span className="flex flex-wrap gap-2  justify-center">
        {EXAMPLES.map((e, idx) => {
          return (
            <button
              onClick={() => handleSetExampleUrl(e.url)}
              key={idx}
              className={` ${
                activeExampleUrl !== e.url && "bg-zinc-900"
              } w-[250px] font-semibold text-lg text-slate-200 cursor-pointer text-center relative rounded-md border-2 border-gray-600 m-1 p-2 py-4 bg-slate-900 flex flex-col justify-between`}
            >
              {e.title}
              <div className="font-medium text-base text-center text-slate-300 mt-4">
                {e.source}
              </div>
            </button>
          );
        })}
      </span>
    </div>
  );
}

export default Examples;
