<?php
include "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;

/*if(!isset($_SESSION['admin'])){
		header("Location: zabranaAdmin.php");
	}

	
	*/
	if(isset($_POST['send'])){
	        $katId=$_POST['katId'];
            $min=$_POST['min'];
            $max=$_POST['max'];
            $stranica=$_POST['stranica'];
	        $pocetak=$stranica*2;
			$prikaz=2;
			
			if(($katId==null || $katId==0) && ($max==null || $max==0))
			{
             $upit=("SELECT id_jelo,naziv,vreme_pripeme AS opis,src,title,alt,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE slika.kat<>2 ORDER BY id_jelo ASC LIMIT $pocetak,$prikaz");
			$priprema = $konekcija->prepare($upit); 	
			}
			
			
			
			if($katId>0 && ($max==null || $max==0)){
			$upit=("SELECT id_jelo,naziv,vreme_pripeme AS opis,src,title,alt,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE id_kategorija=:katId AND  slika.kat<>2 ORDER BY id_jelo ASC LIMIT $pocetak,$prikaz");
			//upit sad ovde onaj koji treba
			
			
			
	 $priprema = $konekcija->prepare($upit);    
	  $priprema->bindParam(":katId",$katId);
			}
		if(($katId==0 || $katId==null) && ($max>0 && $min!=null))	{
				if($min>$max)
			{   $a=$max;
				$max=$min;
				$min=$a;
			}
			
			
			$upit=("SELECT id_jelo,naziv,vreme_pripeme AS opis,src,title,alt,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE vreme_pripeme>=:min AND vreme_pripeme<=:max AND slika.kat<>2 ORDER BY id_jelo ASC LIMIT $pocetak,$prikaz");
	  $priprema = $konekcija->prepare($upit);    
	  $priprema->bindParam(":min",$min);
	  $priprema->bindParam(":max",$max);
		}
		if($katId>0 && $max>0 && $min!=null){
				if($min>$max)
			{   $a=$max;
				$max=$min;
				$min=$a;
			}
			
					$upit=("SELECT id_jelo,naziv,vreme_pripeme AS opis,src,title,alt,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE slika.kat<>2 AND vreme_pripeme>=:min AND vreme_pripeme<=:max AND id_kategorija=:katId ORDER BY id_jelo ASC LIMIT $pocetak,$prikaz");
    $priprema = $konekcija->prepare($upit);    
	  $priprema->bindParam(":katId",$katId);	 
	 $priprema->bindParam(":min",$min);
	  $priprema->bindParam(":max",$max);
		
		}
	
	try{
		$rezultat=$priprema->execute();
		 if($rezultat!=null && $rezultat!=""){
		
            $data1=$priprema->fetchAll();
            $data=json_encode($data1);			 
              echo $data;
         
        }
		
		else{
            echo "upit nije ok";
        }
		
		
	}
	catch(PDOException $x){
		echo $x->getMessage();
	}
	
	
	}

 



?>