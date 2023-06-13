import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  // Declaramos el hook use form
  // register = lugar de la libreria donde vamos a guardar el input de mail y password
  // objeto de errores mostrara las partes del formulario que no completo o son invalidas
  // reset metodo de libreria para reiniciar los datos del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
  };

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un email"
                // operador spread, asi invocamos al objeto register
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  // expresion regular
                  pattern: {
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:"El email debe tener el siguiente formato: 'mail@dominio.com'"
                  }
                })}
              />
              <Form.Text className="text-danger">
                {/*  */}
                {errors.email?.message }
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
