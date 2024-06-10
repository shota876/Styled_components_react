import React from "react";
import styled from "styled-components";
import heroImage from "../../images/hero.png";

const Container = styled.div`
  display: flex;
  height: 90%;
`;
const Left = styled.div`
  width: 60%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;
const Description = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textDark};
  width: 70%;
`;

const Right = styled.div`
  width: 40%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
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
  background: linear-gradient( to right, ${(props) => props.theme.colors.bgLight} 50%, ${(props) => props.theme.colors.primary} 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover{
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
`


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
