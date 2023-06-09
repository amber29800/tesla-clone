import React from 'react'
import {useState} from "react"
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false)

  return (
    <Container>
      <a>
        <img src='\images\logo.svg' alt=''/>
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla</a>
        <a href='#'>Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show = {burgerStatus}>
        <CustomWrap>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CustomWrap>
        
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Power-wall</a></li>
        <li><a href='#'>Commercial Energy</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 768px) {
    display: none;
  }

`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  li {
    padding: 15px 0;
    display: flex;
    justify-content: left;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  a {
    font-weight: 500;
  }

  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s;
`
const CustomWrap = styled.div`
display: flex;
justify-content: end;
  width: 100%;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`