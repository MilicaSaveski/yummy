const base_url="http://localhost/yummy/";
$(document).ready(function(){

document.getElementById("btnPit1").style.display="none";
document.getElementById("btnKraj").style.display="none";

})

$("#btnPit").click(function(){

var odg=$("#pZaO").val();

var niz=document.getElementsByName("grupa1");

for (var i=0; i<niz.length; i++){
 if (niz[i].checked){
document.getElementById("odg"+odg).value=niz[i].value;
 break;
 }
 } 
var idPitanje=$("#pit").val();
var oznaka =document.getElementById("odg"+idPitanje).value;
//alert(oznaka);
     $.ajax({
        url: base_url + "php/pitanja.php",
        type: "post",
        data: {
            pitId:idPitanje,
            send: true

        },
		 success: function (data) {
			 var a='';
        for(var i=0;i<data.length;i++)
		{
			if(oznaka>0){
			
			if(i==0)
			{
			if(data[0].id_p_o==oznaka)
			{
				a+='<h4><i>'+data[0].pitanje+'</i></h4>'+
				'<input type="radio" name="grupa1" value="'+data[0].id_p_o+'" checked/>'+data[i].odgovor+'</br>';
			 var broj=parseInt(data[0].id_pitanje);
				
				document.getElementById("pZaO").value=broj
			}
			 if(data[0].id_p_o!=oznaka)
			{
			   a+='<h4><i>'+data[0].pitanje+'</i></h4>'+
				'<input type="radio" name="grupa1" value="'+data[0].id_p_o+'"/>'+data[i].odgovor+'</br>';
			 var broj=parseInt(data[0].id_pitanje);
				
				document.getElementById("pZaO").value=broj
	
			}		
			}
			
			
	    
			if(i>0)
			{	
             if(data[i].id_p_o==oznaka)
			 {
							 a+='<input type="radio" name="grupa1" value="'+data[i].id_p_o+'"checked/>'+data[i].odgovor+'</br>';
 
			 }
		if(data[i].id_p_o!=oznaka)
		{
			 a+='<input type="radio" name="grupa1" value="'+data[i].id_p_o+'"/>'+data[i].odgovor+'</br>';
		}	
		}
			}
         if(oznaka==0)
		 {
			 if(i==0)
			{
				a+='<h4><i>'+data[i].pitanje+'</i></h4>'+
				'<input type="radio" name="grupa1" value="'+data[0].id_p_o+'"/>'+data[0].odgovor+'</br>';
			    var broj=parseInt(data[0].id_pitanje);
				
				document.getElementById("pZaO").value=broj;
				
			}
			else{
			a+='<input type="radio" name="grupa1" value="'+data[i].id_p_o+'"/>'+data[i].odgovor+'</br>';
			}
		 }
		}
		 		 document.getElementById("anketaGlasanje").innerHTML=a;
				 var pitanje2=2;
		 $.ajax({
        url: base_url + "php/pitanja.php",
        type: "post",
        data: {
            pitId:idPitanje,
			pitanje2:pitanje2

        },
		 success: function (data1) {
			
			if(data1==false)
 			{
				
				  document.getElementById("pit").value=2;
				document.getElementById("btnPit").style.display="none";
				document.getElementById("btnKraj").style.display="";
				
				
				
				document.getElementById("pit1").value=2;
			}
			
			 var pit=parseInt(data1.id_pitanje);
		 		         
		    
		    if(pit>1)
			{
              document.getElementById("pit").value=pit;
				  
			document.getElementById("btnKraj").style.display="none";			 
				document.getElementById("btnPit1").style.display="";
				document.getElementById("pit1").value=odg;
			}  
		       				
				 
	
		 
		 
		 
		 },
		 error:function (xhr,status,error){
            
			//alert(xhr.error);
        }



    });        
	
		 
		 
		 
		 },
		 error:function (xhr,status,error){
          
        }



    });

	
	
	
	
	
	
	
	
	
	
	



});
// NAZAD odraditi
$("#btnPit1").click(function(){
var odg=$("#pZaO").val();
//trenutni id pitanja
var niz=document.getElementsByName("grupa1");
var idPitanje=$("#pit1").val();

var oznaka =document.getElementById("odg"+idPitanje).value;





     $.ajax({
        url: base_url + "php/pitanja.php",
        type: "post",
        data: {
            pitId:idPitanje,
            send:true

        },
		 success: function (data) {
			 var a='';
        for(var i=0;i<data.length;i++)
		{
			if(oznaka>0){
			
			if(i==0)
			{
			if(data[0].id_p_o==oznaka)
			{
				a+='<h4><i>'+data[0].pitanje+'</i></h4>'+
				'<input type="radio" name="grupa1" value="'+data[0].id_p_o+'" checked/>'+data[i].odgovor+'</br>';
			 var broj=parseInt(data[0].id_pitanje);
				
				document.getElementById("pZaO").value=broj
			}
			 if(data[0].id_p_o!=oznaka)
			{
			   a+='<h4><i>'+data[0].pitanje+'</i></h4>'+
				'<input type="radio" name="grupa1" value="'+data[0].id_p_o+'"/>'+data[i].odgovor+'</br>';
			 var broj=parseInt(data[0].id_pitanje);
				
				document.getElementById("pZaO").value=broj
	
			}		
			}
			
			
	    
			if(i>0)
			{	
             if(data[i].id_p_o==oznaka)
			 {
							 a+='<input type="radio" name="grupa1" value="'+data[i].id_p_o+'"checked/>'+data[i].odgovor+'</br>';
 
			 }
		if(data[i].id_p_o!=oznaka)
		{
			 a+='<input type="radio" name="grupa1" value="'+data[i].id_p_o+'"/>'+data[i].odgovor+'</br>';
		}	
		}
			}
         if(oznaka==0)
		 {
			 if(i==0)
			{
				a+='<h4><i>'+data[i].pitanje+'</i></h4>'+
				'<input type="radio" name="grupa1" value="'+data[0].id_p_o+'"/>'+data[0].odgovor+'</br>';
			    var broj=parseInt(data[0].id_pitanje);
				
				document.getElementById("pZaO").value=broj;
				
			}
			else{
			a+='<input type="radio" name="grupa1" value="'+data[i].id_p_o+'"/>'+data[i].odgovor+'</br>';
			}
		 }


		}


			document.getElementById("anketaGlasanje").innerHTML=a;
				 var pitanje2=1;
		 $.ajax({
        url: base_url + "php/pitanja.php",
        type: "post",
        data: {
            pitId:idPitanje,
			pitanje2:pitanje2

        },
		 success: function (data1) {
			document.getElementById("pit").value=odg;
			if(data1==false)
			{
				document.getElementById("btnPit1").style.display="none";
				 document.getElementById("pit1").value=1;
				 document.getElementById("btnKraj").style.display="none";
			}
			
			
		      var pit=parseInt(data1.id_pitanje);
		    if(pit<3)
			{
				//alert(pit);
				 document.getElementById("btnKraj").style.display="none";
		 		   document.getElementById("pit1").value=pit;
			    	
				document.getElementById("btnPit").style.display="";
			}  
		         
	 
		 
		 
		 
		 },
		 error:function (xhr,status,error){
            
			//alert(xhr.error);
        }



    });        
	
		 
		 
		 
		 },
		 error:function (xhr,status,error){
          
        }



    });

	
	
	
	
	
	
	
	
	
	
	



});
$("#btnKraj").click(function()
{
	var odg1=$("#odg1").val();
	var odg2=$("#odg2").val();
	var niz=document.getElementsByName("grupa1");

for (var i=0; i<niz.length; i++){
 if (niz[i].checked){
var odg3=niz[i].value;
 break;
 }
 } 

	var idKorisnik=$("#kor").val();
	
	if(odg1==0 || odg2==0 || odg3==0)
	{
		alert("Niste odgovorili na sva pitanja");
		
	}
	else{
	     $.ajax({
        url: base_url + "php/pitanja.php",
        type: "post",
        data: {
            odg1:odg1,
            odg2:odg2,
            odg3:odg3,
			idKorisnik:idKorisnik,
            idemo:true

        },
		 success: function (data) {
			 if(data==201){
			 document.getElementById("anketaGlasanje").innerHTML="Hvala Vam sto ste ucestvovali";
			 document.getElementById("btnPit1").style.display="none";
document.getElementById("btnKraj").style.display="none";
			 }
			 if(data==500)
			 {
				 document.getElementById("anketaGlasanje").innerHTML="Doslo je do greske, pokusajte ponovo";
			 }
			 
		 },
		 
	 error:function (xhr,status,error){
          
        }



    });
	
	}
});











