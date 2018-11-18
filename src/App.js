import React from "react";
import BasketPage from "./components/index";
import { connect } from "react-redux";

const App = () => {
  return <BasketPage />;
};

const mapStateToProps = store => {
  return { ...store };
};

export default connect(
  mapStateToProps,
  null
)(BasketPage);
