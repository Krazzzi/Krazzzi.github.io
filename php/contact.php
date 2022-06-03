<?php
  
if(isset($_POST['submit'])) 
    $name = $_POST["name"];
    $mailFrom = $_POST["mail"];
    $message = $_POST["message"];
      
    $recipient = "repair@krazzzi.me";
 
    $headers  = "From: ".$mailFrom;
    $txt = "You have recieved an e-mail form ".$name.".\n\n".$message;


    mail($recipient, $txt, $headers);

    header("Location: ../index.php?mailsend");
      
?>