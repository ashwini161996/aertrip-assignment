import React from "react";
import Logo from "./logo";
import Menubar from "./menubar";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="nav_wrapper">
      <header className="header_wrapper">
        {" "}
        <Logo />
        <Menubar />
        <Avatar />
      </header>
    </div>
  );
};

export default Header;
