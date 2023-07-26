import React from "react";
import Image from "next/image";
import housing from "../../public/assets/images/house-graphics.jpg";

export default function Hero() {
  return (
    // <div className="bg-[url('/assets/images/banner.jpg')] w-screen h-screen bg-cover">
    <div className="w-screen h-[50vh]">
      <div className="flex justify-center items-center h-[50vh] px-4 md:px-0">
        <div className="flex justify-center items-center border border-gray-400 shadow-md shadow-gray-800 dark:border-gray-800 rounded-2xl">
          <div className="p-10 md:p-16 text-black dark:text-white">
            <h1 className="text-2xl md:text-4xl font-semibold">
              What is Sphere Hub?
            </h1>
            <p className="text-lg md:text-xl mt-4 font-normal">
              Sphere Hub is a place where you can find a home, make new friends,
              and get to know more about the area you live in!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
