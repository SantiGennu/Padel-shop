
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({ productos }) => {



    return (
        <div className='container'>
            {productos.map((item) => {
                return (
                    <Card key={item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.imagen} />
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