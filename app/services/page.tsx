"use client";
import React from "react";

import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import "./services.modules.css";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Images({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="services">
      <div
        className="border border-gray-400 shadow-md shadow-gray-800 dark:border-gray-800 p-5 rounded-2xl text-black dark:text-white bg-white dark:bg-black
        md:w-[700px] md:h-[300px] relative max-h-[90vh] m-[20px] bg-inherit overflow-hidden
        w-[280px] h-max"
        ref={ref}
      >
        <h1 className="text-xl md:text-2xl md:pb-8 font-semibold">{title}</h1>
        <p className="md:text-lg">{description}</p>
      </div>
      <motion.h2
        className="text-xl font-black text-black dark:text-white"
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </div>
  );
}

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="">
      <div className="pt-36">
        {/* <h1 className="text-4xl font-bold text-center mb-14">Services</h1> */}
        {/* <div className="flex flex-col gap-y-5 items-center">
  
          <Card
            title={"Housing"}
            description={
              "Our housing page provides a specialized experience for users where reviews for user profiles, for both the landlord and the renter will be available for a more accountable approach to housing."
            }
            src={Housing}
          />

          <Card
            title={"Housing"}
            description={
              "Our housing page provides a specialized experience for users where reviews for user profiles, for both the landlord and the renter will be available for a more accountable approach to housing."
            }
            src={Housing}
          />
        </div> */}
        <>
          <Images
            id={1}
            description="Our housing page provides a specialized experience for users where reviews for user profiles, for both the landlord and the renter will be available for a more accountable approach to housing."
            title="Housing"
          />
          <Images
            id={2}
            description="A consequence of moving away from your home is a loss of network, and isolation which affects the quality of your mental health. The reformation of a similar network, perhaps even a support system takes time - the availability of a hub where one can find these connections may be beneficial."
            title="Community"
          />
          <Images
            id={3}
            description="Most people are unaware of the laws of the United States, relating to state and federal laws, and in effect, their rights. This is a commonly found trait in international students and other immigrants - at times people find themselves in a situation where knowing the law, and more importantly being able to get legal help is needed, but a solution catered to specifically this issue is not yet available. This will also include information on health insurance and information on access to healthcare facilities."
            title="The Law Liaison"
          />

          <Images
            id={4}
            description="We are also working to provide a personalized service to students in unique situations where we help them at each step along the way, including finding the best flights, matching housing for them, and connecting them to their new local community by matching them with one of our agents."
            title="Personalized Service"
          />

          <motion.div
            className="progress bg-black dark:bg-white"
            style={{ scaleX }}
          />
        </>
      </div>
    </div>
  );
}
