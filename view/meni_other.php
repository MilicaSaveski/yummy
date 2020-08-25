<body>
    <!-- Page Preloder -->
   <!--  <div id="preloder">
        <div class="loader"></div>
    </div>-->

    <!-- Header Section Begin -->
    <header class="header-section-other">
        <div class="container-fluid">
            <div class="logo">
                <a href="./index.html"><img src="img/little-logo.png" alt=""></a>
            </div>
            <div class="nav-menu">
                <nav class="main-menu mobile-menu">
                    <ul>
                       <?php 
				
						$upit=executeQuery("SELECT href,roditelj,ispis FROM meni");
					if(!isset($_SESSION['korisnik'])&& !isset($_SESSION['admin'])):

				foreach($upit as $u):
                   if($u->ispis!='Admin'&&$u->ispis!='Log out'&& $u->ispis!='Best Of'):
					?>
					<li ><a href="<?=$u->href?>"><?=$u->ispis?></a></li>
			
			
					  

				
				<?php endif;
				endforeach; endif;
				if(isset($_SESSION['korisnik'])&& !isset($_SESSION['admin'])):	
				foreach($upit as $u):
                   if($u->ispis!='Admin'&&$u->ispis!='Login'):
					?>
					<li ><a href="<?=$u->href?>"><?=$u->ispis?></a></li>
			<?php endif;
				endforeach; endif;
				
		if(isset($_SESSION['admin'])):	
				foreach($upit as $u):
                   if($u->ispis!='Login'):
					?>
					<li ><a href="<?=$u->href?>"><?=$u->ispis?></a></li>
				
				<?php 
				endif;
				endforeach; endif;
				
				
				?>
				
                    </ul>
                </nav>
                <div class="nav-right search-switch">
                    <i class="fa fa-search"></i>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>