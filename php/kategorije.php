<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_proizvod_kategorija,naziv_kategorija FROM proizvod_kategorija ORDER BY id_proizvod_kategorija ASC");
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
	$upit="DELETE FROM proizvod_kategorija WHERE id_proizvod_kategorija=:id";
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
	
	$upit="SELECT id_proizvod_kategorija,naziv_kategorija FROM proizvod_kategorija WHERE id_proizvod_kategorija=:id";      	
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
//insert/update
if(isset($_POST['ubacaj']))
{
	$katId=$_POST['insert'];
	
	$naziv=$_POST['kategorija'];	




if($katId==0)
{

	//insert
	$upit_unos=$konekcija->prepare("INSERT INTO proizvod_kategorija (naziv_kategorija)
VALUES(:naziv)
");
$upit_unos->bindParam(':naziv',$naziv);




 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
		
        } catch(PDOException $e) {
            $code = 409;
			
		
        }





}
if($katId>0)
{
	
	
	/*$timestamp=time();
$datum=date("Y-m-d H:i:s",$timestamp);	*/
$upit="UPDATE proizvod_kategorija
set naziv_kategorija=:naziv

WHERE id_proizvod_kategorija=:id";
$upit_unos=$konekcija->prepare($upit);

$upit_unos->bindParam(':naziv',$naziv);
$upit_unos->bindParam(':id',$katId);


	
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