import React, { Component } from "react";
import { connect } from "react-redux";
import FlightList from "../Components/FlightList";
import { getFlightList, applyFilter } from "../Data/getFlightList";

class ListContainer extends Component {
  componentWillMount() {
    this.props.getFilghtList();
  }

  render() {
    const { fetching = false, masterList = [], filterObj = {} } = this.props;
    return (
      <div className="listing_body">
        <FlightList
          masterList={masterList}
          fetching={fetching}
          filterObj={filterObj}
          applyFilter={this.props.applyFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { flightListing = {} } = state;
  const { filterdList = [] } = flightListing;
  return {
    ...flightListing,
    masterList: filterdList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getFilghtList: () => dispatch(getFlightList()),
  applyFilter: (payload) => dispatch(applyFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
