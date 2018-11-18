import React from "react";
import styled from "styled-components";


const FooterWrapper = styled.div`

`
const FooterContainer = styled.div`

`


const FirstBlock = styled.div`

`
const SecondBlock = styled.div`

`
const ThirdBlock = styled.div`

`


const LogoWrapper = styled.div`

`
const SecondBlockWrapper = styled.div`

`


const ShopInSocial = styled.p

``
const InfoBlock = styled.p`

`

const LogoVk = styled.img`

`
const LogoFb = styled.img`

`
const LogoCl = styled.img`

`
const LogoP = styled.img`

`
const LogoLove = styled.img`

`
const LogoInsta = styled.img`

`
const LogoTube = styled.img`

`


export default () => {
  return (
    <FooterWrapper>
        <FooterContainer>
            <FirstBlock>
                <LogoWrapper>
                    <ShopInSocial>SHOP24 в социальных сетях</ShopInSocial>
                    <LogoVk />
                    <LogoFb />
                    <LogoCl />
                    <LogoP />
                    <LogoLove />
                    <LogoInsta />
                    <LogoTube />
                </LogoWrapper>
            </FirstBlock>
            <SecondBlock>
                <SecondBlockWrapper>
                
                </SecondBlockWrapper>
            </SecondBlock>
            <ThirdBlock>
                <InfoBlock>
                    Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.
                    При использовании материалов сайта ссылка на www.shop24.com обязательна.
                    115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII
                    Телефон  8 800 500-75-55
                </InfoBlock>
            </ThirdBlock>
        </FooterContainer>
    </FooterWrapper>
  );
};
