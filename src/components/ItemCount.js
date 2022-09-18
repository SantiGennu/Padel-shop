import React from 'react'
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [cant, setCant] = React.useState(0);

    return (
        <div className='counter'>
            <Button onClick={
                () => {
                    setCant(cant - 1);
                }}
                disabled={cant <= initial}
            >
                -
            </Button>
            <span className='cantidad'>{cant}</span>
            <Button onClick={() => {
                setCant(cant + 1);

            }}
                disabled={cant === stock}>
                +
            </Button>
            <Button variant='success' onClick={() => onAdd(cant)}>Agregar al Carrito</Button>
        </div>

    )
}

export default ItemCount