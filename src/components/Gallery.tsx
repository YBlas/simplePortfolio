import { FC } from "react";
import styled from "styled-components";

const images = Array.from(Array(18).keys()).sort(() => Math.random() - 0.5);
const first = images.slice(0, images.length / 2);
const second = images.slice(images.length / 2, images.length);

const Gallery: FC = () => {
  return (
    <Content>
      <Column>
        {first.map((image) => (
          <Image
          >
            <img src={`/smallImages/${image + 1}.jpg`} />
          </Image>
        ))}
      </Column>
      <Column>
        {second.map((image) => (
          <Image
            key={image}
          >
            <img src={`/smallImages/${image + 1}.jpg`} />
          </Image>
        ))}
      </Column>
    </Content>
  );
};

export default Gallery;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Image = styled.div`
  width: 38vw;
  background-size: cover;
  background-position: center;
  & > img {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    width: 100%;
  }
  &:hover {
    transform: scale(1.03);
  }
  transition: transform 0.2s ease-in-out;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
