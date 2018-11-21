import React from "react";
import styled from "styled-components";

const EditWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 86px;
  height: 13px;
  margin-right: 174px;
`;

const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto-light";
  font-size: 22px;
  color: rgb(141, 141, 141);
  margin-right: 10px;
  line-height: 1.2;
  cursor: pointer;
`;

const NumberOfItems = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-size: 16px;
  color: rgb(0, 0, 0);
  line-height: 1.2;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto-light";
  font-size: 22px;
  color: rgb(141, 141, 141);
  margin-left: 10px;
  line-height: 1.2;
  cursor: pointer;
`;

export default ({ userItems, id, numberOfItems, increment, decrement }) => {
  return (
    <EditWrapper>
      <Minus onClick={() => decrement(userItems, id, numberOfItems)}>-</Minus>
      <NumberOfItems>{numberOfItems}</NumberOfItems>
      <Plus onClick={() => increment(userItems, id, numberOfItems)}>+</Plus>
    </EditWrapper>
  );
};
