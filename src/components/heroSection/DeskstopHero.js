import Button from "@material-ui/core/Button";
import hero from "../../images/hero.png";
import appleStore from "../../images/appleStore.png";
import playStore from "../../images/playStore.png";
import { heroSection } from "../data"

const DeskstopHero = () => {
  return (
    <div className="grid grid-cols-2 pt-5">
      <div className="px-32 pt-10">
        <Button variant="contained" disableElevation className="button">
          {heroSection.subheader}
        </Button>
        <p className="text-5xl font-bold py-6">
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
      <div className="pr-32">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default DeskstopHero;
