import React from "react";
import sunset from "../../Assets/sunset.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/fontawesome-free-solid";
const Avatar = () => {
  return (
    <div>
      <ul className="menubar_listwrap">
        <li className="menubar_listing">
          <div>
            <FontAwesomeIcon icon={faSun} />
          </div>
        </li>
        <li className="menubar_listing">
          <div>TRIPS</div>
        </li>
        <li className="menubar_listing">
          <div>
            <img
              src={sunset}
              alt="Avatar"
              className="avatar"
              width="35px"
              height="35px"
            ></img>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
