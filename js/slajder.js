$(document).ready(function(){


//setTimeout("dohvati(id=1);",1000);
setTimeout("prikaz(id=0);",1000);

});
function prikaz(id)
{
	var id=id;
 

	$.ajax({
			url:"php/slajder.php",
			type:"post",
			method:"post",
			data:{
			prikaz:id,	
            send:true			
			},
			success: function(data)
			{
				var broj=parseInt(id);
				if(broj==0){
				$("#proba").val(1);	
				}
				if(broj==1){
				$("#proba").val(0);	
					
				}
				slajder1(data);
					
				
			}
	} );
	
}
function slajder1(data)
{
	
	$(".order-lg-1").html("");
	$(".order-lg-3").html("");
for(var i=0;i<data.length;i++){        
		
	
               if(data[i].slajder==2)
			   {
               var b= '<div class="pt-recipe-item">'+
                                             '<a href="index.php?page=single&id='+data[i].id_jelo+'">'+
                         '<img src="'+data[i].src+'"alt="'+data[i].alt+'"title="'+data[i].alt+'"/>'+
                       
                       ' <div class="pt-recipe-text">'+
                           ' <h4>'+data[i].naziv+'</h4>'+
						   '</div>'+
                       ' </a></div>';
					 $(".order-lg-3").append(b);
			   }
                   
                    if(data[i].slajder==3)
			   {
               var c= '<div class="pt-recipe-item">'+
                                             '<a href="index.php?page=single&id='+data[i].id_jelo+'">'+
                         '<img src="'+data[i].src+'"alt="'+data[i].alt+'"title="'+data[i].alt+'"/>'+
                       
                       ' <div class="pt-recipe-text">'+
                           ' <h4>'+data[i].naziv+'</h4>'+
						   '</div>'+
                       ' </a></div>';
					 $(".order-lg-1").append(c);
			   }
              
}
    var id=$("#proba").val();
	setTimeout("prikaz("+id+")",7000);
}




