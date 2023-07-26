"use client";
import React from "react";
import Image from "next/image";
import lawLight from "../../public/assets/images/law-light.png";
import agentLight from "../../public/assets/images/agent-light.png";
import lawDark from "../../public/assets/images/law-dark.png";
import agentDark from "../../public/assets/images/agent-dark.png";

import { useTheme } from "next-themes";

export default function Stats() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mx-10 pb-10">
        <div className="flex flex-row items-center border border-gray-400 shadow-md shadow-gray-800 dark:border-gray-800 rounded-2xl p-4 gap-4">
          <svg
            className="fill-black dark:fill-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
          </svg>
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Housing
            </h2>
            <p className="text-black dark:text-white">
              Find your perfect accomodation
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center border border-gray-400 shadow-md shadow-gray-800 dark:border-gray-800 rounded-2xl p-4 gap-4">
          <svg
            className="fill-black dark:fill-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path d="M 2.8125 0 C 2.335938 0.0898438 1.992188 0.511719 2 1 L 2 37 C 2 37.550781 2.449219 38 3 38 L 32.625 38 L 46.34375 49.75 C 46.640625 50.007813 47.054688 50.066406 47.414063 49.90625 C 47.769531 49.746094 48 49.390625 48 49 L 48 1 C 48 0.449219 47.550781 0 47 0 L 3 0 C 2.96875 0 2.9375 0 2.90625 0 C 2.875 0 2.84375 0 2.8125 0 Z M 4 2 L 46 2 L 46 46.84375 L 33.65625 36.25 C 33.476563 36.089844 33.242188 36 33 36 L 4 36 Z M 25 8 C 22.25 8 20 10.25 20 13 C 20 15.75 22.25 18 25 18 C 27.75 18 30 15.75 30 13 C 30 10.25 27.75 8 25 8 Z M 25 10 C 26.667969 10 28 11.332031 28 13 C 28 14.667969 26.667969 16 25 16 C 23.332031 16 22 14.667969 22 13 C 22 11.332031 23.332031 10 25 10 Z M 14 14 C 11.800781 14 10 15.800781 10 18 C 10 20.199219 11.800781 22 14 22 C 16.199219 22 18 20.199219 18 18 C 18 15.800781 16.199219 14 14 14 Z M 14 22 C 11.898438 22 10.371094 22.660156 9.40625 23.5 C 8.441406 24.339844 8 25.195313 8 26.09375 L 8 27 C 8 27.550781 8.449219 28 9 28 L 41 28 C 41.550781 28 42 27.550781 42 27 L 42 26.09375 C 42 25.195313 41.558594 24.339844 40.59375 23.5 C 39.628906 22.660156 38.101563 22 36 22 C 34.554688 22 33.410156 22.335938 32.53125 22.75 C 32.304688 22.515625 32.066406 22.289063 31.78125 22.0625 C 30.324219 20.917969 28.09375 20 25 20 C 21.90625 20 19.675781 20.917969 18.21875 22.0625 C 17.933594 22.289063 17.695313 22.515625 17.46875 22.75 C 16.589844 22.335938 15.445313 22 14 22 Z M 36 22 C 38.199219 22 40 20.199219 40 18 C 40 15.800781 38.199219 14 36 14 C 33.800781 14 32 15.800781 32 18 C 32 20.199219 33.800781 22 36 22 Z M 14 16 C 15.117188 16 16 16.882813 16 18 C 16 19.117188 15.117188 20 14 20 C 12.882813 20 12 19.117188 12 18 C 12 16.882813 12.882813 16 14 16 Z M 36 16 C 37.117188 16 38 16.882813 38 18 C 38 19.117188 37.117188 20 36 20 C 34.882813 20 34 19.117188 34 18 C 34 16.882813 34.882813 16 36 16 Z M 25 22 C 27.703125 22 29.46875 22.769531 30.5625 23.625 C 31.109375 24.054688 31.488281 24.527344 31.71875 24.90625 C 31.949219 25.285156 32 25.597656 32 25.59375 L 32 26 L 18 26 L 18 25.59375 C 18 25.597656 18.050781 25.285156 18.28125 24.90625 C 18.511719 24.527344 18.890625 24.054688 19.4375 23.625 C 20.53125 22.769531 22.296875 22 25 22 Z M 14 24 C 14.964844 24 15.691406 24.171875 16.28125 24.40625 C 16.101563 24.796875 16 25.183594 16 25.59375 L 16 26 L 10.0625 26 C 10.085938 25.972656 10.183594 25.464844 10.71875 25 C 11.304688 24.488281 12.300781 24 14 24 Z M 36 24 C 37.699219 24 38.695313 24.488281 39.28125 25 C 39.816406 25.464844 39.914063 25.972656 39.9375 26 L 34 26 L 34 25.59375 C 34 25.183594 33.898438 24.796875 33.71875 24.40625 C 34.308594 24.171875 35.035156 24 36 24 Z"></path>
          </svg>

          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Community
            </h2>
            <p className="text-black dark:text-white">
              Find your perfect community
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center border border-gray-400 shadow-md shadow-gray-800 dark:border-gray-800 rounded-2xl p-4 gap-4">
          {theme == "dark" ? (
            <Image src={lawLight} alt="lowLight" />
          ) : (
            <Image src={lawDark} alt="lawDark" />
          )}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Law
            </h2>
            <p className="text-black dark:text-white">
              Learn from our law experts
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center border border-gray-400 shadow-md shadow-gray-800 dark:border-gray-800 rounded-2xl p-4 gap-4">
          {theme == "dark" ? (
            <Image src={agentLight} alt="agentLight" />
          ) : (
            <Image src={agentDark} alt="agentDark" />
          )}
          <div>
            {" "}
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Personalized Service
            </h2>
            <p className="text-black dark:text-white">Match with our agent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
