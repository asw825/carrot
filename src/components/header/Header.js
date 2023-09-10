import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cucumberImg from "../../assets/images/cucumber.png";

export default function Header() {
  return (
    <HeaderWrapper>
      <ButtonsWrapper>
        <HeaderLink to={"/"} style={{ color: "green" }}>
          <img src={cucumberImg} style={{ scale: "0.8" }} />
          오이
        </HeaderLink>
        <HeaderLink to={"/stores"}>동네가게</HeaderLink>
        <HeaderLink to={"/parttimejob"}>알바</HeaderLink>
        <HeaderLink to={"/realestate"}>부동산 직거래</HeaderLink>
        <HeaderLink to={"/usedcars"}>중고차 직거래</HeaderLink>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <AuthenticationButton>
          <HeaderLink to={"/login"}>로그인</HeaderLink>
        </AuthenticationButton>
        <AuthenticationButton>
          <HeaderLink to={"/signup"}>회원가입</HeaderLink>
        </AuthenticationButton>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: fixed;
  width: 100vw;
`;

const HeaderLink = styled(Link)`
  display: flex;
  margin: 0px 20px;
  text-decoration: none;
  align-items: center;
  font-size: large;
  color: #4d5159;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #868b94;
  }
  &.active {
    color: aqua;
    position: relative;
    top: 2px;
  }
`;

const ButtonsWrapper = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const AuthenticationButton = styled.button`
  display: flex;
  height: 50px;
  width: 150px;
  background-color: #ffffff;
  border: 1px solid #000;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0px 1px;
`;
