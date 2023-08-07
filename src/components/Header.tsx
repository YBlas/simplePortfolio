import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const HeaderOwn: FC = () => {
  const [shadow, setShadow] = useState(false);

  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
  }

  return (
    <Header shadow={shadow}>
      <Title
        onClick={() => {
          window.open("https://www.instagram.com/blasfilm/", "_blank");
        }}
      >
        Javier Y. De Blas
      </Title>
    </Header>
  );
};

export default HeaderOwn;

const Header = styled.div<{ shadow: boolean }>`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #aaaaaa;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  ${(props) => {
    if (props.shadow) {
      return "box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);";
    }
  }}
  transition: 0.3s ease-in-out;
`;

const Title = styled.p`
  &:hover {
    cursor: pointer;
    color: #fabada;
  }
  font-family: "retro";
  font-size: 30px;
  transition: 0.3s ease-in-out;
`;
