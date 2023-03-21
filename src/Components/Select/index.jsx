import React from "react";

const SelectBox = (props) => {
  const { setSortObj } = props;
  const handleChange = (e) => {
    setSortObj({ [e.target.value]: true });
  };
  return (
    <div width="30px">
      <select name="sort" id="sort" className="select" onChange={handleChange}>
        <option value="depart">Depart Earliest First</option>
        <option value="duration">Duration Shortest First</option>
        <option value="arrive">Arrival Earliest First</option>
        <option value="price" selected="selected">
          Price Low to high
        </option>
      </select>
    </div>
  );
};

export default SelectBox;
