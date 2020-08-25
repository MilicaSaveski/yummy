<?php
include "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;

/*if(!isset($_SESSION['admin'])){
		header("Location: zabranaAdmin.php");
	}

	
	*///napred
	if(isset($_POST['send'])){
		
		$idPitanje=$_POST['pitId'];
		
		
		$upit=$konekcija->prepare("SELECT pitanja.id_pitanje,pitanje,odgovor,id_p_o FROM pitanje_odgovor INNER JOIN pitanja ON pitanje_odgovor.id_pitanje=pitanja.id_pitanje WHERE pitanja.id_pitanje=:id ORDER BY pitanja.id_pitanje ASC");
		
		
		
			
	
		$upit->bindParam(':id',$idPitanje);
		
		try{
			$upit->execute();
			if($upit)
			{
				$data=$upit->fetchAll();
				echo json_encode($data);
			}
			else{
				echo "GRESKA 500";
			}
			
		}
		catch(PDOException $e)
		{
			echo $e->getMessage();
		}
		
	}
	
	
	
	
	
	
	//id pitanje
		if(isset($_POST['pitanje2'])){
		
		$idPitanje=$_POST['pitId'];
		$pitanje=$_POST['pitanje2'];
		if($pitanje==2){
		$upit=$konekcija->prepare("SELECT id_pitanje FROM pitanja WHERE id_pitanje>:id ORDER BY id_pitanje ASC");
		}
		if($pitanje==1)
		{
				$upit=$konekcija->prepare("SELECT id_pitanje FROM pitanja WHERE id_pitanje<:id ORDER BY id_pitanje ASC");
	
		}
		$upit->bindParam(':id',$idPitanje);
		
		try{
			$upit->execute();
			if($upit)
			{ 
				$data1=$upit->fetch();
				echo json_encode($data1);
			}
			else{
				echo "GRESKA 500";
			}
			
		}
		catch(PDOException $e)
		{
			echo $e->getMessage();
		}
		
	}
	//ubacivanje odgovora
	if(isset($_POST['idemo'])){
		
		$odg1=$_POST['odg1'];
		$odg2=$_POST['odg2'];
		$odg3=$_POST['odg3'];
		$idKorisnik=$_POST['idKorisnik'];
		
		$upit="INSERT INTO odgovori VALUES('',:odg1,:idKorisnik),('',:odg2,:idKorisnik),('',:odg3,:idKorisnik)";
	
		$priprema=$konekcija->prepare($upit);
		$priprema->bindParam(":odg1",$odg1);
		$priprema->bindParam(":odg2",$odg2);
		$priprema->bindParam(":odg3",$odg3);
		$priprema->bindParam(":idKorisnik",$idKorisnik);
		try{
			$ubaceno=$priprema->execute();
			if($ubaceno)
			{ 
				$data=201;
				echo $data;
			}
			else{
				$data=500;
				echo $data;
			}
			
		}
		catch(PDOException $e)
		{
			echo $e->getMessage();
		}
		
	}
	
	
	
	?>