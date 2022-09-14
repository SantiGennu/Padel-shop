import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../components/ItemCount';



const onAdd = (cant) => {
    alert(`Se agregaron ${cant} unidad al carrito`)
}

const ItemDetail = ({ item }) => {
    return (
        <div className='container'>

            <Card key={item.id} style={{ width: '30rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title><h1>{item.nombre}</h1></Card.Title>
                    <Card.Text >
                        <h2>{item.modelo}</h2>
                    </Card.Text>
                    <h4> {item.descripcion}</h4>
                    <Card.Text>
                        ${item.precio}
                    </Card.Text>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    <Button className='comprar' variant="primary">Comprar</Button>
                </Card.Body>
            </Card>


        </div>
    )
}

export default ItemDetail