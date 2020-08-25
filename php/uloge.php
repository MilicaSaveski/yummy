<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_uloga,naziv_uloge FROM uloge ORDER BY id_uloga ASC");
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
	$upit="DELETE FROM uloge WHERE id_uloga=:id";
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
	
	$upit="SELECT id_uloga,naziv_uloge FROM uloge WHERE id_uloga=:id";      	
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
	$ulogaId=$_POST['insert'];
	
	$uloga=$_POST['uloga'];	




if($ulogaId==0)
{	

	//insert
	$upit_unos=$konekcija->prepare("INSERT INTO uloge (naziv_uloge)
VALUES(:uloga)
");
$upit_unos->bindParam(':uloga',$uloga);



 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
		
        } catch(PDOException $e) {
			
            $code = 409;
			
		
        }





}
if($ulogaId>0)
{
	
	
	/*$timestamp=time();
$datum=date("Y-m-d H:i:s",$timestamp);	*/
$upit="UPDATE uloge
set naziv_uloge=:uloga

WHERE id_uloga=:id";
$upit_unos=$konekcija->prepare($upit);

$upit_unos->bindParam(':uloga',$uloga);
$upit_unos->bindParam(':id',$ulogaId);


	
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