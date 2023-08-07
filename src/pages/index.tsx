import Gallery from "@/components/Gallery";
import HeaderOwn from "@/components/Header";
import Loading from "@/components/Loading";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MainPage: NextPage = () => {
  const [disappear, setDisappear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisappear(true);
    }, 5000);
  }, []);

  return (
    <MainLayout>
      <Loading disappear={disappear} />
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
