import phone from "../images/phone.png";
import { secondSection } from "./data";
import Button from "@material-ui/core/Button";
import list from "../images/list.svg";

const SecondSection = () => {
  return (
    <>
      <div className="hidden lg:block py-20 overflow-hidden sectionTwo">
        <div className="grid grid-cols-2 gap-4">
          <div className="px-32">
            <img src={phone} alt="phone" />
          </div>
          <div className="pt-10 px-20 text-justify mr-24">
            <Button variant="contained" disableElevation className="button">
              {secondSection.subheader}
            </Button>
            <p className="text-4xl font-bold py-6">{secondSection.header}</p>
            <p className="text-gray-500 text-lg pb-8">
              {secondSection.paragraph}
            </p>
            {secondSection.list.map((item, index) => (
              <ul key={index} className="flex items-center pb-5">
                <img src={list} alt="item" />
                <li className="pl-2">{item}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden pt-10 px-10 overflow-hidden">
        <div className="pt-10 text-justify">
          <Button variant="contained" disableElevation className="button">
            {secondSection.subheader}
          </Button>
          <p className="text-2xl font-bold py-6">{secondSection.header}</p>
          <p className="text-gray-500 text-lg pb-8">
            {secondSection.paragraph}
          </p>
          {secondSection.list.map((item, index) => (
            <ul key={index} className="flex items-center pb-5">
              <img src={list} alt="item" />
              <li className="pl-2">{item}</li>
            </ul>
          ))}
        </div>

        <div className="pt-10">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
