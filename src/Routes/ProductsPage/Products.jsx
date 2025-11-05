import { DUMMY_PRODUCTS } from '../../Library/products'
import '../ProductsPage/products.css'
import ProductItems from './ProductItems'

function Products() {
    return (
        <div className='products-container'>
            <h2>our Store</h2>

            <ProductItems items= {DUMMY_PRODUCTS} />
        </div>
    )
}

export default Products
