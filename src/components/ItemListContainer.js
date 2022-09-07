import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import { getProductos } from '../Api';



const ItemListContainer = ({ greeting }) => {
    const [listaPaletas, setlistaPaletas] = useState([]);


    useEffect(() => {
        getProductos().then(response => {
            setlistaPaletas(response)
        })
    }, [])

    return (
        <>
            <h3 className='greeting'>{greeting}</h3>
            <ItemList listaPaletas={listaPaletas} />
        </>
    )
}



export default ItemListContainer