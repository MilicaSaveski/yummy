<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_korisnik,ime,prezime,update_at,username,email,datum_registracije,aktivan,naziv_uloge FROM korisnik INNER JOIN uloge ON korisnik.id_uloga_korisnik=uloge.id_uloga ORDER BY id_korisnik ASC");
	  $upit_priprema = $konekcija->query($upit);
	try{
		$rezu=$upit_priprema->execute();
		if($rezu)
		{
		$rezultat=$upit_priprema->fetchAll();
		
       	
			$data=json_encode($rezultat);
			echo $data;
		
			
		}
		
		
	}
	catch(PDOException $e)
	{
			echo $e->getMessage();
		   
	}
	
	
	
	
}
if(isset($_POST['obrisi']))
{
	$id=$_POST['obrisi'];
	$upit="UPDATE korisnik set aktivan=0 WHERE id_korisnik=:id";
	 $upit_priprema = $konekcija->prepare($upit);
	$upit_priprema->bindParam(":id",$id);
	
	try{		
			 $code = $upit_priprema->execute() ? 201 : 500;
			http_response_code($code);
		}
		
		
	
	catch(PDOException $e)
	{
			
		    $code = 500;
			http_response_code($code);
	}
	
	
	
	
}
if(isset($_POST['dohvati']))
{
	$id=$_POST['update'];
	
	$upit="SELECT id_korisnik,korisnik.id_uloga_korisnik,ime,prezime,username,email,datum_registracije,aktivan,naziv_uloge FROM korisnik INNER JOIN uloge ON korisnik.id_uloga_korisnik=uloge.id_uloga WHERE id_korisnik=:id";      	
	$priprema = $konekcija->prepare($upit);

	$priprema->bindParam(":id",$id);
	
	try{
		$rezu=$priprema->execute();
		if($rezu)
		{
		$rezultat=$priprema->fetch();
		
			$data=json_encode($rezultat);
			echo $data;
		
			
		}
		
		
	}
	catch(PDOException $e)
	{
			echo $e->getMessage();
		   
	}
	
	
	
	
}
if(isset($_POST['ubacaj']))
{
	$korisnikId=$_POST['insert'];
	$ime=$_POST['ime'];
	$prezime=$_POST['prezime'];
	$email=$_POST['email'];
	$username=$_POST['username'];
	$aktivan=$_POST['aktivan'];
	$uloga=$_POST['uloga'];
	
	   $errors = [];

    $reIme = "/^[A-ZČĆŠĐŽ][a-zčćšđž0-9]{2,12}$/";
   // $reUsername = "/^[a-zčćšđž0-9]{2,12}$/";
    $rePassword="/^/";
	
	 if(!$ime) {
        array_push($errors, "Polje za ime je obavezno.");
    } elseif(!preg_match($reIme, $ime)) {
        array_push($errors, "Polje za ime nije dobrog formata.");
    }
	 if(!$prezime) {
        array_push($errors, "Polje za ime je obavezno.");
    } elseif(!preg_match($reIme, $prezime)) {
        array_push($errors, "Polje za prezime nije dobrog formata.");
    }
	/* if(!$username) {
        array_push($errors, "Polje username je obavezno.");
    } elseif(!preg_match($reUsername, $username)) {
        array_push($errors, "Polje za username nije dobrog formata.");
    }*/
	   
	   
	   
	
	
	

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, "Email adresa nije u dobrom formatu.");
    }
	
	




if($korisnikId==0)
{
  $password1=md5($_POST['pass']);	
  
	if(strlen($_POST['pass'])<=5)
	{
		array_push($errors,"mali broj karaktera");
	}
	 if(strlen($_POST['pass'])>15)
	 {
		 array_push($errors,"Veliki broj karaktera");
	 }
if(count($errors) > 0){
		$code = 422;
        $data = $errors;
	
	}	
	else{
		
	
	
$timestamp=time();
$datum=date("Y-m-d H:i:s",$timestamp);	
	//insert
	$upit_unos=$konekcija->prepare("INSERT INTO korisnik (ime,prezime,email,username,password,datum_registracije,id_uloga_korisnik,aktivan)
VALUES(:ime,:prezime,:email,:korIme,:password,:datum,:idUloga,:aktiv)
");
$upit_unos->bindParam(':ime',$ime);
$upit_unos->bindParam(':prezime',$prezime);
$upit_unos->bindParam(':korIme',$username);
$upit_unos->bindParam(':password',$password1);
$upit_unos->bindParam(':email',$email);
$upit_unos->bindParam(':datum',$datum);
$upit_unos->bindParam(':idUloga',$uloga);
$upit_unos->bindParam(':aktiv',$aktivan);

 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
		
        } catch(PDOException $e) {
            $code = 409;
			
		
        }




}
}
if($korisnikId>0)
{
	if(count($errors) > 0){
		$code = 422;
        $data=$errors;
		
		
	}	
	else{
	
	$timestamp=time();
$datum=date("Y-m-d H:i:s",$timestamp);	
$upit="UPDATE korisnik
set ime=:ime,
prezime=:prezime,
username=:username,
email=:email,
update_at=:datum,
id_uloga_korisnik=:idUloga,
aktivan=:aktiv
WHERE id_korisnik=:id";
$upit_unos=$konekcija->prepare($upit);

$upit_unos->bindParam(':ime',$ime);
$upit_unos->bindParam(':prezime',$prezime);
$upit_unos->bindParam(':username',$username);
$upit_unos->bindParam(':email',$email);
$upit_unos->bindParam(':datum',$datum);
$upit_unos->bindParam(':idUloga',$uloga);
$upit_unos->bindParam(':aktiv',$aktivan);
$upit_unos->bindParam(':id',$korisnikId);

	
	 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
        } catch(PDOException $e) {
			
            $code = 409;
		
        }
	
	
	
	


	
}	
}
	
	
	
	
	
	
	
	
		
	echo json_encode ($data);	
	http_response_code($code);			
}

	
	
	
	











?>