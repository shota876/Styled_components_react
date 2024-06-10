import Navbar from "./components/navbar/Navbar.jsx"
import styled from 'styled-components'
import {createGlobalStyle} from "styled-components"
import Hero from "./components/Hero/Hero.jsx"
import Infoboxes from "./components/infoboxes/Infoboxes.jsx"
import { ThemeProvider } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet');
    *{
      font-family: 'Roboto', sans-serif;
    }
  }
`
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  height: 100vh;
`

const theme = {
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "darkBlue",
    bgSecondary: "darkBlue",
    bgLight: "aliceBlue",
    hoverColor: "aliceBlue",
  },
};

const darktheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "gray",
    bgDefault: "black",
    bgPrimary: "black",
    bgSecondary: "black",
    bgLight: "aliceBlue",
    hoverColor: "",
  },
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Hero />
        <Infoboxes />
      </Container>
    </ThemeProvider>
  )
}

export default App
