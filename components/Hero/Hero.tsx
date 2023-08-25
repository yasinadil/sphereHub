import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    // <div className="bg-[url('/assets/images/banner.jpg')] w-screen h-screen bg-cover">
    <div>
      <div className="flex flex-col gap-y-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 text-black dark:text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-10 md:leading-[3.6rem]">
              Sphere Hub is a place where you can find a home, make new friends,
              and get to know more about the area you live in!
            </h1>
            <div className="flex flex-col md:flex-row mt-10 gap-4 md:gap-8">
              <Button
                className="rounded-none text-lg font-semibold"
                size={"lg"}
              >
                <Link href={"/services"}>Learn More</Link>
              </Button>
              <Button
                className="rounded-none text-lg font-semibold"
                size={"lg"}
                variant={"secondary"}
              >
                <Link href={"/listings"}>View Listings</Link>
              </Button>
            </div>
          </div>
          {/* <p className="text-lg md:text-xl mt-4 font-medium">
            Sphere Hub is a place where you can find a home, make new friends,
            and get to know more about the area you live in!
          </p> */}
        </div>
      </div>
      <div>
        <div className="py-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white pb-0 md:pb-1">
            housing
          </h2>
          <p className="text-black dark:text-white text-lg md:text-xl">
            we understand the unique needs of university students, which is why
            we are dedicated to offering exceptional housing solutions tailored
            specifically for your academic journey.
          </p>
        </div>

        <div className="py-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white pb-0 md:pb-1">
            community
          </h2>
          <p className="text-black dark:text-white text-lg md:text-xl">
            we&apos;re shaping a space where students thrive, connect, and
            embark on their educational adventure while forging friendships that
            last a lifetime.
          </p>
        </div>

        <div className="py-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white pb-0 md:pb-1">
            law
          </h2>
          <p className="text-black dark:text-white text-lg md:text-xl">
            whether you&apos;re seeking advice on tenant rights, navigating
            academic integrity matters, or simply inquiring about legal
            resources, our AI chatbots are available around the clock to provide
            accurate and reliable information.
          </p>
        </div>

        {/* <div className="py-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white pb-0 md:pb-1">
            personalized Service
          </h2>
          <p className="text-black dark:text-white text-lg md:text-xl">
            match with our agent
          </p>
        </div> */}
      </div>
    </div>
  );
}
