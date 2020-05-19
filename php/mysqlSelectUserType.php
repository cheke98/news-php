<?php
$email = $_POST['email'];
//establecemos la conexión con la base de datos
//revisamos que se haya realizado la conexión
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{

$sql = "SELECT user_type FROM User WHERE email ='$email'";
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	  while ($row = $result->fetch_assoc())
    {
        foreach($row as $value) $user_type = $value;
    }
		echo $_GET['jsoncallback'].' ( '.json_encode($user_type) . ' );';
}else{
    	$message = "Error: cannot get id_user_channel";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
    }
    
	}
?>