import React from "react";
import './header.css';
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Jeff Phan</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <div className='me'>
                    <img src={ME} alt="me" className="me__image" />
                </div>
                <a href="#contact" className="scroll__down">Scroll down</a>
                <HeaderSocials/>
            </div>
        </header>
    );
}


export default Header;