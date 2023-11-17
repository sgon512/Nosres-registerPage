// Footer.js
import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";

const footerLinks = [
  { href: "https://www.nosres.com/about", label: "About Nosres" },
  { href: "//legal.nosres.com/terms_details", label: "Terms" },
  { href: "//legal.nosres.com/privacy_details", label: "Privacy" },
  { href: "//www.nosres.com/business-portfolio", label: "Business Portfolio" },
  { href: "//careers.nosres.com/", label: "Careers" },
  { href: "https://support.nosres.com", label: "Nosres Support" },
  { href: "https://accounts.nosres.com/sitemap", label: "Sitemap" },
];
const Footer = () => {
  return (
    <div className={styles.footerList}>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <a
              href="https://www.nosres.com/"
            
            >
              <img
                className="logo"
                src="https://accounts.nosres.com/images/accounts/logo.svg"
                alt="Nosres logo"
                style={{
                  width: "10px",
                  padding: "1px",
                  marginLeft: "60px"
                }}
              />
              <h5 style={{ marginLeft: "5px" }}>nosres</h5>
            </a>
          </li>
          <FooterLinks links={footerLinks} />
        </ul>
      </div>

      <div className={styles.footerFlag}>
        <img
          src="https://accounts.nosres.com/images/careers/flag.png"
          style={{ width: "10px", height: "10px" }}
          alt="Flag"
        />
        <span>United States</span>
      </div>
      <div className={styles.footerCopyright}>
        <h5> © 2023 Nosres Inc. All rights reserved. </h5>
      </div>
    </div>
   
  );
};

export default Footer;
