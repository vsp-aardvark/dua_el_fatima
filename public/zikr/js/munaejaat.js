$(document).ready(function() {

	var reciter = "Munaejaat";
	$("#heading").html("<center>"+reciter+"</center>")
	var nouhaOption = "";
	mirnoha={
		MN1:`ab madad keeje dame imdaad hai`,
		MN2:`abbas kate hatho ka aejaz dikhaado`,
		MN3:`hussain kashtie ummat ko thaamne waale`,
		MN4:`karbobala ke hyder aaqa madad ko aao`,
		MN5:`kashti hamari paar lagaana`,
		MN6:`mere moula mujhe do sahara`,
		MN7:`mushkilkushaae qalqe qudaara madad karo`,
		MN8:`ya rab dua qubool ho zainab ka waasta`,

	
}
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}



$("#nouhas").html(nouhaOption);	



$(document).on("click",".nouhas",function() {
	
	var id = this.id;
	
	var url =id;

	window.location.href="nouhaLyrics.html?lyrics/munaejaat/"+url;

});

$("#searchOption").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$("#nouhas *").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	});
});
});





