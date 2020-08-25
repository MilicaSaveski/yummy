<?php
include "konekcija.php";
header("Content-type: application/json");
$code = 404;
$data = null;

	if(isset($_POST['send'])){
	        $email=$_POST['email'];
			$name=$_POST['name'];
			$subject=$_POST['subject'];
			$textPor=$_POST['textPor'];
			  $errors=[];
			  $reName = "/^[A-ZČĆŠĐŽ][a-zčćšđž0-9]{2,12}$/";
			
			 if(!$name) {
        array_push($errors, "Polje za name je obavezno.");
    } elseif(!preg_match($reName, $name)) {
        array_push($errors, "Name nije dobrog formata.");
    }
			
			
			if($subject==null)
			{
				$subject="0";
			}
			if(strlen($textPor)==0)
			{
				array_push($errors,"Niste uneli tekst poruke");
			}
          
           if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, "Email adresa nije u dobrom formatu.");
    } 
	
	
	
	
	
	if(count($errors) > 0){
		$code = 422;
        $data=$errors;
		
	}
	else {
			
	$upit="INSERT INTO poruke_korisnika VALUES ('',:email,:subject,:text_poruke,:name)";
     $priprema=$konekcija->prepare($upit);
     $priprema->bindParam(":email",$email);	 
	  $priprema->bindParam(":subject",$subject);
     $priprema->bindParam(":text_poruke",$textPor);	  
     $priprema->bindParam(":name",$name);	 
    
    	 
	  try {
           $code = $priprema->execute() ? 201 : 500;
		 
        } catch(PDOException $e) {
           $code = 500;
			//echo $e->getMessage();
        }
	
	}

 
	}
	
http_response_code($code);
 echo json_encode($data);
?>