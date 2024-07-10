import styled from "styled-components"

export const Card = styled.div`
  width: 350px;
  margin: 10px 10px;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;

  background: linear-gradient(to right, ${(props) => props.theme.colors.bgLight} 50%, ${(props) => props.theme.colors.text} 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    border: 1px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: column;
`

export const CardTitle = styled.h3`
    color: ${(props) => props.theme.colors.primary};
`

export const Description = styled.div`
    color: ${(props) => props.theme.colors.textDark};
    font-size: 15px;
    text-align: center;
`

export const Button = styled.a`
  color: red;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;