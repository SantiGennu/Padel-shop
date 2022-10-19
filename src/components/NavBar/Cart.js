import { useCartContext } from "../../CartContext"
import { Link } from "react-router-dom"
import { useState } from "react";
import ItemCart from "../ItemCart"
import { addDoc, collection, getFirestore } from "firebase/firestore";





const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const [user, setUser] = useState({

        compras: cart.map(item => ({ nombre: item.nombre, id: item.id, modelo: item.modelo, precio: item.precio, cantidad: item.cantidad })),

        Total: totalPrice(),


    })

    const agregar = () => {
        const db = getFirestore();
        const ordenesCollection = collection(db, "ordenes");
        addDoc(ordenesCollection, user)
            .then(({ id }) => console.log({ id }))
        alert("La compra ha sido realizada")

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
        <div className="cartContainer">
            <form >
                <label>Nombre</label>
                <input type="text" value={user.nombre} onChange={(e) => setUser({ ...user, nombre: e.target.value })}></input>
                <label>Apellido</label>
                <input type="text" value={user.apellido} onChange={(e) => setUser({ ...user, apellido: e.target.value })}></input>
                <label>Telefono</label>
                <input type="number" value={user.telefono} onChange={(e) => setUser({ ...user, telefono: e.target.value })}></input>
                <label>Email</label>
                <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}></input>

            </form>

            {
                cart.map(item => <ItemCart key={item.id} item={item} />)

            }
            <p>
                Precio final: {totalPrice()}
            </p>



            <button onClick={agregar}> Realizar comprar</button>
        </div>



    )
}

export default Cart