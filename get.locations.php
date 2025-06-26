<?php
$device = $_GET['device'];
$conn = new mysqli("localhost", "user", "parola", "nume_baza_de_date");
$result = $conn->query("SELECT latitude, longitude FROM locations WHERE device_name = '$device'");
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
?>