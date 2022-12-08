import React from 'react'
import { Link } from "react-router-dom";

const FilaDeTablaDeProducto = (props) => {
  return (
    <>
    <tr>
      <td>{props.producto.id}</td>
      <td>{props.producto.nombre}</td>
      <td>{props.producto.precio}</td>
      <td>
        <Link to={`/productos/editar/${props.producto.id}`} className="button is-info">Editar</Link>
      </td>
      <td>
        <Link to={`/productos/eliminar/${props.producto.id}`} className="button is-danger">Eliminar</Link>
      </td>
    </tr>
    </>
  )
}

export default FilaDeTablaDeProducto