import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { changeOption } from '../store/optionSlice';


function Header() {
  const options = useSelector((state) => state.options.value);
  const dispatch = useDispatch();

  const changeOptionFunction = (e) => {

    const options = e.target.getAttribute('data-rr-ui-event-key');

    e.preventDefault();
        if(options ==='tasks')
          dispatch(changeOption('tasks'));
        else
          dispatch(changeOption('goals'));
    }

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark" >
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav defaultActiveKey={options} >
            <Nav.Link eventKey='tasks' onClick={changeOptionFunction}>Tasks</Nav.Link>
            <Nav.Link  eventKey='goals' onClick={changeOptionFunction}>Goals</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;