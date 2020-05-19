<?php
$id = $_POST['id'];
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$sql = "SELECT COUNT(*) AS comments FROM Comment WHERE id_article = '$id'";
$articles = array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $articles[] = $row;
    } 
     echo $_GET['jsoncallback'].' ( '.json_encode($articles) . ' );';
}else{
     echo $_GET['jsoncallback'].' ( '.json_encode($articles) . ' );';
		}
	}	
?>