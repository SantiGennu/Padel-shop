import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'


const onAdd = (cant) => {
    alert(`Se agregaron ${cant} unidad al carrito`)
}

export const Item = ({ listaPaletas }) => {

    return (
        <div className='container'>
            {listaPaletas.map((item) => {
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
                            <ItemCount stock={5} initial={1} onAdd={onAdd} />
                            <Button className='comprar' variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}


export default Item;