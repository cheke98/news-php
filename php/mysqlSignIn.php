<?php
//establecemos la conexión con la base de datos
//revisamos que se haya realizado la conexión
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$email = $_POST['email'];
$pwd = $_POST['pwd'];
//comprobaremos que exista el correo y contraseña en la base de datos
$sql = "SELECT id, name, user_type FROM User WHERE email='$email' AND pwd = '$pwd'";
$result = mysqli_query($link, $sql);
$message = array();
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $message[] = $row;
    } 
	$message[1] = "Success";
	echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}else{
		$message[1] = "Error: Could not login";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}
	}
?>