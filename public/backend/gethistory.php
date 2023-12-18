<?php
// Please place this file in the root of your localhost
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, DELETE");
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

// Check if DELETE request is received
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    $id = $_GET["id"];
    $sqlDelete = "DELETE FROM search_history WHERE id = $id";
    
    if ($conn->query($sqlDelete) === TRUE) {
        echo "Search term deleted successfully";
        exit();
    } else {
        echo "Error deleting search term: " . $conn->error;
        exit();
    }
}

// Check if GET request is received
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $username = $_GET["username"];
    $page = $_GET["page"];
    $limit = $_GET["limit"];

    $offset = ($page - 1) * $limit;

    $sql = "SELECT * FROM search_history WHERE username = '$username' ORDER BY id DESC LIMIT $limit OFFSET $offset";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Fetch total count
        $totalCountResult = $conn->query("SELECT COUNT(id) as total FROM search_history WHERE username = '$username'");
        $totalCountRow = $totalCountResult->fetch_assoc();
        $total = $totalCountRow["total"];

        echo json_encode(array("results" => $data, "total" => $total));
    } else {
        echo json_encode(array("results" => array(), "total" => 0));
    }
}

$conn->close();
?>
