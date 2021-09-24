import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Link
              to="/"
              className="Navbar__logo"
              exact
              >
              <Logo />
      </Link>
      <ul>
        <li>
            <Link
              to="/new"
              className="Navbar__content__link"
              >New
            </Link>
        </li>
        <li>
            <Link
              to="/lists"
              className="Navbar__content__link"
                exact
            >Lists
            </Link>
        </li>
        <li>
            <Link
              to="/mycollection"
              className="Navbar__content__link"
              >My Collection
            </Link>
        </li>
      </ul>
    </nav>
  );
}