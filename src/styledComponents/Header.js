import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    align-items: center;
    height: 82px;
    background: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    .d-flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
const NavBar = styled.nav`
    display: block;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const MenuList = styled.div`
    display: flex;
`;
const NavItem = styled.a`
    text-decoration: none;
    font-size: 18px;
    font-weight: 700px;
    color: #000;
    padding: 0 20px;
`;

export { Header, NavBar, MenuList, NavItem }