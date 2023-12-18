<?php
// Please place this file in the root of your localhost
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
//change to your database settings
$servername = "";
$username = "";
$password = "";
$database = ""; 

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $searchTerm = $_POST["searchTerm"];
    $username = $_POST["username"];

    $sql = "INSERT INTO search_history (searched_result, username) VALUES ('$searchTerm', '$username')";
     
    if ($conn->query($sql) === TRUE) {
        echo "Search term added to history successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


$conn->close();
?>