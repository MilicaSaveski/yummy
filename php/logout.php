<?php
@session_start();

if(isset($_SESSION['korisnik'])){
	
	unset($_SESSION['korisnik']);
	session_destroy();
	header("Location: ../index.php");
}
elseif(isset($_SESSION['admin'])){
	
	unset($_SESSION['admin']);
	session_destroy();
	header("Location: ../index.php");
}

else{
	header("Location: ../index.php");
}
?>