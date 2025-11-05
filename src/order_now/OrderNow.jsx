
import { currencyFormatter } from '../Library/formatter'
import '../order_now/OrderNow.css'

function OrderNow() {
    const orderStored = JSON.parse(localStorage.getItem('orderNowItem'));

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const fd = new FormData(event.target);
        const orderDetails = {
            fullName: fd.get('fullname'),
            email: fd.get('email'),
            number: fd.get('number'),
            address: fd.get('address'),
            order: orderStored,
        }
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

        window.alert('your order has been placed')

    }
    return (
        <div className='order-container'>
            <div className="item">
                <div className="item-pic">
                    <img src={orderStored.img[0]} alt="" />
                </div>
                <article>
                    <main>
                        <h3>{orderStored.name}</h3>
                        <p>{currencyFormatter.format(orderStored.price)}</p>
                    </main>
                    <p className='total'>
                        Subtotal: <span>{currencyFormatter.format(orderStored.price)}</span>
                    </p>
                </article>
            </div>

            <form onSubmit={handleSubmitForm} className='my_form'>
                <h3>Order Details</h3>
                <p>
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" name='fullname' placeholder='Enter your full name' required />
                </p>

                <p>
                    <label htmlFor="email">Email *</label>
                    <input type="email" name='email' placeholder='Enter your email' required />
                </p>

                <p>
                    <label htmlFor="name">Phone Number 1 *</label>
                    <input type="number" name='number' placeholder='Enter your primary phone number' required />
                </p>

                <p>
                    <label htmlFor="name">Phone Number 2 (Optional)</label>
                    <input type="text" name='second-number' placeholder='Enter your secondary phone number' />
                </p>

                <p>
                    <label htmlFor="add">Delivery Address *</label>
                    <textarea name="address" placeholder='Enter your delivery address' required></textarea>
                </p>

                <button>Checkout</button>
            </form>
        </div>
    )
}

export default OrderNow
