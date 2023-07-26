import React from "react";
import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className="w-[80vw] md:w-[40vw] py-8">
      <h1 className="mb-5 font-semibold text-2xl text-center">{props.title}</h1>
      <Image
        className="w-[100%] rounded-2xl"
        src={props.src}
        alt="services"
        priority={true}
      />

      <p className="mt-4 text-xl">{props.description}</p>
    </div>
  );
}
