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
		MN9:`Kisse karu ilteja tere siwa Fatima`,
		MN10:`Moula ke dar pe hoke pareshaan aaye hain`,
		MN11:'Aye Sakina suno toote dil ki fugaa',
		MN12:`Ya Ali Mushkil kusha aapse faryaad hai`,
		MN13:`Madad kijiye ya imame zamana`,
		MN14:`Ya Ameeral momineen yeh waqt hai imdad ka ayiye imdad ko`,
		MN15:`Ya Hazrate Raza paye imdad ko aao Ya Zamino Samin`,
		MN16:`Fariyad ko pohuncho`,
		MN17:`Kisse karun ilteja tere siwa Fatima`,
		MN18:`Shabbir ki mazloom bahen khuld se aao`,
		MN19:`Zehra ke laal qalbe Mohammed ke chain ka`,
	
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





