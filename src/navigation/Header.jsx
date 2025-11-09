import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../navigation/Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { CiShoppingCart } from "react-icons/ci";
import CartContext from '../context/CartContext';
import useAuthStore from '../context/AuthContext';

function Header() {
    const { items } = useContext(CartContext);
    const { isLoggedIn, logOut } = useAuthStore();
    const navigate = useNavigate()

    const [toggle, setToggle] = useState(false);
    const cartItemsNum = items.reduce((totalNumber, item) => {
        return totalNumber + item.quantity;
    }, 0);

    const handleChangetoggle = () => {
        setToggle((prevState) => !prevState)
    }

    const handleClickedLink = () => {
        setToggle(false)
    }

    const handleLogOut = () => {
        logOut(navigate)
    }

    return <header>

        <h2>
            <Link to='/'>habibi</Link>
        </h2>
        <nav className={toggle ? 'toggle' : ''}>
            <ul>
                <li onClick={handleClickedLink}><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li onClick={handleClickedLink}><NavLink to='/Products' className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink></li>
            </ul>


            <div className="auth">
                {
                    isLoggedIn ?
                        <p className='logout' onClick={handleLogOut}>Logout</p>
                        : <>
                            <Link to='/login' onClick={handleChangetoggle} > <button>Login In</button></Link>
                            <Link to='/signup' onClick={handleChangetoggle}><button>Sign Up</button></Link></>
                }
            </div>

        </nav>


        <Link to='/carts' className="cart">
            <CiShoppingCart />
            <span>{cartItemsNum}</span>
        </Link>

        <div onClick={handleChangetoggle} className="hambuger">
            {!toggle ? <GiHamburgerMenu /> : <LiaTimesSolid />}
        </div>


    </header>
}

export default Header
