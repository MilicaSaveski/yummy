
/*  ---------------------------------------------------
    Template Name: Yummy Food Blog
    Description: Yummy Food Blog HTML Template
    Author: Colorlib
    Author URI: http://www.colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
         /*------------------
            Product filter
        --------------------*/
        if ($('#category-filter').length > 0) {
            var containerEl = document.querySelector('#category-filter');
            var mixer = mixitup(containerEl);
        }
        $(".categories-filter-section .filter-item ul li").on('click', function () {
            $(".categories-filter-section .filter-item ul li").removeClass('active');
            $(this).addClass('active');
        });
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    // Search model
	$('.search-switch').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});


    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-------------------
		Category Select
	--------------------- */
    $('#category').niceSelect();

    /*-------------------
		Local Select
	--------------------- */
    $('#tag').niceSelect();

})(jQuery);

$("#forS").click(function(){
	
	var email=$("#sEmail").val();
	var reEmail= /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
		if(reEmail.test(email)){
//email okej ide ajaks
//MILICA
$.ajax({
			url: " http://localhost/yummy/php/subscribe.php",
			type:"post",
			method:"post",
			data:{
		    email:email,
            poslato:true			
			},
			success: function(data,xhr)
			{ 
			if(data==null){
				document.getElementById("sEmail").value="";
			alert("Uspesno ste se prijavili");
			
			}
			},
			error:function(xhr,status,error)
			{
             		 var poruka = "<h1>Neuspesna prijava</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
                    case 409:
                        poruka = "<h1>Email vec postoji.</h1>";
                        break;
                   case 422:
                       poruka = "<h1>Podaci nisu validni.</h1>";
                       console.log(xhr.responseText);
                        break;
                    case 500:
                        poruka = "<h1>Greska 500.</h1>";
                        break;
                }//console.log(xhr.status);            
               alert(poruka);		
				
				
				
			}			
			
			
			
			
		});


	


	
	
	}
	else{
		
		
		alert("Email nije okej!");
	}
	
	
	
});
$(document).ready( function(){
	
	$(".fa-search").click(function(){
		var modal = document.getElementById('id01');
		modal.style.display = "block";
	})
	var modal = document.getElementById('id01');
$("#id01").on("click", ".w3-button",function(event){
	 if (event.target == modal) {
 
  }
	   modal.style.display = "none";
});
});


$("#search-input").keyup(function(){
var otkucano =$(this).val();

//alert(otkucano);
if(otkucano.length==0)
{
	 $(".sredinaM").html("");
				document.getElementById('id01').style.display='block';
}

if(otkucano.length>0)
{
	var reOtkucano=/^[\w\s]{1,30}$/;
	if(reOtkucano.test(otkucano)){
		//MILICA
		  var rec= otkucano.toLowerCase();
	 $.ajax({
            url :  "http://localhost/yummy/php/pretraga.php",
            type : "post",
			method:"POST",   
            data : {
                otkucano:rec,
				send: true
				
			},
           success : function(data) { /*$("#feedback").html("<h1>Uspesna registracija.</h1>");*/
              //window.location="http://localhost/Fledataor/indedata[i].php?page=super"; 
			  //console.log(data);
			
			
				
			
			
			
				var b="<div class='row'>";
				var broj=0;
				for(var i=0;i<data.length;i++){
					
			if(rec !== '' && data[i].naziv.toLowerCase().indexOf(rec) === 0){
				broj++;
			b+='<div class="col-lg-4 col-sm-6">'+
                    '<div class="recipe-item">'+
                        '<a href="index.php?page=single&id='+data[i].id_jelo+'"><img src="'+data[i].src+'" alt="'+data[i].alt+'" title="'+data[i].title+'"></a>'+
                        '<div class="ri-text">'+
                            '<div class="cat-name">'+data[i].naziv_kategorija+' </div>'+
                            '<a href="index.php?page=single&id='+data[i].id_jelo+'">'+
                                '<h4>'+data[i].naziv+'</h4>'+
                            '</a>'+
                            '<p>'+data[i].opis+'</p>'+
                        '</div>'+
                    '</div>'+
                '</div>' ;}
				}
			    //console.log(b);
				//console.log(a);
				if(broj==0){
					 b="<h3>UPPSSS PROBAJTE NESTO DRUGO</h3>";
				
				}
					 b+='</div>';
					 $(".sredinaM").html(b);
				document.getElementById('id01').style.display='block';
				
			
				
				
				
               // document.getElementById("paginationShow").innerHTML=a;	 
				
		
           },
           error : function(xhr, status, error) {
			   //alert("aa");
			   
			   //console.log(data);
                var poruka = "<h1>Nemamo takav proizvod.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }
				console.log(xhr.status);            
                
           }
	});	
	
	
	}
	else{
		alert("Dozoljena su samo slova i razmak izmedju reci!");
	}
	//alert(otkucano);
	
	
	
	
	
}






});



