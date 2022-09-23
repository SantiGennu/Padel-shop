import { useCartContext } from "../../CartContext"
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart"



const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {

        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Hacer compras</Link>
            </>

        );
    }
    return (
        <>
            {
                cart.map(item => <ItemCart key={item.id} item={item} />)

            }
            <p>
                Total: {totalPrice()}
            </p>
        </>



    )
}

export default Cart