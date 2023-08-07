import Gallery from "@/components/Gallery";
import HeaderOwn from "@/components/Header";
import { NextPage } from "next";
import styled from "styled-components";

const MainPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderOwn />
      <Gallery />
    </MainLayout>
  );
};

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  box-sizing: border-box;
  align-items: center;
`;

export default MainPage;
