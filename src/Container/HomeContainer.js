import React, { Component, Fragment } from "react";
import Input from "../Components/Input";
import ListingContainer from "./ListingContainer";

class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="searchbar_mainBox">
          <Input />
        </div>
        <div className="list_mainBox">
          <ListingContainer />
        </div>
      </Fragment>
    );
  }
}
export default HomeContainer;
