import { useContext, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { DUMMY_PRODUCTS } from '../../Library/products';
import '../productsDetails/productsDetails.css'
import { currencyFormatter } from "../../Library/formatter";
import CartContext from "../../context/CartContext";
import { Bounce, ToastContainer, toast } from 'react-toastify';

function ProductsDetails() {
    const [selectedImg, setlectedImg] = useState(1);
    const { addItem } = useContext(CartContext);

    const navigate = useNavigate()

    const params = useParams();
    const id = params.productId;

    const selectedItem = DUMMY_PRODUCTS.find((item) => item.id === Number(id));


    const handleSetImage = (image) => {
        setlectedImg(image)
    }

    const handleNavigate = () => {
        localStorage.setItem('orderNowItem', JSON.stringify(selectedItem))
        navigate('/orderNow')
    }

    const handleAddToCart = (item) => {
        addItem(item)
        toast.success(`${selectedItem.name} added to cart`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className='details-container'>
            <ToastContainer
                position="top-right"
                autoClose={900}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="image-items-container">
                <div className="item-one">
                    <img src={selectedItem.img[selectedImg]} alt="" />
                </div>
                <div className="item-two">
                    <img onClick={() => handleSetImage('0')} src={selectedItem.img[0]} alt="" />
                    <img onClick={() => handleSetImage('1')} src={selectedItem.img[1]} alt="" />
                    <img onClick={() => handleSetImage('2')} src={selectedItem.img[2]} alt="" />
                    <img onClick={() => handleSetImage('3')} src={selectedItem.img[3]} alt="" />
                </div>
            </div>
            <div className="details-items-container">
                <div className="details">
                    <h2>{selectedItem.name}</h2>
                    <p className="decr">
                        {selectedItem.description}
                    </p>
                    <article>
                        <p>Brand - <span>{selectedItem.brand}</span></p>
                        <p>Category - <span>{selectedItem.category}</span></p>
                    </article>
                    <main>
                        <p>Features</p>
                        <ul>
                            {
                                selectedItem.features.map((feature, index) => <li key={index}>{feature}</li>)
                            }
                        </ul>
                    </main>
                    <main>
                        <p>Durable For</p>
                        <ul>
                            {
                                selectedItem.idealFor.map((ideal, index) => <li key={index}>{ideal}</li>)
                            }
                        </ul>
                    </main>
                    <main>
                        <p>Colors Available</p>
                        <ul>
                            {
                                selectedItem.colorsAvailable.map((color, index) => <li key={index}>{color}</li>)
                            }
                        </ul>
                    </main>
                </div>
                <main>
                    <p>{currencyFormatter.format(selectedItem.price)}</p>
                    <div className="btn">
                        <button onClick={() => handleAddToCart(selectedItem)}>Add to Cart</button>
                        <button onClick={handleNavigate}>Order Now</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProductsDetails
