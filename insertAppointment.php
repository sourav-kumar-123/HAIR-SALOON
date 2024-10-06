<?php 

include("dbConnection.php");

$getContent = stripslashes(file_get_contents("php://input"));
$data = json_decode($getContent);

$name = $data->name;
$email = $data->email;
$number = $data->number;
$service = $data->service;
$date = $data->date;
$time = $data->time;

$sql = "INSERT INTO appointment(name, email, mob,service,date,time) VALUES ('$name', '$email', '$number', '$service', '$date', '$time')";
if(!empty($name) && !empty($email) && !empty($number) && !empty($service) && !empty($date) && !empty($time)){
    if($conn->query($sql) == TRUE)
        echo 1;
    else
        echo 0;
}
else
    echo -1;
?>