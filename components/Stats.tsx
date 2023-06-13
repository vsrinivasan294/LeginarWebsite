import React from "react";

export default function Stats() {
  return (
    <div className="flex w-9/12 flex-col space-y-5 items-center justify-around sm:flex-row sm:space-y-0">
      <div className="flex flex-col items-center ">
        <h2 className="text-4xl font-bold text-[#279F41]">$20</h2>
        <p>Minimum Investment</p>
      </div>
      <div className="flex flex-col items-center ">
        <h2 className="text-4xl font-bold text-[#279F41]">30%</h2>
        <p>Average litigation finance AAR</p>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="text-4xl font-bold text-[#279F41]">$15B</h2>
        <p>US litigation finance market</p>
      </div>
    </div>
  );
}
