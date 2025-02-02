import React, { useState } from "react";
import Url from "./Url";

function App() {
  const [longUrl, setLongUrl] = useState(""); 
  const [shortUrl, setShortUrl] = useState(""); 
  const [urlShorten, setUrlShorten] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrlShorten(longUrl);
    setLongUrl("");
  };

  return (
    <div className="p-6 w-96 mx-auto border border-slate-200 bg-slate-100 flex rounded-xl flex-col justify-center items-center mt-20">
      <h1 className="text-9xl font-bold mb-8 tracking-wide">URL Shortener.</h1>

      <form onSubmit={handleSubmit} className="space-y-3 rounded-xl">
        <input
          type="text"
          placeholder="Enter URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button 
          type="submit" 
          className="bg-slate-800 text-white p-2 rounded w-full">
          Shorten URL
        </button>
      </form>

      {urlShorten && <Url longUrl={urlShorten} setShortUrl={setShortUrl} />}

      {shortUrl && (
        <p className="mt-4">
          Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default App;
