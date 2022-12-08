import React from 'react'
import Constantes from './constantes';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Link,
  Navigate
} from "react-router-dom";

const AgregarProducto = () => {
  
  const [state, setState] = useState(false);

  const [producto, setProducto] = useState({
    nombre: "prueba3",
    precio: "12",
    costodolar: "2",
    estado: false,
    ganancia: "0.7",
    almacen: "SIN ASIGNAR",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProducto({...producto, [name]: value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    const datosJSON = JSON.stringify(producto);
    const exitoso = fetch(`${Constantes.RUTA_API}/src/php/agregar_producto.php`, {
        method: "POST",
        body: datosJSON,
      }).then((response) => {
        // console.log("ESTOY PASANDO", response.json());
        if(response.ok){
          setState(true);
        }
      });
  }
  
  if(state){
    return <Navigate to="/" replace={true} />
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>Agregar Producto</h1>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" name="nombre" value={producto.nombre} onChange={handleChange}/>
      </div>
      
      <div className='form-group'>
        <label>Precio:</label>
        <input type="text" name="precio" value={producto.precio} onChange={handleChange}/>
      </div>

      <div className='form-group'>
        <label>Costodolar</label>
        <input type="text" name="costodolar" value={producto.costodolar} onChange={handleChange}/>
      </div>
      
      <div className='form-group'>
        <label>ganancia</label>
        <input type="text" name="ganancia" value={producto.ganancia} onChange={handleChange}/>
      </div>
      
      <div className='form-group'>  
        <input type="text" name="almacen" value={producto.almacen} onChange={handleChange}/>
        <label>almacen</label>
      </div>
      
      <div className='form-group'>
        <label>estado</label>
        <input type="text" name="estado" value={producto.estado} onChange={handleChange}/>
      </div>
      
      
      <input type="submit" value="Submit" />
      
      <Link to={`/productos/ver`} className="button is-danger">Regresar</Link>
    </form>     
  )

}

export default  AgregarProducto