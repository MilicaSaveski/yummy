<?php
@session_start();




require_once "php/konekcija.php";



$page = "";
if(isset($_GET['page'])){
$page = $_GET['page'];
}
	
switch($page){
	case "pocetna":
require_once "view/header.php";
require_once "view/meni.php";
require_once "view/main_content.php";
require_once "view/footer.php";
break;
   
   case "categories":
   require_once "view/header_other.php";
   require_once "view/meni_other.php";
   require_once "view/search_other.php";
   require_once "view/recepti.php";
   require_once "view/footer.php";
break;


case "about":
require_once "view/header_other.php";
require_once "view/meni_other.php";
require_once "view/aboutme_content.php";
require_once "view/footer.php";
break;

case "contact":
require_once "view/header_other.php";
require_once "view/meni_other.php";
require_once "view/contact_content.php";
require_once "view/footer.php";
break;



case "login":
require_once "view/header_other.php";
require_once "view/meni.php";
require_once "view/login.php";
require_once "view/footer.php";
break;

case "register":
require_once "view/header_other.php";
require_once "view/meni.php";
require_once "view/register.php";
require_once "view/footer.php";
break;
case "single":
require_once "view/header_other.php";
require_once "view/meni.php";
require_once "view/single.php";
require_once "view/footer.php";
break;
case "best":
require_once "view/header_other.php";
require_once "view/meni.php";
require_once "view/best.php";
require_once "view/footer.php";
break;

default:
require_once "view/header.php";
require_once "view/meni.php";
require_once "view/main_content.php";
require_once "view/footer.php";
break;
}

?>

   