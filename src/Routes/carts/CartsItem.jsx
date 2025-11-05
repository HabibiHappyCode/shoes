import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { currencyFormatter } from '../../Library/formatter'
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

function CartsItem() {
    const { items, addItem, removeItem } = useContext(CartContext);

    const handleIncreaseItem = (item) => {
        addItem(item)
    }

    const handleDecreaseItem = (id) => {
        removeItem(id)
    }

    return (
        <div className="cart-items">
            {items.map((item) => <div className='cart' key={item.id}>
                <section>
                    <div className="item-img">
                        <img src={item.img[0]} alt="" />
                    </div>
                    <main>
                        <h3>{item.name}</h3>
                        <p>{currencyFormatter.format(item.price)}</p>
                        <sub>HABIBI <span>SHOES</span></sub>
                    </main>
                </section>

                <div className="actions">
                    <button onClick={() => handleIncreaseItem(item)}><IoAdd /></button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleDecreaseItem(item.id)}><FiMinus /></button>
                </div>

            </div>)}
        </div>
    )
}

export default CartsItem
