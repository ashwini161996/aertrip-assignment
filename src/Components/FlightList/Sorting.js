import React, { useEffect } from "react";

const Sorting = (props) => {
  const { sortObj = {}, setSortObj, sortListObj } = props;

  useEffect(() => {
    setSortObj({ price: true });
  }, []);
  return (
    <div className="flight_listData sort_container">
      {sortListObj.map((option, index) => {
        const { id = "", className = "", displyLabel = "" } = option;
        return (
          <div className={className} id={id} key={`sorting__${index}`}>
            <span
              onClick={() => {
                setSortObj({ [id]: !sortObj[id] });
              }}
            >
              {" "}
              {displyLabel}
            </span>
            {sortObj[id] == undefined ? (
              ""
            ) : sortObj[id] ? (
              <span
                onClick={() => {
                  setSortObj({ [id]: !sortObj[id] });
                }}
              >
                {" "}
                &#8645;
              </span>
            ) : (
              <span
                onClick={() => {
                  setSortObj({ [id]: !sortObj[id] });
                }}
              >
                {" "}
                &#8645;
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sorting;
