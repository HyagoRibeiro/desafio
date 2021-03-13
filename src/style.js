import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  background: #eeeeee;
  min-height: 100vh;
`;

export const AlignContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerData = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 10px;
  row-gap: 15px;
  justify-items: center;
  padding: 10px;
`;

export const ContainerFilters = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const TitleNavBar = styled.h1`
  color: #fff;
  font-weight: 700;
`;

export const ButtonCart = styled(Button)`
  width: 80px;
  height: 80px;
  z-index: 99;
  display: flex;
  justify-content: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0.5px rgba(0, 0, 0, 0.1);
  transition: 0.15s;
  :hover& {
    box-shadow: 0px 0px 8px 0.5px rgba(0, 0, 0, 0.15);
  }
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 0;

  &:first-of-type {
    margin-top: 10px;
  }

  input {
    margin-right: 10px;
    height: 15px;
    width: 15px;
  }
`;
