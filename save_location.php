<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"), true);

// Conectare la baza de date
$conn = new mysqli("localhost", "user", "parola", "nume_baza_de_date");
if ($conn->connect_error) die("Conexiune eșuată: " . $conn->connect_error);

// Interogare SQL
$sql = "INSERT INTO locations (device_name, latitude, longitude, accuracy) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sddd", $data['device'], $data['latitude'], $data['longitude'], $data['accuracy']);
$stmt->execute();

echo json_encode(["status" => "success"]);
$stmt->close();
$conn->close();
?>