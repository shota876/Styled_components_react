import React from 'react'
import styled from 'styled-components'
import sectionImage from '../../images/laptopDark.jpg'

const Container = styled.div`
   margin-top: 10%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   background-image: url(${sectionImage});
   background-size: cover;
   background-repeat: no-repeat;
   margin-top: 10%;
   background-attachment: fixed;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Title = styled.div`
    color: wheat;
    font-size: 30px;
    font-weight: bold;
    padding: 2%;
`


const Description = styled.p`
    color: white;
    width: 40%;
    font-weight: lighter;
    font-size: 25px;
`



function InfoSectionTwo() {
  return (
    <>
      <Container>
        <TextWrapper>
          <Title>Anywhere Workspace!</Title>
          <Description>
            Enable any employee to work anywhere, anytime with seamless employee
            experiences.
          </Description>
          <Description>
            Leverage your infrastructure across any app, any cloud and any device
            for intrinsic security at every layer.
          </Description>
        </TextWrapper>
      </Container>
    </>
  );
}

export default InfoSectionTwo