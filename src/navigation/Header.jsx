import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../navigation/Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { CiShoppingCart } from "react-icons/ci";
import CartContext from '../context/CartContext';

function Header() {
    const { items } = useContext(CartContext)

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

    return <header>

        <h2>habibi</h2>
        <nav className={toggle ? 'toggle' : ''}>
            <ul>
                <li onClick={handleClickedLink}><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li onClick={handleClickedLink}><NavLink to='/Products' className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink></li>
            </ul>


            <div className="auth">
                <Link to='/login'> <button>Login In</button></Link>
                <Link to='/signup'><button>Sign Up</button></Link>
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
