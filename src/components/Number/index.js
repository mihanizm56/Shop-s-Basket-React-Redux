import React from "react";
import styled from "styled-components"; 

const Bignumber = styled.span`
  font-size: 18px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  margin-right:8px;
`;

export const Number = () => <Bignumber>8 (800) 500-75-55</Bignumber>;
