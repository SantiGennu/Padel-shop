import React from 'react'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    return (
        <div className='cart'>
            <Link to={"/cart"}>
                <span className="material-icons">
                    shopping_cart
                </span>
                <span className='number'>3</span>
            </Link>
        </div>
    )
}

export default CartWidget