import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.bgLight};
  display: flex;
  justify-content: space-between;
  align-items: center;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 5%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 10%;
  }
`;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
`;


const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media only screen and (min-width: 600px) {
    font-size: 15px;
    margin-right: 15px;
  }
  @media only screen and (min-width: 992px) {
    margin-right: 30px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid white;
  cursor: pointer;
  color: ${(props) => props.theme.colors.bgDefault};
  padding: 10px 20px;
  border-radius: 10px;
  &:hover{
    background-color: ${(props) => props.theme.colors.bgLight};
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid darkblue;
  }

  @media only screen and (min-width: 600px) {
    padding: 8px 15px;
  }
  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  flex: 2;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    display: none;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    display: flex;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;



function Navbar() {
  return (
    <>
      <Container>
        <Left>
          <Logo>IT Support</Logo>
        </Left>
        <Center>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About Us</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Blog</MenuItem>
          </Menu>
        </Center>
        <Right><Button>call us now</Button></Right>
      </Container>
    </>
  );
}

export default Navbar;
