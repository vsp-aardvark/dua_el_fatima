$(document).ready(function() {

	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var array = queryString.split("/")
	var reciter = array[array.length-1]
	$("#heading").html("<center>"+reciter+"</center>")
	var nouhaOption = "";
	if(reciter == "Rasool e Khuda (saws)"){
		var mirnoha={

			QRK1:`aaj dunya me mohammad mustafa paida hua`,
			QRK2:`sabki zabaa'n pe aj hai kalma rasool ka`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}else if(reciter == "Qataat"){
		var mirnoha={

			QQT1:`qata'at`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}else if(reciter == "Imam Ali (as)"){
		var mirnoha={

			QMA1:`ali aa rahe hai ali aa rahe hai`,
			QMA2:`ali ali hai ali ali hai`,
			QMA3:`ali ka darwaza`,
			QMA4:`baquda ali sa banda na hua na hai na hoga`,
			QMA5:`ham ali ke deewane hadesou me palte hai`,
			QMA6:`ham hai ali ke deewane`,
			QMA7:`ham hai moula ke diwaane`,
			QMA8:`jisne moula ali ko pukara nahi`,
			QMA9:`kaam mushkilou me aaye sabki bigdi banaye`,
			QMA10:`karta hu mai tumhari sana murtaza ali`,
			QMA11:`kyu girta na sambhlega`,
			QMA12:`kyu kar kahe na ahle wila ya ali madad`,
			QMA13:`mere lab par to rehta hai sub'ho masa`,
			QMA14:`moula ali ali moula ali ali`,
			QMA15:`moula ko pehchaan`,
			QMA16:`na bhool kar bhi kabhi tum kisi ki baat karo`,
			QMA17:`nabi hai na to kibriya kya karega`,
			QMA18:`nabi ka waris quda ka mazhar ali ali hai`,
			QMA19:`quda ka wali mera moula ali`,
			QMA20:`sarkaar ali moula sarkaar ali moula`,
			QMA21:`ya ali murtaza ya ali murtaza`,
			QMA22:`zindagi ka bharosa nahi zikre hyder kiya kijiye`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Fatima Zahra (sa)"){
		var mirnoha={

			QFZ1:`aaj dunya me janabe fatima paida hui`,
			QFZ2:`maahol lajawab fiza besimaal hai`,
			QFZ3:`noor ki anjuman fatima`,
			QFZ4:`qairunnisa ka jashne vilaadat hai momino`,
			QFZ5:`ye bemisl nayaab duqtar mubarak`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Eid e Ghadeer"){
		var mirnoha={

			QEG1:`ghadeere qum ka dulha`,
			QEG2:`islaam ki hayaat ka haasil ghadeer hai`,
			QEG3:`kya ghadeer se`,
			QEG4:`saaghar maye ghadeer se`,
			QEG5:`suraj ye keh ke deen ka ubhra ghadeer me`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Hassan (as)"){
		var mirnoha={

			QIHSN1:`hassan aaye roushan hui hai fizaae`,
			QIHSN2:`ho mubarak fatima ka dilruba paida hua`,
			QIHSN3:`murtaza ke gulshan me kya bahaar aayi hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Hussain (as)"){
		var mirnoha={

			QIHUS1:`baaghe aalam me shabbir aaye`,
			QIHUS2:`haq fasaana mere hussain ka hai`,
			QIHUS3:`hussain aa gaye hai hussain aa gaye hai`,
			QIHUS4:`hussain jeet gaye`,
			QIHUS5:`kya ataae qudrat hai hum hussain wale hai`,
			QIHUS6:`mad'he shabbir me jab uthaaya qalam`,
			QIHUS7:`mera hussain baaghe nabuwwat ka phool hai`,
			QIHUS8:`mohsine ummat shafie aasia paida hua`,
			QIHUS9:`momino ka naara hai ya hussain ya abbas`,
			QIHUS10:`na puchie ke kya hussain hai`,
			QIHUS11:`shabbir ye sab dunya tere naam se zinda hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Moula Abbas (as)"){
		var mirnoha={

			QIABS1:`aazmaya hua naam kaam agaya`,
			QIABS2:`ghunche chatak rahe hai gul muskura rahe hai`,
			QIABS3:`hubahu jo shabihe ali hai, baaghe alam me paida hua hai`,
			QIABS4:`moula ke ghar me phool wafa ka khila hai aaj`,
			QIABS5:`wafa jiska padhe kalma`,
			QIABS6:`ziae abbas`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Ali Asghar (as)"){
		var mirnoha={

			QIASG1:`aaye asghar dahar me aur chaarsu tanweer hai`,
			QIASG2:`noore chashme dilbare shahe umam paida hua`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Aon o Mohd (as)"){
		var mirnoha={

			QIAOM1:`ghunchou ke chatakne ki qabar auno mohammad`,
			QIAOM2:`hai saniye zehra ke pisar auno mohammad`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Ali Akbar (as)"){
		var mirnoha={

			QIAKB1:`is baat se zaahir hai rutba ali akbar ka`,
			QIAKB2:`noor ki hai ye mehfil hai yaha'n ali akber`,
			QIAKB3:`umme laila ka pisar kya sahibe touqeer hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	
	else if(reciter == "Shahzade Qasim (as)"){
		var mirnoha={

			QQSM1:`ab hayaate deene paighambar ka saamaa'n hogaya`,
			QQSM2:`jahaa'n me aaya hai noore paikar`,
			QQSM3:`saniye hyder hassan ka dilbar paida hua`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	
	else if(reciter == "Shahzadi Sakina (sa)"){
		var mirnoha={

			QSKN1:`ho mubarakbinte shaahe karbala paida hui`,
			QSKN2:`sakina hui aaj paida mubarak`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Shahzadi Zainab o Kulsoom (sa)"){
		var mirnoha={

			QZKL1:`fatima ke gulshan me kya bahaar aayi hai`,
			QZKL2:`hazrate kulsoom binte fatima paida hui`,
			QZKL3:`saanie zahra batoole dosara paida hui`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Sajjad (as)"){
		var mirnoha={

			QISJD1:`aaj shaahe karbala ka dilbar paida hua`,
			QISJD2:`hussaini jari ko ho dilbar mubarak`,
			QISJD3:`sajjad ki milaad ka ye jashne wila hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Baqar (as)"){
		var mirnoha={

			QBQR1:`aaj naayeb sayyade sajjad ka paida hua`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Jaffer Sadiq (as)"){
		var mirnoha={

			QIJS1:`aaj nayeb baqare zeejaah ka paida hua`,
			QIJS2:`baqar ke ghar me phaili masarrat ki roushni`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Moosa e Kazim (as)"){
		var mirnoha={

			QIMK1:`aaj sadiq ka jahan me janashee'n paida hua`,
			QIMK2:`aalam e hasti pe faize abre gouhar baar hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Raza (as)"){
		var mirnoha={

			QIRAZA1:`aathwe peshwa shaahe hardosara ya imame raza`,
			QIRAZA2:`har ghar me jashn aaj imame raza ka hai`,
			QIRAZA3:`ho mubarak qalq ka hajat rawa paida hua`,
			QIRAZA4:`sultane qurasa'n ka zahoor aaj hua hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Taqi & Imam Naqi (as)"){
		var mirnoha={

			QIMTAN1:`aaj daswa naayebe qairula wara paida hua`,
			QIMTAN2:`mohammad taqi ki vidalat hui hai`,
			QIMTAN3:`ya aliun naqi ya aliun naqi`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam Hassan Askari (as)"){
		var mirnoha={

			QIHASK1:`aaj aalam me naqi ka janashee'n paida hua`,
			QIHASK2:`jashne meelaade askari hai aaj`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Imam e Zamaana (ajtf)"){
		var mirnoha={

			QIMZ1:`aap noore nabi aap noore quda`,
			QIMZ2:`hassan askari ko ye dilbar mubarak`,
			QIMZ3:`ho mubarak aaj sardare jina paida hua`,
			QIMZ4:`hujjat se ye dunya qayam hai`,
			QIMZ5:`jab se ho tum hijaab me dil beqaraar hai`,
			QIMZ6:`jashne qayam kiye jaaiye dhoom se`,
			QIMZ7:`sajaaiye mehfile masarrat`,
			QIMZ8:`waarise mustafa naayebe murtaza`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
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
	var queryString = decodeURIComponent(window.location.search);
	var id = this.id;
	
	queryString = queryString.substring(1);
	var url =queryString+"/"+id;
    // alert(url)
    window.location.href="nouhaLyrics.html?lyrics/"+url;
    
});


