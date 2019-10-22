<?php 

$con =  mysqli_connect("127.0.0.1", "root", "toor","sakila",3306,"");
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " .mysqli_connect_error();
}

$sql = "SELECT actor_id, first_name, last_name FROM actor";
$result = $con->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["actor_id"]. " - Name: " . $row["first_name"]. " " . $row["last_name"]. "<br>";
    }
} else {
    echo "0 results";
}
$con->close();

?>