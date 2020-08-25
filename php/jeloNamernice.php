<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_jelo_namernice,jelo.naziv,namernice.naziv AS namernica FROM jelo_namernice INNER JOIN jelo ON jelo_namernice.id_jelo=jelo.id_jelo INNER JOIN namernice ON jelo_namernice.id_namernice=namernice.id_namernice  ORDER BY jelo_namernice.id_jelo ASC");
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
	$upit="DELETE FROM jelo_namernice WHERE id_jelo_namernice=:id";
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
if(isset($_POST['ubacaj']))
{
	
	$jelo=$_POST['jelo'];
	$nam=$_POST['namernica'];
	
	$upit="INSERT INTO jelo_namernice (id_jelo,id_namernice)
	VALUES(:jelo,:nam)";
	
	$priprema=$konekcija->prepare($upit);
	$priprema->bindParam(":jelo",$jelo);
	$priprema->bindParam(":nam",$nam);
	try{
		$code=$priprema->execute()? 201:500 ;
	
	}
	catch(PDOException $e)
	{
		$code=409;
	
	}
echo json_encode ($data);	
	http_response_code($code);	
	
}










?>