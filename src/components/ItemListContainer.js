import React from 'react'
import ItemCount from './NavBar/ItemCount'



const ItemListContainer = ({ greetings }) => {
    return (
        <div>
            <h2>{greetings}</h2>
            <ItemCount />
        </div>

    )
}

export default ItemListContainer