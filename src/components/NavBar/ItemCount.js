import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(0);
    return (
        <div className='container my-5'>
            <div className='card text-center my-5'>
                <div className='card-body'>
                    <h1> Item count</h1>
                    <div className='my-5'>
                        <h2 className='my-5'>{contador}</h2>
                        <button
                            className='btn btn-success mx-3'
                            onClick={() => setContador(contador + 1)}
                            disabled={contador === 5} >+</button>
                        {/* stock hasta 5  */}

                        <button
                            className='btn btn-danger mx-3'
                            onClick={() => setContador(contador - 1)}
                            disabled={contador === 0} >-</button>
                        {/* deshabilita contador cuando es negativo */}
                        <button
                            className='btn btn-secondary mx-3'
                            onClick={() => setContador(0)}
                            disabled={contador === 0} >reset</button>
                    </div>
                    <button className='btn btn-success mx-3'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount