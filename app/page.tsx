import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 2xl:pt-32">
      <Hero />
      <Stats />
    </div>
  );
}
