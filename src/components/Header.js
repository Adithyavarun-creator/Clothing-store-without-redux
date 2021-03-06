import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'

const Header =({currentUser}) =>{
    return(
        <div className="header">
            <Link to="/">
            <Logo 
            className="logo-container"></Logo>
            </Link>
            <div className="options">
                <Link to="/shop" 
                className="option">
                    SHOP
                </Link>
            
                <Link to="/contact" 
                className="option">
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className="option" 
                    onClick={()=>auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header