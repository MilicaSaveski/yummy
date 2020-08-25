<?php
@session_start();
include "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;

/*if(!isset($_SESSION['superAdmin'])){
		header("Location: zabranaAdmin.php");
	}

	if($_SESSION['superAdmin']->naziv != "admin"){
		header("Location: zabranaAdmin.php");
	}o
	*/
	if(isset($_POST['send'])){
	        $katId=$_POST['katId'];
            $min=$_POST['spremanjeOd'];
            $max=$_POST['spremanjeDo'];
            $stranica=$_POST['stranica'];
	        $pocetak=$stranica*6;
	$upit =("SELECT p.id_proizvod,p.naziv_proizvoda,p.opis,p.cena, s.src,s.alt,s.title FROM proizvod p INNER JOIN slika s
			  ON p.id_proizvod=s.id_proizvod WHERE s.id_slika_kat=1");
	 $priprema = $konekcija->prepare($upit);    
	  $priprema->bindParam(":id",$katId);
	  $priprema->bindParam(":min",$min);
	  $priprema->bindParam(":max",$max);
	  $priprema->bindParam(":pocetak",$pocetak);
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
        echo $e->getMesaage();
	}
	
	
	}

 



?>