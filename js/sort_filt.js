const base_url="http://localhost/yummy/";
$(document).ready( function(){
 
 
 
 
 
 $('#searc_button').click(function(){
        //alert(this.id);
      //alert("aaa");
	  var spremanjeOd=$("#vremeOd").val();
	  
	  var spremanjeDo=$("#vremeDo").val();
	  //regExp da mogu samo brojevi ovde i da ne mogu manji od 0
	 var stra=0;
	  
	  var lista=document.getElementById("category");
      var selektovani=lista.selectedIndex;
     var katId=lista.options[lista.selectedIndex].value;
	  
	  if((spremanjeOd!=null && spremanjeOd>=0)&& (spremanjeDo!=null && spremanjeDo>0))
	  { 
		  if(spremanjeDo==spremanjeOd){
			  $("#feedbackPretraga").html("Minimalno vreme pripreme i maksimalno moraju biti razlicita");
		  }
	  }
	 if(spremanjeOd==null || spremanjeDo==null || spremanjeDo==0 || spremanjeDo<0 || spremanjeOd<0)	  
	 {
			spremanjeOd==0;
            spremanjeDo==0;	
	 }
if(katId==0  && spremanjeDo==0 && spremanjeOd==0)
{
alert("Pretraga nema nijedan parametar unet!");	
	
}	
if(katId>0||spremanjeDo>0){
	
	if(spremanjeDo>0 && spremanjeOd==0||spremanjeOd<0){
		spremanjeOd==0;
		$("#vremeOd").val(0);
	}
			   $.ajax({
                url: base_url + "php/pagination.php",
                type: "POST",
                data: {
                    min:spremanjeOd,
                    max:spremanjeDo,
                    katId:katId,
					stranica:stra,
                    send: true

                },
                success: function (data) {
                    
					if(data==null){
						alert("aaa");
					}
						var aaa="";
			for(var i=0;i<data.length;i++)
			{
			aaa+='<div class="col-lg-4 col-sm-6">'+
                    '<div class="recipe-item">'+
                        '<a href="index.php?page=single&id='+data[i].id_jelo+'"><img src="'+data[i].src+'" alt="'+data[i].alt+'" title="'+data[i].title+'"></a>'+
                        '<div class="ri-text">'+
                            '<div class="cat-name">'+data[i].naziv_kategorija+'</div>'+
                            '<a href="index.php?page=single&id='+data[i].id_jelo+'">'+
                                '<h4>'+data[i].naziv+'</h4>'+
                            '</a>'+
                            '<p><i class="far fa-clock" style="font-size:24px"></i>'+data[i].opis+'min</p>'+
                        '</div>'+
                    '</div>'+
                '</div>';
			}
			
			
			
			
			document.getElementById("8d1381317").value=katId;
			var od=parseInt(spremanjeOd);
			var doo=parseInt(spremanjeDo);
			
			document.getElementById("c9502f9aa").value=od
	     	document.getElementById("18a1d676c").value=doo;
			
			document.getElementById("feedbackPretraga").innerHTML="";
            document.getElementById("receptiPrikaz").innerHTML=aaa;
			
         stranice(stra);
					
					
 
                },
                error:function (xhr,status,error){
                    //ANDRIJA
                }

            });
			  
			  
			  
			  
}
			  
		  
		  
		  
		  
	  
	  
	  
	  
	  
	  
	
	  
    });








    $('.pagination_click').click(function() {
        // alert(this.id);
        var id=this.id
        pagination(id);

    });







})

function pagination($id)
{
	
	 var stranica=$id;

    var katId=$('#8d1381317').val();
   var spremanjeOd=$('#c9502f9aa').val();
    var spremanjeDo=$('#18a1d676c').val();

  


    $.ajax({
        url: base_url + "php/pagination.php",
        type: "post",
        data: {
            katId:katId,
            min:spremanjeOd,
            max:spremanjeDo,
            stranica:stranica,
            send: true

        },
        success: function (data) {
            // alert(data);
            
			var aaa="";
			for(var i=0;i<data.length;i++)
			{
			aaa+='<div class="col-lg-4 col-sm-6">'+
                    '<div class="recipe-item">'+
                        '<a href="index.php?page=single&id='+data[i].id_jelo+'"><img src="'+data[i].src+'" alt="'+data[i].alt+'" title="'+data[i].title+'"></a>'+
                        '<div class="ri-text">'+
                            '<div class="cat-name">'+data[i].naziv_kategorija+'</div>'+
                            '<a href="index.php?page=single&id='+data[i].id_jelo+'">'+
                                '<h4>'+data[i].naziv+'</h4>'+
                            '</a>'+
                            '<p><i class="far fa-clock" style="font-size:24px"></i>'+data[i].opis+'min</p>'+
                        '</div>'+
                    '</div>'+
                '</div>';
			}
			
			
			
			
			
            document.getElementById("receptiPrikaz").innerHTML=aaa;
			
         stranice(stranica);
//poziva funkciju koja radi stranicenje




//prikzivanje proizvoda










        },
        error:function (xhr,status,error){
            //ANDRIJA
        }



    });



	
	//funkic click za paginaciju
	
	
}

function klik($id) {


    var stranica=$id;

    var katId=$('#8d1381317').val();
       var pripremaOd=$('#c9502f9aa').val();
    var pripremaDo=$('#18a1d676c').val();




    $.ajax({
        url: base_url + "php/pagination.php",
        type: "POST",

        data: {
            min:pripremaOd,
            max:pripremaDo,
            stranica:stranica,
            katId:katId,
            send: true

        },
        success: function (data) {
            // alert(data);
            //
          var aaa="";
			for(var i=0;i<data.length;i++)
			{
			aaa+='<div class="col-lg-4 col-sm-6">'+
                    '<div class="recipe-item">'+
                        '<a href="#"><img src="'+data[i].src+'" alt="'+data[i].alt+'" title="'+data[i].title+'"></a>'+
                        '<div class="ri-text">'+
                            '<div class="cat-name">'+data[i].naziv_kategorija+'</div>'+
                            '<a href="index.php?page=single&id='+data[i].id_jelo+'">'+
                                '<h4>'+data[i].naziv+'</h4>'+
                            '</a>'+
                            '<p><i class="far fa-clock" style="font-size:24px"></i>'+data[i].opis+'min</p>'+
                        '</div>'+
                    '</div>'+
                '</div>';
			}
			
			
			
			
			
            document.getElementById("receptiPrikaz").innerHTML=aaa;
           



      stranice(stranica);

//prikzivanje proizvoda




//ANDRIJA





        },
        error:function (xhr,status,error){
            //ANDRIJA
        }



    });


}

function stranice($str)
{
	var stranica=$str;
	var katId=$('#8d1381317').val();
	//alert(katId);
    var pripremaOd=$('#c9502f9aa').val();

    var pripremaDo=$('#18a1d676c').val();

	
	 $.ajax({
                url: base_url + "php/stranice.php",
                type: "POST",
                data: {
                    min:pripremaOd,
                    max:pripremaDo,
                    katId:katId,
					
                    send: true

                },
                success: function (data1) {
  var broj=parseInt(data1.broj);
  // alert(broj);
  data1=Math.ceil(broj/2);
  //alert(data1);
                    var strr=parseInt(stranica);
				
                    //alert(data1);
                    var novaPaginacinja='<li>Page &nbsp &nbsp</li>';
                       

                    if (data1>6)
                    {
                      



                        if (strr==0)
                        {
                           // alert("1")
                            novaPaginacinja+='<li><button id="0" class="pagination_click active" onclick="klik(id)"  >1</button></li>';
                            for (var str=2;str<=(strr+3);str++)
                            {
                                novaPaginacinja+='<li><button id="'+(str-1)+'" class="pagination_click" onclick="klik(id)"  >'+str+'</button></li>';

                            }
                            novaPaginacinja+='<li>&nbsp&nbsp...&nbsp&nbsp</li>';
                            novaPaginacinja+='<li ><button id="'+(data1-1)+'" class="pagination_click" onclick="klik(id)"  >'+data1+'</button></li>';

                        }

                        if (strr==1)

                        {
                            //alert("2");
                            novaPaginacinja+='<li><button id="0" class="pagination_click" onclick="klik(id)"  >1</button></li>';
                            novaPaginacinja+='<li><button id="1" class="pagination_click active" onclick="klik(id)"  >2</button></li>';
                            for (var str=3;str<5;str++)
                            {
                                novaPaginacinja+='<li><button id="'+(str-1)+'" class="pagination_click" onclick="klik(id)"  >'+str+'</button></li>';

                            }
                            novaPaginacinja+='<li>&nbsp&nbsp...&nbsp&nbsp</li>';
                            novaPaginacinja+='<li ><button id="'+(data1-1)+'" class="pagination_click" onclick="klik(id)"  >'+data1+'</button></li>';

                        }
                        if (strr==(data1-2))
                        {
                            //alert("data-1")
                            //alert(stranica)
                            novaPaginacinja+='<li ><button id="0" class="pagination_click" onclick="klik(id)"  >1</button></li>';
                            novaPaginacinja+='<li>&nbsp&nbsp...&nbsp&nbsp</li>';
                            novaPaginacinja+='<li ><button id="'+(strr -2)+'"class="pagination_click" onclick="klik(id)"  >'+(strr-1)+'</button></li>';
                            novaPaginacinja+='<li ><button id="'+(strr-1)+'" class="pagination_click" onclick="klik(id)"  >'+strr+'</button></li>';
                            novaPaginacinja+='<li><button id="'+(data1-2)+'"class="pagination_click active" onclick="klik(id)"  >'+(data1-1)+'</button></li>';
                            novaPaginacinja+='<li ><button id="'+(data1-1)+'" class="pagination_click" onclick="klik(id)"  >'+data1+'</button></li>';




                        }
                        if (strr==data1-1)
                        {
                            //alert("data1")
                            novaPaginacinja+='<li ><button id="0" class="pagination_click" onclick="klik(id)"  >1</button></li>'+
                                '<li>&nbsp&nbsp...&nbsp&nbsp</li>'+ '<li ><button id="'+(data1-3)+'" class="pagination_click" onclick="klik(id)"  >'+(data1-2)+'</button></li>'+
                                '<li ><button id="'+(data1-2)+'" class="pagination_click" onclick="klik(id)"  >'+(data1-1)+'</button></li>'+
                                '<li><button id="'+(data1-1)+'" class="pagination_click active" onclick="klik(id)"  >'+data1+'</button></li>';

                        }

                        if (strr==2)
                        {
                            novaPaginacinja+='<li ><button id="0" class="pagination_click" onclick="klik(id)"  >1</button></li>'+
                                '<li ><button id="1" class="pagination_click" onclick="klik(id)"  >2</button></li>'+
                                '<li><button id="2" class="pagination_click active" onclick="klik(id)"  >3</button></li>'+
                                '<li ><button id="3" class="pagination_click" onclick="klik(id)"  >4</button></li>'+
                                '<li ><button id="4" class="pagination_click" onclick="klik(id)"  >5</button></li>'+
                                '<li>&nbsp&nbsp...&nbsp&nbsp</li>'+
                                '<li><button id="'+(data1-1)+'" class="pagination_click" onclick="klik(id)"  >'+data1+'</button></li>';

                        }

                        if (strr==(data1-3) )
                        {
                            novaPaginacinja+='<li ><button id="0" class="pagination_click" onclick="klik(id)"  >1</button></li>'+
                                '<li>&nbsp&nbsp...&nbsp&nbsp</li>'+
                                '<li ><button id="'+(strr-2)+'" class="pagination_click" onclick="klik(id)"  >'+(strr-1)+'</button></li>'+
                                '<li ><button id="'+(strr-1)+'" class="pagination_click" onclick="klik(id)"  >'+strr+'</button></li>'+
                                '<li><button id="'+strr+'" class="pagination_click active" onclick="klik(id)"  >'+(strr+1)+'</button></li>'+
                                '<li ><button id="'+(strr+1)+'" class="pagination_click" onclick="klik(id)"  >'+(strr+2)+'</button></li>'+

                                '<li ><button id="'+(data1-1)+'" class="pagination_click" onclick="klik(id)"  >'+data1+'</button></li>';


                        }



                        if(strr!=0 && strr!=1 &&strr!=2  &&strr!=data1-3 && strr!=data1-2 && strr!=data1-1) {

                              //alert("nista"+stranica);
                            novaPaginacinja+= '<li ><button id="0" class="pagination_click" onclick="klik(id)"  >1</button></li>';

                            if (strr-2!=1) {
                                novaPaginacinja += '<li>&nbsp&nbsp...&nbsp&nbsp</li>';
                            }

                            for (var str=(strr-2);str<strr;str++)
                            {

                                novaPaginacinja+='<li><button id="'+str+'" class="pagination_click" onclick="klik(id)"  >'+(str+1)+'</button></li>';

                            }


                            novaPaginacinja+= '<li><button id="'+strr+'" class="pagination_click active" onclick="klik(id)"  >'+(strr+1)+'</button></li>';
                           novaPaginacinja+='<li><button id="'+(strr+1)+'" class="pagination_click" onclick="klik(id)"  >'+(strr+2)+'</button></li>'+
                                    '<li><button id="'+(strr+2)+'" class="pagination_click" onclick="klik(id)"  >'+(strr+3)+'</button></li>';

                           if(data1-4!=strr){
                            novaPaginacinja+='<li>&nbsp&nbsp...&nbsp&nbsp</li>';}
                            novaPaginacinja+= '<li ><button id="'+(data1-1)+'" class="pagination_click" onclick="klik(id)"  >'+data1+'</button></li>';





                        }
                    }





                    if(data1<=6)
                    {
                        if (strr==-1)
                        {

                            novaPaginacinja+='<li class="active"><button id="-1" class="pagination_click" onclick="klik(id)"  >Preporuceni</button></li>';


                        }
                        for (var a=0;a<data1;a++)
                        {

                            if (stranica==a)
                            {
                                novaPaginacinja+='<li><button id="'+a+'" class="pagination_click active" onclick="klik(id)"  >'+(a+1)+'</button></li>';
                            }
                            else
                                novaPaginacinja+='<li><button id="'+a+'" class="pagination_click" onclick="klik(id)"  >'+(a+1)+'</button></li>';



                        }


                    }
if(strr!=(data1-1)){
                    novaPaginacinja+='<li><button id="'+(strr+1)+'" class="pagination_click" onclick="klik(id)"  >Next</button></li>';
}$('.pagination').html(novaPaginacinja);
                },
                error:function (xhr,status,error){
                    //ANDRIJA
                }

            });
}


