import styled from "styled-components";

export const ContainerCart = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  border: solid 1px #c4c4c4;
  border-radius: 10px;
  padding: 10px;
  z-index: 100;
  right: 0;
  bottom: 80px;
  width: 400px;
  height: calc(100vh - 100px);
  max-height: 700px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    bottom: 0;
    border-radius: 0;
    max-height: none;
  }
`;

export const HeaderCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TitleCart = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
`;

export const ProductsGroup = styled.div`
  overflow: auto;
  height: 100%;
`;
