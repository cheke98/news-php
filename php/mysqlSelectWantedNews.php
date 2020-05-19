<?php
$option = $_POST['Option'];
if($option==1){
//establecemos la conexión con la base de datos
//revisamos que se haya realizado la conexión
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
//obtenemos las 3 noticias mas recientes
$sql = "SELECT title FROM Article WHERE title LIKE '%Coronavirus%' LIMIT 3";
$wanted = array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $wanted[] = $row;
    } 
     echo $_GET['jsoncallback'].' ( '.json_encode($wanted) . ' );';
}else{
		echo $_GET['jsoncallback'].' ( '.json_encode($wanted) . ' );';
}
	}
}	
?>