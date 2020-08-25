 <?php 
 @session_start();
 require_once "php/konekcija.php";
if(!isset($_SESSION['admin'])){
		header("Location: index.php?page=login");
	}
if(isset($_SESSION['korisnik'])){
		header("Location: index.php?page=login");
	}
	
  ?>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
<?php
require_once "view/header.php";
require_once "view/meni.php";

?>

<div class="container">
<div id="adminContainer">
<input type="hidden" id="prikaz" name="prikaz" value="0"/>
<div id="feedback">

<?php
if(isset($_SESSION['insertSlika'])){
	echo"<h2>".$_SESSION['insertSlika']."</h2>";
	unset($_SESSION['insertSlika']);
}
?>
<?php
if(isset($_SESSION['greske'])){
	$errors=$_SESSION['greske'];
	foreach($errors as $error){
	
	echo"<h2>".$error."</h2></br>";}
	unset($_SESSION['greske']);
}

?>

</div>

<div id="left">


<ul id="adminLista">

<li><select name="unosNovo" id="unosNovo">
<option value="0">Unesi...</option>
<option value="korisnik">Korisnici</option>
<option value="uloge">Uloge</option>
<option value="kontinenti">Kontinenti</option>
<option value="drzave">Drzave</option>
<option value="jelo">Jela</option>

<option value="jeloNamernice">Jela_namernice</option>
<option value="meni">Meni</option>
<option value="spremanje">Nacin spremanja</option>
<option value="namernice">Namernice</option>
<option value="pitanjeA">Pitanja</option>
<option value="odgovori">Odgovori</option>
<option value="kategorije">Kategorije</option>


</select></li>

<li> <button class="adminClick" id="korisnik">Korisnici</button></li>
<li> <button class="adminClick" id="uloge">Uloge</button></li>
<li> <button class="adminClick" id="kontinenti">Kontinenti</button></li>
<li> <button class="adminClick" id="drzave">Drzave</button></li>
<li> <button class="adminClick" id="jelo">Jela</button></li>
<li> <button class="adminClick" id="jeloNacin">Jela_nacin</button></li>
<li> <button class="adminClick" id="jeloNamernice">Jela_namernice</button></li>
<li> <button class="adminClick" id="komentariA">Komentari</button></li>
<li> <button class="adminClick" id="meni">Meni</button></li>
<li> <button class="adminClick" id="spremanje">Nacin spremanja</button></li>
<li> <button class="adminClick" id="namernice">Namernice</button></li>
<li> <button class="adminClick" id="pitanjeA">Pitanja</button></li>
<li> <button class="adminClick" id="odgovori">Odgovori</button></li>
<li> <button class="adminClick" id="anketaA">Anketa</button></li>
<li> <button class="adminClick" id="kategorije">Kategorije</button></li>
<li> <button class="adminClick" id="slika">Slika</button></li>
<li> <button class="adminClick" id="subscribe">Subscribe</button></li>
<li> <button class="adminClick" id="poruke">Poruke</button></li>


</ul>


</div>

<div id="right">



</div>

<div id="id01" class="w3-modal">
  <div class="w3-modal-content">

    <header class="w3-container w3-teal boja modalHeader">
     
    <!--  <h2>Modal Header</h2>-->
    </header>

    <div class="w3-container sredinaM">
      <p>Some text..</p>
      <p>Some text..</p>
    </div>

    <footer class="w3-container w3-teal boja" >
 <img src="img/footer-logo.png"/>
    </footer>

  </div>
</div>



<div class="cleaner"></div>
</div>

</div>






<script type="text/javascript" src="js/admin.js"></script>

<?php
require_once "view/footer.php";


?>
