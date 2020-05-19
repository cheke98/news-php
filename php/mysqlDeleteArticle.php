<?php
$id = $_POST['id'];
//establecemos la conexión con la base de datos
//revisamos que se haya realizado la conexión
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
	$sql = "DELETE FROM Comment WHERE id_article = '$id'";
	if(mysqli_query($link, $sql)){
    $sql = "DELETE FROM Article WHERE id = '$id'";
    if(mysqli_query($link, $sql)){
    	$message = "La noticia ha sido borrada exitosamente";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
    }else{
	$message = "Error: cannot delete article";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
	}
}else{
	$message = "Error: cannot delete comments";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}

	}
?>