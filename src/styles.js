import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Sans from "./fonts/DMSans-Regular.ttf";
export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Sans-Regular';
  src: url(${Sans}) format('ttf'),
}
`;
export const OrderContainer = styled.div`
  // background-color: #F9F9F9;

  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
`;
export const OrderHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // padding-bottom: 1rem;
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: "InterReg";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding-left: 1rem;
`;

export const prodt = styled(ProductTitleContainer)`
  padding-left: 2rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0effb;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 12px;
`;
export const InnerText = styled.p`
  color: #6c5dd3;
  font-size: 14px;
  font-weight: 700;
  height: 21px;
  font-family: "InterReg";
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItemContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  // display: flex;
  // justify-content: start;
  // padding-left: 1rem;
  // padding-bottom: 1rem;
  // padding-right: 1rem;
  // padding-top: 1rem;
`;

export const ShippingStatus = styled.p`
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
  height: 10px;
`;

export const ListTitle = styled(ShippingStatus)`
  font-size: 14px;
  font-weight: 700;
  height: 21px;
  color: black;
  font-family: "InterReg";
`;

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
  height: 963px;
  width: 431px;
  border: 1px solid black;
  padding: 20px;
`;

export const Header = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  align-items: center;
`;
export const Component1 = styled.div`
  border-bottom: 1px #efefef solid;
`;
export const Component2 = styled.div`
  border-bottom: 1px #efefef solid;
`;
export const Product = styled.div`
  border-bottom: 1px #efefef solid;
`;
export const Footer = styled.div`
  padding-top: 10px;
`;
