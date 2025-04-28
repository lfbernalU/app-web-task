
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import FormTask from './components/FormTask';
import ItemTask from './components/ItemTask';


function App() {
  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col className='mt-5' xs={12} md={6}>
          <FormTask />
        </Col>
        <Col className='d-flex flex-column align-items-center gap-3 mt-5' xs={12} md={6}>
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
