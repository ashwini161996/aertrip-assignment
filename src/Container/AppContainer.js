import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { HomeContainer } from "./LoadableContainers";
import Root from "./../Components/RouteComponents/";
import Constants from "../Constants/routes";

const RootContainer = (props) => <Root {...props} />;

const mapStateToProps = (state) => {
  const {} = state;

  var pathMapping = [Constants.SEARCH];
  var urlMapping = {
    [Constants.SEARCH]: HomeContainer,
  };

  return {
    paths: pathMapping,
    routes: urlMapping,
  };
};

const AppContainer = withRouter(connect(mapStateToProps)(RootContainer));

export default AppContainer;
