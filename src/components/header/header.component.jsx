import React from 'react';


import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

import './header.component.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';



const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                </Link>
            }
        </div>
    </header>
)

export default Header;