import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection"; 
import PropertyListing from "@/components/PropertyListing";

const Home = () => {
  return (
    <div className="px-8 overflow-scroll ">
      <HeroSection />
      <FilterSection />
      <PropertyListing />
    </div>
  )
};
export default Home;