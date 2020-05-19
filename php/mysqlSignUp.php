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
$name = $_POST['name'];
$email = $_POST['email'];
$pwd = $_POST['pwd'];
$user_type = $_POST['user_type'];
//comprobaremos que no exista el correo en la base de datos
$sql = "SELECT * FROM User WHERE email='$email'";
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	$message = "Error: Email already exists";
	echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}else{
	if($user_type=="reporter"){
		$sql = "INSERT INTO User (name,email,pwd,user_type,id_user_channel) VALUES ('$name','$email','$pwd','$user_type','7')";
	}else {
		$sql = "INSERT INTO User (name,email,pwd,user_type) VALUES ('$name','$email','$pwd','$user_type')";
	}
	if(mysqli_query($link, $sql)){
		$message = "Success";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
	}else{
		$message = "Error: Could not add user";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
	}
}
	}
?>