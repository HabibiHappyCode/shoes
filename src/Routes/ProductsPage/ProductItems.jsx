import { Link } from "react-router-dom"
import { currencyFormatter } from "../../Library/formatter"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Bounce, ToastContainer, toast } from 'react-toastify';


function ProductItems({ items }) {
    const { addItem } = useContext(CartContext)

    const handleAddToCart = (item) => {
        addItem(item);
        toast.success(`${item.name} added to cart`, {
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
        <>
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
            <div className="products-items">
                {
                    items.map((item) => <section key={item.id}>
                        <div className="img-container">
                            <Link to={`${item.id}`}>
                                <img src={item.img[0]} alt="" />
                            </Link>
                        </div>

                        <article>
                            <h4>{item.name}</h4>
                            <p>{currencyFormatter.format(item.price)}</p>
                            <button disabled={!item.inStock} onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </article>
                    </section>)
                }
            </div>
        </>
    )
}

export default ProductItems
