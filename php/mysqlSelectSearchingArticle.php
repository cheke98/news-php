<?php
$searching = $_POST['searching'];
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $message;
// Close connection
mysqli_close($link);

}else{
$sql = "SELECT a.title, a.subtitle, a.img_src, ur.name FROM Article a INNER JOIN User ur ON a.id_user_reporter = ur.id WHERE a.title LIKE '%$searching%' OR a.subtitle LIKE '%$searching%' OR a.content LIKE '%$searching%'";
$news=array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	  while ($row = $result->fetch_assoc())
    {
       $news[] = $row;
    } 
   echo $_GET['jsoncallback'].' ( '.json_encode($news) . ' );';
}else{
	echo $_GET['jsoncallback'].' ( '.json_encode($news) . ' );';
}
	}
?>