import styled from 'styled-components'

export const Container = styled.div`
    background: #212121;
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`;

export const ContainerData = styled.div`
    width: 1024px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
    justify-items: center;
    padding: 10px;
`;