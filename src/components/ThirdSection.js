import thirdGroup from "../images/thirdGroup.png";
import { thirdSection } from './data'
import Button from "@material-ui/core/Button";
import list from "../images/list.svg";

const ThirdSection = () => {
  return (
    <>
      <div className="hidden lg:block py-20 bg-secondary overflow-hidden sectionThree">
        <div className="grid grid-cols-2 gap-4">
          <div className="pt-10 pl-32 text-justify mr-24">
            <Button variant="contained" disableElevation className="button">
              {thirdSection.subheader}
            </Button>
            <p className="text-4xl font-bold py-6">{thirdSection.header}</p>
            <p className="text-gray-500 text-lg pb-8">
              {thirdSection.paragraph}
            </p>
            {thirdSection.list.map((item, index) => (
              <ul key={index} className="flex items-center pb-5">
                <img src={list} alt="item" />
                <li className="pl-2">{item}</li>
              </ul>
            ))}
          </div>
          <div className="px-32">
            <img src={thirdGroup} alt="phone" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden pt-10 bg-secondary px-10 overflow-hidden">
        <div className="pt-10 text-justify">
        <Button variant="contained" disableElevation className="button">
            {thirdSection.subheader}
          </Button>
          <p className="text-2xl font-bold py-6">{thirdSection.header}</p>
          <p className="text-gray-500 text-lg pb-8">
            {thirdSection.paragraph}
          </p>
          {thirdSection.list.map((item, index) => (
            <ul key={index} className="flex items-center pb-5">
              <img src={list} alt="item" />
              <li className="pl-2">{item}</li>
            </ul>
          ))}
        </div>

        <div className="pt-10">
          <img src={thirdGroup} alt="phone" />
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
