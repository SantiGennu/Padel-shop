import { useCartContext } from "../../CartContext"
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart"
import { addDoc, collection, getFirestore } from "firebase/firestore";



const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const orden = {
        comprador: {
            nombre: "santiago",
            email: "santiago@hotmail.com",
            telefono: "23546677",
            direccion: "Aalborggade 21"

        },
        items: cart.map(item => ({ nombre: item.nombre, id: item.id, modelo: item.modelo, precio: item.precio, cantidad: item.cantidad })),
        total: totalPrice(),


    }

    const agregar = () => {
        const db = getFirestore();
        const ordenesCollection = collection(db, "ordenes");
        addDoc(ordenesCollection, orden)
            .then(({ id }) => console.log({ id }))


    }


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
            <button onClick={agregar}>Realizar comprar</button>
        </>



    )
}

export default Cart