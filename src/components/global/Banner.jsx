import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#167241] p-5 text-center py-10 w-full shadow-lg shadow-[#167241]">
      <h1 className="text-4xl font-bold tracking-widest pb-2 border-b">
        NC NEWS
      </h1>
      <p>
        We report, you regret reading it{" "}
        <span className="italic">(but you can't stop)</span> 🗞️🔥
      </p>
    </div>
  );
}
