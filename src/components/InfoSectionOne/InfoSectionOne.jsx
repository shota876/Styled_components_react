import React from 'react'
import styled from 'styled-components'
import sectionOneImage from '../../images/section1.png'

const Container = styled.div`
    padding: 10px 20px;
    margin-top: 4%;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0px 140px 0px 140px;
`
const Header = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.colors.primary};
`
const Title = styled.div`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    margin-bottom: 10px;
`

const Description = styled.p`
    color: ${(props) => props.theme.colors.textDark};
`
const Left = styled.div`
    width: 60%;
`

const Right = styled.div`
    width: 40%;
`

const Image = styled.img`
    width: 100%;
`

const List = styled.div`
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid white;
  min-width: 200px;
  text-align: left;
  padding: 20px 20px;
  margin: 5px 15px;
  border-left: 5px solid ${(props) => props.theme.colors.primary};
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
`


function InfoSectionOne() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Why Choose Us?</Title>
          <Header>IT lifecycle management all in one place</Header>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            atque adipisci saepe non distinctio aperiam ex sed nesciunt natus?
            Magnam nesciunt alias sunt. Deleniti quisquam officiis corrupti
            velit cum nostrum!
          </Description>
          <List>
            <ListItem>Transparent advice</ListItem>
            <ListItem>Volume Building</ListItem>
            <ListItem>Global IT sourcing</ListItem>
            <ListItem>Internacional deliveries</ListItem>
            <ListItem>Software refuelling</ListItem>
            <ListItem>Nationwide service network</ListItem>
          </List>
        </Left>

        <Right>
          <Image src={sectionOneImage}/>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default InfoSectionOne