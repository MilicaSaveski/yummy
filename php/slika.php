<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_slika,src,alt,title FROM slika ORDER BY id_slika ASC");
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
	$upit="DELETE FROM slika WHERE id_slika=:id";
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
	
	$upit="SELECT id_slika,src,alt,title,naziv,id_proizvod FROM slika INNER JOIN jelo 
ON slika.id_proizvod=jelo.id_jelo WHERE id_slika=:id";      	
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
if(isset($_POST['btnA']))
{
        $alt=$_POST['altM'];
		$title=$_POST['titleM'];
		$reAlt="/^[\w\s\.\-\_\d]{1,30}$/";
		$id_proizvod=$_POST['proizvodListaM'];
		$slika = $_FILES['slikaUpdate'];
		$slika_ime = $slika['name'];
		$id=$_POST['hiddenSlika'];
	$slika_tip = $slika['type'];
	$slika_velicina = $slika['size'];
	$tmp_putanja = $slika['tmp_name'];
	$dozvoljeni_formati=array("image/jpg", "image/jpeg", "image/png");
	$errors = [];
	if(!preg_match($reAlt,$alt)){
			array_push($errors,"Alt nije u redu");
		}
		if(!preg_match($reAlt,$title)){
			array_push($errors,"Title nije u redu");
		}
	
	
	if($slika_velicina==0){
	
	if(count($errors)>0){
			$_SESSION['greske']=$errors;
	
	     header("Location: ../admin.php");
	   
	}
	else{
		$upit="UPDATE slika set
		title=:title,
		alt=:alt
		WHERE id_slika=:id";
		 
		  $priprema=$konekcija->prepare($upit);
            $priprema->bindParam(":alt",$alt);
            $priprema->bindParam(":title",$title);
		     $priprema->bindParam(":id",$id);
			 try{
				  $ubaceno=$priprema->execute();
			  $_SESSION['insertSlika']="Uspesno!";
			 header("Location: ../admin.php");
			 }
			 catch(PDOException $e)
			 {
				 $_SESSION['insertSlika']="Doslo je do greske prilikom promene";
				   header("Location:../admin.php");
			 }
	}
	
	
	}
	 else{
	 if(!in_array($slika_tip,$dozvoljeni_formati)){
			array_push($errors,'Nije odgovarajuci tip podatka za prvu sliku');
	 }}
	 
		if($slika_velicina>4500000){
			array_push($errors,'podatak je prevelik');
		}
		if($slika_ime=='slika'){
		array_push($errors,"podatak ima neispravno ime");
		}
	if(count($errors)>0){
			$_SESSION['greske']=$errors;
	
	     header("Location: ../admin.php");
	   
	}
else{
	
	
	 $nazivSlike=time().$slika_ime;
			$putanja="img/".$nazivSlike;
            if(move_uploaded_file($tmp_putanja,"../".$putanja)){
		
		
		$upit1="UPDATE slika set
			alt=:alt,
			src=:src,
			title=:title,
			id_proizvod=:id_proizvod
			
			WHERE id_slika=:id";		 
		   $priprema=$konekcija->prepare($upit1);
            $priprema->bindParam(":src",$putanja);
            $priprema->bindParam(":alt",$alt);
            $priprema->bindParam(":title",$title);
            $priprema->bindParam(":id_proizvod",$id_proizvod);
		   $priprema->bindParam(":id",$id);
	         try{	
		     $ubaceno=$priprema->execute();
			  $_SESSION['insertSlika']="Uspesno!";
			 header("Location: ../admin.php");
			 }
			 catch(PDOException $e)
			 {
				 echo $e->getMessage();
				  $_SESSION['insertSlika']="Doslo je do greske prilikom ubacivanja slike";
				   //header("Location:../admin.php");
			 }
		   }
	
	
	
}
	
	
	
	
}











?>