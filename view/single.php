<?php 
 
 if(isset($_GET['id'])):
             $id = $_GET['id'];
 
?> 
 		<script src='https://kit.fontawesome.com/a076d05399.js'></script>
 	<input type="hidden" value="<?=$id?>" name="getId" id="getId"/>
 <section class="single-page-recipe spad">
        <div class="recipe-top">
            <div class="container-fluid">
                <div class="recipe-title">
					<?php	
				
					 
	   $upit_priprema =$konekcija->prepare("SELECT id_jelo,notes,jelo.naziv,opis,vreme_pripeme,naziv_drzave,kontinent.naziv AS kontinent,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija 
	   INNER JOIN drzave ON jelo.drzava_id=drzave.id_drzava INNER JOIN kontinent ON kontinent.id_kontinent=drzave.kontinent_id
	   WHERE id_jelo=:id AND slika.kat<>2"); 
		$upit_priprema->bindParam(":id",$id);
		$upit_priprema->execute(); 
		$rezultat = $upit_priprema->fetch(); 

		if(isset($rezultat)):
		
	  $upitBroj=$konekcija->prepare("SELECT id_jelo FROM jelo_namernice WHERE id_jelo=:id");
					$upitBroj->bindParam(":id",$id);
		             $upitBroj->execute(); 
					$broj=$upitBroj->fetchAll();

$c=count($broj);		

	
	?>
	

                    <span>Broj sastojaka: ~ <?=$c?>  /<i class='far fa-clock' style='font-size:20px'></i> <?=$rezultat->vreme_pripeme?>min / <?=$rezultat->naziv_drzave?></span>
                    <h2><?=$rezultat->naziv?></h2>
                    <ul class="tags">
                        <li><?=$rezultat->naziv_kategorija?></li>
                        <li><?=$rezultat->kontinent?></li>
                        
                    </ul>
                </div>
                <img src="img/recipe-single.jpg" alt=""/>
            </div>
        </div>
		<section class="similar-recipe spad">
        <div class="container">
            <div class="row">
			 <?php 
			 $upit_priprema =$konekcija->prepare("SELECT id_jelo,naziv	,src,title,alt,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE id_kategorija=
			 (SELECT id_kategorija FROM jelo WHERE id_jelo=:id) LIMIT 0,4"); 
		$upit_priprema->bindParam(":id",$id);
		$upit_priprema->execute(); 
		$rez = $upit_priprema->fetchAll(); 

		if(isset($rez)):
		foreach($rez as $rezu):
		?>
                <div class="col-lg-3 col-md-6">
                    <div class="similar-item">
                        <a href="index.php?page=single&id=<?=$rezu->id_jelo?>"><img src="<?=$rezu->src?>" alt="<?=$rezu->alt?>" width="99px" height="75px"/></a>
                        <div class="similar-text">
                            <div class="cat-name"><?=$rezu->naziv_kategorija?></div>
                            <h6><?=$rezu->naziv?></h6>
                        </div>
                    </div>
				
                </div>
               	<?php endforeach; endif;?>
              
              
            </div>
        </div>
    </section>
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="ingredients-item">
                        <div class="intro-item">
                            <img src="img/intro-img.jpg" alt="">
                            <h2><?=$rezultat->naziv?></h2>
                            <div class="rating">
				            
                                <button id="1" class="zvezdaGlas" style="background-color: #FC0254;
    border: 0px;" title="Glasj"><i class="fa fa-star" style="color:yellow;"></button></i>
                                <button id="2" class="zvezdaGlas" style="background-color: #FC0254;
    border: 0px;"title="Glasj"><i class="fa fa-star" style="color:yellow;"></button></i>
	 <button id="3" class="zvezdaGlas" style="background-color: #FC0254;
    border: 0px;"title="Glasj"><i class="fa fa-star" style="color:yellow;"></button></i>
	 <button id="4" class="zvezdaGlas" style="background-color: #FC0254;
    border: 0px;"title="Glasj"><i class="fa fa-star" style="color:yellow;"></button></i>
	 <button id="5" class="zvezdaGlas" style="background-color: #FC0254;
    border: 0px;"title="Glasj"><i class="fa fa-star" style="color:yellow;"></button></i>
                            </div>
							<!--ovde ide tabela glasovi prosek ocena i broj glasova -->
							<?php 
							$glasaj=$konekcija->prepare("SELECT brojGlasanja, (glas/brojGlasanja)AS avg FROM jelo WHERE id_jelo=:id");
							$glasaj->bindParam(":id",$id);
							$glasaj->execute();
							if($glasaj):
							$rezG=$glasaj->fetch();
							
							?>
                            <div class="reviews glasanjeU"><?php if($rezG->avg==null){echo 0;} else{ echo (round($rezG->avg,2)); }?> from <?=$rezG->brojGlasanja?> reviews</div>
							<?php endif; ?>
                            <div class="recipe-time">
                                <ul>
                                    <li>Vreme pripreme: <span><?=$rezultat->vreme_pripeme?>min</span></li>
                                    
                                    <li>Broj sastojaka: <span><?=$c?></span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="ingredient-list">
                            <div class="recipe-btn">
                                <!--<a href="#">Print Recipe</a>
                                <a href="#" class="black-btn">Pin Recipe</a>-->
                            </div>
                            <div class="list-item">
							<?php
							$upitSlika="SELECT src,title,alt FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod
	   WHERE id_jelo=:id AND slika.kat<>2";
	   $upit_priprema=$konekcija->prepare($upitSlika);
			$upit_priprema->bindParam(":id",$id);
		$upit_priprema->execute(); 
		$rez = $upit_priprema->fetchAll(); 
		if(isset($rez)):
		foreach($rez as $rezu):
							?>
							
							<img src="<?=$rezu->src?>"/>
							<?php
							endforeach;
							endif;
							?>
                                <h5>Sastojci:</h5>
                                <div class="salad-list">
                                    <h6>Za pripremu</h6>
                                    <ul>
									<?php 
									$pripremaS=$konekcija->prepare("SELECT naziv from namernice INNER JOIN jelo_namernice ON namernice.id_namernice=jelo_namernice.id_namernice WHERE id_jelo=:id ORDER BY id_jelo_namernice");
									$pripremaS->bindParam(":id",$id);
							$pripremaS->execute();
							$rezultatS=$pripremaS->fetchAll();
							if($rezultatS):
							foreach($rezultatS as $re):
							?>
                          <li><?=$re->naziv?></li>
                           <?php endforeach; endif;?>
									
								
									
                                       
                                    </ul>
                                </div>
								
                               
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div class="col-lg-7">
                    <div class="recipe-right">
                        <div class="recipe-desc">
                            <h3>Description</h3>
							<?php
							$pripremaa=$konekcija->prepare("SELECT opis FROM jelo WHERE id_jelo=:id");
							$pripremaa->bindParam(":id",$id);
							$pripremaa->execute();
							$rezultatt=$pripremaa->fetch();
							if($rezultatt):
							?>
                            <p><?=$rezultatt->opis?></p>
                           <?php endif;?>
                        </div>
                        <div class="instruction-list">
                            <h3>Instructions</h3>
                            <ul>
							<?php 
							
        $upit_priprema =$konekcija->prepare("SELECT nacin1 FROM nacin_spremanja INNER JOIN jelo_nacin ON nacin_spremanja.id_nacin=jelo_nacin.id_nacin WHERE jelo_nacin.id_jelo=:id ORDER BY id_jelo_nacin"); 
		$upit_priprema->bindParam(":id",$id);
		$upit_priprema->execute(); 
		$aaa = $upit_priprema->fetchAll(); 
							
							if(isset($aaa)):
							$br=0;
							foreach($aaa as $a):
							$br++;
							?>
							
							<li>
							<span><?=$br?>.</span>
							<?=$a->nacin1?>
							</li>
							
							<?php 
							endforeach;
							endif;?>
							
							
							
                             
                            
                              
                               
                            </ul>
                        </div>
                        <div class="notes">
                            <h3>Notes</h3>
                            <div class="notes-item">
                                <span>i</span>
                                <p><?=$rezultat->notes?></p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<?php endif; ?>
	
	
	<link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
  <div class="row">
    <div class="col-md-8">
      <h2 class="page-header">Comments</h2>
  <section class="comment-list commentShow">



</section>  
  



	   <section class="comment-list">
<?php
if(isset($_SESSION['korisnik'])):
	$idKorisnik=$_SESSION['korisnik']->id_korisnik;  
?>
<input type="hidden" name="aaId" id="aaId" value="<?=$idKorisnik?>"/>	
		<article class="row">
            
            <div class="col-md-10 col-sm-10">
              <div class="panel panel-default arrow left">
                <div class="panel-body">
                  <header class="text-left">
                    <div class="comment-user"></div>
                    <time class="comment-date" datetime=""></time>
                  </header>
                  <div class="comment-post">
                   <form>
				   <label>Ostavite komentar</label>
				   </br>
				  <input type="hidden" name="idOdgovor" id="idOdgovor" value="0"/>
                  <textarea name="komentKor" id="komentKor" cols="40" rows="4">
				  
				  </textarea>
                  </form>
				  <button class="btn btn-default btn-sm posaljiKom"><i class="fa fa-reply"></i>Posalji</button>
                  </div>
                
                </div>
              </div>
            </div>
          </article>
        </section>
		<?php endif;?>
	
  </div>
</div>
</div>
<script type="text/javascript" src="js/comment.js"></script>
	<?php endif;?>
	