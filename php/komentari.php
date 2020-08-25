<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	$id=$_POST['id'];
	
	$upit=("SELECT id_komentar,roditelj_id,tekst,korisnik_id,username,vreme FROM komentari INNER JOIN korisnik ON komentari.korisnik_id=korisnik.id_korisnik WHERE id_recept=:id ORDER BY roditelj_id ASC");
	$upit_priprema=$konekcija->prepare($upit);
	$upit_priprema->bindParam(":id",$id);
	
	
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

if(isset($_POST['glasanje']))
{
	
	$vrednost=$_POST['vrednost'];
	$idJelo=$_POST['id'];
	$upit="UPDATE jelo set glas=glas+:vrednost,brojGlasanja=brojGlasanja+1
	WHERE id_jelo=:id";
	
	$priprema=$konekcija->prepare($upit);
	$priprema->bindParam(":id",$idJelo);
	$priprema->bindParam(":vrednost",$vrednost);
	
	try{
		$code=$priprema->execute()? 201:500;
		if($code==201)
		{
			$upit1="SELECT brojGlasanja, (glas/brojGlasanja)AS avg FROM jelo WHERE id_jelo=:id";
			$priprema1=$konekcija->prepare($upit1);
			$priprema1->bindParam(":id",$idJelo);
			try{
				$priprema1->execute();
				$data=$priprema1->fetch();
				echo json_encode($data);
			}
			catch(PDOException $e)
			{
				$code=500;
				
			}
			
		}
		
		
	}
	catch(PDOException $e)
	{
		echo $e->getMessage;
		$code=500;
	
	}
	
	http_response_code($code);
}

if(isset($_POST['brisanje'])){
	
	$id=$_POST['id'];
	$nula=0;
	$upit="UPDATE komentari set roditelj_id=:nula WHERE roditelj_id=:id";
	$upit2="DELETE FROM komentari WHERE id_komentar=:id";
	$upitPriprema=$konekcija->prepare($upit);
	$upitPriprema2=$konekcija->prepare($upit2);
	$upitPriprema->bindParam(":id",$id);
	$upitPriprema->bindParam(":nula",$nula);
	$upitPriprema2->bindParam(":id",$id);
	
	try{
			$upitPriprema->execute();
			if($upitPriprema){
		$data=$upitPriprema2->execute()? 200:500;
			echo $data;
			}
		
	
	}
	catch(PDOException $e)
	{
		//echo $e->getMessage();
		$code=500;
		http_response_code($code);
	}
	
	
}








?>