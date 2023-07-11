/* eslint-disable react/prop-types */
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Card.Title>{producto.descripcion}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Link className="btn btn-primary" to={"/detalle/" + producto.id}>
            Ver Detalle
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
