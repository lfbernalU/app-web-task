import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/ItemTask.scss';

function ItemTask() {
  return (
    <Card className='rounded-3 shadow border-0' >
      <Card.Body className='text-center mt-2'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemTask;