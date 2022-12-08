<?php
include_once "cors.php";
$productoJSON = json_decode(file_get_contents("php://input"));
include_once "funciones.php";
$producto = actualizarProducto($productoJSON);
 
