import styled from 'styled-components';
import { HashLink as NavLink} from 'react-router-hash-link';
// import { NavLink as Link } from 'react-router-dom';
// import { Turn as Hamburger } from 'hamburger-react'
export const Nav = styled.nav`
overflow: hidden;
position: fixed;
  width: 100%;
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2) ;
  z-index: 10;
`

export const HashLink = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%
  cursor: pointer;

  &:hover{
    background-color: #0000;
    opacity: ;
    color: #15cdfc;
  }
  
`

export const NavMenu = styled.div `

 display: flex;
 align-items: center;
 margin-right: -24px;


`
export const NavBtn = styled.nav `
 display: flex;
 align-items: center;
 margin-right: 24px;


`
