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
    <>
    <div className="p-6 w-96 mx-auto border  backdrop-blur-md shadow-xl border-slate-200 bg-slate-100/30 flex rounded-xl flex-col justify-center items-center mt-32">
      <h1 className="text-9xl font-bold mb-8 tracking-wide text-black/80"><span className="text-black/60 mr-7">URL</span><br></br>Shortener.</h1>

      <form onSubmit={handleSubmit} className="space-y-3 rounded-xl p-2">
        <input
          type="text"
          placeholder="Enter URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="border p-2 rounded w-full bg-transparent"
        />
        <button 
          type="submit" 
          className="bg-slate-700/70 shadow-lg mt-2 cursor-pointer transition-all active:translate-y-0.5 text-white p-2 rounded w-full">
          Shorten URL
        </button>
      </form>

      {urlShorten && <Url longUrl={urlShorten} setShortUrl={setShortUrl} />}

      {shortUrl && (
        <p className="mt-4">
          Shortened URL: <a href={shortUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
    <footer className="flex flex-col justify-center items-center mt-5 p-3 h-33">
      <p></p>
    </footer>
    </>
  );
}

export default App;
