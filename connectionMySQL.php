<?php

$servername = "localhost:3306";
$username = "root";
$password = "mp09s02g00"; // Change on other PC
$dbname = "cuzcuzDB";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>