import React from 'react';

import './header.component.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';



const Header = () => (
    <header className="header">
        <Link className='logo-container' to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>
        </div>
    </header>
)

export default Header;