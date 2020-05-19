<?php
$email = $_POST['email'];
$comment = $_POST['comment'];
$articleId = $_POST['articleId'];
//establecemos la conexión con la base de datos
//revisamos que se haya realizado la conexión
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
//obtenemos primero el id del usuario que esta logueado
$sql = "SELECT id FROM User WHERE email = '$email'";
$id_usuario="";
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
        foreach($row as $value) $id_user = $value;
    }
    //ya que tenemos el id del usuario logueado, haremos el insert del comentario
    $sql = "INSERT INTO Comment (content,id_article,id_user) VALUES ('$comment','$articleId','$id_user')";
    if(mysqli_query($link, $sql)){
    	$message = "Success";
    	echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
    }else{
    	$message = "Could not add comment";
    	echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
    }
}else{
	$message = "Could not find user id";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}
	}	
?>