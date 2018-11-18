import React from "react";
import styled from "styled-components";

const NumberItems = styled.p`
  width: 65px;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
`;

export default () => {
  return (
    <NumberItems>
      В корзине: <b>n товаров</b>
    </NumberItems>
  );
};
