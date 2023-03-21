import React, { useState, useEffect, Fragment } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { formatTravelTime, formatPrice } from "../../Utils/utils";
import { applySorting } from "../../Utils/sortingHelper";
import Sorting from "./Sorting";
import Loader from "../Loader/index";
import indigo from "../../Assets/6E.png";
import airIndia from "../../Assets/AI.png";
import vistara from "../../Assets/UK.png";
import Images from "../Image";
import SelectBox from "../Select";
import PopUp from "../PopUp";
import "./flightlist.css";

const airlinesLogo = {
  names: {
    "6E": "IndiGo",
    AI: "Air India",
    UK: "Vistara",
  },
  images: {
    "6E": indigo,
    AI: airIndia,
    UK: vistara,
  },
};

const Listing = (props) => {
  const sortListObj = [
    {
      id: "airline",
      displyLabel: "Airline",
      className: "first_list",
    },
    {
      id: "depart",
      displyLabel: "Depart Earliest First",
      className: "second_list",
    },
    {
      id: "duration",
      displyLabel: "Duration Shortest First",
      className: "time_list",
    },
    {
      id: "arrive",
      displyLabel: "Arrival Earliest First",
      className: "third_list",
    },
    {
      id: "price",
      displyLabel: "Price Low to high",
      className: "btn_list",
    },
  ];
  const { masterList = [], fetching = false, filterObj = {} } = props;
  const [sortList, setSortList] = useState([]);
  const [sortObj, setSortObj] = useState({});
  const [rangeValue, setRangeValue] = useState([]);
  const [rangeFilter, setRangeFilter] = useState({});

  const { minPrice = 0, maxPrice = 0 } = filterObj;
  useEffect(() => {
    setSortList(applySorting(masterList, sortObj));
  }, [masterList, sortObj]);

  const rangeSliderHandler = (value) => {
    const [minVal = 0, maxVal = 0] = value;
    setRangeValue([minVal, maxVal]);
  };

  const onAfterChange = (args) => {
    setRangeFilter({ pr: args });
  };

  useEffect(() => {
    setRangeValue([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    props.applyFilter(rangeFilter);
  }, [rangeFilter]);

  const isMobile = 768 > document.documentElement.clientWidth;
  const list = ({ data, index, style }) => {
    const { id = "", pLeg = [], farepr = 0 } = sortList[index],
      [firstLeg = []] = pLeg,
      [firstFlight = {}] = firstLeg;
    const { fr = "", to = "", dt = "", at = "", al = "", ft = 0 } = firstFlight;
    return (
      <div
        className="flight__container"
        data-id={id}
        key={`${id}__flight-${index}`}
        style={style}
      >
        <ul className="flight_listData">
          <li className="first_list">
            <Images imgUrl={airlinesLogo.images[al]} width={25} height={25} />
            <span> {airlinesLogo.names[al]}</span>
          </li>
          <li className="second_list">
            {dt}
            <span className="orging_flex">{fr}</span>
          </li>
          <li className="third_list">
            <p>{formatTravelTime(ft)}</p>
            {"------------------>"}
          </li>
          <li className="second_list">
            {at}
            <span className="orging_flex">{to}</span>
          </li>
          <li className="btn_list">
            <span className="farePrice">{formatPrice(farepr)}</span>
            <button className="view_fares_button" type="button">
              View Fares
            </button>
          </li>
        </ul>
      </div>
    );
  };
  const [min = 0, max = 0] = rangeValue;
  return (
    <div display="flex">
      <div className="div_wrapper">
        <div className="select_wrapper">
          <SelectBox setSortObj={setSortObj} />
        </div>

        <div>
          <PopUp
            minPrice={minPrice}
            maxPrice={maxPrice}
            min={min}
            max={max}
            rangeSliderHandler={rangeSliderHandler}
            onAfterChange={onAfterChange}
          />
        </div>
      </div>
      <div>
        {" "}
        <div className="listing_filter">
          <div className="listing__container">
            <Sorting
              sortObj={sortObj}
              setSortObj={setSortObj}
              sortListObj={sortListObj}
            />
            {fetching && sortList.length === 0 ? (
              <Loader />
            ) : !fetching && sortList.length === 0 ? (
              <Fragment> No Flights Found </Fragment>
            ) : (
              <Fragment>
                <AutoSizer className="listAutoSizer">
                  {({ height, width }) => (
                    <List
                      useIsScrolling
                      className="listingData"
                      overscanCount={7}
                      height={height}
                      itemCount={sortList.length}
                      itemSize={isMobile == true ? 100 : 80}
                      width={width}
                    >
                      {list}
                    </List>
                  )}
                </AutoSizer>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
