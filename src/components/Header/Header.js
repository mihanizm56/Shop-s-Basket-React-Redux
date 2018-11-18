import React from "react";
import styled from "styled-components";

import Number from "./Items/Number";
import FreeCall from "./Items/FreeCall";
import Star from "./Items/Star";
import Youtube from "./Items/Youtube";
import LiveStream from "./Items/LiveStream";

import starIcon from "./Items/img/star.png";
import iconYoutube from "./Items/img/YouTube.png";
import iconLiveStreamIcon from "./Items/img/stream.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  background-color: #e4e4e4;
`;

const HeaderNav = styled.div`
  display: flex;
  height: 100%;
  width: 1170px;
`;

const NumberWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 525px;
  height: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 645px;
  height: 100%;
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 136px;
  height: 100%;
`;

const YoutubeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 226px;
  height: 100%;
`;

const LiveStreamWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  height: 100%;
`;

const StarIcon = styled.div`
  width: 31px;
  height: 30px;
  margin-right: 5px;
  background-image: url(${starIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const YoutubeIcon = styled.div`
  width: 54px;
  height: 22px;
  margin-right: 5px;
  background-image: url(${iconYoutube});
  background-size: contain;
  background-repeat: no-repeat;
`;

const LiveStreamIcon = styled.div`
  width: 30px;
  height: 22px;
  margin-right: 5px;
  background-image: url(${iconLiveStreamIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <NumberWrapper>
          <Number />
          <FreeCall />
        </NumberWrapper>
        <IconWrapper>
          <StarWrapper>
            <StarIcon />
            <Star />
          </StarWrapper>
          <YoutubeWrapper>
            <YoutubeIcon />
            <Youtube />
          </YoutubeWrapper>
          <LiveStreamWrapper>
            <LiveStreamIcon />
            <LiveStream />
          </LiveStreamWrapper>
        </IconWrapper>
      </HeaderNav>
    </HeaderWrapper>
  );
};
