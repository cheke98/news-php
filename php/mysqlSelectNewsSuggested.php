<?php
$option = $_POST['option'];
if($option==1){
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $message;
// Close connection
mysqli_close($link);

}else{
$sql = "SELECT a.title, a.subtitle, a.img_src, ur.name FROM Article a INNER JOIN User ur ON a.id_user_reporter = ur.id WHERE a.editorspick=TRUE ORDER BY likes DESC LIMIT 3";
$suggestions=array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	  while ($row = $result->fetch_assoc())
    {
       $suggestions[] = $row;
    } 
   echo $_GET['jsoncallback'].' ( '.json_encode($suggestions) . ' );';
}else{
	echo $_GET['jsoncallback'].' ( '.json_encode($suggestions) . ' );';
}
	}
}
?>