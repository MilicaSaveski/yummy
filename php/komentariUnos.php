<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	$idOdgovor=$_POST['idOdgovor'];
	$idKorisnik=$_POST['idKorisnik'];
	$tekst=$_POST['tekst'];
	$idRecept=$_POST['idRecept'];
	
	
		
	 $timestamp=time();
		$vremekreiranja=date("Y-m-d H:i:s",$timestamp);
	
	$upit="INSERT INTO komentari VALUES('',:roditeljId,:tekst,:korId,:recId,:vreme)";
	$upit_priprema=$konekcija->prepare($upit);
	$upit_priprema->bindParam(":roditeljId",$idOdgovor);
	$upit_priprema->bindParam(":tekst",$tekst);
	$upit_priprema->bindParam(":korId",$idKorisnik);
	$upit_priprema->bindParam(":recId",$idRecept);
	$upit_priprema->bindParam(":vreme",$vremekreiranja);
	
	
	try{
		$rezultat=$upit_priprema->execute();
		
		if($rezultat)
		{
			$id_proizvod=$konekcija->lastInsertId();
			$upit=("SELECT id_komentar,roditelj_id,tekst,korisnik_id,username,vreme FROM komentari INNER JOIN korisnik ON komentari.korisnik_id=korisnik.id_korisnik WHERE id_komentar=:id");
	$upit_priprema=$konekcija->prepare($upit);
	$upit_priprema->bindParam(":id",$id_proizvod);
	try
	{
		 $rezu=$upit_priprema->execute();
		 if($rezu)
		 {
			 $data=$upit_priprema->fetch();
		echo json_encode($data);
		 }
		 else{
			 echo $data=404;
		 }
		 
		
	}
	catch(PDOException $e)
	{
		echo $e->getMessage();
	}
	  
		}
		else
		{
			 $_SESSION['insertLos']="Doslo je do greske prilikom ostavljanja komentara";
		}
		
	}
	catch(PDOException $e)
	{
			echo $e->getMessage();
		
	}	
		
		
		
		
	
	
	
	
	
	
	
	  







}



?>