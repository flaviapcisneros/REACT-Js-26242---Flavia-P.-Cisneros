import { Link } from "react-router-dom";
import logo from "../../assets/logo MD.jfif";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo MD" />
          <span>Murder Drones</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
