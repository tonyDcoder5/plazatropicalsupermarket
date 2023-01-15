import React from "react";
import { SocialIcon } from "react-social-icons";


export default function Header() {
    const logo = require("../assets/img/placeholder_logo.png")

  const data = {
    address: "665 W Lancaster Rd, Orlando, FL 32809",
    phone: "407-582-0140",
    fax: "407-582-0190",
    email: "plazatropical665@gmail.com",
    hours: [
      { day: "SUN", hours: ["8AM", "7PM"] },
      { day: "MON-SAT", hours: ["7AM", "8PM"] },
    ],
  };

  return (
    <>
      <header className="row"> 
      <div className="col brand">
          <a href="/">
          <h1>Plaza Tropical Supermarket Inc</h1>
          <img alt="logo" src={logo} />
          </a>
        </div>
      <div id="header-contact">
        <div className="col contact-info">
          <p>{data.address}</p>
          <p>Phone: {data.phone}</p>
          <p>Fax: {data.fax}</p>
          <p>{data.email}</p>
        </div>
        <div className="socials">
          <SocialIcon url="https://www.facebook.com/profile.php?id=100063493482937/" target="_blank" /> 
          <SocialIcon url="https://www.instagram.com/plazatropical/" target="_blank" /> 
          </div>
          </div>
        
      </header>
    </>
  );
}
