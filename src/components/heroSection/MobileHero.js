import hero from "../../images/hero.png";
import Button from "@material-ui/core/Button";
import appleStore from "../../images/appleStore.png";
import playStore from "../../images/playStore.png";
import { heroSection } from "../data"

const MobileHero = () => {
  return (
    <div className="px-8 grid md:grid-cols-2 pt-5">
      <div className="md:pt-16">
        <Button variant="contained" disableElevation className="button">
          {heroSection.subheader}
        </Button>
        <p className="text-3xl font-bold py-6">
          {heroSection.header}
        </p>
        <p className="text-gray-500 text-lg pb-8">
          {heroSection.paragraph}
        </p>
        <span className="cursor-pointer text-sm bg-primary text-white px-12 py-2 rounded border-primary border-2 border-solid hover:bg-white hover:text-primary">
          Get Started
        </span>
        <div className="mt-8 flex">
          <img src={appleStore} alt="apple store" />
          <img src={playStore} alt="play store" className="pl-5" />
        </div>
      </div>
      <div className="pt-3 md:pt-0">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default MobileHero;
