// FooterLinks.js
import React from "react";
import { Link } from "@material-ui/core";

const FooterLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index} style={{ marginTop: "15px" }}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
