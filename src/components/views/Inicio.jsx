import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { obtenerListaProductos } from "../../helpers/queries";

const Inicio = () => {
  const [productos, SetProductos] = useState([]);

  useEffect(() => {
    //consultar a la api y guardar la respuesta en el state
    obtenerListaProductos().then((respuesta) => {
      //todo: preguntar si la respuesta tiene
      if (respuesta) {
        SetProductos(respuesta);
      } else {
        Swal.fire(
          "Error",
          "Intente realizar esta operación en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fondo cafe"
      />
      <Container>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
        {productos.map((producto) => (
            <CardProducto key={producto.id} producto={producto}></CardProducto>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
