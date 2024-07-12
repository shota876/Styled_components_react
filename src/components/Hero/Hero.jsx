import React from "react";
import styled from "styled-components";
import heroImage from "../../images/hero.png";

const Container = styled.div`
  display: flex;
  height: 90%;

  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 50%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;
const Left = styled.div`
  width: 60%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;
const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 30px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 85%;
  }
`;
const Description = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textDark};
  width: 70%;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 80%;
    text-align: center;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 70%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

const Right = styled.div`
  width: 40%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 500px;

  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  @media only screen and (min-width: 992px) {
    width: 500px;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
`
const Button = styled.button`
  font-weight: bold;
  color: ${(props) => props.theme.colors.bgDefault};
  background-color: ${(props) => props.theme.colors.primary};
  margin-left: 5px;
  padding: 15px 30px;
  cursor: pointer;
  border: 1px solid darkblue;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.primary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }

  //for Mobiles
  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    padding: 15px 30px;
  }
`;


function Hero() {
  return (
    <>
      <Container>
        <Left>
          <Title>
            IT-Management - IT Support and IT-Services for everyone!
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            asperiores ullam error itaque, eos architecto voluptate sequi
            voluptas consequuntur ad consequatur assumenda voluptatibus iste
            mollitia adipisci labore quas. Perferendis, excepturi.
          </Description>
          <ButtonsContainer>
            <Button>About Us</Button>
            <Button>Contact Us</Button>
          </ButtonsContainer>
        </Left>{" "}
        <Right>
            <Image src={heroImage} alt="Hero" />
        </Right>
      </Container>
    </>
  );
}

export default Hero;
