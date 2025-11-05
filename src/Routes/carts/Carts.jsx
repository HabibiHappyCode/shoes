import { useContext } from 'react'
import '../carts/carts.css'
import CartsItem from './CartsItem'
import CartContext from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom';
import { currencyFormatter } from '../../Library/formatter';

function Carts() {
    const { items } = useContext(CartContext);
    const navigate = useNavigate();

    const subTotal = items.reduce((totalNumber, item) => {
        return totalNumber + item.price * item.quantity
    }, 0)

    const handleNavigate = () => {
        navigate('/Products')
    }
    return (
        <div className='cart-container' >
            <h2>Carts</h2>
            {
                items.length === 0 ? <>
                    <h2>your cart is empty</h2>
                    <button onClick={handleNavigate} className='noItem'>Shop...</button>
                </> :

                    <>

                        < CartsItem />

                        <div className="sub-total">
                            <main>
                                <h3>Subtotal</h3>
                                <big>{currencyFormatter.format(subTotal)}</big>
                            </main>

                            <Link to='/shippingDetails'>
                                <button>Proceed</button>
                            </Link>

                        </div></>
            }
        </div>
    )
}

export default Carts
