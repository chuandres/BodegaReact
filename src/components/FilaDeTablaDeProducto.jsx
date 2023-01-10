import React from 'react'
import { Link } from "react-router-dom";

const FilaDeTablaDeProducto = (props) => {
  console.log(props.dolarDia);
  return (
    <>
    <tr>
      <td>{props.producto.costodolar}</td>
      <td>{props.producto.precio}</td>
      <td>{props.producto.nombre}</td>
      <td>{props.producto.ganancia}</td>
      <td>{(props.producto.precio)/(props.dolarDia.valor)}</td>
      {/* <td>{((props.producto.precio)*(props.producto.ganancia))/(props.dolarDia.valor)}</td> */}
      <td>
        <Link to={`/productos/editar/${props.producto.id}`} className="button is-info">Editar </Link>
        <Link to={`/productos/eliminar/${props.producto.id}`} className="button is-danger">Eliminar</Link>
      </td>
    </tr>
    </>
  )
}

export default FilaDeTablaDeProducto