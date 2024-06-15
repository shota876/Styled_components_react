import React from 'react'
import sectionOneImage from '../../images/section1.png'
import {
  Container,
  Header,
  Left,
  Title,
  Wrapper,
  Description,
  List,
  ListItem,
  Right,
  Image,
} from "../styles/styled.Section";

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