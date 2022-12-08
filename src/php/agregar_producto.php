<?php
include 'cors.php';
$productoJSON = json_decode(file_get_contents("php://input"));
include_once "funciones.php";
$producto = guardarProducto($productoJSON);
 
