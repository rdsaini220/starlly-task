import styled from 'styled-components';

const DropdownMenu = styled.div`
    position: relative;
    display: inline-block;
    &:hover{
        .dropdown-list{            
            display: block;
        }
    }
`;

const DropdownButton = styled.button`
    background: rgb(231, 233, 236);
    color: #000;
    padding: 10px 16px;
    font-weight: 500;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-right: ${props => props.mr ? props.mr : 0};
`;

const DropdownList = styled.div`
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const DropdownItem = styled.button`
    width: 100%;
    color: #000;
    padding: 12px 16px;
    border: none;
    display: block;
    text-align: left;
    background: #fff;
    font-size: 16px;
    &:hover{
        background-color: #f1f1f1;
        cursor: pointer;
    }
`;

export { DropdownMenu, DropdownButton, DropdownList, DropdownItem }