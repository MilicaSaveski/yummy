<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_namernice,naziv FROM namernice ORDER BY id_namernice ASC");
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
	$upit="DELETE FROM namernice WHERE id_namernice=:id";
	 $upit_priprema = $konekcija->prepare($upit);
	$upit_priprema->bindParam(":id",$id);
	$upitFirst="DELETE FROM jelo_namernice WHERE id_namernice=:id";
	 $upit_pripremaFirst = $konekcija->prepare($upitFirst);
	$upit_pripremaFirst->bindParam(":id",$id);
	try{		
	         $first=$upit_pripremaFirst->execute() ? 200:500;
	   if($first==200)
	   {
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
	
	$upit="SELECT id_namernice,naziv FROM namernice WHERE id_namernice=:id";      	
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
	$namId=$_POST['insert'];
	
	$naziv=$_POST['namernica'];	




if($namId==0)
{

	//insert
	$upit_unos=$konekcija->prepare("INSERT INTO namernice (naziv)
VALUES(:naziv)
");
$upit_unos->bindParam(':naziv',$naziv);




 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
		
        } catch(PDOException $e) {
            $code = 409;
			
		
        }





}
if($namId>0)
{
	
	
	/*$timestamp=time();
$datum=date("Y-m-d H:i:s",$timestamp);	*/
$upit="UPDATE namernice
set naziv=:naziv

WHERE id_namernice=:id";
$upit_unos=$konekcija->prepare($upit);

$upit_unos->bindParam(':naziv',$naziv);
$upit_unos->bindParam(':id',$namId);


	
	 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
        } catch(PDOException $e) {
			
            $code = 409;
		
        }

}	
		
	echo json_encode ($data);	
	http_response_code($code);			
}












?>