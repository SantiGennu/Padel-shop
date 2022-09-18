import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';






const ItemDetail = ({ item }) => {
    const [count, setCount] = React.useState(0)


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
                    {
                        count === 0
                            ? <ItemCount stock={item.stock} initial={1} onAdd={(c) => {
                                setCount(c);
                            }} />
                            : <Link to="/cart" > Terminar compra </Link>
                    }


                    <Button className='comprar' variant="primary">Comprar</Button>
                </Card.Body>
            </Card>


        </div >
    )
}

export default ItemDetail
