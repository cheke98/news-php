<?php
$id = $_POST['id'];
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$sql = "SELECT r.id, r.id_user_reporter, r.id_user_channel, r.accepted, ur.name FROM Request r INNER JOIN User ur ON r.id_user_reporter = ur.id WHERE r.id_user_channel = '$id' AND r.accepted = FALSE";
$requests = array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $requests[] = $row;
    } 
     echo $_GET['jsoncallback'].' ( '.json_encode($requests) . ' );';
}else{
     echo $_GET['jsoncallback'].' ( '.json_encode($requests) . ' );';
		}
	}	
?>