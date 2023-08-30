import React from "react";
import { styled } from "styled-components";

function App() {
  return (
    <div className="App">
      <Title>hello world</Title>
      <Title>bye world</Title>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default App;
