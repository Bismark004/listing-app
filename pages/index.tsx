import HeroSection from "@/components/common/HeroSection";
import FilterSection from "@/components/common/FilterSection"; 
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