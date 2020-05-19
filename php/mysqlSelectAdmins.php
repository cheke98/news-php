<?php
$option = $_POST['option'];
if($option==1){
$link = mysqli_connect("localhost","root","","News");
if($link == false){
	$message = "cannot connect";
echo $_GET['jsoncallback'].' ( '.json_encode($message) . ' );';
// Close connection
mysqli_close($link);

}else{
$sql = "SELECT id, name FROM User WHERE user_type = 'admin'";
$admins = array();
$result = mysqli_query($link, $sql);
if (mysqli_num_rows($result) > 0){
	 while ($row = $result->fetch_assoc())
    {
       $admins[] = $row;
    } 
     echo $_GET['jsoncallback'].' ( '.json_encode($admins) . ' );';
}else{
     echo $_GET['jsoncallback'].' ( '.json_encode($admins) . ' );';
		}
	}
}	
?>