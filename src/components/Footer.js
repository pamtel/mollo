import footer from "../images/molloFooter.png";
import twitterIcon from "../images/twitter.png";
import facebookIcon from "../images/facebook.png";
import linkedinIcon from "../images/linkedIn.png";
import youtubeIcon from "../images/youtube.png";
import instagramIcon from "../images/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="hidden lg:block bottom-0 px-32 py-5 mb-12 mt-20">
        <div className="grid grid-cols-4 gap-4 pt-10">
          <div>
            <img src={footer} alt="footer" className="pb-16" />
            <sub>Copyright © 2021 Mollo Technology. All Rights Reserved.</sub>
          </div>
          <div>
            <h4 className="title">COMPANY</h4>
            <ul>
              <li>Our Story</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Media Center</li>
            </ul>
          </div>
          <div>
            <h4 className="title">CONTACT</h4>
            <ul>
              <li>Enquiry</li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-between">
              <img src={twitterIcon} alt="twitter" />
              <img src={facebookIcon} alt="facebook" />
              <img src={linkedinIcon} alt="linkedin" />
              <img src={youtubeIcon} alt="youtube" />
              <img src={instagramIcon} alt="instagram" />
            </ul>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="lg:hidden bottom-0 px-10 py-5 mb-12 mt-20">
        <div className="grid grid-cols-1 gap-4 pt-10">
          <div>
            <img src={footer} alt="footer" className="pb-16" />
            <sub>Copyright © 2021 Mollo Technology. All Rights Reserved.</sub>
          </div>
          <div>
            <h4 className="title">COMPANY</h4>
            <ul>
              <li>Our Story</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Media Center</li>
            </ul>
          </div>
          <div>
            <h4 className="title">CONTACT</h4>
            <ul>
              <li>Enquiry</li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-between">
              <img src={twitterIcon} alt="twitter" />
              <img src={facebookIcon} alt="facebook" />
              <img src={linkedinIcon} alt="linkedin" />
              <img src={youtubeIcon} alt="youtube" />
              <img src={instagramIcon} alt="instagram" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
