import React from "react";
import { Link } from "gatsby";
import facebook from "../img/social/facebook.svg";
import whiteLogo from "../img/logo-white.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <img src={whiteLogo} />
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/Kancelaria-Adwokacka-Adwokat-Klaudia-Mielczarczyk-1764496516912134/"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
