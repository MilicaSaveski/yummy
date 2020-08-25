<!-- section login -->

<style>
.footer-section {
	background:white;
	margin-top:70px;
	padding-top:0px;
}

</style>
		 <?php
if(isset($_SESSION['greske'])){
	echo"<h2>".$_SESSION['greske']."</h2>";

	unset($_SESSION['greske']);
}

?>
 <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="img/signin-image.jpg" alt="sing up image"></figure>
                        <a href="index.php?page=register" class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="post" accept-charset="UTF-8" role="form" class="register-form" id="login-form" action="php/login.php" onSubmit="return onSubmit()">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your email"/>
								<div id="emailError"></div>  
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
								<div id="passError"></div>  
                            </div>
                           
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
		<script type="text/javascript" src="js/provera.js"></script>