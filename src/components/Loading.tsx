import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const Loading: FC<{ disappear: boolean }> = ({ disappear }) => {
  const [reallyDisappear, setReallyDisappear] = useState(false);

  useEffect(() => {
    if (disappear) {
      setTimeout(() => {
        setReallyDisappear(true);
      }, 600);
    }
  }, [disappear]);

  return (
    <Container disappear={disappear} reallyDisappear={reallyDisappear}>
      <img src="smallImages/loading.gif" />
    </Container>
  );
};

export default Loading;

const Container = styled.div<{ disappear: boolean; reallyDisappear: boolean }>`
  ${(props) => {
    if (props.reallyDisappear) {
      return "display: none;";
    }
  }}
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
  transition: 0.6s ease-in-out;
`;
