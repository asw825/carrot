import React from "react";
import styled from "styled-components";
import ProductsData from "../api/ProductsData";

function Main() {
  return (
    <Container>
      <Title>중고거래 인기매물</Title>
      <ProductsData />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px;
  box-sizing: border-box;
`;

const Title = styled.article`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export default Main;
