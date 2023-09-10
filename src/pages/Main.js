import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <Title>중고거래 인기매물</Title>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Title = styled.article`
  font-size: 36px;
`;

export default Main;
