<!-- section register -->
<style>
.footer-section {
	background:white;
}

</style>

 <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            <div id="nameError"></div> 
							</div>
							<div class="form-group">
                                <label for="lastName"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="lastName" id="lastName" placeholder="Your last name"/>
                            <div id="lastNameError"></div> 
							</div>
							<div class="form-group">
                                <label for="username"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="username" placeholder="Your username"/>
                        <div id="usernameError"></div>                            
						   </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            <div id="emailError"></div> 
							</div>
                            <div class="form-group">
						
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                               <div id="passError"></div>                       
						   </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            <div id="rePassError"></div> 
							</div>
                           
                            <div class="form-group form-button">
                                <input type="button" name="signup" id="signup" class="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="img/signup-image.jpg" alt="sing up image"></figure>
                        <a href="index.php?page=login" class="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
		<script type="text/javascript" src="js/provera.js"></script>