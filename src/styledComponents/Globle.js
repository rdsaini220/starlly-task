import styled, { createGlobalStyle } from 'styled-components';

const Body = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

const Container = styled.div`
    width: calc(100% - 100px);
    margin:auto;
    margin-bottom: ${props => props.mb ? props.mb : 0};
    @media screen and (max-width: 768px) {
        width: calc(100% - 30px);
    }
`;

const Heading = styled.h2`
    font-size: 30px;
    color: #000;
    text-transform: capitalize;
`;

const Chart = styled.div`
    border: solid 1px #ccc;
    margin-bottom: 50px;
    border-radius: 5px;
`;

export { Body, Container, Heading, Chart }