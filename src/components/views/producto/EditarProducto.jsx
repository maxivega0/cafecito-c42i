import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { obtenerProducto, editarProducto } from "../../../helpers/queries";
import { useNavigate } from "react-router-dom";

const EditarProducto = () => {
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  // Extra de la url el parametro
  const { id } = useParams();

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      if (respuesta) {
        // cargar en el formulario los datos del objeto
        setValue("nombreProducto", respuesta.nombreProducto);
        setValue("precio", respuesta.precio);
        setValue("categoria", respuesta.categoria);
        setValue("imagen", respuesta.imagen);
        setValue("descripcion", respuesta.descripcion);
      }
    });
  }, []);

  const onSubmit = (productoEditado) => {
    console.log(productoEditado);
    editarProducto(productoEditado, id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Producto editado correctamente!",
          `El producto ${productoEditado.nombreProducto} sufrió cambios`,
          "success"
        );
        reset();
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un error!",
          `El producto ${productoEditado.nombreProducto} no pudo ser editado`,
          "error"
        );
      }
    });
    // then implica lo siguiente: yo ejecutare una funcion, una vez que se ejecute iniciar sesion, espera que se ejecute y entonces, realiza lo siguiente
    // respuesta es una variable inventada que va a contener el return de "inciarSesion"
    Swal.fire("Producto editado correctamente!", "", "success");
    reset();
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es un dato obligatorio",
              // expresion regular
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{2,32}$/,
                message: `El nombre del producto debe contener entre 2 y 32 caracteres, no admite numeros y caracteres especiales`,
              },
            })}
          />
          <Form.Text className="text-danger">
            {/*  */}
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
             {...register("precio", {
              required: "El precio del producto es un dato obligatorio",
              min:{
                value:1,
                message: 'El precio minimo es 1'
              },
              max: {
                value: 10000,
                message: 'El precio maximo es $10000'
              },
            })}
          />
          <Form.Text className="text-danger">
            {/*  */}
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La URL de imagen es un campo obligatorio",
              // expresion regular
              pattern: {
                value: /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/,
                message: `La URL debe comenzar con "http://" o "https://", seguido de un dominio válido y una ruta opcional.`,
              },
            })}
          />
          <Form.Text className="text-danger">
            {/*  */}
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Seleccionar una categoria es un campo obligatorio",
              // expresion regular
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {/*  */}
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: alguna descripcion"
            {...register("descripcion", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 128,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
