<?php 

@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
$code=404;
$data=null;

if(isset($_POST['send'])){




$password=$_POST['lozinka'];
$password1=md5($password);
$ime=$_POST['ime'];
$prezime=$_POST['prezime'];
$korIme=$_POST['korIme'];
$email=$_POST['email'];
$timestamp=time();
$datum=date("Y-m-d H:i:s",$timestamp);
$uloga=1;
$aktivan=1;
   $errors = [];

    $reIme = "/^[A-ZČĆŠĐŽ][a-zčćšđž0-9]{2,12}$/";
   
    $rePassword="/^/";
	$reUsername= "/^[\w\d]+$/";
	
	 if(!$ime) {
        array_push($errors, "Polje za ime je obavezno.");
    } elseif(!preg_match($reIme, $ime)) {
        array_push($errors, "Polje za ime nije dobrog formata.");
    }
	 if(!$korIme) {
        array_push($errors, "Polje username je obavezno.");
    } elseif(!preg_match($reUsername, $korIme)) {
        array_push($errors, "Polje username nije dobrog formata.");
    }
	 if(!$prezime) {
        array_push($errors, "Polje za ime je obavezno.");
    } elseif(!preg_match($reIme, $prezime)) {
        array_push($errors, "Polje za prezime nije dobrog formata.");
    }
	/* if(!$korIme) {
        array_push($errors, "Polje username je obavezno.");
    } elseif(!preg_match($reUsername, $korIme)) {
        array_push($errors, "Polje za username nije dobrog formata.");
    }*/
	   
	   
	   
	
	
	if(strlen($password)<=5)
	{
		array_push($errors,"mali broj karaktera");
	}
	 if(strlen($password)>15)
	 {
		 array_push($errors,"Veliki broj karaktera");
	 }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, "Email adresa nije u dobrom formatu.");
    }
	
	

if(count($errors) > 0){
		$code = 422;
        $data = $errors;
		
		
	}
	else{
$upit_unos=$konekcija->prepare("INSERT INTO korisnik (ime,prezime,email,username,password,datum_registracije,id_uloga_korisnik,aktivan)
VALUES(:ime,:prezime,:email,:korIme,:password,:datum,:idUloga,:aktiv)
");
$upit_unos->bindParam(':ime',$ime);
$upit_unos->bindParam(':prezime',$prezime);
$upit_unos->bindParam(':korIme',$korIme);
$upit_unos->bindParam(':password',$password1);
$upit_unos->bindParam(':email',$email);
$upit_unos->bindParam(':datum',$datum);
$upit_unos->bindParam(':idUloga',$uloga);
$upit_unos->bindParam(':aktiv',$aktivan);





try{
	
	$code=$upit_unos->execute() ? 201:500;
	//skraceni if, il je kod 201 ili je kod 500 greska servera
	
	
}


catch(PDOException $e)
{
	$code=409;
}


	}
}


echo json_encode($data);
http_response_code($code);








?>