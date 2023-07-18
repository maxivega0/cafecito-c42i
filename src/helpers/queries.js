// Todas las cosultas las llamamos desde acá
// Llamar una variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_productos = import.meta.env.VITE_API_PRODUCTO;

// const URL_productoss = import.meta.env.VITE_API_PRODUCTOS

/*
    GET = devuelve lista de elementos o un elemento
    POST me permiten crear un elemento
    PUT / PATCH me permiten editar un elemento, si solo quiero cambiar un dato utilizo patch
    DELETE me permite eliminar un elemento o lista de elementos
    hola este cambio hay que borrar
*/

// recibo un objeto usuario
export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario, {
      method: "POST",
      headers: {
        // Lineas en formato JSON
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
// json extra el body parseado
    const datos = await respuesta.json()
    return {
      status: respuesta.status,
      nombreUsuario: datos.nombreUsuario,
      token: datos.token
    }


  } catch (error) {
    console.log(error);
    return null
  }
};

export const obtenerListaProductos = async () => {
  try {
    // Cuando vea que en una peticion fetch hay un solo argumento, es xq es una peticion GET
    const respuesta = await fetch(URL_productos);
    // console.log(respuesta);
    const listaProductos = await respuesta.json();
    return listaProductos;
  }catch (error) {
    console.log(error)
  }
}

// peticion post para agregar un producto a una api
export const crearProducto = async (producto) => {
  try {
    // Una peticion post necesita un 2do argumento, sera el metodo que elegí
    const respuesta = await fetch(URL_productos, {
      method: "POST",
      headers: {
        // Lineas en formato JSON
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuario")).token
      },
      body: JSON.stringify(producto),
    });
    return respuesta; // el status de la respuesta es 201
  } catch (error) {
    console.log(error);
  }
};



export const editarProducto = async (producto, id) => {
  try {
    console.log(id);
    console.log(producto);
    console.log(URL_productos);
    // Una peticion post necesita un 2do argumento, sera el metodo que elegí
    const respuesta = await fetch(URL_productos + "/" + id, {
      method: "PUT",
      headers: {
        // Lineas en formato JSON
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    console.log(respuesta);
    return respuesta; // el status de la respuesta es 200
  } catch (error) {
    console.log(error);
  }
};
export const eliminarProducto = async (id) => {
  try {
    // Una peticion post necesita un 2do argumento, sera el metodo que elegí
    const respuesta = await fetch(URL_productos + "/" + id, {
      method: "DELETE",
    });
    return respuesta; // el status de la respuesta es 200
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProducto = async (id) => {
  try {
    // Cuando vea que en una peticion fetch hay un solo argumento, es xq es una peticion GET
    const respuesta = await fetch(URL_productos + "/" + id);
    // console.log(respuesta);
    const producto = await respuesta.json();
    return producto; // voy a retornar un objeto producto
  } catch (error) {
    console.log(error);
  }
};
