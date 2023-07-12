/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { eliminarProducto } from "../../../helpers/queries";
// import { useState } from "react";
import Swal from "sweetalert2";

const ItemProducto = ({ producto }) => {
  const handleEliminarProducto = async (id) => {
    try {
      const respuesta = await eliminarProducto(id);
      // Aquí puedes realizar cualquier acción adicional basada en la respuesta,
      // como actualizar la lista de productos, mostrar un mensaje, etc.
      Swal.fire("Producto eliminado correctamente!", `El producto ${producto.nombreProducto} fue eliminado`, "success");
      console.log(respuesta);
    } catch (error) {
      Swal.fire("Ocurrio un error!", `El producto ${producto.nombreProducto} no pudo ser editado`, "error");
      console.log(error);
    }
  };

  return (
    <tr>
      {/* <td>{props.producto._id}</td> */}
      <td>{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>{producto.descripcion}</td>
      <td>
        <Link
          className="btn btn-warning"
          to={"/administrador/editar-producto/" + producto._id}
        >
          Editar
        </Link>
        <Button
          variant="danger"
          onClick={() => handleEliminarProducto(producto._id)}
        >
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
