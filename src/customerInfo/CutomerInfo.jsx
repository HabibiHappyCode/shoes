import { Link } from 'react-router-dom'
import '../customerInfo/CustomerInfo.css'
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { currencyFormatter } from '../Library/formatter';


function CutomerInfo() {

    const { items } = useContext(CartContext)
    const storedInputs = JSON.parse(localStorage.getItem('inputs'));

    const subTotal = items.reduce((totalNumber, item) => {
        return totalNumber + item.price * item.quantity
    }, 0)

    return (
        <div className='customer-container'>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>/</li>
                    <li><Link to='/Products'>Products</Link></li>
                    <li>/</li>
                    <li><Link>Order Summary</Link></li>
                </ul>
            </nav>

            <div className="customer-info">
                <h2>Customer Information</h2>

                <section>
                    <div className="info">
                        <h4>FULL NAME</h4>
                        <p>{storedInputs.fullName}</p>
                    </div>

                    <div className="info">
                        <h4>EMAIL</h4>
                        <p>{storedInputs.email}</p>
                    </div>

                    <div className="info">
                        <h4>PHONE NUMBER</h4>
                        <p>{storedInputs.number}</p>
                    </div>

                    <div className="info">
                        <h4>PHONE NUMBER 2</h4>
                        <p>{storedInputs.number}</p>
                    </div>

                    <div className="info">
                        <h4>DELIVERY ADDRESS</h4>
                        <p>{storedInputs.address}</p>
                    </div>
                </section>
            </div>

            <div className="order-details">
                <h2>Order Details</h2>
                {
                    items.map(item => <section key={item.id}>
                        <div className="info">
                            <div className="pic">
                                <img src={item.img[0]} alt="" />
                            </div>
                            <main>
                                <h5>{item.name}</h5>
                                <p>{currencyFormatter.format(item.price)}</p>
                            </main>
                        </div>
                        <p>Qty: {item.quantity}</p>
                    </section>)
                }

                <h4 className='sub'>Subtotal: <span>{currencyFormatter.format(subTotal)}</span></h4>

            </div>

            <button onClick={() => window.alert('your order has been placed')}>Order Now</button>
        </div>
    )
}

export default CutomerInfo
