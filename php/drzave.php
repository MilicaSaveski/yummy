<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_drzava,naziv_drzave,kontinent.naziv FROM drzave INNER JOIN kontinent ON drzave.kontinent_id=kontinent.id_kontinent ORDER BY id_drzava ASC");
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
	$upit="DELETE FROM drzave WHERE id_drzava=:id";
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
	
	$upit="SELECT id_drzava,naziv_drzave,kontinent_id,kontinent.naziv FROM drzave INNER JOIN kontinent ON drzave.kontinent_id=kontinent.id_kontinent WHERE id_drzava=:id";      	
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
	$drzavaId=$_POST['insert'];
	
	$kontinent=$_POST['kontinent'];	
	$naziv=$_POST['drzava'];	




if($drzavaId==0)
{
 


		
	
	

	//insert
	$upit_unos=$konekcija->prepare("INSERT INTO drzave (naziv_drzave,kontinent_id)
VALUES(:naziv,:kontinent)
");
$upit_unos->bindParam(':naziv',$naziv);
$upit_unos->bindParam(':kontinent',$kontinent);



 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
		
        } catch(PDOException $e) {
			
            $code = 409;
			
		
        }





}
if($drzavaId>0)
{
	
	
	/*$timestamp=time();
$datum=date("Y-m-d H:i:s",$timestamp);	*/
$upit="UPDATE drzave
set naziv_drzave=:naziv,
kontinent_id=:kontinent

WHERE id_drzava=:id";
$upit_unos=$konekcija->prepare($upit);

$upit_unos->bindParam(':naziv',$naziv);
$upit_unos->bindParam(':kontinent',$kontinent);
$upit_unos->bindParam(':id',$drzavaId);


	
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