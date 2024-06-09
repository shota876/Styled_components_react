import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: darkblue;
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
  color: gray;
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: darkblue;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover{
    background-color: aliceblue;
    color: darkblue;
    border: 2px solid darkblue;
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
