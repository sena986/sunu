import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.black.darker};
`;

function Home() {
  return <Main>Home!</Main>;
}

export default Home;
