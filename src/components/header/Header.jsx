import React from "react";
import styled from "styled-components";
// import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>당근</HeaderTitle>
      <HeaderTitle href="/main">동네가게</HeaderTitle>
      <HeaderTitle href="/al">알바</HeaderTitle>
      <HeaderTitle href="/">부동산 직거래</HeaderTitle>
      <HeaderTitle href="/">중고차 직거래</HeaderTitle>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  border: 1px solid red;
  box-sizing: border-box;
  background-color: #ffffff;
  position: fixed;
  width: 100vw;
`;

const HeaderTitle = styled.a`
  padding: 0 10px;
  text-decoration: none;
  font-size: 26px;
  color: #4d5159;
  &:hover {
    color: #868b94;
  }
`;
