import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 10%;
    background-color: aliceblue;
`

const Left = styled.div`
    
`
const Center = styled.div`
    
`
const Right = styled.div`
    
`

function Navbar() {
  return(
    <>
       <Container>
          <Left>Left</Left>
          <Center>Center</Center>
          <Right>Right</Right>
       </Container>
    </> 
  )
    
}

export default Navbar