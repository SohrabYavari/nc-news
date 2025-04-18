import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      navigate("/nc-news/articles");
    }, 300); 
  };

  return (
    <div className="p-8 text-center w-full mx-auto">
      <h2 className="text-4xl font-bold mb-4 border-b tracking-widest">
        Who are we?
      </h2>
      <p className="text-md">
        NC News is your <span className="italic">very</span> informative,
        highly-entertaining hub for all things news... or just opinions. <br />
        From world events to weird local headlines, we’ve got it all — delivered
        with a wink and a touch of chaos. <br />
        Trust us... or don’t. Either way, you’ll keep scrolling.
      </p>
      <button className="btn btn-success mt-10" onClick={handleClick}>
        Go To Articles
      </button>
    </div>
  );
}
