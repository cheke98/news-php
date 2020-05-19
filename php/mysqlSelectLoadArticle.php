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
$title = $_COOKIE['currentArticle'];
$sql = "SELECT a.id,a.title, a.subtitle, a.content, a.img_src, a.creation_date, a.likes, ur.name AS 'reporter', uc.name AS 'channel', ur.email AS 'email_reporter', uc.email AS 'email_channel', ur.id AS 'id_user_reporter', uc.id AS 'id_user_channel'  FROM Article a INNER JOIN User ur ON a.id_user_reporter = ur.id INNER JOIN User uc ON a.id_user_channel = uc.id WHERE a.title = '$title'";
$article = array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $article[] = $row;
    } 
     echo $_GET['jsoncallback'].' ( '.json_encode($article) . ' );';
}else{
		echo $_GET['jsoncallback'].' ( '.json_encode($article) . ' );';
}
	}
}	
?>