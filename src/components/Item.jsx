import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/Item.scss';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../store/todoSlice';
import { removeGoal } from '../store/goalsSlice';


function Item(props) {

  const dispatch = useDispatch();
  const options = useSelector((state) => state.options.value);



  const handleRemove = (e) => {
    e.preventDefault();
    if(options === "tasks") {
      dispatch(removeTodo(props.id))
    } else if(options === "goals") {
      dispatch(removeGoal(props.id))
    }
  }


  return (
   <Card className="item-card mb-3">
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
        <Card.Text className="fw-bold">
          Description
        </Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className="fw-bold">
          Due Date
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        {/*<Button variant="info">Editar</Button>*/}
        <Button variant="info" onClick={handleRemove}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;