
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import FormTask from './components/FormTask';
import ItemTask from './components/ItemTask';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initAddTodo } from './store/todoSlice';


function App() {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);
  const arr = [
    {
      name: 'Task 1',
      description: 'Description de la realisation de la tache 1',
      dueDate: '2023-10-01'
    },
    {
      name: 'Task 2',
      description: 'Description 2',
      dueDate: '2023-10-02'
    },
    {
      name: 'Task 3',
      description: 'Description 3',
      dueDate: '2023-10-03'
    }
  ]
  useEffect(() => {
    arr.map((item) => {
      dispatch(initAddTodo(item))
    })
  }, []);

  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col className='mt-5' xs={12} md={6}>
          <FormTask />
        </Col>
        <Col className='d-flex flex-column align-items-center gap-3 mt-5' xs={12} md={6}>
          { todos.map((item, index) => {
            return (
              <ItemTask key={index} name={item.name} description={item.description} dueDate={item.dueDate} />
            )
          }
          )}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
