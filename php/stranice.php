<?php
include "konekcija.php";
header("Content-type: application/json");
//$code = 404;
$data = null;

/*if(!isset($_SESSION['admin'])){
		header("Location: zabranaAdmin.php");
	}

	//ubaciti ako je min=max
	*/
	if(isset($_POST['send'])){
	        $katId=$_POST['katId'];
            $min=$_POST['min'];
            $max=$_POST['max'];
			
			
			if(($katId==null || $katId==0) && ($max==null || $max==0))
			{
             $upit=("SELECT COUNT(id_jelo) AS broj FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija");
			$priprema = $konekcija->prepare($upit); 	
			}
			
			
			if($katId>0 && ($max==null || $max==0)){
			$upit=("SELECT COUNT(id_jelo) AS broj FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE id_kategorija=:katId");
			//upit sad ovde onaj koji treba
			
			
			
	 $priprema = $konekcija->prepare($upit);    
	  $priprema->bindParam(":katId",$katId);
			}
		if(($katId==0 || $katId==null) && ($max>0 && $min!=null)){
			if($min>$max)
			{   $a=$max;
				$max=$min;
				$min=$a;
			}
			$upit=("SELECT COUNT(id_jelo) AS broj FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE vreme_pripeme>=:min AND vreme_pripeme<=:max");
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
	$upit=("SELECT COUNT(id_jelo) AS broj FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE vreme_pripeme>=:min AND vreme_pripeme<=:max AND id_kategorija=:katId");
    $priprema = $konekcija->prepare($upit);    
	  $priprema->bindParam(":katId",$katId);	 
	 $priprema->bindParam(":min",$min);
	  $priprema->bindParam(":max",$max);
		
		}
	  
	try{
		$rezultat=$priprema->execute();
		 if($rezultat){
            $data1=$priprema->fetch();
			
          

            echo json_encode ($data1);
           $code=201;
        }else{
            echo "doslo je do greske";
			$code=500;
        }
		
		
	}
	catch(PDOException $e){
        echo $e->getMessage();
	}
	
	
	}

 



?>