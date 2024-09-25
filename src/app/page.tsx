import DealsOfTheDay from "@/components/dealsoftheday/dealsoftheday";
import Hero from "@/components/hero/hero";
import HeroList from "@/components/herolist/heroList";
import NewArrivals from "@/components/newarirvals";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HeroList/>
      <DealsOfTheDay/>
      <NewArrivals/>
    </div>
  );
}
