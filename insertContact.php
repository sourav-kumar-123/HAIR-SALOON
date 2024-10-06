<?php
include("dbConnection.php");

$getContent = stripslashes(file_get_contents("php://input"));
$cdata = json_decode($getContent);

$name = $cdata->name;
$email = $cdata->email;
$subject =$cdata->subject;
$message = $cdata->msg;

$sql = "INSERT INTO contact(name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

if(!empty($name) && !empty($email) && !empty($subject) && !empty($message)){
    if($conn->query($sql) == TRUE)
        echo 1;
    else
        echo 0;
}
else
    echo -1;


?>