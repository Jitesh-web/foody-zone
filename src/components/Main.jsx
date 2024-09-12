import styled from "styled-components";
import bgImage from "/bg.png";
import Card from "./Card";

const Main = ({ filteredItems }) => {
  return (
    <MainContainer>
      <Content>
        {filteredItems.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </Content>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.main`
  height: calc(100vh - 241px);
  width: 100vw;
  background-image: url(${bgImage});
  background-position: center;
  margin-top: 0;
  display: flex;
`;

const Content = styled.div`
  height: 366px;
  width: 1060px;
  margin: 0 auto;
  position: relative;
  top: 64px;
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  flex-grow: 1;
`;
