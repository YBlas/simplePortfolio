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

  const [content, setContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContent(true);
    }, 1000);
  }, []);

  return (
    <MainLayout>
      <Loading disappear={disappear} />
      {content && (
        <>
          <HeaderOwn />
          <Gallery />
        </>
      )}
    </MainLayout>
  );
};

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
`;

export default MainPage;
