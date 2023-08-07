import { FC } from "react";
import styled from "styled-components";

const Loading: FC<{ disappear: boolean }> = ({ disappear }) => {
  return (
    <Container disappear={disappear}>
      <img src="smallImages/loading.gif" />
    </Container>
  );
};

export default Loading;

const Container = styled.div<{ disappear: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  ${(props) => `top: ${props.disappear ? "-100vh" : "0"}`};
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
`;
