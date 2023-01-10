import React from 'react';
import { useEffect } from 'react';
import Constantes from './constantes';
import { useParams } from 'react-router-dom';
import {
  useNavigate 
} from "react-router-dom";

const EliminarProducto = () => {

const { id } = useParams();
const navigate = useNavigate();

  useEffect(() => {
    fetch(`${Constantes.RUTA_API}/src/php/eliminar_producto.php?id=${id}`)
    .then((response) => { 
      if(response.ok){
        navigate("/productos/ver");
      }
      throw response;
    })
  },[]);


  return (<></>)
}

export default EliminarProducto