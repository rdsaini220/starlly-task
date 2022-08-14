import styled from 'styled-components';

const ContainerTable = styled.div`
    width: 100%;
    @media screen and (max-width: 768px) {
        overflow-x: scroll;
    }
`;

const MyTable = styled.table`
    width: 100%;
    overflow-x: scroll;
    text-align: center;
    border: solid 1px #ccc;
    border-collapse: collapse;
    thead{
        th{
            border: solid 1px #ccc;
            padding: 10px;
        }
    }
    tbody{
        td{
            border: solid 1px #ccc;
            padding: 0;
        }
    }
    @media screen and (max-width: 768px) {
        min-width: 700px;
        overflow-x: scroll;
    }
`;

const Input = styled.input`
    text-align: left;
    outline: none;
    font-size: 16px;
    border: solid 1px #ccc;
    padding: 10px;
    &:focus{
        text-align: left;
        outline: none;
        font-size: 16px;
        border: solid 1px #ccc;
        padding: 10px;
    }
    &:disabled{
        background: none;
        border: none;
        display: inline-block;
        text-align: center;
    }
`;

const ImgUser = styled.img`
    width: 50px;
    height: 50px;
    margin: 5px 0;
`;

export { ContainerTable, MyTable, Input, ImgUser }