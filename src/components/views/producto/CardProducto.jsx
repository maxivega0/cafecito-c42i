/* eslint-disable react/prop-types */
import { Col, Card, Button } from "react-bootstrap";
import "./cardProducto.css";

const CardProducto = ({ producto }) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={producto.imagen}
          className="img-fluid h-100 img-thumbnail rounded-3"
        />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
