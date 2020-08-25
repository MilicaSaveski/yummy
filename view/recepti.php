<section class="recipe-section spad">
        <div class="container">
		<input type="hidden" value="0" id="8d1381317"/>
		<input type="hidden" value="0" id="c9502f9aa"/>
		<input type="hidden" value="0" id="18a1d676c"/>
		
		<script src='https://kit.fontawesome.com/a076d05399.js'></script>
            <div class="row" id="receptiPrikaz">
			
               
			   
				<?php
				$query = $konekcija->prepare("SELECT id_jelo FROM jelo");
$query->execute();
$brojunosa = $query->rowCount();	
$prikaz = 2;
$broj_stranice = ceil($brojunosa/$prikaz); 	
               $recepti = executeQuery("SELECT id_jelo,naziv,vreme_pripeme AS opis,src,title,alt,naziv_kategorija FROM jelo INNER JOIN slika ON jelo.id_jelo=slika.id_proizvod INNER JOIN proizvod_kategorija ON jelo.id_kategorija=proizvod_kategorija.id_proizvod_kategorija WHERE slika.kat<>2 ORDER BY id_jelo ASC LIMIT 0,$prikaz");
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
                            <p><i class='far fa-clock' style='font-size:24px'></i> <?=$recept->opis?>min</p>
                        </div>
                    </div>
                </div>
				
				<?php endforeach; ?>
			
				
				
				
               
               
                
               
               
                
             
            
            </div>
            <div class="row" id="receptiPrikaz">
                <div class="col-lg-12">
                    <div class="recipe-pagination">
                    <ul class="pagination">
					  <li>Page &nbsp &nbsp</li>
					 <li ><button id="0" class="pagination_click active" >1</button></li>  

  <?php 
                if($broj_stranice>6):
					?>
					
                        <li><button id="1" class="pagination_click">2</button></li>
                        <li><button id="2" class="pagination_click">3</button></li>

                           <li>&nbsp&nbsp...&nbsp&nbsp</li>
                 <li ><button id="<?=($broj_stranice-1)?>" class="pagination_click"><?=$broj_stranice?></button></li>




                            <li><button id="1" class="pagination_click">Next</button></li>
                     <?php   endif; ?>
                    <?php if($broj_stranice<=6):

                        for($i=2;$i<=$broj_stranice;$i++):

                            ?>
							<li><button id="<?=($i-1)?>" class="pagination_click"><?=$i?></button></li>
                        <?php endfor;
                        endif;

					  
					  
					  
					  
					  
					  ?>
					  </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<script type="text/javascript" src="js/sort_filt.js"></script>