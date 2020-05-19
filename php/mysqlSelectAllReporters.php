<?php
$id = $_POST['id'];
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$sql = "SELECT id FROM User WHERE id != '$id'";
$reporters = array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $reporters[] = $row;
    } 
     echo $_GET['jsoncallback'].' ( '.json_encode($reporters) . ' );';
}else{
     echo $_GET['jsoncallback'].' ( '.json_encode($reporters) . ' );';
		}
	}	
?>