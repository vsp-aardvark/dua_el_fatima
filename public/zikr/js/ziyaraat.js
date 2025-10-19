$(document).ready(function() {

 var reciter = "";
 $("#heading").html("<center>Ziyaraat</center>")
var nouhaOption = "";

var year = "";
    nouhaOption+="<h4>"+year+"</h4>";
		mirnoha={
		z1:"ziyaraat e warisa",
    z2:"Ziyarat e Ashoora",
    z3:"Ziyarat e Arbayeen",
    z4:"Rasool e Khuda (saws)",
    z5:"Ameeral Momineen (as)",
    z6:"Janaab e Fatima Zehra (sa)",
    z7:"Imam Hassan (as)",
    z8:"Imam Zainul Abideen (as)",
    z9:"Imam Mohd Baqir (as)",
    z10:"Imam Jaffar e Sadiq (as)",
    z11:"Imam Moosa Kazim (as)",
    z12:"Imam Raza (as)",
    z13:"Imam Mohd Taqi (as)",
    z14:"Imam Ali Naqi (as)",
    z15:"Imam Hassan e Askari (as)",
    z16:"Imam e Zamana (ajtf)",
    z17:"Hazrat e Muslim (as)",
    z18:"Shahzadi Sakina (sa)",
    z19:"Shahzadi Zainab (sa)",
    z20:"Ziyarat After Majlis"

	
	}
	for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
 
    /*$("#searchOption").select2({
    allowClear: true,
    placeholder: "Search Nouha",
    
  }); */     
	//$("#searchOption").html(searchOption);
    $("#nouhas").html(nouhaOption);

     $("#searchOption").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#nouhas *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$(document).on("click",".nouhas",function() {
	
	var id = this.id;
	
    var url =id;
    
 window.location.href="arabicLyrics.html?lyrics/ziyaraat/"+url;
  
});


/*$(document).on("change",".js-example-basic-multiplenouhay",function(){
  var url= this.options[this.selectedIndex].id;
      window.location.href="nouhaLyrics.html?lyrics/ziyaraat"+url;
  
    });*/


