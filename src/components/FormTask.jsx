import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Stack } from 'react-bootstrap';

function FormTask() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" type="text" rows={4}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha Vencimiento</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Stack className='d-flex justify-content-center' direction='horizontal'>
        <Button variant="primary" type="submit">
            ADD GOAL
        </Button>
      </Stack>
    </Form>
  );
}

export default FormTask;