<?php

function eliminarProducto($id) 
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("DELETE FROM productos WHERE id = ?");
    return $sentencia->execute([$id]);
}

function actualizarProducto($producto)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("UPDATE productos SET nombre=?, costodolar=?, precio=?, estado=?, ganancia=?, almacen=? WHERE id=?");
    return $sentencia->execute([$producto->nombre, $producto->costodolar, $producto->precio, $producto->estado, $producto->ganancia, $producto->almacen, $producto->id]);
}

function actualizarDolarDia($producto)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("UPDATE valores SET nombre=?, valor=?, WHERE id=?");
    return $sentencia->execute([$producto->nombre, $producto->valor, $producto->id]);
}

function obtenerProductoPorId($id)
{
    $db = obtenerConexion();
    $sentencia = $db->prepare("SELECT id, nombre, costodolar, precio, estado, ganancia, almacen FROM productos WHERE id = ?");
    $sentencia->execute([$id]);
    return $sentencia->fetchObject();
}

function obtenerProductos(){
    $db = obtenerConexion();
    $sentencia = $db->query("SELECT id, nombre, costodolar, precio, estado, ganancia, almacen  FROM productos");
    return $sentencia->fetchAll();
}

function obtenerDolarDia(){
    $db = obtenerConexion();
    $sentencia = $db->query("SELECT id, nombre, valor FROM valores");
    return $sentencia->fetchAll();
}


function guardarProducto($producto){
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO productos(nombre, costodolar, precio, estado, ganancia, almacen) VALUES (?, ?, ?, ?, ?, ?)");
    return $sentencia->execute([$producto->nombre, $producto->costodolar, $producto->precio, ($producto->estado === 'true' ? 1 : 0), $producto->ganancia, $producto->almacen]);
}

function obtenerVariableDelEntorno($key)
{
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
       $file = "env.php";
       if(!file_exists($file)){
        throw new Exception("El archivo de las variables de entorno ($file) no existe. Favor de crearlo");
       }
       $vars = parse_ini_file($file);
       define("_ENV_CACHE", $vars);
    }

    if (isset($vars[$key])) {
        return $vars[$key];
    } else {
        throw new Exception("La clave especificada (" . $key . ") no existe en el archivo de las variables de entorno");
    }
}

function obtenerConexion()
{
    $password = obtenerVariableDelEntorno("MYSQL_PASSWORD");
    $user = obtenerVariableDelEntorno("MYSQL_USER");
    $dbName = obtenerVariableDelEntorno("MYSQL_DATABASE_NAME");
    $database = new PDO('mysql:host=localhost;dbname=' .$dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    return $database;
}