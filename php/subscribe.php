<?php
include "konekcija.php";
header("Content-type: application/json");
$code = 404;
$data = null;

	if(isset($_POST['poslato'])){
	        $email=$_POST['email'];
            $errors=[];
           if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, "Email adresa nije u dobrom formatu.");
    } 
	if(count($errors) > 0){
		$code = 422;
        $data=$errors;
		  
		
	}
	else {
			
	$upit="INSERT INTO subsrcibe VALUES ('',:email)";
     $priprema=$konekcija->prepare($upit);
     $priprema->bindParam(":email",$email);	 
	  try {
           $code = $priprema->execute() ? 201 : 500;
		 
        } catch(PDOException $e) {
           $code = 500;
			//$e->getMessage();
        }
	
	}
echo json_encode($data);
 		   http_response_code($code);

}
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_s,email FROM subsrcibe ORDER BY id_s ASC");
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
	$upit="DELETE FROM subsrcibe WHERE id_s=:id";
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

?>