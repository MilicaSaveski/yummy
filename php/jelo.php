<?php
@session_start();
require_once "konekcija.php";
header("Content-type: application/json");
$code = 404;
$data = null;
if(isset($_POST['send']))
{
	
	
	$upit=("SELECT id_jelo,naziv,opis,notes,vreme_pripeme,glas,naziv_kategorija,naziv_drzave,src,alt,title FROM slika INNER JOIN jelo ON slika.id_proizvod=jelo.id_jelo
INNER JOIN drzave ON drzave.id_drzava=jelo.drzava_id INNER JOIN proizvod_kategorija ON proizvod_kategorija.id_proizvod_kategorija=jelo.id_kategorija ORDER BY id_jelo ASC");
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
	$upit="DELETE FROM slika  WHERE id_proizvod=:id";
	 $upit_priprema = $konekcija->prepare($upit);
	$upit_priprema->bindParam(":id",$id);
	$upit1="DELETE FROM jelo  WHERE id_jelo=:id";
	 $upit_priprema1 = $konekcija->prepare($upit1);
	$upit_priprema1->bindParam(":id",$id);
	try{		
			 $code1 = $upit_priprema->execute() ? 201 : 500;
			if($code1==201){
			try{
				 $code = $upit_priprema1->execute() ? 201 : 500;
				http_response_code($code);
			}
			catch(PDOException $e)
			{
				$code=500;
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
	
	$upit="SELECT id_jelo,naziv,opis,notes,vreme_pripeme,glas,naziv_kategorija,naziv_drzave,src,alt,title FROM slika INNER JOIN jelo ON slika.id_proizvod=jelo.id_jelo
INNER JOIN drzave ON drzave.id_drzava=jelo.drzava_id INNER JOIN proizvod_kategorija ON proizvod_kategorija.id_proizvod_kategorija=jelo.id_kategorija WHERE id_jelo=:id";      	
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
		     $code = 500;
			http_response_code($code);
		   
	}
	
	
	
	
}
if(isset($_POST['ubacaj']))
{
	$id=$_POST['insert'];
	$naziv=$_POST['naziv'];
	$opis=$_POST['opis'];
	$drzava=$_POST['drzava'];
	$notes=$_POST['notes'];
	$vreme=$_POST['vreme'];
	$katJelo=$_POST['katJelo'];
	$reNaziv="/^[\w\s]{1,255}$/";
	   $reOpis="/^[\w\s\d\.]{1,400}$/";
	   $errors = [];

  if(!preg_match($reNaziv, $naziv)) {
        array_push($errors, "Naziv nije dobar.");
    }
	
	if(!preg_match($reOpis, $opis)) {
        array_push($errors, "Opis nije dobar.");
    }
	if(!preg_match($reOpis, $notes)) {
        array_push($errors, "Notes nije dobar.");
    }
	if(count($errors) > 0){
		$code = 422;
        $data=$errors;	
	}
	 
	else{
		
		if($id>0)
{
	
	
	

		
$upit="UPDATE jelo
set naziv=:naziv,
notes=:notes,
opis=:opis,
vreme_pripeme=:vreme,
id_kategorija=:kat,
drzava_id=:drzava
WHERE id_jelo=:id";
$upit_unos=$konekcija->prepare($upit);
$upit_unos->bindParam(':naziv',$naziv);
$upit_unos->bindParam(':notes',$notes);
$upit_unos->bindParam(':opis',$opis);
$upit_unos->bindParam(':vreme',$vreme);
$upit_unos->bindParam(':kat',$katJelo);
$upit_unos->bindParam(':drzava',$drzava);
$upit_unos->bindParam(':id',$id);

 try {
           $code = $upit_unos->execute() ? 201 : 500;
		
		
        } catch(PDOException $e) {
            $code = 409;
			
		
        }


}

}


	
	
	
	
		
	echo json_encode ($data);	
	http_response_code($code);			
}
if(isset($_POST['jeloUnos']))
{
	$naziv=$_POST['nazivM'];
	$opis=$_POST['opisM'];
	$notes=$_POST['notesM'];
	$vreme=$_POST['vremeM'];
	$kat=$_POST['katJeloListaM'];
	$drzava=$_POST['drzavaListaM'];
	$slika = $_FILES['slikaInsert'];
		$slika_ime = $slika['name'];
	$slika_tip = $slika['type'];
	$slika_velicina = $slika['size'];
	$tmp_putanja = $slika['tmp_name'];
	$dozvoljeni_formati=array("image/jpg", "image/jpeg", "image/png");
	$reNaziv="/^[\w\s]{1,255}$/";
	   $reOpis="/^[\w\s\d\.]{1,400}$/";
	   $errors = [];
if(!$slika){ array_push($errors,'Nije odabrana slika'); }
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
	   
  if(!preg_match($reNaziv, $naziv)) {
        array_push($errors, "Naziv nije dobar.");
    }
	
	if(!preg_match($reOpis, $opis)) {
        array_push($errors, "Opis nije dobar.");
    }
	if(!preg_match($reOpis, $notes)) {
        array_push($errors, "Notes nije dobar.");
    }
	if(count($errors) > 0){
		$code = 422;
        $data=$errors;	
	}
	else
	{
     $upit="INSERT INTO jelo (naziv,opis,notes,drzava_id,vreme_pripeme,id_kategorija)
	 VALUES(:naziv,:opis,:notes,:drzava,:vreme,:kat)";
$upit_unos=$konekcija->prepare($upit);
	 
$upit_unos->bindParam(':naziv',$naziv);
$upit_unos->bindParam(':notes',$notes);
$upit_unos->bindParam(':opis',$opis);
$upit_unos->bindParam(':vreme',$vreme);
$upit_unos->bindParam(':kat',$kat);
$upit_unos->bindParam(':drzava',$drzava);
	
	try{
		 $ubaceno = $upit_unos->execute() ? 201 : 500;
		if($ubaceno==201)
		{
			
			$id=$konekcija->lastInsertId();
			 $nazivSlike=time().$slika_ime;
			$putanja="img/".$nazivSlike;
			
			   if(move_uploaded_file($tmp_putanja,"../".$putanja)){
		
		
		$upit="insert into slika values('',:src,:title,:alt,:id_proizvod)";
		 
		    $priprema=$konekcija->prepare($upit);
            $priprema->bindParam(":id_proizvod",$id);
            $priprema->bindParam(":src",$putanja);
            $priprema->bindParam(":alt",$slika_ime);
            $priprema->bindParam(":title",$slika_ime);
           
		
			try{
		     $ubaceno=$priprema->execute();
			  $_SESSION['insertSlika']="Uspesno!";
			 header("Location: ../admin.php");
		}
		catch(PDOException $e)
		{
			 $_SESSION['insertSlika']="Doslo je do greske prilikom ubacivanja slike";
		}
		
		   }
			
		}
		
	}
	catch(PDOException $e)
	{
		 $_SESSION['insertSlika']="Doslo je do greske prilikom ubacivanja jela";
	}
		
		
		
	}
	
	
	
	
}
	
	
	
	











?>