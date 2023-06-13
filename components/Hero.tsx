import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center justify-evenly md:flex-row">
      <div className="flex w-96 flex-col space-y-4 mx-auto md:mx-0">
        <h1 className="text-4xl font-bold">Invest in lawsuits</h1>
        <p className="text-xl">
          Own shares in lawsuits. Get your expenses fully covered.
        </p>
        <div className="flex flex-row space-x-4">
          <Button className="bg-[#279F41] px-6 py-6 text-lg text-white">
            Start Investing
          </Button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="relative">
          <div className="relative z-20 flex h-[25rem] w-[25rem] flex-col  space-y-2 border-2 border-black bg-white  p-6">
            <p className="mb-6 w-fit rounded-md bg-black px-2 text-white">
              Case Study
            </p>
            <p className="text-lg">
              Big bank gets sued by small company, resulting in $$$ payout and
              1.5x return to financing investors.
            </p>
            <p className="flex-grow"></p>
            <p className="underline">
              <a href="/">Learn More</a>
            </p>
          </div>
          <div className="absolute right-[-10%] top-[-10%]  z-10 h-[25rem] w-[25rem] border-2 border-black bg-[#D9D9D9]  "></div>
          <div className="absolute right-[-5%] top-[-5%]  z-10 h-[25rem] w-[25rem] border-2 border-black bg-[#D9D9D9]  "></div>
        </div>
      </div>
    </div>
  );
}
