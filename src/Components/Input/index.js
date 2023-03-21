import React from "react";
import {
  faCaretDown,
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./input.css";

export default function Input() {
  return (
    <div display="flex" flexDirection="column" className="div1_wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <span className="span_dropdown">
            Oneway
            <FontAwesomeIcon icon={faCaretDown} className="dropdown_icon" />
          </span>
          <span className="span_dropdown">
            2 Passenger
            <FontAwesomeIcon icon={faCaretDown} className="dropdown_icon" />
          </span>
          <span className="span_dropdown">
            Economy
            <FontAwesomeIcon icon={faCaretDown} className="dropdown_icon" />
          </span>
        </div>
        <div>
          {" "}
          <span className="span_dropdown">
            Recent Searches
            <FontAwesomeIcon icon={faCaretDown} className="dropdown_icon" />
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>
          <label>From</label>
          <br />
          <span className="input_wrapper">
            <input id="from" defaultValue="Delhi" className="input" />
            DEL
          </span>
        </span>
        <span>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
          <br />
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </span>
        <span>
          <label>to</label>
          <br />
          <span className="input_wrapper">
            <input id="to" defaultValue="Mumbai" className="input" />
            BOM
          </span>
        </span>
        <span className="input_wrapper">
          <label>Depart</label>
          <br />
          <span>
            <span className="fontStyle">31 March</span>
            <span>Fri</span>
          </span>
        </span>
        <div>
          <div className="searchbar_list searchbar_listBtn">
            <button className="submit_btn" onClick={() => {}}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
