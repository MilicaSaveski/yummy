<div class="hero-search set-bg" data-setbg="img/search-bg.jpg"style="margin-top: 50px;">
        <div class="container">
            <div class="filter-table">
                <form action="#" class="filter-search">
                    <input type="text" name="vremeOd" id="vremeOd" placeholder="Min vreme pripreme"/>
                    <input type="text" name="vremeDo" id="vremeDo"placeholder="Max vreme pripreme"/>
                    <select id="category">
				
                        <option value="0">Category</option>
							<?php
               $upit=executeQuery("SELECT id_proizvod_kategorija,naziv_kategorija FROM proizvod_kategorija");
			   
			   foreach($upit as $kat):


					?>
					   <option value="<?=$kat->id_proizvod_kategorija?>"><?=$kat->naziv_kategorija?></option>
<?php endforeach;?>                   
				   </select>
                   
                    <button type="button" id="searc_button" name="searc_button">Search</button>
                </form>
            </div>
			<div id="feedbackPretraga">
			</div>
        </div>
    </div>