import React from 'react'
import sectionThreeImage from '../../images/section3.png'
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

function InfoSectionThree() {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Image src={sectionThreeImage} />
        </Right>

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
      </Wrapper>
    </Container>
  );
}

export default InfoSectionThree