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
$sql = "SELECT likes FROM Article WHERE id='$id'";
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	  while ($row = $result->fetch_assoc())
    {
        foreach($row as $value) $likes = $value;
    }
    //obtendremos la fecha original del articulo
    $sql = "SELECT creation_date FROM Article WHERE id='$id'";
    $result = mysqli_query($link, $sql);
    if (mysqli_num_rows($result) > 0){
    	 while ($row = $result->fetch_assoc())
    {
        foreach($row as $value) $creation_date = $value;
    }
    $likes = $likes+1;
    $sql = "UPDATE Article SET likes = '$likes', creation_date = '$creation_date' WHERE id = '$id'";
    if(mysqli_query($link, $sql)){
    	$message = "You left a like";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
    }else{
	$message = "Error: cannot update likes";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}
    }else{
    	$message = "Error: cannot get date";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
    }
    
}else{
	$message = "Error: cannot update likes";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}
	}
?>