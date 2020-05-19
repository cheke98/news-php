<?php
$id_user = $_POST['id_user'];
$id_channel = $_POST['id_admin'];
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$sql = "SELECT * FROM Request WHERE id_user_reporter = '$id_user' AND id_user_channel = '$id_channel'";
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	$message = "Already Sent the Request";
     echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
}else{
$sql = "INSERT INTO Request (id_user_reporter,id_user_channel) VALUES ('$id_user','$id_channel')";
    if(mysqli_query($link, $sql)){
    	$message = "Success";
    	echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
    }else{
    	$message = "ERROR: Could not insert";
     echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
			}
		}
	}	
?>