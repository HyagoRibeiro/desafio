import styled from "styled-components";

export const ContainerProduct = styled.div`
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0.5px rgba(0, 0, 0, 0.1);
  transition: 0.15s;
  :hover& {
    box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.3);
  }
`;

export const ProductImage = styled.img`
  max-width: 10rem;
`;
