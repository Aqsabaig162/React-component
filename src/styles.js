import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
import Sans  from './fonts/DMSans-Regular.ttf'

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Sans-Regular';
  src: url(${Sans}) format('ttf'),
}
`;

export const Container= styled.div
`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
height: 963px;
width: 431px;
border: 1px solid black;
padding: 20px;
`


export const Header = styled.h3
`
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 150%;
align-items: center;

`
export const Component1 = styled.div
`
border-bottom: 1px #EFEFEF solid;
`
export const Component2 = styled.div
`

`
export const Product = styled.div
`

`
export const Footer = styled.div 
`
`
