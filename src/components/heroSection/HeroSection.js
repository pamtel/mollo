import DeskstopHero from "./DeskstopHero";
import MobileHero from "./MobileHero";

const HeroSection = () => {
  return (
    <>
      <div className="hidden lg:block bg-tetiary">
        <DeskstopHero />
      </div>
      <div className="lg:hidden bg-tetiary">
        <MobileHero />
      </div>
    </>
  );
};

export default HeroSection;
