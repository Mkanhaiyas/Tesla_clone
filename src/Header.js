import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [NavStatus, setNavStatus] = useState(false);
  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <LeftMenu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Panel</a>
        <a href="#">Solar Roof</a>
      </LeftMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setNavStatus(true)} />
      </RightMenu>
      <NavBar show={NavStatus}>
        <CloseWrap>
          <CloseMenu fontSize="large" onClick={() => setNavStatus(false)} />
        </CloseWrap>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Model S</a>
        </li>
      </NavBar>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100vw;
`;

const Logo = styled.img``;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 500;
    color: black;
    font-size: 16px;
    padding: 6px 12px;
    margin: 0 5px;
    border-radius: 10px;
    flex-wrap: nowrap;
    transition: 0.2s ease;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 16px;
    color: black;
    padding: 6px 12px;
    margin: 0 5px;
    margin-right: 7px;
    border-radius: 10px;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    a {
      display: none;
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const NavBar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  text-align: left;
  list-style: none;
  width: 320px;
  li {
    padding: 8px 15px;
    margin: 10px 25px;
    border-radius: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: 0.5s ease-in;
`;

const CloseMenu = styled(CloseIcon)`
  margin: 10px;
  padding: 5px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  cursor: pointer;
  border-radius: 20px;
`;

const CloseWrap = styled.div`
  display: flex;
  height: 50px;
  margin: 25px 35px 10px 10px;
  justify-content: end;
`;
