<?php
$id = $_POST['id'];
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$sql = "DELETE FROM Request WHERE id='$id'";
if(mysqli_query($link, $sql)){
	$message = "Request Deleted";
	echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
	}else{
		$message = "ERROR: Could not delete request";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
	}
}	
?>