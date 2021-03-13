import styled from "styled-components";

export const ContainerFilters = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
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
