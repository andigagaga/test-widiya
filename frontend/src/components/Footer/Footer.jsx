import React from "react";
import "./Footer.css";
import isntagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <p>GUSWANDI</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={isntagram_icon}></img>
          </div>
          <div className="footer-icons-container">
            <img src={pintester_icon}></img>
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon}></img>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright © 2023. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
