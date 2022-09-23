import { useCartContext } from '../../CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalProducts } = useCartContext()

    return (
        <div className='cart'>
            <Link to={"/cart"}>
                <span className="material-icons">
                    shopping_cart
                </span>
                <span className='number'> {totalProducts() || "0"} </span>

            </Link>
        </div>
    )
}

export default CartWidget