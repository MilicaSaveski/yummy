<?php

@session_start();

include "konekcija.php";

if(isset($_POST['signin'])){
	$errors=[];
	$email = $_POST['your_name'];
	$password1 =$_POST['your_pass'];
    $rePassword = "/^[A-z0-9\.]{6,20}$/";
	$password=md5($password1);
	
	
	if(!$password1) {
            array_push($errors, "Polje za lozinku je obavezno.");
    } 
    
	 if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, "Email adresa nije u dobrom formatu.");
    } 
	
	
	
	if(count($errors)==0){
		
	
	
	
	$upit = "SELECT * FROM korisnik k INNER JOIN uloge u ON k.id_uloga_korisnik = u.id_uloga WHERE email = :email AND password=:password";
//AND aktivan=1;
	$priprema = $konekcija->prepare($upit);

	$priprema->bindParam(":email", $email);
    $priprema->bindParam(":password", $password);

	try {
		$priprema->execute();

		if($priprema->rowCount() == 1){
			

			$korisnik = $priprema->fetch(); 
			 

			

			if($korisnik->naziv_uloge == "admin"){
				$_SESSION['admin'] = $korisnik;
				header("Location: ../admin.php");
			}

			elseif($korisnik->naziv_uloge == "korisnik"){
				$_SESSION['korisnik'] = $korisnik;
				header("Location: ../index.php?page=best");
			}
		} else {
			 $_SESSION['greske']="Korisnik nije pronadjen!";
			   
			 header("Location: ../index.php?page=login");
			
		}
	}
	
	catch(PDOException $x){
		echo $x->getMessage();
	}
	}
	





}
else{
	//ispisi greske prilikom logovanja
}






?>