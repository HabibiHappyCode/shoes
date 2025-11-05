import { useNavigate } from 'react-router-dom';
import '../shipping/ShippingDetails.css'

function ShippingDetails({form}) {

    const navigate = useNavigate()

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const fd = new FormData(event.target);
        const enteredData = {
            fullName: fd.get('fullname'),
            email: fd.get('email'),
            number: fd.get('number'),
            address: fd.get('address'),
        }
        localStorage.setItem('inputs', JSON.stringify(enteredData));
        navigate('/customerInfo')
    }

    return (
        <form onSubmit={handleSubmitForm}>
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

            <button>Send</button>
        </form>
    )
}

export default ShippingDetails
