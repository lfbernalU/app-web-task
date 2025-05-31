
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import FormTaskAndGoal from './components/FormTasksAndGoals';
import Item from './components/Item';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initAddTodo } from './store/todoSlice';
import { initAddGoal } from './store/goalsSlice';


function App() {


  const todos = useSelector((state) => state.todos.value);
  const options = useSelector((state) => state.options.value);
  const goals = useSelector((state) => state.goals.value);

  const dispatch = useDispatch();

  async function initFetch() {


      fetch('http://localhost:3000/tasks/getTasks', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '123'
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log('Tasks fetched:', data);
          data.forEach((task) => {
            dispatch(initAddTodo(task));
          });
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });

      fetch('http://localhost:3000/goals/getGoals', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '123'
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log('Goals fetched:', data);
          data.forEach((goals) => {
            dispatch(initAddGoal(goals));
          });
        })
        .catch(error => {
          console.error('Error fetching goals:', error);
        });


  }


  useEffect(() => {
    // Initialize the store with some tasks
    // arr.map((task) => {
    //   dispatch(initAddTodo(task))
    // })

    // Fetch tasks from the server
    initFetch();
  }, []);

  return (
    <>
    <Header />
    <Container className='mt-5'>
      <Row>
        <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block'>
          <FormTaskAndGoal/>
        </Col>
        <Col xs ={0}  sm ={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              {/* <AddingMobileButton className='float-left'/> */}
            </div>
          </Row>
          <Row>
          <div className='scrolling'>
            {options==='tasks' &&
                todos.map((todo, index)=>(
                  <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate} id={todo._id}/>
                 ))
            }      
           {options==='goals' &&
                goals.map((goal, index)=>(
                  <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate} id={goal._id}/>
   
                 ))
            }      
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
