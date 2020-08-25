const base_url="http://localhost/yummy/";
$(document).ready(function(){

var id=$("#getId").val();

 callAjax(id);

 
 
 
 
 
 
$(".posaljiKom").click(function(){
	
	var idOdgovor=$("#idOdgovor").val();
    var idKorisnik=$("#aaId").val();
	var idRecept=$("#getId").val();
	var tekst=$("#komentKor").val();
	var kor=parseInt(idKorisnik);
	$.ajax({
			url: base_url+"php/komentariUnos.php",
			type:"post",
			method:"post",
			data:{
            idOdgovor:idOdgovor,
			idKorisnik:idKorisnik,
			idRecept:idRecept,
			tekst:tekst,
            send:true			
			},
			success: function(data)
			{
				 
				//alert(data);
				
				
					if(idOdgovor==0)
					{
						
            var eee='<article class="row">'+
            '<div class="col-md-10 col-sm-10">'+
              '<div class="panel panel-default arrow left">'+
                '<div class="panel-body">'+
                  '<header class="text-left">'+
                    '<div class="comment-user"><i class="fa fa-user"></i>'+data.username+'</div>'+
                    '<time class="comment-date" datetime="'+data.vreme+'"><i class="fa fa-clock-o"></i>'+data.vreme+'</time>'+
                  '</header>'+
                  '<div class="comment-post">'+
                    '<p>'+
                    ''+data.tekst+''+
                    '</p>'+
                  '</div>'+
                  '<p class="text-right"><button class="btn btn-default btn-sm" id="'+data.id_komentar+'" onclick="promena(id)"><i class="fa fa-reply"></i> reply</button></p>';
                if(data.korisnik_id==kor){
				eee+='<p class="text-right"><button class="btn btn-default btn-sm" id="'+data.id_komentar+'" onclick="obrisiKomentar(id)"><i class="fa fa-remove"></i> reply</button></p>';
				}
				eee+='</div>'+
              '</div>'+
            '</div>'+
          '</article>';	
						
					 $(".commentShow").append(eee);	
					 $("#komentKor").val("");
					document.getElementById("idOdgovor").value=0;	
						
					}	
					
				else
				{
					 $("#komentKor").val("");
				document.getElementById("idOdgovor").value=0;	
				callAjax(idRecept);	
					
					
				}	
					
					
				
				
				
				
			},
	error:function(xhr,status,error)
			{
             		 var poruka = "<h1>Komentar nije ostavljen.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);            
                $("#feedback").html(poruka);		
				
				
				
			}			
			
	});
	
	
	
	
	
	
	
});





});

function callAjax($id)
{
	var idR=$id;
	
	$.ajax({
			url: base_url+"php/komentari.php",
			type:"post",
			method:"post",
			data:{
            id:$("#getId").val(),
            send:true			
			},
			success: function(data)
			{
				
			
				prviKom(data);
			
				
				
				//alert(a);
				
				
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









function commentShow($a,$b,$broj)
{ 

var a=$a;
var b=$b;
var idBroj=$broj;

 var idKorisnik=$("#aaId").val();
 var kor=parseInt(idKorisnik);
for(var c=0;c<b.length;c++){
	if(b[c].roditelj_id==idBroj)
	{
		
	var e='<article class="row">'+
            '<div class="col-md-9 col-sm-9">'+
              '<div class="panel panel-default arrow left">'+
			   '<div class="panel-heading right">Reply</div>'+
                '<div class="panel-body">'+
                  '<header class="text-left">'+
                    '<div class="comment-user"><i class="fa fa-user"></i>'+b[c].username+'</div>'+
                    '<time class="comment-date" datetime="'+b[c].vreme+'"><i class="fa fa-clock-o"></i>'+b[c].vreme+'</time>'+
                  '</header>'+
                  '<div class="comment-post">'+
                    '<p>'+
                    ''+b[c].tekst+''+
                    '</p>'+
                  '</div>'+
                  '<p class="text-right"><button class="btn btn-default btn-sm" id="'+b[c].roditelj_id+'" onclick="promena(id)"><i class="fa fa-reply"></i> reply</button></p>';
             if(b[c].korisnik_id==kor){
			 e+='<p class="text-right"><button class="btn btn-default btn-sm" id="'+b[c].id_komentar+'" onclick="obrisiKomentar(id)"><i class="fa fa-remove"></i>delete</button></p>';              
			 }
			   e+='</div>'+
              '</div>'+
            '</div>'+
          '</article>';
			$(".commentShow").append(e);
	
		
			
		for(var index=0;index<a.length;index++)
		{
			if(a[index].roditelj_id==b[c].roditelj_id)
			{	
		      
			  
				var broj=parseInt(b[c].id_komentar);
				//alert(broj);
				
				commentShow(a,b,broj);
				
			}
			
			
			
		}
		
		
		
	}
	
	
	
}

			
		
					
					
					
					
					
	
	
}

function prviKom(data)
{
	 var idKorisnik=$("#aaId").val();
 var kor=parseInt(idKorisnik);
	
	$(".commentShow").html("");
	
		for(var i=0;i<data.length;i++){
					if(data[i].roditelj_id==0){
						
							
					
	//dobije niz i ide prikaz
	  eee='<article class="row">'+
            
            '</div>'+
            '<div class="col-md-10 col-sm-10">'+
              '<div class="panel panel-default arrow left">'+
                '<div class="panel-body">'+
                  '<header class="text-left">'+
                    '<div class="comment-user"><i class="fa fa-user"></i>'+data[i].username+'</div>'+
                    '<time class="comment-date" datetime="'+data[i].vreme+'"><i class="fa fa-clock-o"></i>'+data[i].vreme+'</time>'+
                  '</header>'+
                  '<div class="comment-post">'+
                    '<p>'+
                    ''+data[i].tekst+''+
                    '</p>'+
                  '</div>'+
                  '<p class="text-right"><button class="btn btn-default btn-sm" id="'+data[i].id_komentar+'"onclick="promena(id)"><i class="fa fa-reply"></i> reply</button></p>';
				  if(data[i].korisnik_id==kor){
				  eee+='<p class="text-right"><button class="btn btn-default btn-sm" id="'+data[i].id_komentar+'" onclick="obrisiKomentar(id)"><i class="fa fa-remove"></i> delete</button></p>';
				  }
			   eee+='</div>'+
              '</div>'+
            '</div>'+
          '</article>';
		  
	          	  $(".commentShow").append(eee);
				  
				  var broj=parseInt(data[i].id_komentar);
				  var a=data;
				  var b=data;
				  var ispis=new Array();
				  ispis.push(0);
					commentShow(a,b,broj);
					
					}
					
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}


function promena(id)
{
	 var id=id;
	document.getElementById("idOdgovor").value=id;
   //alert(id);
}

$('.zvezdaGlas').click(function(){
      var vrednost=this.id;	
	//alert(vrednost);
	 
	 $.ajax({
			url: base_url+"php/komentari.php",
			type:"post",
			method:"post",
			data:{
            vrednost:vrednost,
			id:$("#getId").val(),
            glasanje:true			
			},
			success: function(data)
			{
				
			
				alert("Uspesno ste glasali!");
		
		var zaokruzi=parseFloat(data.avg);
		    
				var a=zaokruzi.toFixed(2)+' &nbsp from &nbsp'+data.brojGlasanja +'&nbsp reviews';
				
				$('.glasanjeU').html(a);
				//alert(a);
				
				
			},
			error:function(xhr,status,error)
			{
             		 var poruka = "<h1>Glasanje nije zabelezeno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);            
                $("#feedback").html(poruka);		
				
				
				
			}			
			
	});
	 
	 
	 
	 
	 
	 
	 
 });
function obrisiKomentar(id)
{
var obrisi=id;
	var idRecept=$("#getId").val();
 $.ajax({
			url: base_url+"php/komentari.php",
			type:"post",
			method:"post",
			data:{
			id:obrisi,
            brisanje:true			
			},
			success: function(data)
			{
				if(data==200){
				callAjax(idRecept);}	
			},
			error:function(xhr,status,error)
			{
             		 var poruka = "<h1>Glasanje nije zabelezeno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);            
                $("#feedback").html(poruka);		
				
				
				
			}			
			
	});
	
}

