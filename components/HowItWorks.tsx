import React from "react";

export default function HowItWorks() {
  return (
    <div className=" w-full flex flex-col justify-start space-y-3 rounded-md bg-[#F6F6F6] px-8 py-10">
      <h2 className="text-3xl font-semibold my-3">How it works</h2>

      <p className="text-[#202124] font-light">
        Legal investing lets people with a stake in <b> settlement </b>(
        <b>plaintiffs</b> and <b>attorneys</b>) securitize their potential
        winnings and <b>sell shares</b> in exchange for upfront capital. This
        results in a hidden yet high returning <b>asset class</b> for investors.
      </p>

      <p className="text-[#202124] font-light">
        Leginar is a platform that allows anyone to partake in legal investing
        via Reg CF crowdfunding. We source lawsuits and assign scores to them
        based on the projected winnings of the case.
      </p>

      <p className="text-[#279F41] font-medium ">FAQ coming soon!</p>
    </div>
  );
}
