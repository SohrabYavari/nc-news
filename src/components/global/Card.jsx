import React from "react";
import DateSvg from "../svgs/Date";
import Voted from "../svgs/Voted";

export default function Card({ img, title, topic, author, created_at, votes }) {
  const formattedDate = new Date(created_at).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className="card md:h-[475px] p-1 w-full mx-auto shadow-md shadow-primary hover:scale-95 transition-all duration-300">
      <div className="flex justify-end gap-[10%] p-2 border-b-2">
        <p className="flex gap-2 items-center">
          <DateSvg /> {formattedDate}
        </p>
        <p className="flex gap-2 items-center">
          <Voted /> {votes}
        </p>
      </div>
      <h3 className="py-5 flex justify-center items-center w-full h-full font-semibold text-center md:text-2xl">
        {title}
      </h3>
      <div className="p-1 w-full h-full flex flex-col justify-end">
        <img
          src={img}
          alt="article image"
          className="rounded-md h-[250px] w-full object-cover"
        />
        <p className="text-end">
          by <span className="italic">{author}</span> on{" "}
          <span className="italic font-semibold">{topic}</span>
        </p>
      </div>
    </div>
  );
}
