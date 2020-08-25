<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_jelo_nacin,naziv,nacin1 FROM jelo_nacin INNER JOIN jelo ON jelo_nacin.id_jelo=jelo.id_jelo INNER JOIN nacin_spremanja ON jelo_nacin.id_nacin=nacin_spremanja.id_nacin  ORDER BY jelo_nacin.id_jelo ASC");
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
	$upit="DELETE FROM jelo_nacin WHERE id_jelo_nacin=:id";
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
	$code=404;
	$jelo=$_POST['jelo'];
	$spremanje=$_POST['spremanje'];
	
	$upit="INSERT INTO jelo_nacin (id_jelo,id_nacin)
	VALUES(:jelo,:spremanje)";
	
	$priprema=$konekcija->prepare($upit);
	$priprema->bindParam(":jelo",$jelo);
	$priprema->bindParam(":spremanje",$spremanje);
	try{
		$code=$priprema->execute()? 201:500 ;

	}
	catch(PDOException $e)
	{
		$code=409;
		
	}
    echo json_encode($data);
	http_response_code($code);
}










?>