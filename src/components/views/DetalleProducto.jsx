import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../../helpers/queries";
import { useEffect, useState } from "react";


const DetalleProducto = () => {
  const {id} = useParams();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      console.log(respuesta);
      setProducto(respuesta);
      console.log(producto);
    })
  }, [])

  return (
    <Container className="my-3 mainSection">
      <Card className="h-100">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
              {producto.nombreProducto}
              <br/>
              <br/>
              <span className="text-danger fw-semibold ">Categoria:</span> {producto.categoria}
              <br />
              <span className="text-danger fw-semibold ">Precio: </span>${producto.precio}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
