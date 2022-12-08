import React from 'react'
import Constantes from './constantes';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Link,
  useNavigate,
} from "react-router-dom";


const EditarProductos = () => {

  const navigate = useNavigate();  
  const { id } = useParams();

  const [producto, setProducto] = useState({
    id: id,
    nombre: "",
    precio: "",
    costodolar: "",
    estado: false,
    ganancia: "",
    almacen: "",
  });


  function handleChange(e) {
    const { name, value } = e.target;
    setProducto({...producto, [name]: value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    const datosJSON = JSON.stringify(producto);
   const exitoso = fetch(`${Constantes.RUTA_API}/src/php/actualizar_producto.php`, {
      method: "PUT",
      body: datosJSON,
    }).then((response) => {
      if(response.ok){
        navigate("/productos/ver");
      }
    });
  }

  // console.table(producto)
  useEffect(() => {
    fetch(`${Constantes.RUTA_API}/src/php/obtener_producto_id.php?id=${id}`)
    .then((response) => { 
      if(response.ok){
        return response.json();
      }
      throw response;
    })
    .then((data)=>{
      return setProducto(data);
    })
    .catch(error => {
      console.log("error", error)
    });
    
  },[]);


  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>Editar Producto: {id} </h1>
      <h4>id</h4>
      <input type="text" name="id" value={producto.id} onChange={handleChange}/>
      <h4>Nombre:</h4>
      <input type="text" name="nombre" value={producto.nombre} onChange={handleChange}/>
      <h4>Precio:</h4>
      <input type="text" name="precio" value={producto.precio} onChange={handleChange}/>
      <h4>Costodolar</h4>
      <input type="text" name="costodolar" value={producto.costodolar} onChange={handleChange}/>
      <h4>ganancia</h4>
      <input type="text" name="ganancia" value={producto.ganancia} onChange={handleChange}/>
      <h4>almacen</h4>
      <input type="text" name="almacen" value={producto.almacen} onChange={handleChange}/>
      <h4>estado</h4>
      <input type="text" name="estado" value={producto.estado} onChange={handleChange}/>
      <input type="submit" value="Submit" />
      <Link to={`/productos/ver`} className="button is-danger">Regresar</Link>
    </form>     
  )

}

export default EditarProductos