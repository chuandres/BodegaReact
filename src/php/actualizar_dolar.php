
<?php
include_once "cors.php";
include_once "funciones.php";
$productoJSON = json_decode(file_get_contents("php://input"));
$producto = actualizarDolarDia($productoJSON);
 
