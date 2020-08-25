<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_p_o,pitanje,odgovor FROM pitanje_odgovor INNER JOIN pitanja ON pitanje_odgovor.id_pitanje=pitanja.id_pitanje  ORDER BY id_p_o ASC");
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
	$upit="DELETE FROM pitanje_odgovor WHERE id_p_o=:id";
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
	
	$upit="SELECT id_p_o,pitanje,odgovor FROM pitanje_odgovor INNER JOIN pitanja ON pitanje_odgovor.id_pitanje=pitanja.id_pitanje WHERE id_p_o=:id";      	
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
//unos izmena

if(isset($_POST['ubacaj']))
{
	$id=$_POST['insert'];
	$pitanjeId=$_POST['pitanje'];
	$naziv=$_POST['odgovor'];	




if($id==0)
{

	//insert
	$upit_unos=$konekcija->prepare("INSERT INTO pitanje_odgovor (id_pitanje,odgovor)
VALUES(:pitanjeId,:naziv)
");
$upit_unos->bindParam(':naziv',$naziv);
$upit_unos->bindParam(':pitanjeId',$pitanjeId);




 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
		
        } catch(PDOException $e) {
			
            $code = 409;
			
		
        }





}
if($id>0)
{
	
	
	/*$timestamp=time();
$datum=date("Y-m-d H:i:s",$timestamp);	*/
$upit="UPDATE pitanje_odgovor
set odgovor=:naziv
WHERE id_p_o=:id";
$upit_unos=$konekcija->prepare($upit);

$upit_unos->bindParam(':naziv',$naziv);
$upit_unos->bindParam(':id',$id);


	
	 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
        } catch(PDOException $e) {
			$e->getMessage();
            $code = 409;
		
        }

}	
		
	echo json_encode ($data);	
	http_response_code($code);			
}










?>