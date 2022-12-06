import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">JAG Web Developers</h1>

          <h2>Contact</h2>

          <address>
            5534 Somewhere In. The World 22193-10212
            <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>Online</li>

              <li>Print</li>

              <li>Alternative Ads</li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>Hardware Design</li>

              <li>Software Design</li>

              <li>Digital Signage</li>

              <li>Automation</li>

              <li>Artificial Intelligence</li>

              <li>IoT</li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>Privacy Policy</li>

              <li>Terms of Use</li>

              <li>Sitemap</li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2022 Something. All rights reserved.</p>

          <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span> remotely from Anywhere
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
