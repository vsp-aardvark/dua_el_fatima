$(document).ready(function() {

 var reciter = "";
 $("#heading").html("<center>Duas</center>")
var nouhaOption = "";

var year = "";
    nouhaOption+="<h4>"+year+"</h4>";
		mirnoha={
	d1:"Ayat Al Kursi",
  d2:"Hadees e Kisa",
  d3:"Dua e Ahad",
  d4:"Dua e Faraj",
  d5:"Dua e Khatme Quraan",
  d6:"Dua e Kumail",
  d7:"Dua e Mujeer",
  d8:"Dua e Nudba",
  d9:"Dua e Tawassul",
  d10:"Salaamti e Imam e Zamana (ajtf)"
  	
	}
	for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
 
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
    
 window.location.href="arabicLyrics.html?lyrics/duas/"+url;
  
});


/*$(document).on("change",".js-example-basic-multiplenouhay",function(){
  var url= this.options[this.selectedIndex].id;
      window.location.href="nouhaLyrics.html?lyrics/ziyaraat"+url;
  
    });*/


