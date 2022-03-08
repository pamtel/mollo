import Headers from "../components/headers/Headers";
import HeroSection from "../components/heroSection/HeroSection";
import SecondSection from "../components/SecondSection";
import Footer from "../components/Footer";
import ThirdSection from "../components/ThirdSection";
import ForthSection from "../components/ForthSection";
import RegisterSection from "../components/Register";

const Home = () => {
  return (
    <div>
      <Headers />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Home;
