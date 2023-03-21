import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/fontawesome-free-solid";
import "./popup.css";
import { formatPrice } from "../../Utils/utils";

export default function PopUp(props) {
  const { minPrice, maxPrice, min, max, onAfterChange, rangeSliderHandler } =
    props;
  return (
    <>
      <Popup
        trigger={
          <button className="sort_button">
            Price <FontAwesomeIcon icon={faCaretDown} className="popup" />
          </button>
        }
        position="right center"
      >
        <div width="100%" height="40vh">
          <div className="rc_wrapper">
            <p>Price : </p>
            <br />
            <Slider
              defaultValue={[minPrice, maxPrice]}
              allowCross={false}
              onAfterChange={onAfterChange}
              onChange={rangeSliderHandler}
              range
              min={minPrice}
              step={200}
              max={maxPrice}
            />
            <div className="rc_content">
              <p>{formatPrice(min)}</p>
              <p>{formatPrice(max)}</p>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
