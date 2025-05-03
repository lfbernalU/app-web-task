import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/ItemTask.scss';
import { Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../store/todoSlice';


function ItemTask(props) {

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeTodo(props.name))
  }


  return (
    <Card className='rounded-3 shadow border-0 w-75' >
      <Card.Body>
        <Card.Title>{ props.name }</Card.Title>
        <Card.Text>
          { props.description }
          <br />
          { props.dueDate && <span className='due-date'>Due: { props.dueDate }</span>}
        </Card.Text>
        <Stack direction="horizontal" gap={3} className='mb-3'>
          <Button>Edit</Button>
          <Button onClick={handleRemove}>Delete</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ItemTask;