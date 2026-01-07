import HeroMen from "@/components/home/HeroMen";
import HeroWomen from "@/components/home/HeroWomen";
import HomeHero from "@/components/home/HomeHero";
import MostPopular from "@/components/home/MostPopular";
import YellowLine from "@/components/home/YellowLine";
import NewArrival from "@/components/NewArrival";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <YellowLine />
      <MostPopular />
      <HeroMen />
      <NewArrival />
      <HeroWomen />
    </div>
  );
}
