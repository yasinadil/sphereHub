import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";
import Image from "next/image";
import housing from "../public/assets/images/house-graphics.jpg";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Hero />
      <Stats />
    </div>
  );
}
