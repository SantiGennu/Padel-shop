import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




// const onAdd = (cant) => {
//     alert(`Se agregaron ${cant} unidad al carrito`)
// }

export const Item = ({ productos }) => {

    return (
        <div className='container'>
            {productos.map((item) => {
                return (
                    <Card key={item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text >
                                {item.modelo}
                            </Card.Text>
                            <Card.Text>
                                ${item.precio}
                            </Card.Text>
                            <Link to={`/detail/${item.id}`} className='detalleProducto' variant="primary">ver detalle del producto</Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}


export default Item;