import register from "../images/register.png";
import appleStore from "../images/appleStore.png";
import playStore from "../images/playStore.png";
import { registerData } from "./data";

const RegisterSection = () => {
  return (
    <>
      <div className="hidden lg:block bg-primary overflow-hidden registerSection">
        <div className="grid grid-cols-2 gap-4">
          <div className="py-5 pl-32 text-justify mr-24 text-white">
            <p className="text-4xl font-bold py-6">{registerData.header}</p>
            <p className="text-sm pb-8">{registerData.paragraph}</p>
            <div className="mt-5 flex">
              <img src={appleStore} alt="apple store" />
              <img src={playStore} alt="play store" className="pl-5" />
            </div>
          </div>
          <div className="px-32 pt-30 register" style={{ marginTop: "-20px" }}>
            <img src={register} alt="phone" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden pt-10 bg-secondary px-10 overflow-hidden">
        <div className="pt-10 text-justify">
          <p className="text-2xl font-bold py-6">{registerData.header}</p>
          <p className="text-sm pb-8">{registerData.paragraph}</p>
          <div className="mt-8 flex">
            <img src={appleStore} alt="apple store" />
            <img src={playStore} alt="play store" className="pl-5" />
          </div>
        </div>

        <div className="pt-10">
          <img src={register} alt="phone" />
        </div>
      </div>
    </>
  );
};

export default RegisterSection;
