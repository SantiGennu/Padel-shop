import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { getItem } from '../Api';



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    useEffect(() => {

        getItem().then((response => {

            setItem(response);
            console.log(response)

        }));



    }, []);


    return (

        <ItemDetail item={item} />


    )
}

export default ItemDetailContainer