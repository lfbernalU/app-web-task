import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Stack } from 'react-bootstrap';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

function FormTask() {

  const dispatch = useDispatch();
  const inputRefName = useRef();
 const inputRefDescription = useRef();
 const inputRefDueDate = useRef();

  const addItem = (e) => {
    e.preventDefault();

    if (inputRefName.current.value === '' || inputRefDescription.current.value === '' || inputRefDueDate.current.value === '') {
      alert('Please fill all fields')
      return;
    }

    const newItem = {
      name: inputRefName.current.value,
      description: inputRefDescription.current.value,
      dueDate: inputRefDueDate.current.value
    }
    
    dispatch(addTodo(newItem))
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={inputRefName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" type="text" rows={4} ref={inputRefDescription}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" ref={inputRefDueDate}/>
      </Form.Group>
      <Stack className='d-flex justify-content-center' direction='horizontal' >
        <Button variant="primary" onClick={addItem}>
            Add Goal
        </Button>
      </Stack>
    </Form>
  );
}

export default FormTask;