import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NumberItems = styled.p`
  width: 65px;
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
`;

export const NumberOfItems = ({numberOfItems}) => {
  return (
    <NumberItems>
      В корзине: <b>{(numberOfItems > 4 || numberOfItems === 0) ? numberOfItems+' товаров' : numberOfItems+' товара'}</b>
    </NumberItems>
  );
};



NumberItems.defaultProps = {
  numberOfItems:0
};

NumberItems.propTypes = {
  numberOfItems:PropTypes.number.isRequired
};