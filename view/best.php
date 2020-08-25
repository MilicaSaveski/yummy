<?php 
@session_start();
if(!isset($_SESSION['korisnik']) && !isset($_SESSION['admin'])){
		header("Location: index.php?page=login");
	}

	





if(isset($_SESSION['korisnik'])):
	$idKorisnik=$_SESSION['korisnik']->id_korisnik;
 ?>
<input type="hidden" id="kor" value="<?=$idKorisnik?>"/>
<?php endif;?>
<section class="recipe-section spad">
        <div class="container">
	<h3><i><b>Posetioci sajta su izabrali ove recepte!!!</b></i></h3>
	</br>
	</br>
		
		
            <div class="row">
			
               
			   
				<?php
				$query = $konekcija->prepare("SELECT id_jelo FROM jelo");
$query->execute();

               $recepti = executeQuery("SELECT id_jelo,naziv,opis,src,title,alt,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija 
			   ORDER BY (glas/brojGlasanja) DESC LIMIT 0,3");
				foreach ($recepti as $recept):
				?>
				
				<div class="col-lg-4 col-sm-6">
                    <div class="recipe-item">
                        <a href="index.php?page=single&id=<?=$recept->id_jelo?>"><img src="<?=$recept->src?>" alt="<?=$recept->alt?>" title="<?=$recept->title?>"></a>
                        <div class="ri-text">
                            <div class="cat-name"><?=$recept->naziv_kategorija?> </div>
                            <a href="index.php?page=single&id=<?=$recept->id_jelo?>">
                                <h4><?=$recept->naziv?></h4>
                            </a>
                            <p><?=$recept->opis?></p>
                        </div>
                    </div>
                </div>
				
				<?php endforeach; ?>
			
				
				
				
               
               
                
               
               
                
             
            
            </div>
       </br>
	</br>	
<?php
if(isset($_SESSION['korisnik'])):
$idKorisnik=$_SESSION['korisnik']->id_korisnik;
$upit=("SELECT id_korisnik FROM odgovori WHERE id_korisnik=:id");
$glasao=$konekcija->prepare($upit);
$glasao->bindParam(":id",$idKorisnik);
$glasao->execute();
if($glasao->rowCount()==0):




?>

	
<h3><i><b>Ucestvujte u anketi!!!</b></i></h3>
<?php 
$upit=("SELECT pitanje,id_pitanje FROM pitanja ORDER BY id_pitanje ASC");
$pitanje = $konekcija->query($upit)->fetch();



?>
<div id="anketaGlasanje">
<h4><i><?=$pitanje->pitanje?></i></h4>
<?php 
 $id=$pitanje->id_pitanje;
$priprema=$konekcija->prepare("SELECT odgovor,id_p_o FROM pitanje_odgovor WHERE id_pitanje=:id");
$priprema->bindParam(":id",$id);
$priprema->execute();
$odgovori = $priprema->fetchAll(); 
foreach($odgovori as $o):?>

<input type="radio" name="grupa1" value="<?=$o->id_p_o?>"/><?=$o->odgovor?>

<br/>

<?php endforeach;?>




</div>
<input type="hidden" id="pZaO" value="<?=$pitanje->id_pitanje?>"/>
<input type="button" class="btnA" id="btnPit" value="Sledece->"/>
<input type="button" class="btnA" id="btnPit1" value="<-Nazad"/>

<input type="button" class="btnA" id="btnKraj" value="Posalji"/>
	<?php
$priprema=$konekcija->prepare("SELECT id_pitanje FROM pitanja WHERE id_pitanje>:id");
$priprema->bindParam(":id",$id);
$priprema->execute();
$pitanje1 = $priprema->fetch(); 

	?>
<input type="hidden" id="pit" value="<?=$pitanje1->id_pitanje?>"/>			
<input type="hidden" id="pit1" value="0"/>				
<input type="hidden" id="odg1" value="0"/>				

<input type="hidden" id="odg2" value="0"/>	
	
<input type="hidden" id="odg3" value="0"/>		
<?php endif; 

if(isset($_SESSION['korisnik'])):
$idKorisnik=$_SESSION['korisnik']->id_korisnik;
$upit=("SELECT id_korisnik FROM odgovori WHERE id_korisnik=:id");
$glasao=$konekcija->prepare($upit);
$glasao->bindParam(":id",$idKorisnik);
$glasao->execute();
if($glasao->rowCount()>0):
?>
<ul>
<?php
	$upit=executeQuery("SELECT pitanje_odgovor.odgovor,id_p_o, COUNT(id_korisnik) as broj FROM odgovori INNER JOIN pitanje_odgovor ON pitanje_odgovor.id_p_o=odgovori.id_pitanje_odgovor
WHERE id_pitanje_odgovor<4
	GROUP BY odgovori.id_pitanje_odgovor");
echo "<label>Koliko vremena provodite u kuhinji?</label>"; 
	foreach($upit as $u):
	

?>
<li><?=$u->odgovor?> &nbsp --- broj korisnika <?=$u->broj?></li>
<?php 
endforeach;
$upit=executeQuery("SELECT pitanje_odgovor.odgovor,id_p_o, COUNT(id_korisnik) as broj FROM odgovori INNER JOIN pitanje_odgovor ON pitanje_odgovor.id_p_o=odgovori.id_pitanje_odgovor
WHERE id_pitanje_odgovor>3 AND id_pitanje_odgovor<7
	GROUP BY odgovori.id_pitanje_odgovor");
echo "</br><label>Da li koristite nase recepte?</label>"; 
	foreach($upit as $u):

?>

<li><?=$u->odgovor?> &nbsp --- broj korisnika <?=$u->broj?></li>
<?php
endforeach;
$upit=executeQuery("SELECT pitanje_odgovor.odgovor,id_p_o, COUNT(id_korisnik) as broj FROM odgovori INNER JOIN pitanje_odgovor ON pitanje_odgovor.id_p_o=odgovori.id_pitanje_odgovor
WHERE id_pitanje_odgovor>6
	GROUP BY odgovori.id_pitanje_odgovor");
echo "</br><label>Koliko su Vam korisni nasi recepti?</label>"; 
	foreach($upit as $u):
?>

<li><?=$u->odgovor?> &nbsp --- broj korisnika <?=$u->broj?></li>

<?php
endforeach;
?>
	</ul>
	<?php
endif;
endif;


endif;
?>


        </div>
    </section>
	<script type="text/javascript" src="js/pitanja.js"></script>