import React from "react";

const Menubar = () => {
  return (
    <nav className="meubar_wrapper">
      <ul className="menubar_listwrap">
        <li className="menubar_listing">
          <a className="menubar_listing--active">Flight</a>
        </li>
        <li className="menubar_listing">Hotel</li>
        <li className="menubar_listing">Visa</li>
        <li className="menubar_listing">Holidays </li>
      </ul>
    </nav>
  );
};

export default Menubar;
