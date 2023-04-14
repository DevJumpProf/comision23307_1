import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Counter } from './Counter';

function CardB() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titulo del producto</Card.Title>
        <Card.Text>
       Aqui va el detalle de nuestro producto
        </Card.Text>
        <Counter />
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardB;