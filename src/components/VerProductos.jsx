import React from 'react'
import Constantes from './constantes'
import FilaDeTablaDeProducto from './FilaDeTablaDeProducto';
import { Link } from "react-router-dom";


class VerProductos extends React.Component {
constructor(props) {
  super(props);
  this.state = {
      productos: [],
    };
}
async componentDidMount() {
  const respuesta = await fetch(`${Constantes.RUTA_API}/src/php/obtener_productos.php`);
  const productos = await respuesta.json();
  this.setState({
    productos: productos,
  });
}

render() {
  return (
      <div>
          <div className="column">
              <h1 className="is-size-3">Productos</h1>
              <Link to={`/productos/agregar`} className="button is-success">AGREGAR PRODUCTO</Link>
              {/* <ToastContainer></ToastContainer> */}
          </div>
          <div className="table-container">
              <table className="table is-fullwidth is-bordered">
                  <thead>
                      <tr>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Editar</th>
                          <th>Eliminar</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.productos.map(producto => {
                          return <FilaDeTablaDeProducto key={producto.id} producto={producto}></FilaDeTablaDeProducto>;
                      })}
                  </tbody>
              </table>
          </div>
      </div>
  );
}
}

export default VerProductos