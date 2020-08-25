const base_url="http://localhost/yummy/";
$(document).ready( function(){


var modal = document.getElementById('id01');
$("#id01").on("click", ".w3-button",function(event){
	 if (event.target == modal) {
 
  }
	   modal.style.display = "none";
});

 $('.adminClick').click(function() {
        // alert(this.id);
        var id=this.id
        tabela(id);

    });
	

	// VAZNOOOOO/////////
	$("#right").on("click", ".btn-danger", function(event){
    
	 //alert(this.id);
	 obrisi(this.id);
});

$("#id01").on("click", ".promenaPodaci", function(event){
    
	 //alert(this.id);
	 //alert(this.id);
	document.getElementById("prikaz").value=this.id;
	var promenjiva=$("#prikaz").val();
	// alert(promenjiva);
	 endUpdate(this.id);
});
$("#id01").on("click", ".promenaNacinJelo", function(event){
    
	 //alert(this.id);
	 //alert(this.id);
	jeloNacinIzmena();
});

$("#right").on("click", ".btn-warning", function(event){
    
	 //alert(this.id);
	 izmena(this.id);
});
$("#right").on("click", ".btn-food", function(event){
    
	 //alert(this.id);
	 nacinSpremanja(this.id);
});


$("#unosNovo").change(function(){
	var id=this.value;
	if(id!=0)
	{
		//$("#unosNovo").val(0);
		modalInsert(id);
	}
	
	
	
	
});




});
function tabela($id)
{
	var promenjiva=$id;
	//alert(promenjiva);
	$("#unosNovo").val(0);
	  $.ajax({
                url: base_url + 'php/'+promenjiva+'.php',
                type: "POST",
                data: {
                    send: true

                },
                success: function (data) {
                        prikaz(data,promenjiva);
				},
				error:function (xhr,status,error){
                    
                }

            });
}
//prikaz tabela
function prikaz(data,promenjiva)
{
	
	var a="<h4>"+promenjiva+"</h4></br>";
	 a+="<table class='adminTabela'>";
	switch(promenjiva){
		
	case "korisnik":
	
	a+="<tr class='first'><td>Ime</td><td>Prezime</td>"+
	"<td>Userame</td><td>Email</td><td>Datum</td><td>Update</td><td>Aktivan</td><td>Uloga</td><td>Izmeni/Obrisi</td></tr>"
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr class="second"><td>'+data[i].ime+'</td>'+
	'<td>'+data[i].prezime+'</td>'+
	'<td>'+data[i].username+'</td>'+
	'<td>'+data[i].email+'</td>'+
	'<td>'+data[i].datum_registracije+'</td>'+
	'<td>'+data[i].update_at+'</td>'+
	'<td>'+data[i].aktivan+'</td>'+
	'<td>'+data[i].naziv_uloge+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_korisnik+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_korisnik+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].ime+'</td>'+
	'<td>'+data[i].prezime+'</td>'+
	'<td>'+data[i].username+'</td>'+
	'<td>'+data[i].email+'</td>'+
	'<td>'+data[i].datum_registracije+'</td>'+
	'<td>'+data[i].update_at+'</td>'+
	'<td>'+data[i].aktivan+'</td>'+
	'<td>'+data[i].naziv_uloge+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_korisnik+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_korisnik+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
	}
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "uloge":
	a+='<tr class="first"><td>Uloga</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].naziv_uloge+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_uloga+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_uloga+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].naziv_uloge+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_uloga+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_uloga+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "poruke":
	a+='<tr class="first"><td>Email</td><td>Name</td><td>Subject</td><td>Text</td><td>Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].email+'</td>'+
	'<td>'+data[i].name+'</td>'+
	'<td>'+data[i].subject+'</td>'+
	'<td>'+data[i].text_poruke+'</td>'+
	'<td>'+
	'<button class="btn-danger" id="'+data[i].id_p_k+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].email+'</td>'+
	'<td>'+data[i].name+'</td>'+
	'<td>'+data[i].subject+'</td>'+
	'<td>'+data[i].text_poruke+'</td>'+
	'<td>'+
	'<button class="btn-danger" id="'+data[i].id_p_k+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	
	
	case "subscribe":
	a+='<tr class="first"><td>Rb</td><td>Email</td><td>Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+(i+1)+'</td><td>'+data[i].email+'</td>'+
	'<td><button class="btn-danger" id="'+data[i].id_s+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+(i+1)+'</td><td>'+data[i].email+'</td>'+
	'<td><button class="btn-danger" id="'+data[i].id_s+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	
	
	case "kontinenti":
	a+='<tr class="first"><td>Kontinent</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].naziv+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_kontinent+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_kontinent+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].naziv+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_kontinent+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_kontinent+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "drzave":
	a+='<tr class="first"><td>Drzava</td><td>Kontinent</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].naziv_drzave+'</td>'+
	'<td>'+data[i].naziv+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_drzava+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_drzava+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].naziv_drzave+'</td>'+
		'<td>'+data[i].naziv+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_drzava+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_drzava+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "meni":
	a+='<tr class="first"><td>Ispis</td><td>Href</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].ispis+'</td>'+
	'<td>'+data[i].href+'</td>'+
	'<td>'+
	'<button class="btn-danger" id="'+data[i].id_meni+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].ispis+'</td>'+
		'<td>'+data[i].href+'</td>'+
	'<td>'+
	'<button class="btn-danger" id="'+data[i].id_meni+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "jelo":
	a+='<tr class="first"><td>Naziv</td><td>Kategorija</td>'+
	'<td>Opis</td><td>Notes</td><td>Vreme pripreme</td><td>Drzava</td>'+
	'<td>Glasova</td>'+
	'<td>Slika</td>'+
	'<td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].naziv+'</td>'+
	'<td>'+data[i].naziv_kategorija+'</td>'+
	'<td>'+data[i].opis+'</td>'+
	'<td>'+data[i].notes+'</td>'+
	'<td>'+data[i].vreme_pripeme+'</td>'+
	'<td>'+data[i].naziv_drzave+'</td>'+
	'<td>'+data[i].glas+'</td>'+
	'<td><img src="'+data[i].src+'"alt="'+data[i].alt+'"title="'+data[i].title+'" width="50px" height="20px"/> </td>'+
	
	'<td><button class="btn-warning" id="'+data[i].id_jelo+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_jelo+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].naziv+'</td>'+
		'<td>'+data[i].naziv_kategorija+'</td>'+
	'<td>'+data[i].opis+'</td>'+
	'<td>'+data[i].notes+'</td>'+
	'<td>'+data[i].vreme_pripeme+'</td>'+
	'<td>'+data[i].naziv_drzave+'</td>'+
	'<td>'+data[i].glas+'</td>'+
	'<td><img src="'+data[i].src+'"alt="'+data[i].alt+'"title="'+data[i].title+'" width="50px" height="20px"/> </td>'+
	'<td><button class="btn-warning" id="'+data[i].id_jelo+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_jelo+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "namernice":
	a+='<tr class="first"><td>Namernica</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].naziv+'</td>'+
	
	'<td><button class="btn-warning" id="'+data[i].id_namernice+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_namernice+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].naziv+'</td>'+
		
	'<td><button class="btn-warning" id="'+data[i].id_namernice+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_namernice+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "spremanje":
	a+='<tr class="first"><td>Spremanje</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].nacin1+'</td>'+
	
	'<td><button class="btn-warning" id="'+data[i].id_nacin+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_nacin+'"><i class="fa fa-close"></i></button>'+
	'<button class="btn-food" id="'+data[i].id_nacin+'"><i class="fas fa-pizza-slice" ></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].nacin1+'</td>'+
		
	'<td><button class="btn-warning" id="'+data[i].id_nacin+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_nacin+'"><i class="fa fa-close"></i></button>'+
		'<button class="btn-food" id="'+data[i].id_nacin+'"><i class="fas fa-pizza-slice" ></i></button></td>'+
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "pitanjeA":
	a+='<tr class="first"><td>Pitanje</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].pitanje+'</td>'+
	
	'<td><button class="btn-warning" id="'+data[i].id_pitanje+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_pitanje+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].pitanje+'</td>'+
		
	'<td><button class="btn-warning" id="'+data[i].id_pitanje+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_pitanje+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "kategorije":
	a+='<tr class="first"><td>Kategorija</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].naziv_kategorija+'</td>'+
	
	'<td><button class="btn-warning" id="'+data[i].id_proizvod_kategorija+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_proizvod_kategorija+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].naziv_kategorija+'</td>'+
		
	'<td><button class="btn-warning" id="'+data[i].id_proizvod_kategorija+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_proizvod_kategorija+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "slika":
	a+='<tr class="first"><td>Slika</td><td>Alt</td><td>Title</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td><img src="'+data[i].src+'" width="100px" height="50px"/></td>'+
	'<td>'+data[i].alt+'</td>'+
	'<td>'+data[i].title+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_slika+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_slika+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td><img src="'+data[i].src+'" width="100px" height="50px"/></td>'+
		'<td>'+data[i].alt+'</td>'+
	'<td>'+data[i].title+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_slika+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_slika+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "odgovori":
	a+='<tr class="first"><td>Pitanje</td><td>Odgovori</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].pitanje+'</td>'+
	 '<td>'+data[i].odgovor+'</td>'+
	
	'<td><button class="btn-warning" id="'+data[i].id_p_o+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_p_o+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].pitanje+'</td>'+
		 '<td>'+data[i].odgovor+'</td>'+
	'<td><button class="btn-warning" id="'+data[i].id_p_o+'"><i class="fa fa-check"></i></button>'+
	'<button class="btn-danger" id="'+data[i].id_p_o+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "komentariA":
	a+='<tr class="first"><td>Komentar</td><td>Vreme</td>'+
	'<td>Recept</td><td>Korisnik</td>'+
	'<td>Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].tekst+'</td>'+
	 '<td>'+data[i].vreme+'</td>'+
	 '<td>'+data[i].naziv+'</td>'+
	 '<td>'+data[i].username+'</td>'+
     '<td>'+
	'<button class="btn-danger" id="'+data[i].id_komentar+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].tekst+'</td>'+
	 '<td>'+data[i].vreme+'</td>'+
	 '<td>'+data[i].naziv+'</td>'+
	 '<td>'+data[i].username+'</td>'+
'<td>'+
	'<button class="btn-danger" id="'+data[i].id_komentar+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "jeloNacin":
	a+='<tr class="first"><td>Jelo</td><td>Priprema</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].naziv+'</td>'+
	 '<td>'+data[i].nacin1+'</td>'+
	
	'<td>'+
	'<button class="btn-danger" id="'+data[i].id_jelo_nacin+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].naziv+'</td>'+
		 '<td>'+data[i].nacin1+'</td>'+
	'<td>'+
	'<button class="btn-danger" id="'+data[i].id_jelo_nacin+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "jeloNamernice":
	a+='<tr class="first"><td>Jelo</td><td>Namernica</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].naziv+'</td>'+
	 '<td>'+data[i].namernica+'</td>'+
	
	'<td>'+
	'<button class="btn-danger" id="'+data[i].id_jelo_namernice+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].naziv+'</td>'+
		 '<td>'+data[i].namernica+'</td>'+
	'<td>'+
	'<button class="btn-danger" id="'+data[i].id_jelo_namernice+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	case "anketaA":
	a+='<tr class="first"><td>Pitanje</td><td>Odgovor</td><td>Korisnik</td><td>Izmeni/Obrisi</td></tr>';
	for(var i=0;i<data.length;i++)
	{
		if(i%2==0){
	a+='<tr><td>'+data[i].pitanje+'</td>'+
	'<td>'+data[i].odgovor+'</td>'+
	 '<td>'+data[i].username+'</td>'+
     
	'<td><button class="btn-danger" id="'+data[i].id_odgovor+'"><i class="fa fa-close"></i></button></td>'+
	'</tr>';	
		}
		else{
		a+='<tr class="first"><td>'+data[i].pitanje+'</td>'+
	'<td>'+data[i].odgovor+'</td>'+
	 '<td>'+data[i].username+'</td>'+
	
	'<td><button class="btn-danger" id="'+data[i].id_jelo_namernice+'"><i class="fa fa-close"></i></button></td>'+
	
	'</tr>';	
			
		}
		
	}
	
	document.getElementById("prikaz").value=promenjiva;
	break;
	
	
	
	}
	a+='</table>';
	$("#right").html(a);
	
	
}
//brisanje
function obrisi($id)
{
	var obrisi=$id;
	var promenjiva=$("#prikaz").val();
	//alert(obrisi+tabela);
	
	  $.ajax({
                url: base_url + 'php/'+promenjiva+'.php',
                type: "POST",
                data: {
					obrisi:obrisi,
                    send: true

                },
                success: function (data,xhr) {
				
					var id=promenjiva;
                       tabela(id);
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Objekat nije izbrisan.</h1>";
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
//--------------------- U P D A T E --------------------------//
function izmena($id)
{
	var update=parseInt($id);
	var promenjiva=$("#prikaz").val();
	
	
	  $.ajax({
                url: base_url + 'php/'+promenjiva+'.php',
                type: "POST",
                data: {
					update:update,
					dohvati:true

                },
                success: function (data,xhr) {
				
					var id=promenjiva;
                       modalPrikaz(data,id);
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Objekat vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	
	
	
	
	
	
	
	
	
	
	
	
	
}
//prikaz modal iskakajuci
function modalPrikaz(data,id)
{
	var promenjiva=id;
	var a="";
	switch(promenjiva)
	{
		case'korisnik':
		
		a+='<label>Ime:</label>&nbsp<input type="text" id="imeModal" value="'+data.ime+'"/>'+
		'</br><label>Prezime:</label>&nbsp<input type="text" id="prezimeModal" value="'+data.prezime+'"/>'+
		'</br><label>Username:</label>&nbsp<input type="text" id="usernameModal" value="'+data.username+'"/>'+
		'</br><label>Email:</label>&nbsp<input type="text" id="emailModal" value="'+data.email+'"/>'+
		'</br><label>Datum registracije:</label>&nbsp<label id="datumModal">'+data.datum_registracije+'</label>'+
		'</br><label>Aktivan:</label>&nbsp'+
		 '<select  id="aktivanModal">'+
		 '<option value="'+data.aktivan+'">';
         if(data.aktivan==1){
		  a+='Aktivan</option><option value="0">Neaktivan</option>';
		 }
		 if(data.aktivan==0)
		 {
			 a+='Neaktivan</option><option value="1">Aktivan</option>';
		 }
		 a+='</select>'+
		 '</br><label>Uloga:</label>&nbsp'+
		 '<select name="ulogaModal"  id="ulogaModal">'+
		 '<option value="'+data.id_uloga_korisnik+'">';
         if(data.id_uloga_korisnik==1){
		  a+='Korisnik</option><option value="2">Admin</option>';
		 }
		 if(data.id_uloga_korisnik==2)
		 {
			 a+='Admin</option><option value="1">Korisnik</option>';
		 }
		 a+='</select></br><button class="promenaPodaci" id="'+data.id_korisnik+'">Izmeni</button>';	
			
			
		
	     $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"uloge":
		a+='<label>Naziv:</label>&nbsp<input type="text" id="ulogaNazivM" value="'+data.naziv_uloge+'"/>'+
		'</br><button class="promenaPodaci" id="'+data.id_uloga+'">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"kontinenti":
		a+='<label>Naziv:</label>&nbsp<input type="text" id="kontinentiM" value="'+data.naziv+'"/>'+
		'</br><button class="promenaPodaci" id="'+data.id_kontinent+'">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"drzave":
		a+='<label>Naziv:</label>&nbsp<input type="text" id="drzaveM" value="'+data.naziv_drzave+'"/>';
		a+='</br><label>Kontinenti:</label>&nbsp<select id="aaa" name="drzaveKontinentiM">'+
            '<option value="'+data.kontinent_id+'">'+data.naziv+'</option></select>';		
			$(".sredinaM").html(a);
			 var idDrzava=data.id_drzava;
			 var brojId=parseInt(data.kontinent_id);
$.ajax({
                url: base_url + 'php/kontinenti.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				  if(data[i].id_kontinent!=brojId){
				 var b='<option value="'+data[i].id_kontinent+'">'+data[i].naziv+'</option>';
				   $("#aaa").append(b);
				 }
			  }				  
			 var b='</select></br><button class="promenaPodaci" id="'+idDrzava+'">Izmeni</button>';
			 $(".sredinaM").append(b);
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
		
		
		
		
		
		
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	  
		document.getElementById('id01').style.display='block';
		break;
		case"kategorije":
		a+='<label>Naziv:</label>&nbsp<input type="text" id="kategorijaM" value="'+data.naziv_kategorija+'"/>'+
		'</br><button class="promenaPodaci" id="'+data.id_proizvod_kategorija+'">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"pitanjeA":
		a+='<label>Pitanje:</label>&nbsp'+
		'<textarea id="pitanjeM">'+data.pitanje+'</textarea>'+
		'</br><button class="promenaPodaci" id="'+data.id_pitanje+'">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"namernice":
		a+='<label>Naziv:</label>&nbsp'+
		'<input type="text" value="'+data.naziv+'" id="namernicaM"/>'+
		'</br><button class="promenaPodaci" id="'+data.id_namernice+'">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"spremanje":
		a+='<label>Nacin:</label>&nbsp'+
	   '<textarea id="spremanjeM"> '+data.nacin1+' </textarea>'+
		'</br><button class="promenaPodaci" id="'+data.id_nacin+'">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"meni":
		a+='<label>Ispis:</label>&nbsp'+
	   '<input type="text" value="'+data.ispis+'" id="ispisM"/>'+
	   '</br><label>Href:</label>&nbsp'+
	   '<input type="text" value="'+data.href+'" id="hrefM"/>'+
		'</br><button class="promenaPodaci" id="'+data.id_meni+'">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"slika":
		a+='<form accept-charset="UTF-8" method="post" action="php/slika.php" role="form" enctype="multipart/form-data">'+
		'<label>Slika:</label>&nbsp'+
	   '<img id="slikaM" src="'+data.src+'"width="150px" height="75px"/>'+
	   '</br><input type="file" name="slikaUpdate" />'+
	   '</br><label>Alt:</label>&nbsp'+
	   '<input type="text" value="'+data.alt+'" name="altM" id="altM"/>'+
	   '</br><label>Title</label>'+
	   '<input type="text" value="'+data.title+'" name="titleM" id="titleM"/>'+
	   '<input type="hidden" value="'+data.id_slika+'" name="hiddenSlika" id="hiddenSlika"/>'+
	   '</br><label>Proizvod:</label>'+
	   '&nbsp<select id="proizvodListaM" name="proizvodListaM">'+
            '<option value="'+data.id_proizvod+'">'+data.naziv+'</option></select>'+
			'</br><button id="btnA" name="btnA">Izmeni</button></form>';	
	     $(".sredinaM").html(a);
	  
		
	         var idSlika=parseInt(data.id_slika);
			 var brojId=parseInt(data.id_proizvod);
$.ajax({
                url: base_url + 'php/jelo.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				  if(data[i].id_jelo!=brojId){
				 var b='<option value="'+data[i].id_jelo+'">'+data[i].naziv+'</option>';
				   $("#proizvodListaM").append(b);
				 }
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
	   
	   
	   
	   
	   

		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	 
		document.getElementById('id01').style.display='block';
		break;
		case"odgovori":
		a+='<label>'+data.pitanje+'</label>&nbsp'+
		'</br><input type="text" value="'+data.odgovor+'" id="odgovorM"/>'+
		'</br><button class="promenaPodaci" id="'+data.id_p_o+'">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"jelo":
		a+='<label>Naziv:</label>&nbsp'+
	
	   '<input type="text" id="nazivM" value="'+data.naziv+'" />'+
	   '</br><label>Opis:</label>&nbsp'+
	 		'<textarea id="opisM">'+data.opis+'</textarea>'+
	   '</br><label>Notes:</label>'+
      '<textarea id="notesM">'+data.notes+'</textarea>'+
	   '</br><label>Vreme pripreme:</label>'+
	   '<input type="text" id="vremeM" value="'+data.vreme_pripeme+'"/>'+ 
	    '</br><label>Drzava:</label>'+
	   '&nbsp<select id="drzavaListaM" name="drzavaListaM">'+
            '<option value="'+data.drzava_id+'">'+data.naziv_drzave+'</option></select>'+
			'</br><label>Kategorija:</label>'+
	   '&nbsp<select id="katJeloListaM" name="katJeloListaM">'+
            '<option value="'+data.id_kategorija+'">'+data.naziv_kategorija+'</option></select>'+
			'</br><button id="'+data.id_jelo+'" class="promenaPodaci">Izmeni</button></form>';	
	     $(".sredinaM").html(a);
	  
		
	       
			 var brojId=parseInt(data.id_kategorija);
			 var brojDrzavaId=parseInt(data.drzava_id);
$.ajax({
                url: base_url + 'php/kategorije.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				  if(data[i].id_proizvod_kategorija!=brojId){
				 var b='<option value="'+data[i].id_proizvod_kategorija+'">'+data[i].naziv_kategorija+'</option>';
				   $("#katJeloListaM").append(b);
				 }
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
	   $.ajax({
                url: base_url + 'php/drzave.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				  if(data[i].id_drzava!=brojDrzavaId){
				 var b='<option value="'+data[i].id_drzava+'">'+data[i].naziv_drzave+'</option>';
				   $("#drzavaListaM").append(b);
				 }
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
	   
	   
	   
	   

		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	 
		document.getElementById('id01').style.display='block';
		break;
		
		
		
		
		
		//kraj switch
	}
	
	
	
	
	
}
//KRAJ IZMENE IDU PROVEREE koristi iste funkcije za proveru kao za insert!!!!
function endUpdate($id)
{
	
	var izmenaId=$id;
	//alert(izmenaId);
		var promenjiva=$("#prikaz").val();
		
	if(promenjiva==0)
	{
    var ddl=document.getElementById("unosNovo");
    var promenjiva=ddl.options[ddl.selectedIndex].value;
	
	}


	switch(promenjiva)
	{
		case"korisnik":
		korisnikUnosIzmena(izmenaId);
		break;
		case"uloge":
		ulogeUnosIzmena(izmenaId);
		break;
		case"kontinenti":
		kontinentiUnosIzmena(izmenaId);
		break;
		case"drzave":
		drzavaUnosIzmena(izmenaId);
		break;
		case"kategorije":
		kategorijeUnosIzmena(izmenaId);
		break;
		case"namernice":
		namerniceUnosIzmena(izmenaId);
		break;
		case"spremanje":
			spremanjeUnosIzmena(izmenaId);
		break;
	    case"pitanjeA":
			pitanjeUnosIzmena(izmenaId);
		break;
		case"odgovori":
			odgovorUnosIzmena(izmenaId);
		break;
		case"jelo":
			jeloIzmena(izmenaId);
		break;
		case"jeloNamernice":
			jeloNamerniceIzmena(izmenaId);
		break;
		
		
		
	}
		 
		 
	
	
	
	
	
	
	
	
}
//korisnik
function korisnikUnosIzmena(izmenaId)
{
	
	//alert("aa");
	var ime=$("#imeModal").val();
	var prezime=$("#prezimeModal").val();
	var username=$("#usernameModal").val();
	var email=$("#emailModal").val();
	var pass=0;
     var errors=new Array();
	 
	
		var reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž0-9]{2,12}$/;
       var reEmail= /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
		if(!reEmail.test(email)){
		
	
			$("#emailModal").css("borderColor","red");
		
	errors.push("Email nije u odgovarajucem formatu");
	}
	var reUsername= /^[\w\d]+$/;
	if(!reUsername.test(username)){
		
		$("#usernameModal").css("borderColor","red");
		
		errors.push("Userame nije u odgovarajucem formatu");
	}
	if(!reIme.test(ime)){
		
		$("#imeModal").css("borderColor","red");
		
		errors.push("Ime nije u odgovarajucem formatu");
	}
  if(!reIme.test(prezime)){
		
			$("#prezimeModal").css("borderColor","red");
		
		errors.push("Prezime nije u odgovarajucem formatu");
	}
	if(izmenaId>0)
	{
 var ddl=document.getElementById("aktivanModal");
 var aktivan=ddl.options[ddl.selectedIndex].value;

	var ddlUloga=document.getElementById("ulogaModal");
    var uloga=ddlUloga.options[ddlUloga.selectedIndex].value;
	
	var insert=izmenaId; 
	}
	else{
		//alert("aa");
		 var ddl=document.getElementById("aktivanModal");
 var aktivan=ddl.options[ddl.selectedIndex].value;

	var ddlUloga=document.getElementById("ulogaModal");
    var uloga=ddlUloga.options[ddlUloga.selectedIndex].value;
	     var insert=0;
		 var pass=$("#passwordModal").val();
	     var pass2=$("#passwordModal2").val();
if(pass.length<6){
	$("#passwordModal").css("borderColor","red"); 
}		
		if(pass!=pass2)
	  {
		 
		$("#passwordModal2").css("borderColor","red");  
	  } 
	}
	if(uloga==0){
		alert("Morate da odaberete ulogu!");
		errors.push("Uloga nije odabrana");
		$("#ulogaModal").css("borderColor","red");
	}
	
	if(errors.length==0){
	
	
	 $.ajax({
                url: base_url + 'php/korisnik.php',
                type: "POST",
                data: {
					ime:ime,
					prezime:prezime,
					email:email,
					username:username,
					aktivan:aktivan,
					insert:insert,
					uloga:uloga,
					pass:pass,
					ubacaj:true

                },
                success: function (data,xhr) {
				
				var id="korisnik";
				var modal = document.getElementById('id01');
				modal.style.display="none";
				
				tabela(id);
					
				},
				error:function (xhr,status,data){
					var modal = document.getElementById('id01');
				modal.style.display="none";
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Email vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	
	}
	
	
	
}
//za izmenu poziv sklanjanje modala
function skraceno($id)
{
	var id=$id;
	var modal = document.getElementById('id01');
				modal.style.display="none";
				tabela(id);
}
//uloge
function ulogeUnosIzmena(izmenaId)
{
	//alert(izmenaId);
	
	var insert=0;
	var errors=new Array();
	if (izmenaId>0)
	{
		insert=izmenaId;
		
	}
	var uloga=$("#ulogaNazivM").val();
	var reUloga=/^[\w\s\d]{1,30}$/;
	  if(!reUloga.test(uloga)){
		
			$("#ulogaNazivM").css("borderColor","red");
		
		errors.push("Dozvoljen je unos slova, brojeva, razmaka");
	}
	if(errors.length==0){
	//uloga  regExp
	//alert(insert+uloga);
	 $.ajax({
                url: base_url + 'php/uloge.php',
                type: "POST",
                data: {
					insert:insert,
					uloga:uloga,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="uloge";
				skraceno(id);
				
				
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Uloga vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	
	}
	else{alert(errors);
	
	}
	
	
}
//kontinenti
function kontinentiUnosIzmena(izmenaId)
{
	var insert=0;
	var errors=[];
	if(izmenaId>0)
	{
		insert=izmenaId;
	}
	var kontinent=$("#kontinentiM").val();
    //kontinent regExp
	var reUloga=/^[\w\s]{1,30}$/;
	  if(!reUloga.test(kontinent)){
		
			$("#kontinentiM").css("borderColor","red");
		
		errors.push("Dozvoljen je unos slova i razmaka");
	}
	if(errors.length==0){
		
	
	 $.ajax({
                url: base_url + 'php/kontinenti.php',
                type: "POST",
                data: {
					insert:insert,
					kontinent:kontinent,
					ubacaj:true

                },
                success: function (data,xhr) {
				   var id="kontinenti";
				   skraceno(id);
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Kontinent vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	}
	else{
		alert(errors);
	}
	
	
}
//drzava
function drzavaUnosIzmena(izmenaId)
{
	var errors=new Array();
	var insert=0;
	if(izmenaId>0)
	{
		
		
		insert=izmenaId;
	}
	var drzava=$("#drzaveM").val();
	var ddl=document.getElementById("aaa");
    var kontinent=ddl.options[ddl.selectedIndex].value;
	var reUloga=/^[\w\s]{1,30}$/;
	  if(!reUloga.test(drzava)){
		
			$("#drzaveM").css("borderColor","red");
		
		errors.push("Dozvoljen je unos slova i razmaka");
	}
	if(kontinent==0){
	
	errors.push("Niste oznacili kontinent");
	}
	if(errors.length==0){
    //kontinent regExp
	 $.ajax({
                url: base_url + 'php/drzave.php',
                type: "POST",
                data: {
					insert:insert,
					kontinent:kontinent,
					drzava:drzava,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="drzave";
				skraceno(id);
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Drzava vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	
	}
	else{
		alert(errors);
	}
	
	
}
//kategorije
function kategorijeUnosIzmena(izmenaId)
{
	var errors=new Array();
	var insert=0;
	if(izmenaId>0)
	{
		
		
		insert=izmenaId;
	}
	var kategorija=$("#kategorijaM").val();
	var reUloga=/^[\w\s]{1,30}$/;
	  if(!reUloga.test(kategorija)){
		
			$("#kategorijaM").css("borderColor","red");
		
		errors.push("Dozvoljen je unos slova i razmaka");
	}
 if(errors.length==0){
	 $.ajax({
                url: base_url + 'php/kategorije.php',
                type: "POST",
                data: {
					insert:insert,
					kategorija:kategorija,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="kategorije";
					skraceno(id);
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Kategorija vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
 }
	else{
		alert(errors);
	}
	
}
//namernice
function namerniceUnosIzmena(izmenaId)
{
	var insert=0;
	if(izmenaId>0)
	{
		
		
		insert=izmenaId;
	}
	var errors=new Array();
	var namernica=$("#namernicaM").val();
	var reUloga=/^[\w\s\d]{1,60}$/;
	  if(!reUloga.test(namernica)){
		
			$("#namernicaM").css("borderColor","red");
		
		errors.push("Dozvoljen je unos slova,razmaka, brojeva");
	}
 if(errors.length==0){
    //namernice regExp
	 $.ajax({
                url: base_url + 'php/namernice.php',
                type: "POST",
                data: {
					insert:insert,
					namernica:namernica,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="namernice";
				skraceno(id);
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Namernica vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
 }
 else{
	 alert(errors);
 }
	
	
}


//spremanje
function spremanjeUnosIzmena(izmenaId)
{    var errors=new Array();
	var insert=0;
	if(izmenaId>0)
	{
		
		
		insert=izmenaId;
	}
	var spremanje=$("#spremanjeM").val();
var reUloga=/^[\w\s\d\.\W]{1,500}$/;
	  if(!reUloga.test(spremanje)){
		
			$("#spremanjeM").css("borderColor","red");
		
		errors.push("Dozvoljen je unos slova,razmaka, brojeva i tacki");
	}
 if(errors.length==0){
	//alert(namernica);
    //namernice regExp
	 $.ajax({
                url: base_url + 'php/spremanje.php',
                type: "POST",
                data: {
					insert:insert,
					spremanje:spremanje,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="spremanje";
				skraceno(id);
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Namernica vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	
	}
	else{
		alert(errors);
	}
	
}
//pitanjeA
function pitanjeUnosIzmena(izmenaId)
{
	var insert=0;
	if(izmenaId>0)
	{
		
		
		insert=izmenaId;
	}
	var errors=new Array();
	var pitanje=$("#pitanjeM").val();
	var reUloga=/^[\w\s\d\.\?\W]{1,500}$/;
	  if(!reUloga.test(pitanje)){
		
			$("#pitanjeM").css("borderColor","red");
		
		errors.push("A-Z a-z 0-9 . ?");
	}
    if(errors.length==0)
	{
	 $.ajax({
                url: base_url + 'php/pitanjeA.php',
                type: "POST",
                data: {
					insert:insert,
					pitanje:pitanje,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="pitanjeA";
				skraceno(id);
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Pitanje vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	}
	else{
		alert(errors);
	}
	
	
}
//odgovor
function odgovorUnosIzmena(izmenaId)
{
	var errors=new Array();
	var insert=0;
	var pitanje=0;
	if(izmenaId>0)
	{
		
		
		insert=izmenaId;
		
	}
	else{
		var ddl=document.getElementById("pitanjeListaUnos");
        var pitanje=ddl.options[ddl.selectedIndex].value;
	
	}
	var odgovor=$("#odgovorM").val();
	if(insert!=0)
	{
		if(pitanje==0)
		{
			errors.push("Niste izabrali pitanje!</br>");
		}
	}
var reUloga=/^[\w\s\d\.\W]{1,500}$/;
	  if(!reUloga.test(odgovor)){
		
			$("#odgovorM").css("borderColor","red");
		
		errors.push("A-Z a-z 0-9 .");
	}
	var errors=new Array();
    if(errors.length==0)
	{
    //odgovor regExp
	 $.ajax({
                url: base_url + 'php/odgovori.php',
                type: "POST",
                data: {
					insert:insert,
					pitanje:pitanje,
					odgovor:odgovor,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="odgovori";
				skraceno(id);
				
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Odgovor vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	}
	else{
		alert(errors);
	}
	
	
}
//jeloo
function jeloIzmena(izmenaId)
{
	var insert=0;
	
	if(izmenaId>0)
	{
		
		
		insert=izmenaId;
	}
	
	var naziv=$("#nazivM").val();
	var opis=$("#opisM").val();
	var notes=$("#notesM").val();
	var vreme=$("#vremeM").val();
	var ddl=document.getElementById("katJeloListaM");
    var katJelo=ddl.options[ddl.selectedIndex].value;
	var ddlD=document.getElementById("drzavaListaM");
    var drzava=ddlD.options[ddlD.selectedIndex].value;
	var reNaziv=/^[\w\s]{1,255}$/;
    var reOpis=/^[\w\s\d\.\?\W]{1,600}$/;

	var reVreme=/^[1-9]{1}[0-9]+$/;
	
	 if(!reVreme.test(vreme)){
		
			$("#vremeM").css("borderColor","red");
		
		errors.push("1-9{1}0-9");
	}
	 if(!reNaziv.test(naziv)){
		
			$("#nazivM").css("borderColor","red");
		
		errors.push("A-Z a-z 0-9");
	}
	 if(!reOpis.test(opis)){
		
			$("#opisM").css("borderColor","red");
		
		errors.push("A-Z a-z 0-9 . ?");
	}
	 if(!reOpis.test(notes)){
		
			$("#notesM").css("borderColor","red");
		
		errors.push("A-Z a-z 0-9 . ?");
	}
	if(errors.length==0){
    //naziv, opis, notes, vreme regExp
	 $.ajax({
                url: base_url + 'php/jelo.php',
                type: "POST",
                data: {
					insert:insert,
					naziv:naziv,
					opis:opis,
					notes:notes,
					vreme:vreme,
					katJelo:katJelo,
					drzava:drzava,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="jelo";
				skraceno(id);
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Jelo vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	}
	else{
		alert(errors);
	}
	
	
}
//INSERT PRIKAZ MODALA I POLJA
function modalInsert(id)
{
	var promenjiva=id;
	var a="";
	switch(promenjiva)
	{
		case'korisnik':
		
		a+='<label>Ime:</label>&nbsp<input type="text" id="imeModal" value=""/>'+
		'</br><label>Prezime:</label>&nbsp<input type="text" id="prezimeModal" value=""/>'+
		'</br><label>Username:</label>&nbsp<input type="text" id="usernameModal" value=""/>'+
		'</br><label>Email:</label>&nbsp<input type="text" id="emailModal" value=""/>'+
		'</br><label>Password:</label>&nbsp<input type="password" id="passwordModal"/>'+
		'</br><label>Password repeat:</label>&nbsp<input type="password" id="passwordModal2"/>'+
		'</br><label>Aktivan:</label>&nbsp'+
		 '<select  id="aktivanModal">'+
		 '<option value="1">';
		  a+='Aktivan</option><option value="0">Neaktivan</option>';
		
		 
		 a+='</select>'+
		 '</br><label>Uloga:</label>&nbsp'+
		 '<select name="ulogaModal"  id="ulogaModal">'+
		 '<option value="0">';
        
		  a+='Uloga...</option><option value="1">Korisnik</option><option value="2">Admin</option>';
		 
		
		 a+='</select></br><button class="promenaPodaci" id="korisnik">Izmeni</button>';	
			
			
		
	     $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"uloge":
		a+='<label>Naziv:</label>&nbsp<input type="text" id="ulogaNazivM" value=""/>'+
		'</br><button class="promenaPodaci" id="uloge">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"kontinenti":
		a+='<label>Naziv:</label>&nbsp<input type="text" id="kontinentiM" value=""/>'+
		'</br><button class="promenaPodaci" id="">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"drzave":
		a+='<label>Naziv:</label>&nbsp<input type="text" id="drzaveM" value=""/>';
		a+='</br><label>Kontinenti:</label>&nbsp<select id="aaa" name="drzaveKontinentiM">'+
            '<option value="0">Kontinenti...</option></select>';		
			$(".sredinaM").html(a);
			
$.ajax({
                url: base_url + 'php/kontinenti.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				 
				 var b='<option value="'+data[i].id_kontinent+'">'+data[i].naziv+'</option>';
				   $("#aaa").append(b);
				 
			  }				  
			 var b='</select></br><button class="promenaPodaci" id="drzave">Izmeni</button>';
			 $(".sredinaM").append(b);
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
		
		
		
		
		
		
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	  
		document.getElementById('id01').style.display='block';
		break;
		case"kategorije":
		a+='<label>Naziv:</label>&nbsp<input type="text" id="kategorijaM" value=""/>'+
		'</br><button class="promenaPodaci" id="kategorije">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"pitanjeA":
		a+='<label>Pitanje:</label>&nbsp'+
		'<textarea placeholder="" id="pitanjeM"></textarea>'+
		'</br><button class="promenaPodaci" id="pitanjeA">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"namernice":
		a+='<label>Naziv:</label>&nbsp'+
		'<input type="text" value="" id="namernicaM"/>'+
		'</br><button class="promenaPodaci" id="namernice">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"spremanje":
		a+='<label>Nacin:</label>&nbsp'+
	   '<textarea placeholder="" id="spremanjeM"></textarea>'+
		'</br><button class="promenaPodaci" id="spremanje">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"meni":
		a+='<label>Ispis:</label>&nbsp'+
	   '<input type="text" value="" id="ispisM"/>'+
	   '</br><label>Href:</label>&nbsp'+
	   '<input type="text" value="" id="hrefM"/>'+
		'</br><button class="promenaPodaci" id="meni">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	   $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"jelo":
		a+='<form accept-charset="UTF-8" method="post" action="php/jelo.php" role="form" enctype="multipart/form-data">'+
		'<label>Slika:</label>&nbsp'+
	   '<input type="file" name="slikaInsert" />'+
	  '</br><label>Naziv:</label>&nbsp'+
	   '<input type="text" name="nazivM" id="nazivM" value="" />'+
	   '</br><label>Opis:</label>&nbsp'+
	 	'<textarea placeholder="" name="opisM" id="opisM"></textarea>'+
	   '</br><label>Notes:</label>'+
      '<textarea placeholder="" name="notesM" id="notesM"></textarea>'+
	   '</br><label>Vreme pripreme:</label>'+
	   '<input type="text" name="vremeM" id="vremeM" value=""/>'+ 
	    '</br><label>Drzava:</label>'+
	   '&nbsp<select id="drzavaListaM" name="drzavaListaM">'+
            '<option value="0">Drzave...</option></select>'+
			'</br><label>Kategorija:</label>'+
	   '&nbsp<select id="katJeloListaM" name="katJeloListaM">'+
            '<option value="0">Kategorija...</option></select>'+
			'</br><button id="jeloUnos" name="jeloUnos">Izmeni</button></form>';	
	     $(".sredinaM").html(a);
	  
		
	       
		
$.ajax({
                url: base_url + 'php/kategorije.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				 
				 var b='<option value="'+data[i].id_proizvod_kategorija+'">'+data[i].naziv_kategorija+'</option>';
				   $("#katJeloListaM").append(b);
				 
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
	   $.ajax({
                url: base_url + 'php/drzave.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				 
				 var b='<option value="'+data[i].id_drzava+'">'+data[i].naziv_drzave+'</option>';
				   $("#drzavaListaM").append(b);
				 
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
	   
	   
	   
	   

		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	 
		document.getElementById('id01').style.display='block';
		break;
		case"odgovori":
		a+='<select id="pitanjeListaUnos" name="pitanjeListaUnos">'+
            '<option value="0">Pitanja...</option></select>&nbsp'+
		'</br><input type="text" value="" id="odgovorM"/>'+
		'</br><button class="promenaPodaci" id="odgovori">Izmeni</button>';
		  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	 
$.ajax({
                url: base_url + 'php/pitanjeA.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				 
				 var b='<option value="'+data[i].id_pitanje+'">'+data[i].pitanje+'</option>';
				   $("#pitanjeListaUnos").append(b);
				
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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

	 $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		break;
		case"jeloNamernice":
		a+='<select id="jeloLista" name="jeloLista">'+
            '<option value="0">Jela...</option></select>&nbsp'+
		   '<select id="namerniceLista" name="namerniceLista">'+
            '<option value="0">Namernice...</option></select>&nbsp'+
		'</br><button class="promenaPodaci" id="jeloNamernice">Izmeni</button>';
			  $(".modalHeader").html(promenjiva+' <span class="w3-button w3-display-topright">&times;</span>');
	 
$.ajax({
                url: base_url + 'php/jelo.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				 
				 var b='<option value="'+data[i].id_jelo+'">'+data[i].naziv+'</option>';
				   $("#jeloLista").append(b);
				
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
			$.ajax({
                url: base_url + 'php/namernice.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				 
				 var b='<option value="'+data[i].id_namernice+'">'+data[i].naziv+'</option>';
				   $("#namerniceLista").append(b);
				
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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

	 $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		
		
		
		break;
			
		
		
		
		
		//kraj switch
	}
	
	
	
	
	
}
function jeloNamerniceIzmena(izmenaId)
{
	var insert=0;
	
	var ddl=document.getElementById("jeloLista");
    var jelo=ddl.options[ddl.selectedIndex].value;
	var ddlD=document.getElementById("namerniceLista");
    var namernica=ddlD.options[ddlD.selectedIndex].value;
if(namernica==0&&jelo==0)
	{
		alert("Niste nista odabrali");
		$("#nacinLista").css("borderColor","red");
		$("#jeloListaNacin").css("borderColor","red");
		
	}
	else{
	if(namernica==0||jelo==0){
	if(namernica==0)
	{
		alert("Morate odabrati nacin spremanja");
			$("#nacinLista").css("borderColor","red");
			
	}
	if(jelo==0)
	{
		alert("Morate odabrati jelo");
		$("#jeloListaNacin").css("borderColor","red");
		
	}
	}
	}
	if(namernica>0&&jelo>0)
	{
		$.ajax({
                url: base_url + 'php/jeloNamernice.php',
                type: "POST",
                data: {
					insert:insert,
					jelo:jelo,
					namernica:namernica,
					ubacaj:true

                },
                success: function (data,xhr) {
				var id="jeloNamernice";
				skraceno(id);
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Jelo vec postoji.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	
	}
	
	
}

function jeloNacinIzmena()
{
	var insert=0;
	
	var ddl=document.getElementById("jeloListaNacin");
    var jelo=ddl.options[ddl.selectedIndex].value;
	//alert(jelo);
    var spremanje=$("#nacinSh").val();
	
	//alert(spremanje);
	
	if(jelo==0)
	{
		alert("Morate odabrati jelo");
		$("#jeloListaNacin").css("borderColor","red");
		
	}
	
	
	if(spremanje>0&&jelo>0)
	{
		$.ajax({
                url: base_url + 'php/jeloNacin.php',
                type: "POST",
                data: {
					jelo:jelo,
					spremanje:spremanje,
					ubacaj:true

                },
                success: function (data,xhr) {
					
				var id="jeloNacin";
				skraceno(id);
					
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Neuspesno.</h1>";
               switch(xhr.status) {
                    case 404 :
                        poruka = "<h1>Stranica nije pronadjena.</h1>";
                        break;
						 case 409 :
                        poruka = "<h1>Jelo vec postoji.</h1>";
                        break;
						 case 422 :
                        poruka = "<h1>Podaci nisu validni.</h1>";
                        break;
                    case 500:
                        poruka = "<h1>Greska.</h1>";
                        break;
                }console.log(xhr.status);       
              				
                $("#feedback").html(poruka);
                }

            });
	
	}
	
	
	
	
}
function nacinSpremanja($id)
{
	var id=$id;
	//alert(id);
	
	var a="";
	a+='<input type="hidden" id="nacinSh" name="nacinSh" value="'+id+'"/>'+
	'<select id="jeloListaNacin" name="jeloListaNacin">'+
            '<option value="0">Jela...</option></select>&nbsp'+
		   
		'</br><button class="promenaNacinJelo" id="jeloNacin">Izmeni</button>';
			  $(".modalHeader").html('Izaberite jelo<span class="w3-button w3-display-topright">&times;</span>');
	 
$.ajax({
                url: base_url + 'php/jelo.php',
                type: "POST",
                data: {
					send:true
                },
                success: function (data,xhr) {
			//var b=" ";
			
              for(var i=0;i<data.length;i++)
			  {
				 
				 var b='<option value="'+data[i].id_jelo+'">'+data[i].naziv+'</option>';
				   $("#jeloListaNacin").append(b);
				
			  }				  
			
		
				},
				error:function (xhr,status,error){
                   var poruka = "<h1>Nije pronadjen.</h1>";
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
			

	 $(".sredinaM").html(a);
		document.getElementById('id01').style.display='block';
		
	
	
	
}





