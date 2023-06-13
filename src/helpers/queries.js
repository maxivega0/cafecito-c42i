// Llamar una variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
// const URL_productos = import.meta.env.VITE_API_PRODUCTOS

/*
    GET = devuelve lista de elementos o un elemento
    POST me permiten crear un elemento
    PUT / PATCH me permiten editar un elemento, si solo quiero cambiar un dato utilizo patch
    DELETE me permite eliminar un elemento o lista de elementos
*/

// recibo un objeto usuario
export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      // email correcto
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        console.log("password incorrecto");
        // password incorecto
      }
      // el mail es correcto
    } else {
      console.log("el email no existe");
      // El mail no existe
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
