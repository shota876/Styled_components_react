import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

TextBanner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
    color: ${(props) => props.theme.colors.secondary};
`

const Subtitle = styled.div`
    font-weight: bold;
    font-size: 50px;
    margin: 5px;
    color: ${(props) => props.theme.colors.primary};
`

function TextBanner({ title, subtitle }) {
  return (
    <>
       <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
       </Container>
    </>
  )
}

export default TextBanner