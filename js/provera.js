const base_url="http://localhost/yummy/";
$(document).ready(function(){
	
	$("#name").blur(function()
	{
		  var ime = $("#name").val();
		   
		var reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž0-9]{2,12}$/;
  
	
	
	if(!reIme.test(ime)){
		
		$("#name").css("borderColor","red");
		document.getElementById("nameError").innerHTML="A-ZČĆŠĐŽ a-zčćšđž";
	
	}
	else{
			$("#name").css("borderColor","");
		document.getElementById("nameError").innerHTML="";
	} 
		  
	})
	$("#lastName").blur(function()
	{
		 var prezime=$("#lastName").val();
		 var reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž0-9]{2,12}$/;
		 if(!reIme.test(prezime)){
		
			$("#lastName").css("borderColor","red");
		document.getElementById("lastNameError").innerHTML="A-ZČĆŠĐŽ a-zčćšđž";
	}
	else{
		$("#lastName").css("borderColor","");
		document.getElementById("lastNameError").innerHTML="";
	}
	})
	$("#username").blur(function()
	{
		var korIme=$("#username").val();
		 var reUsername =/^[\w\d]+$/;
		if(!reUsername.test(korIme)){
		
		$("#username").css("borderColor","red");
		document.getElementById("usernameError").innerHTML="A-Za-z0-9.";
		}
	else{
			$("#username").css("borderColor","");
		document.getElementById("usernameError").innerHTML="";
	}
	})
	$("#email").blur(function()
	{
		 var email=$("#email").val();
		  var reEmail= /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
		if(!reEmail.test(email)){
		
		$("#email").css("borderColor","red");
		document.getElementById("emailError").innerHTML="Email nije okej";
	}
else{
	$("#email").css("borderColor","");
		document.getElementById("emailError").innerHTML="";
}	
	})
	$("#password").blur(function()
	{
		  var lozinka=$("#pass").val();
	   	if(lozinka.length<=5||lozinka.length>15){
		
			$("#pass").css("borderColor","red");
		document.getElementById("passError").innerHTML="[a-zčćšđž A-ZČĆŠĐŽ 0-9 .!]";
	}
	else{
		$("#pass").css("borderColor","");
		document.getElementById("passError").innerHTML="";
	}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$("#signup").click(function(){
		
		var nizGreske= new Array();
		
		
    var ime = $("#name").val();
	
           var prezime=$("#lastName").val();
		   
            var korIme=$("#username").val();			
            var email=$("#email").val();
            var lozinka=$("#pass").val();
	      var rePass=$("#re_pass").val();
	
	if(lozinka.length<=5){
		
		nizGreske.push("Sifra je kratka");
		$("#pass").css("borderColor","red");
		document.getElementById("passError").innerHTML="Sifra je prekratka";
	}
	if(lozinka.length>15){
		
		nizGreske.push("Sifra je dugacka");
			$("#pass").css("borderColor","red");
		document.getElementById("passError").innerHTML="Sifra je dugacka";
	}
	if(lozinka!=rePass)
	{
		nizGreske.push("Sifre se ne poklapaju");
			$("#re_pass").css("borderColor","red");
		document.getElementById("rePassError").innerHTML="Sifre se ne poklapaju";
	}
	var reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž0-9]{2,12}$/;
   var reUsername = /^[\w\d]+$/;
	 var reEmail= /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
	
	if(!reIme.test(ime)){
		nizGreske.push("Ime nije u redu");
		$("#name").css("borderColor","red");
		document.getElementById("nameError").innerHTML="A-ZČĆŠĐŽ a-zčćšđž";
	
	}
	
	if(!reIme.test(prezime)){
		nizGreske.push("Prezime nije u redu");
			$("#lastName").css("borderColor","red");
		document.getElementById("lastNameError").innerHTML="A-ZČĆŠĐŽ a-zčćšđž";
	}
	
	if(!reUsername.test(korIme)){
		nizGreske.push("Username nije u redu");
			$("#username").css("borderColor","red");
		document.getElementById("usernameError").innerHTML="A-ZČĆŠĐŽa-zčćšđž0-9";
	}
	if(!reEmail.test(email)){
		nizGreske.push("Email nije u redu");
		$("#email").css("borderColor","red");
		document.getElementById("emailError").innerHTML="Email nije okej";
	}
	
	
	
	if(nizGreske.length == 0){
		$.ajax({
			url: base_url+"php/registracija.php",
			type:"post",
			method:"post",
			data:{
			ime:$("#name").val(),
            prezime:$("#lastName").val(),			
            korIme:$("#username").val(),			
            email:$("#email").val(),
            lozinka:$("#pass").val(),
            send:true			
			},
			success: function(data,xhr)
			{
				alert("uspesno!");
				window.location.href=base_url+'index.php?page=login';
				
			},
			error:function(xhr,status,error)
			{
             		 var poruka = "<h1>Korisnik nije unet.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
                    case 409:
                        poruka = "<h1>Korisnik vec postoji.</h1>";
                        break;
                   case 422:
                       poruka = "<h1>Podaci nisu validni.</h1>";
                       console.log(xhr.responseText);
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);            
                $("#feedback").html(poruka);		
				
				
				
			}			
			
			
			
			
		});
	}
	
	
		
	})
	
	
	
	
	
	
	
	
})
function onSubmit(){
//alert("oooo");
var nizGreske=new Array();
    var email= document.getElementById("your_name");
	var reEmail= /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
	
	if(!reEmail.test(email.value)){
		nizGreske.push("Email nije dobar");
		$("#your_name").css("borderColor","red");
		document.getElementById("emailError").innerHTML="Email nije u dozvoljenom formatu";
	}
	
	var sifra=$("#your_pass").val();
	
 	if(sifra.length<=5||sifra.length>15){
		nizGreske.push("Sifra nije dobar");
			$("#your_pass").css("borderColor","red");
		document.getElementById("passError").innerHTML="[a-zčćšđž A-ZČĆŠĐŽ 0-9 .!]";
	}
	
	
	if(nizGreske.length>0){
		return false;
	}
	
	return true;

}



