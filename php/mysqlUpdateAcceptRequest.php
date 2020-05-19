<?php
$id = $_POST['id_req'];
$id_user = $_POST['id_user'];
$id_admin = $_POST['id_admin'];
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$sql = "UPDATE Request SET accepted = TRUE WHERE id='$id'";
if(mysqli_query($link, $sql)){
$sql = "UPDATE User SET id_user_channel = '$id_admin' WHERE id='$id_user'";
if(mysqli_query($link, $sql)){
		$sql = "DELETE FROM Request WHERE id_user_reporter='$id_user'";
		if(mysqli_query($link, $sql)){
			$message = "Request Accepted";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
		}
}else{
	$message = "Error: cannot accept request";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}   	
    }else{
	$message = "Error: cannot accept request";
		echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
	}
}	
?>