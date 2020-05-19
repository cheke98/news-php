<?php
$id = $_POST['id'];
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$sql = "SELECT COUNT(c.id) AS comments FROM Comment c INNER JOIN Article a ON c.id_article = a.id WHERE a.id_user_reporter = '$id'";
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