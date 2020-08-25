<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");

if(isset($_POST['send'])){

$prikaz=$_POST['prikaz'];


$upit="SELECT id_jelo, naziv,slajder, src,title,alt FROM jelo INNER JOIN slika on jelo.id_jelo=slika.id_proizvod 
WHERE slajder>0 AND prikaz=:prikaz";
$priprema=$konekcija->prepare($upit);
$priprema->bindParam(":prikaz",$prikaz);


try{
	$priprema->execute();
	
		$data=$priprema->fetchAll();
	echo json_encode($data);
}
catch(PDOException $e)
{
	echo ("GRESKA!!!");
}

}

?>