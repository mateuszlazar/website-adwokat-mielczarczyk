import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo-small.png";

const menuItems = [
  {
    title: "O kancelarii",
    slug: "/o-kancelarii"
  },
  {
    title: "Porady prawne online",
    slug: "/porady-prawne-online"
  },
  {
    title: "Specjalizacje",
    slug: "/specjalizacje"
  },
  {
    title: "Blog",
    slug: "/blog"
  },
  {
    title: "Kontakt",
    slug: "/kontakt"
  }
];

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuActive: false
    };
  }

  toggleHamburger = () =>
    this.setState(state => ({ isMobileMenuActive: !state.isMobileMenuActive }));

  render() {
    const mobileMenuState = this.state.isMobileMenuActive ? "is-active" : "";

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Adwokat Klaudia Mielczarczyk" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${mobileMenuState}`}
              data-target="navMenu"
              onClick={this.toggleHamburger}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${mobileMenuState}`}>
            <div className="navbar-start has-text-centered">
              {menuItems.map(i => (
                <Link className="navbar-item" to={i.slug} key={i.slug}>
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
