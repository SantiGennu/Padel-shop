
import { useCartContext } from "../CartContext"
const ItemCart = ({ item }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCard'>
            <div>
                <img src={item.imagen} alt={item.nombre} style={{ width: '18rem' }} />
                <p>Nombre: {item.nombre}</p>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p> Subtotal: ${item.cantidad * item.precio}</p>
                <button onClick={() => removeProduct(item.id)}>Eliminar</button>
            </div>

        </div>
    )
}

export default ItemCart