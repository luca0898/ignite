import styled from "styled-components"

const Title = styled.h1`
  font-size: 64px;
  font-family: sans-serif;
  color: #8257e6;
`

export function App() {
  return (
    <div className="App">
      <Title>Hello world</Title>
    </div>
  );
}