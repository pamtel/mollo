import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const DeskstopHeader = () => {
  return (
    <div className="w-full h-14 bg-tetiary sticky top-0 flex items-center px-32 py-5 text-primary font-bold">
      <div className="logoImg">
        <NavLink exact to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <ul className="navlink flex justify-center items-center">
        <li className="mr-7 cursor-pointer text-sm hover:text-primary navItem">
          <NavLink exact to="/about" activeClassName="active">
            Company
          </NavLink>
        </li>
        <li className="mr-7 cursor-pointer text-sm hover:text-primary navItem">
          <NavLink exact to="/features" activeClassName="active">
            Features
          </NavLink>
        </li>
        <li className="mr-20 cursor-pointer text-sm hover:text-primary navItem">
          <NavLink exact to="/contact" activeClassName="active">
            Help
          </NavLink>
        </li>
        <li className="ml-7 cursor-pointer text-sm hover:text-primary navItem">
          <NavLink exact to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="ml-7 cursor-pointer text-sm bg-primary text-white px-7 py-2 rounded border-primary border-2 border-solid hover:bg-white hover:text-primary">
          <NavLink exact to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DeskstopHeader;
