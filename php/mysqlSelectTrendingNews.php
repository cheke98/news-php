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
//obtenemos las 4 noticias mas populares
$sql = "SELECT a.title, a.subtitle, a.content, a.img_src, a.likes, u.name FROM Article a INNER JOIN User u ON a.id_user_reporter = u.id ORDER BY a.likes DESC LIMIT 4";
$trending = array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $trending[] = $row;
    } 
     echo $_GET['jsoncallback'].' ( '.json_encode($trending) . ' );';
}else{
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}
	}
}	
?>