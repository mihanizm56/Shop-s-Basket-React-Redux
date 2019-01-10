import React from "react"
import styled from "styled-components"
import zoom from "./img/zoom.png"

const FindWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 226px;
  height: 32px;
  border-bottom: 2px solid #2a2a2a;
`

const FindText = styled.input`
  margin-bottom: 2px;
  width: 203px;
  height: 20px;
  font-size: 15px;
  font-family: "Roboto";
  color: rgb(0, 0, 0);
  line-height: 1.2;
  border: none;
  outline: none;
  &::placeholder {
    font-size: 15px;
    font-family: "Roboto";
    color: rgb(0, 0, 0);
    line-height: 1.2;
  }
`

const ZoomIcon = styled.div`
  width: 19px;
  height: 19px;
  margin-bottom: 8px;
  background-image: url(${zoom});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`

export const FindComponent = () => {
  return (
    <FindWrapper>
      <FindText
        className="findInput"
        type="text"
        placeholder="Поиск по сайту"
      />
      <ZoomIcon />
    </FindWrapper>
  )
}
