<?php
@session_start();
include "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;

/*

	if($_SESSION['superAdmin']->naziv != "admin"){
		header("Location: zabranaAdmin.php");
	}o
	*/
	if(isset($_POST['send'])){
	$rec=$_POST['otkucano'];
	$reRec="/^[\w\s]{1,30}$/";
	//regExp za samo recii da mogu da budu
	$upit =("SELECT id_jelo,naziv,opis,src,title,alt,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija ORDER BY id_jelo ASC");
	 $priprema = $konekcija->prepare($upit);   
     $priprema->bindParam(":otkucano",$rec);	 
	try{
		$rezultat=$priprema->execute();
		 if($rezultat){
            $data=$priprema->fetchAll();
            echo json_encode($data);
           //$code=201;
        }else{
            echo "doslo je do greske";
			//$code=500;
        }
		
		
	}
	catch(PDOException $e){
        echo $e->getMessage();
	}
	
	
	}

 



?>