import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 2xl:pt-32 flex justify-center">
      <div className=" w-[90vw] max-w-[1536px]">
        <Hero />
        {/* <Stats /> */}
      </div>
    </div>
  );
}
