import React from 'react'
import Insta from './imagens/insta.png';
import Wpp from './imagens/wpp.png';
import Logo from './imagens/dede-logo.png'
import { Turn as Hamburger } from 'hamburger-react'
import './Navbar.css'
import {
Nav, 
NavMenu  , 
HashLink,
NavBtn,


    } from './NavbarElements';

const  Navbar = () => {
    return (
        <div>
            <Nav>
                <HashLink to="#home">
                    <h1 className="logo">DeDe</h1>
                </HashLink>
                <div className="ham"> 
                <Hamburger/>
                </div>
                <NavMenu>
                    <HashLink to="#sobre">
                        SOBRE
                    </HashLink>
                    <HashLink to="#video">
                        VÍDEOS
                    </HashLink>
                    <HashLink to="#contato"activeStyle>
                        CONTATO
                    </HashLink>
                   
                </NavMenu>
                <NavBtn>
                    <div className="icons">
                   <a href="https://www.instagram.com/__oandre/" target="_BLANK"> <img src={Insta} className="insta"/> </a>
                  
                   <a href="https://api.whatsapp.com/send?phone=5588988665252&text=Ol%C3%A1%20Andr%C3%A9%20vamos%20conversar%20%3F" target="_BLANK"> <img src={Wpp} className="wpp"/>  </a>
                    </div>
                </NavBtn>

            </Nav>

            </div>
    )
}

export default Navbar
