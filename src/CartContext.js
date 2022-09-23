import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (item, nuevaCantidad) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, cantidad: nuevaCantidad });
        setCart(newCart)
        console.log(cart);




    }
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);

    }
    const totalProducts = () => {
        return cart.reduce((acumulador, prodActual) => acumulador + prodActual.cantidad, 0);
    }

    const clearCart = () => setCart({});

    const isInCart = (id) => cart.find(item => item.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(item => item.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addItem,
            totalPrice,
            totalProducts,
            cart

        }}>
            {children}
        </CartContext.Provider>

    )
}


export default CartProvider