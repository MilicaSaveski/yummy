const base_url="http://localhost/yummy/";
$("#porSend").click(function(){
	
	var email=$("#emailPor").val();
	var name=$("#namePor").val();
	var subject=$("#subjectPor").val();
	var textPor=$("#commentPor").val();
	var nizGreske=new Array();
	var reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž0-9]{2,12}$/;
    
	 var reEmail= /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
	 if(!reIme.test(name)){
		nizGreske.push("Ime nije u redu");
	
	 }
	 	if(!reEmail.test(email)){
		nizGreske.push("Email nije u redu");
	}
	if(textPor.length==0)
	{
		nizGreske.push("Unesite poruku");
	}
	if(subject.length==0)
	{
		subject=null;
	}
	
	
	
	if(nizGreske.length == 0){
		$.ajax({
			url: base_url+"php/porukeKorisnika.php",
			type:"post",
			method:"post",
			data:{
			name:name,			
            subject:subject,			
            email:email,
            textPor:textPor,
            send:true			
			},
			success: function(data,xhr)
			{
				if(data==null)
				{alert("Vasa poruka je uspesno poslata!");
				
				$("#emailPor").val("");
	               $("#namePor").val("");
	              $("#subjectPor").val("");
	               $("#commentPor").val("");
				
				}
				
				
				
			
			},
			error:function(xhr,status,error)
			{
				
				
             		 var poruka = "<h1>Poruka nije poslata.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
                   case 422:
                       poruka = "<h1>Podaci nisu validni.</h1>";
                       console.log(xhr.responseText);
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);            
                $("#feedbackPor").html(poruka);		
				
				
				
			}			
			
			
			
			
		});
	}
	
	
	
	
	
	
	
});