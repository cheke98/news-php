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
$sql = "SELECT c.content, u.name AS 'by' FROM Comment c INNER JOIN Article a ON a.id = c.id_article INNER JOIN User ur ON ur.id = a.id_user_reporter INNER JOIN User  u ON c.id_user = u.id WHERE a.id = '$id'";
$comments = array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $comments[] = $row;
    } 
     echo $_GET['jsoncallback'].' ( '.json_encode($comments) . ' );';
}else{
		echo $_GET['jsoncallback'].' ( '.json_encode($comments) . ' );';
}
	}
?>