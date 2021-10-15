import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  const { user, logoutFunction } = useAuth();

  return (
    <div>
      <nav className="Navbar">
        {user ? (
          <>
            <ul className="Navbar__links">
              <div className="Navbar__container">
                <Link to="/" className="Navbar__logo">
                  <Logo />
                </Link>
                <li>
                  <Link to="/comics" className="Navbar__content__link">
                    Comics
                  </Link>
                </li>
                <li>
                  <Link to="/new" className="Navbar__content__link">
                    New
                  </Link>
                </li>
                <li>
                  <Link to="/lists" className="Navbar__content__link">
                    Lists
                  </Link>
                </li>
                <li>
                  <Link to="/mycollection" className="Navbar__content__link">
                    My Collection
                  </Link>
                </li>
              </div>
              <li>
                <button
                  className="Navbar__content__button"
                  onClick={logoutFunction}
                  title="Logout"
                >
                  Logout
                </button>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="Navbar__links">
              <div className="Navbar__container">
                <Link to="/" className="Navbar__logo">
                  <Logo />
                </Link>
                <li>
                  <Link to="/comics" className="Navbar__content__link">
                    Comics
                  </Link>
                </li>
                <li>
                  <Link to="/new" className="Navbar__content__link">
                    New
                  </Link>
                </li>
              </div>
                <li>
                  <Link to="/login" className="Navbar__content__link">
                    Login
                  </Link>
                </li>
            </ul>
          </>
        )}
      </nav>
    </div>
  );
}
