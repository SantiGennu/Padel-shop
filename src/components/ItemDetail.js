import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { useCartContext } from '../CartContext';






const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addItem } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true)
        addItem(item, quantity);

    }


    return (
        <div className='container'>

            <Card key={item.id} style={{ width: '30rem' }}>
                <Card.Img variant="top" src={item.imagen} />
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
                        goToCart
                            ? <Link to="/cart" > Terminar compra </Link>
                            : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    }

                </Card.Body>
            </Card>


        </div >
    )
}

export default ItemDetail
