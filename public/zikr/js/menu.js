$(document).ready(function() {

	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var array = queryString.split("/")
	var reciter = array[array.length-1]
	$("#heading").html("<center>"+reciter+"</center>")
	var nouhaOption = "";

	
	if(reciter == "Mir Hassan Mir"){
		var year  = "2024";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			MHM202241:`amad amad haram e shah`,
			MHM202242:`Jaane walo dare Abbas pe tum jab jaana`,
			MHM202243:`Jhoola hai ya taboot tumhara ali asghar`,
			MHM202244:`Khamoosh na ho baap se baate karo akbar`,
			MHM202245:`Maahe aza lo namudaar hua`,
			MHM202246:`Mar gaya zainab mera sher e jawaan`,
			MHM202247:`Zainab nikal aayi hai zara rok le khanjar`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "2023";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			MHM202231:`Akbar ka lahu sheh ki Aba tak pohanch gaya`,
			MHM202232:`akbar ke janaze pe muje le chalo bhayya`,
			MHM202233:`amma fiza bata do mujhko`,
			MHM202234:`bin bazuon ke utra hai abbas zeen se`,
			MHM202235:`naam e moula pe hai  paani jo pilaane wale`,
			MHM202236:`shabbir di ujri maa`,
			MHM202237:`shimr ne pehle sakina ko dikhaaya khanjar`,
			MHM202238:`subhana rabbiyal aala`,
			MHM202239:`Uthaate hain Abid sakina ka lasha`,
			MHM2022310:`zakhmi hai fatima tooti hai pasliyaa`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "2022";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			MHM202221:`Baba Phuphi Amma Se Mera Zakhm Chupana`,
			MHM202222:`bekasi ka sheh ki charcha rehgaya`,
			MHM202223:`Bhai ko khuda bhai ka lasha na dikhaaye`,
			MHM202224:`chand ko dekhke sughra ne kaha haaye hussain`,
			MHM202225:`Kalma go haste rahe fatima roti rahi`,
			MHM202226:`khuda nighedaar ya ali`,
			MHM202227:`moula roote jate hai`,
			MHM202228:`shimr khanjar na chala`,
			MHM202229:`tedi masooma rul gayi baba`,
			MHM2022210:`ya abalfazl ya abalfazl`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "2021-22";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			MHM2021221:`aaj baghdad me koi qaidi`,
			MHM2021222:`Aye Jaun Bhai Ho Tum Mere`,
			MHM2021223:`aye raat fazal lang`,
			MHM2021224:`barbadi jo aa matam`,
			MHM2021225:`bete ke qatilon se`,
			MHM2021226:`Ghar Main Aya Hai Qatil e Akbar`,
			MHM2021227:`Haye Haye Ali Asghar`,
			MHM2021228:`karbala diya maawan`,
			MHM2021229:`nana beemar nahi maa zakhmi aey`,
			MHM20212210:`Shireen mai aagaya`,
			MHM20212211:`tu na aya ghazi`,
			MHM20212212:`woh waqt yaqeenan ayega`,
			MHM20212213:`Ya Ali (as) Adrikni`,
			MHM20212214:`zainab tera zakhmi baba`,
			
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "2020-21";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			MHM20211:`Abbas sa Bhai`,
			MHM20212:`Ali Akbar ki Azaan`,
			MHM20213:`Aye Mere Bezabaa tum rehgaye kaha`,
			MHM20214:`Aye Mere Bhai Raza`,
			MHM20215:`Beti Ali Ki`,
			MHM20216:`Hussain Ruk Jao`,
			MHM20217:`Karbobala Naseeb se jaana naseeb ho`,
			MHM20218:`Kya Tum Mere Hussain Ho`,
			MHM20219:`Maawaa'n karbala diya maawa`,
			MHM202110:`Mazloome Karbala ki Azadaar aagayi`,
			MHM202111:`Muslim Akela Hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "2020";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			mir20201:"Karbala chalo, karbala chalo",
			mir20202:"Hur aa raha hai Akbar",
			mir20203:"Haye alamdaar, haye alamdaar",
			mir20204:"Kadiyal jawa'n ki laash uthane chale hai hum",
			mir20205:"Maqtal e Hussain",
			mir20206:"Abid ko jaha'n Ghash aata hai",
			mir20207:"Chader dikha dikha ke",
			mir20208:"Haye Rulgayi Mahendi",
			mir20209:"Utho Sakina chalo karbala",

			mir202010:"Paikaan Baras Rahey Hain Taboot Per Hasan Ke",
			mir202011:"Hai Janaza Haider e Karrar Ka",
			mir20209:"Qabre Zahra bana rahe hai Ali"

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year  = "2019";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			mir20191:"Aaj ki raat sakina pe bohot bhari hai",
			mir20192:"Asghar mai teri maa hu",
			mir20193:"Dekhte jana ali akbar",
			mir20194:"Habib aa jao",
			mir20195:"Pamaal Lasha Dekh ke",
			mir20196:"Tu agar hota to aisa nahi hota ghazi",
			mir20197:"Zahra jaiyan da asra ghazi",
			mir20198:"Zahra qubool kijiye",
			mir20199:"Zainab gale ko choom le",
			mir201910:"Aaj rukhsat ho rhi hai Tumse zehra Ya Ali"

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2018";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={mir20181:"Abbas tera haq hai", mir20182:"Baba tumhare baad", mir20183:"Binte zahra ka khula sar hai", mir20184:"Chacha mai aapki turbat", mir20185:"Dekha jab baap ka laasha to sakina royi", mir20186:"Kazim ka janaza hai", mir20187:"Madad karo fizza", mir20188:"pasliya'n toot gayi meri bhi dadi", mir20189:"Qaid khane se sakina ki ye aati thi sada", mir201810:"Safar phuphiyan di peshi di", mir201811:"Shaam haye shaam", mir201812:"Ya fatima rida mein chupa lo", mir201813:"Ya fatima rida mein chupa lo hussain ko", mir201814:"Ye ghurbate ali hai", mir201815:"Zainab ka naam musalle par", mir201816:"Zakhm e akbar pe laila rida daal do", mir201817:"Zameen e karbala wale"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		
		var year = "2017";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43396:"Bazaar me zainab ne", n43397:"Bhai Bhai pukaarti rahi mai", n43398:"Jab bhi ho karbobala aapka", n43399:"Kya likha fatima soughra ne", n43400:"Kya mere jawaan laal ke", n43401:"Logo mere Hussain ko(zuljanah)", n43402:"Muslim ke shahzaade", n43403:"Sar e Abbas aata hai", n43404:"Ye karbala hai"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		
		var year = "2016";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43406:"Ab mujhe koi sakina", n43407:"Ae mere bhai reza", n43408:"Al amaan al amaan", n43409:"Asghar e besheer jaisi qabr", n43410:"Darbar mein ye kehti thi", n43411:"Ek nanhi si lahad", n43412:"Haye abbas ki behno ne", n43413:"Maqam e sahib az zaman", n43414:"Teri ummat ne mere darr ko"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			
		}
		

		
		var year = "2015";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43416:"Ab Main Sojaongi", n43417:"Aliyun waliyullah", n43418:"Chadarein maangi to har shaher", n43419:"Dasht me ibne Hasan a.s par", n43420:"Deke awaaz baap ko akbar", n43421:"Khiza ne loot li saari bahar", n43422:"main khaake karbala hoon", n43423:"Teda seena Nai", n43424:"Zia e khoon e shahidaan ki", n43425:"Zuljana hai kahan bhai mera"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			
		}
		

		
		var year = "2014";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43427:"Apne hatho se kafan mujhko", n43428:"Aye Muslim e Gareeb", n43429:"Fatima s.a ke dono Pisar", n43430:"Labbaik ya Zainab", n43431:"Main aaraha hoon Sakina", n43432:"Riwayate Muqtaar", n43433:"Sina se sar na girae to kya kare Abbas a.s", n43434:"Surah e kahaf sunaata hai", n43435:"Zehra se Kiya waada nibhaati rahi"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			
		}
		

		
		var year = "2013";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43437:"Asghar ko leke goud me", n43438:"Do baar namaz saheed hui", n43439:"Faras ki zeen se beshak", n43440:"Ghazi main tujhse raazi", n43441:"Kar madad meri Baqir beta", n43442:"kewe darbaar gayi", n43443:"Mat kar Hamein qabool", n43444:"Mere Moula aao ke", n43445:"Rone walo shehre madina me", n43446:"Roohi wa jismi", n43447:"Teri Zehra pe musibat", n43448:"Zehra ki betiyoun ki ridaye"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			
		}
		

		
		var year = "2012";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43450:"Accha hua Sugra", n43451:"Aye Muntaqim", n43452:"Bhayya main aagai hoon", n43453:"Gham Sakina ko mile", n43454:"Ham Kaise Chale Jae", n43455:"Shaam ne maar diya", n43456:"Umme Laila sambhaal Zainab"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			
		}
		


		var year = "2011";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43458:"Aaj bhi zainab ki aati", n43459:"Bhayya main aagayi hoon Nana", n43460:"Do housla baba", n43461:"Kisne kiya chalni mere", n43462:"Kohraam mach gaya", n43463:"MaaUmmul baneen se", n43464:"Mujhe bhi watan", n43465:"Ya Mehdi as Ya Mehdi a.s"	};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		

		
		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43467:"Allah Ye kaisa manzar", n43468:"Aye Aon o Mohammad", n43469:"Bohat Deer lagi", n43470:"Hik waari sar meku baabe da", n43471:"Hussain chup hain", n43472:"Pehlu bhi shikasta hai", n43473:"Sakina ko youn chordh kar jaa", n43474:"Shaam walo na satao"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		

		
		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43476:"Akber ne kaha rokar", n43477:"Ameer Bhi Hai Gareeb BHi", n43478:"Aye Shaam ke Logo", n43479:"koi ghaibat mei baitha"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		

		
		var year = "2008";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43481:"Asghar ho tum kahan", n43482:"Awaaz TO De Akber", n43483:"Din Dhala TO", n43484:"Main Pardae Ghaibat se", n43485:"Main Pyaasa Hoon Amma", n43486:"Shaam Ki Aurtou", n43487:"Tu Na Aaya Ghazi", n43488:"Ye Kounsi Basti Hai"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		

		
		var year = "2007";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43490:"Bazaar mein Binte Ali", n43491:"Bhayya Gareeb", n43492:"Khud Baap Jawaan", n43493:"Kis Tarah Apni Tabahi", n43494:"Meri Fizza", n43495:"Na Asghar Hai Na sakina", n43496:"Ro Raha Hai Khud"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		

		var year = "2006";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n1:"Tha Ye Bano Ka Bayaan"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		

		
		var year = "2005";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n1:"Amma Fizza Bata De"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		

		
		var year = "2004";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n1:"Sakina So Rahi Hai"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		
		
		
		var mirnoha={n1:"Beta sajjad Utho"};
		var year = "2002";
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			
		}
		

	}else if(reciter == "Hassan Sadiq"){
		var year = "2014";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43507:"Qaid zindaan me choti si"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			
		}
		

		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43509:"Ghazi Abbas"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			
		}
		


		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43511:"Rabba manzoor karey"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}




		var year = "2008";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43513:"Haaye Shabbir bayabaan ko",
		n43514:"Haye Zainab Ro Rahi Hai",
		n43515:"Karbal se shaam qaidi wo",
		n43516:"Khwaab Ibrahim Ki",
		n43517:"Matam Karo Shabbir Ka",
		n43518:"Sughra ki aa rahi thi sada"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2006";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43520:"GUNJTI SHAAME GARIBAAN MEIN", n43521:"Tar khoon me hui haider"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2005";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43523:"Aao Khaleel", n43524:"Deke Sar Shabbir Ne", n43525:"Ghaazi ka alam logo", n43526:"Jalte Hue Khaime hai"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2003";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43528:"Maa ne asghar ko", n43529:"Na patthar maro", n43530:"Sajjad tere gham me", n43531:"Shakle ali ghazi mera", n43532:"Tanha ab tak", n43533:"Tu Chaliyaan shaam"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2002";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43535:"Ashoor ki seher hai", n43536:"Baba tere ghum me", n43537:"Bhula sakegi na duniya", n43538:"haaye zainab", n43539:"Hashar mein rang layega", n43540:"Maqtal mein dhundhti hai", n43541:"Sughra ne khat likha hai", n43542:"Zere Khanjar"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2000";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43544:"Beh raha hai khoon ka", n43545:"Bhai Shabbir ka haider ka pisar", n43546:"Bund Pani", n43547:"Khanjar tale", n43548:"Loriya se sone wali", n43549:"Maa dua karti thi", n43550:"Shaam Chali", n43551:"VEERAN HAVELI MAIN"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "1999";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43553:"Hay lazawaal deher me",
		n43554:"Teero ki zadd me aagaya"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "1998";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43556:"Abbas ke parcham ko", n43557:"Sughra ko rulata hai", n43558:"Tuje jhula jhulaun"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "1997";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43560:"Haye Hassan", n43561:"Koi Hussain sa sajda", n43562:"Ye musalmano rasool e paak"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "1996";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43564:"Beemaar Ki Aankhein", n43565:"Surate Shere Khuda", n43566:"Tujhe Jhoola Jhulao", n43567:"Ya Rab Na Saher Ho"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "1995";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43569:"Aye Alamdaare Wafa"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "1994";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43571:"Karbala Walon Pe", n43572:"Khat Fatima Sogra"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "1993";
		nouhaOption+="<h4>"+year+"</h4>";		
		var mirnoha={n43574:"Haaye Beemaar Chale",};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var mirnoha={n43576:"Aagaaz Ho Raha Hai", n43577:"Ya Rab Koi Masooma"};
		var year = "1990";
		nouhaOption+="<h4>"+year+"</h4>";		
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


	}else if(reciter == "Irfan Haider"){
		var year = "2020-21";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			IR20211:`Aah Ya Hussain`,
			IR20212:`Haan Mai bhi Azadaar hoon aur tum bhi`,
			IR20213:`Mere bhai Abbas`,
			IR20214:`Pyare Nabi ke Pyare Hussain`,
			IR20215:`Ya Fatima Ya Hussain`,
		};
		
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2020";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			IR20201:`Abbas Agar hote`,
			IR20202:`Allah Jaane ye duniya kaisi hai`,
			IR20203:`Haider Haider Fatahe Khaiber Haider`,
			IR20204:`Nawasiyou ko nabi ki logo nahi mayassar bas ek chadar`,
			IR20205:`Sultaan e Karbala`,
			IR20206:`Waada hai Hamaara (Irfan Hyder)`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2019";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			IR20191:`Abbas Sughra Se Kaho`,
			IR20192:`Ali Ya Ali Hyder`,
			IR20193:`Baithe hai azadaar azakhaane me`,
			IR20194:`Bazaar e Shaam Zainab`,
			IR20195:`Hogi Ziyarat Qabool`,
			IR20196:`Kaash Abbas tum waha hote`,
			IR20197:`Kya Shaam thi wo Shaam e Gharibaan`,
			IR20198:`Ooncha Rahe Apna Alam (Irfan Hyder)`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2018";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={IH201801:"Asadullah ali (ayyam e ali)",
		IH201801:"Aye baba husaina",
		IH201801:"Chehlum karo karbala mein",
		IH201801:"Izzat e mann",
		IH201801:"Mai zainab hoon",
		IH201801:"Matam e akbar",
		IH201801:"Sajjad zara ahista",
		IH201801:"Ye azakhana e hussain hai",
		IH201801:"Zarozaar mai roti rahi"
	};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}


	var year = "2017";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43390:"Ali ya ali",
	n43391:"Bibi masooma e qum",
	n43392:"Haaza min karame hussain ibne ali"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}


	var year = "2016";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43381:"Allaho baqi min kulle fani", n43382:"Bhaiyya sajjad", n43383:"Bohot door chale jayenge", n43384:"Kushta-e-shamsheer alamdaar", n43385:"Nabi ka nawasa pyaara hussain", n43386:"Neza sawaar bhai", n43387:"Qafla aagaya", n43388:"Shehzada e qasim janam", n43389:"Ya zahra"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2015";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43372:"Amma Fizza", n43373:"Chand jaise chehre wale", n43374:"Goonje saare aalam me", n43375:"Khuda khayr kare", n43376:"Majura ya zehra", n43377:"Maula Haq Imam", n43378:"Nanhe mujahid ran me jaaker", n43379:"Rona na sakina", n43380:"Zaamin hai Imame Reza"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2014";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43365:"Abbas e Naujawanam", n43366:"Ahista Chalo", n43367:"Aye gul-e-narjis biya biya", n43368:"Dua Karo Amma", n43369:"Farsh-e-Aza", n43370:"Har mod pe qatl hua sajjad", n43371:"Zehra Ko Do Pursa"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2013";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43356:"Aagaya aagaya Qaafela aagaya",
	n43357:"Diya jalaye rakhna hai",
	n43358:"Ikhshif Qalbi be haqqe",
	n43359:"Khudara haye khudara",
	n43360:"Qaidi bani khadi hai",
	n43361:"Rab janay Hussain janay",
	n43362:"Sakina ke taboot par",
	n43363:"Sam Paao Sakina",
	n43364:"Ya hussain Ya hussain"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2012";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43349:"asghar haaye asghar", n43350:"mera veer hussain", n43351:"rahe salamat", n43352:"Rahe Salamat Ta Qayamat", n43353:"sabir banda", n43354:"salaam maadare hussain", n43355:"ya bunayya"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}


	var year = "2011";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43345:"Ho Salam Us Par", n43346:"Shama se shama jale", n43347:"Sughra acha hi kiya", n43348:"Umr bhar royi sakina"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}


	var year = "2010";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43342:"Behen husain ki hu'n", n43343:"Habib tum par salam e hussain", n43344:"Laashe qasim pe boli sakina"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}


	var year = "2009";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43333:"Aagayai shaam se", n43334:"Ab Zindagi Bhar Ya Hussain", n43335:"Alamdaar Alamdaar", n43336:"Bazaar Agaya He", n43337:"Jeete Raho Auno Muhammad", n43338:"Kehti thi Sakina ro ro kar", n43339:"Mera ghazi na jaane kahaan he", n43340:"Sadqa ali asghar ka", n43341:"Sakina Ka Janaza"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2008";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43323:"Alvidaa shehzada-e-Qasim", n43324:"Chale aao baba", n43325:"Khat-e-Sughra", n43326:"Khuda Hafiz-o-Nasir", n43327:"Manam safeer-e-aza", n43328:"Meri Tarhaa Koi Yateem Na Ho", n43329:"Shaam-e-gharibaa(n)", n43330:"Shehzada e qasim", n43331:"Tere Qurbaan Alamdaar-e-wafa", n43332:"Zehra ko do pursa"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2007";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43315:"Abbas mere sar ki qasam kha", n43316:"Allahu akbar", n43317:"Ghar chalo", n43318:"Paani ley aawo", n43319:"Qulla asalukum", n43320:"Rida laake ke urhaade", n43321:"Ujjar gaya hai", n43322:"Ye hussaini kaafla"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2006";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43307:"Aj ghar mei", n43308:"Asghar tera jhula", n43309:"Bharde joli", n43310:"Hind roti thi", n43311:"Khoon me duba", n43312:"Rida Laake Udha de", n43313:"sajjad se pucho", n43314:"Shaam-e-ghariba"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2005";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43298:"Aao azadaro", n43299:"Allah ka zakir", n43300:"Ay mere jawaan akbar", n43301:"Bibi fatema zehra", n43302:"Jao Mere Laal", n43303:"Na deys apna hai", n43304:"Noke neza", n43305:"Pehchaano khudara", n43306:"Saaya khuda"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var year = "2004";
	nouhaOption+="<h4>"+year+"</h4>";
	var mirnoha={n43288:"Akhri azan sunli", n43289:"Ghazi paasa", n43290:"Hal min nasurin", n43291:"Jannat ke do shehzaade", n43292:"Jula to nazar ayenga", n43293:"Meda Wada", n43294:"Mei panjo pe", n43295:"Qafla hussain ka", n43296:"Qatl darya pe alamdar huwa", n43297:"Shabbir ka zakir"};
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var mirnoha={n43279:"Aa Asger aaja", n43280:"Ae mere baba", n43281:"Ay Shaame Gharibaan", n43282:"Aye maut theherja", n43283:"Haan tunjo matam", n43284:"Ley chalo baba", n43285:"Lo jaa raha hai kafla", n43286:"Ye ghazi alamdar", n43287:"Zainab meri behna"};
	var year = "2003";
	nouhaOption+="<h4>"+year+"</h4>";	
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}



	var mirnoha={n43269:"Aa Mere Asghar", n43270:"Awo akber awo", n43271:"Ay karbala", n43272:"Mere gharib hussain", n43273:"Naiza Sawar baba", n43274:"Reh gayi Ali ki beti gham utha ne ke liye", n43275:"Ya zehra", n43276:"Ya zehra ya zehra", n43277:"Ye kafela layja", n43278:"Zuljanah ay zuljanah"};
	var year = "2002";
	nouhaOption+="<h4>"+year+"</h4>";
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}


	var mirnoha={n43260:"Aajawo ali asger", n43261:"Alam sajaawo", n43262:"Ek baar watan lot ke aaja", n43263:"Ek kafela laya tha mein", n43264:"Hay kasim jag zara", n43265:"Nana neend Nahi Aundi", n43266:"Pardesi musafir ki", n43267:"Sakina utho", n43268:"Utho abbas"};
	var year = "2001";
	nouhaOption+="<h4>"+year+"</h4>";
	for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

	}


	}else if(reciter == "Nadeem Sarwar"){
		var year = "2024";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			NS20241:`haaye husain ibne ali`,
			NS20242:`main alamdar`,
			NS20243:`mera imam hussain`,
			NS20244:`tum shaam ana baba`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2023";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			NS20231:`Abbase e Alamdar lashkare shabbir ka salaar`,
			NS20232:`hoga ya hussain`,
			NS20233:`hussain akela hai`,
			NS20234:`janum ali ali`,
			NS20235:`rok na tu rahwar`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2022";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			NS20221:`Alambardar aata hai`,
			NS20222:`Aye Nahar e alqama`,
			NS20223:`Chalta rahe karwaan`,
			NS20224:`hazrath imam hussain`,
			NS20225:`mazloom hussain ki humsheer`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2021";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			NS202111:`Abbas ka naara hai Dariya hai hamara`,
			NS202112:`Haaye Mazloom Hussain Asre ashoor mera laal`,
			NS202113:`Kal ho na ho kya pata zindagi ka karo matam`,
			NS202114:`MaI zainab hoon`,
			NS202115:`Mazaare Fatima Ya mazloom ya fatima ya zehra`,
			NS202116:`Syed Badesha hussain`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2020-21";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			NS20211:`Mazloom Ka Matam hai ye Kam na hoga`,
			NS20212:`Mera Mazloom Hussain`,
			NS20213:`Mera Peer Ghazi`,
			NS20214:`salam ullah ala mola imam e raza`,
			NS20215:`Salamun Alaika Ya Aba Abdillah`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2020";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			NS20201:`Alam Mere Murshid Ghazi ka`,
			NS20202:`Janam Ya Hussain`,
			NS20203:`Karbala Hogayi  Tayaar khuda khair kare`,
			NS20204:`Meri Sughra Ko Kya Pata`,
			NS20205:`Momino Haidare Karrar ka matam karlo`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2019";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			ns20191:"Ali Haider e Karrar",
			ns20191:"Azadar",
			ns20192:"Hogi Ziyarat qubool",
			ns20193:"Main Hussain hoon",
			ns20194:"Salam Ghazi",
			ns20195:"Zara sa pani"
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2018";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			ns201801:"Abbas jo zinda hai",
			ns201802:"Haider maula",
			ns201803:"Koi nahi hussain ka",
			ns201804:"Mashallah karbala"

		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2017";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43244:"Badeshah Hussain", n43245:"Hai zabaano pa kalma e khuda", n43246:"Kya andhera hai phuphi", n43247:"Madine jau ya karbobala me reh jau", n43248:"Mai hogaya tanha Ya Abbas", n43249:"Ya Haider", n43250:"Ye koun gira"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2016";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={x27:"Abal fazl",x28:"Alam hamara hai",x29:"Aye musafir",x30:"Bismillah",x31:"Hussain Labbaik",x33:"Maula mera vi ghar howe",x34:"Ya Zahra Ali"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2015";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={x15:"Heart Of Hussain",x16:"Hussain Jo Gham Dey",x17:"Maula Madine Wale",x122:"Mawlana Ya Hussain",x19:"Qissa-e-Baba Bigo",x20:"Salamullah",x21:"Sham Di Qaidan",x22:"Taboote Hussaine gareeb",x23:"Ya moosa ibne jafar",x24:"Ye meri dua hai",x25:"Zainab Bibi Ujad Gai Hain"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2014";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={x3:"Abbas-e-Ammu Jaanam",x4:"Aey Ali Akbar e Hussain",x5:"Alamdar na aaya",x6:"Ali Asadullah",x7:"Baba Baba Hussain",x8:"Bhaiyya Ali akbar",x9:"Haye jab imam mai bana",x10:"Lelo salam Zainab ka",x11:"Live like Ali",x12:"Raasil Hussain",x13:"Zuljanah bigo che shud"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2013";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={s7:"ae alam afrashtey",s8:"ae madina ghazab ho gaya",s9:"ahista chacha",aa:"ana ali ibnul hussain",as:"baraye dile duqtar",ag:"chale aao ae zawwaro",ah:"darya behta raha",ah:"mai hussain hu",ab:"mohammed hamare",an:"mohnjy naukri",am:"shame ghareeba mein",x1:"ya ali"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2012";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={p9:"abad wallah ya zahra",s1s:"ana ibne makkao minara",s2:"fizza ye dua karna",s2s:"haye saadath",s3s:"qaidi hu mai babajan",s4:"ya ali ya abbas",s5:"zainab ka hai armaan"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2011";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={o10:"Akbar mera pyara tha",p1:"as salaamun alayk ya hussain",p2:"Chote hazrat ki baargah",p32:"Hamaare hain ya hussain",p4:"Jab hukme Rihaayi mila",p5:"Sajjad a.s Bhira Men Thak Pai Han",p6:"Zinda rahey hussain",p7:"Zinda se reha hoke"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={j1:"abbas na ab lout",j2j:"bibiyan reh gayi",j3:"mai rahu ya na rahu",j4:"Moula Moula Hussain Moula",j5:"na ro moula",j6:"salam abbas ya moula",j7:"ya ali ya husain",j8:"ye janaza hai ali ka",j9:"ye mahe moharram hai"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={o2:"abbas aajao",o32:"achhe mere baba",o4:"Fatema zehra ka",o5:"Haye Mere Hussain O Hassan",o6:"jahan hussain waha lailahaillalah",o7:"yadekal khair bhi ham",o8:"zinda rahe"}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2008";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={b1:"Abbas bulaata hai",b2:"Bas ya hussain",b3:"Haan ye hai shehr-e-shaam",b4:"Haaye Haaye Qasim",b5:"Mujhe pe kyu band karte ho paani",b6:"Saarbaan saarbaan",b7:"Shareek-e-karbala",b8:"Ye maa(n) kaha na"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2007";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={z1:"Abbas meer-e-karwan",z2:"Behti rahi furaat",z3:"Mei nok-e-sina",z4:"Meri Sakina",z5:"Pyaare nabi ki",z6:"Qayd khaane mei",z7:"Sajjad Sajjad",z8:"Salaam ya Hussain",z9:"Shaam ko qaidi ban ke chali hai"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2006";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={c3:"Dua-e-Kumail",c54:"Haay sughra bata",c6:"Ham dekhenge",c7:"Ham honge kahi",c8:"Kaun qaail tha",c9:"Khanjar qareeb",c10:"Mujhe paidal chalna",c11:"Purta shaah baba",c12:"Wah mere laal"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2005";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={p3:"Abbas hamara hai",p4:"Allah jaane kaha",p5:"Aun-o-muhammad",p6:"Bhaayi shabbir",p7:"Jaao ke na ab deyr karo",p8:"Jaise jaise raat",p9:"Musafiran-e-musibat",c1:"Ya hussain"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2004";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={i2:"Amma achi amma",i3:"Aysa alam",i4:"Jo Bhi Masroof",i5:"Maa Bulati",i6:"Nabi nabi honga",i7:"Nind ayengi",i8:"Shaah ast hussain",i9:"Subhe ashoor",p1:"Zakhmi Zuljanah"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2003";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={t1:"Akhpala baba jaana",t2:"Alam abbas ka",t3:"Ek Pyaase ki Jung dekho",t44:"Koi Ho to chaale Khudaya",t5:"Mere sar pe lillah",t6:"Sakina kahani suno",t7:"Waqt-e rukhsat",t8:"Ya sari ar-reza",t9:"Zindan se rihaa"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2002";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={r1:"Aao ek kaam kare",r2:"Jaise pinjre me ho panchi",r3r:"Karbela na bhulenge",r4:"Kulsum ne mehmil ke jo parde ko uthaya",r5:"Madar Do Jahan",r6:"Mein yeh nahi kehti",r7:"Raj matam kar",r8:"Shahzada Akbara",r9:"Utho hussain"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2001";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={e1:"Aa mere pyaare husain",e2:"Acha kiya baba",e3:"Al Quran",e4:"Arey o shaam walo",e5:"Chaliye madina",e6:"Ghazi alam tere uncha rahenga",e7:"Ya ali maula, haider maula",e8:"Yeh chand-e tare",e9:"Zuljanah"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2000";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={q9:"Aa alamdar",w1:"Aao alam ke saye me",w2:"Jaag sakina jaag",w3:"Jab Mawla Ayenge",w4:"Je karta he mera mawla",w5:"Maa me naize pe hu",w6:"Piyaas achi hai chacha",w7:"Sallam nana ke roze",w8:"Ya wajiha indallah"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "1999";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={j8:"Abbas aa rahe hai",j9:"Acchi nahi ye baat",q1:"Bhayaa muje bhool na jaana",q2:"Ha karo matam hussain ka azadaro",q3:"Hussain shahid-e karbala",q4:"Hussain Zindabad",q5:"Kehti thi Zainab, Haye hussaina",q6:"Kya raha khaymo me shehe ke",q7:"Mazloom ka matam"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "1998";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={m7:"Aa ali Asghar",m8:"Aajaa mere bache",m9:"Ali maula Ali maula",j1:"Amma baar baar",j2:"Hussain no gham",j3:"Kafela ik me laya tha, Kafela ik layja Zainab",j4:"Mere baba khairiat se ho",j5:"Na bhoole na bhoole",j6:"Na milenga tuje shabbir sa bhayi"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "1997";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n47:"Aao Sab Ali Ali Karen",n48:"Abbas kehte hai",n49:"Akhiyan Mal Mal Zainab",n50:"Dekho ay kufiyo",m1:"Jaane wale karbala kay",m2:"Naro zainab naro",m3:"Shabbir agar teri azadari na hoti",m4:"Wo Khayme jal rahe hai",m5:"Yeh majlis-e husain"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "1996";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n39:"Ale rasool kucha-o bazaar ya ali",n40:"Bibiya rowe zaro zaar",n41:"Hussain ya hussain",n42n:"Kullo yaumin ashura",n43:"Mujo Maula hussain mujo aaka hussain",n44n:"Tere kanaare furaat",n45:"Tere shehr-e se jaate hai"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "1991-1995";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n16:"Aa dekh mere Gazi",n17:"Abad hui karbobala ujda madina",n18:"Asgar ka janaza",n19:"Aye sheh ke azadaro",n20:"Ayiya shaam",n21:"Bhai Mai Zainab Hon",n22:"Bujh gayi pyaas chacha",n23:"Chin gayi sar se rida",n25:"Ghar Ghar Maatam",n26:"Haaye shaam ka baazaar",n27:"Hogi yeh majlis to hogi",n28:"Itni gareeb ho gayi",n29:"Labbayk ya imam",n30:"Maa or Ali Akbar ki Maa",n31:"Na rakh ab chadar",n32:"Parcham Abbas ka",n33:"Pyaase pe ajab",n34:"Sakina shaam me markar",n35:"Tu hai bada rehman",n36:"Waqt Sajjad ne kaise",n37:"Ye shame gariban hai",n38:"Zuljanah bal minal maidan"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var mirnoha={n1:"Ammu Bhi Gaye",n2:"Aye Shiyon Jab Peena Pani",n3:"Ay Fatima Sughra Ghar Lut Gaya Beta",n4:"Ay momino payame sarwar ko yaad rakhna",n5:"Haan Tha Mera Baba",n6:"Ho gaye zainab se khafa",n7:"Kufe ka aur shaam ka manzar",n8:"Mai jab bhi watan jaungi bhaiyya",n9:"ROZE PE MUSTAFA KE UDASEE SI CHAAYI HAI",n10:"Sab qatl ho gaye koi waris nahi raha",n11:"Sadaat e Karbala",n12:"Tamam alam me aaj matam",n13:"Toot gayi aas meri toot gaayi aas",n14:"Wo Shehenshah e zaman",n15:"Zainab-e-Hazine Man, Khwahra Khuda Hafiz",
			n21:`Ek Ali ki laadli thi ek Ali ka laal tha`
		};
		var year = "1984-1990";
		nouhaOption+="<h4>"+year+"</h4>";	
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


	}else if(reciter == "Farhan Ali"){
		var year = "2021-22";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			FA20221:`Abbas ko Bulao`,
			FA20222:`Jaan Sakina Jaan Baba Qurbaan`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2020-21";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			FA20211:`Abbas Ya moula Ya Abbas Moula`,
			FA20212:`Azadari na chordenge`,
			FA20213:`Baba Jaan`,
			FA20214:`Hyder Haider Haider`,
			FA20215:`Jhoola Ali Asghar Ka`,
			FA20216:`Jis Ghar pe alam ho Ghazi ka`,
			FA20217:`Jisne Jaise chaha usne waise maara`,
			FA20218:`Shahenshah Hussain`,
			FA20219:`Vekh Zulman di inteha Ghazi`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year = "2020";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			FA20201:`Abbas Salaar e Qafila`,
			FA20202:`Alweda Alweda Alweda ay Hussain`,
			FA20203:`Ayyam e Hussain Ayaam e Hussain`,
			FA20204:`Dhua uth raha hai`,
			FA20205:`Koi Shaam di Aurat`,
			FA20206:`Nana Rab ke waaste sun meri dua`,
			FA20207:`Ujde hue gharo se awaaz aa rahi`,
			FA20208:`Zuljanah Zuljanah hai kaha baba jaan`,
			FA20209:`Rehai khaid se zainab ko jab mili hogi`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year = "2019";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			FA20191:`Agar Hussain tera Gham`,
			FA20192:`Andhere Andhre yateemo se chupkar`,
			FA20193:`Kis tarah baap se beti ko chudaaya hoga`,
			FA20194:`Mai Bali Sakina hoon`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year = "2018";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			FA20181:`Amma FIzza Abbas ko bulaana`,
			FA20182:`Bala ke Gham uthaye jaa rahe hai`,
			FA20183:`Bhai Hussain Kya ye tumhaari hi laash hai`,
			FA20184:`Dua to Maang Sakina ka waasta deke`,
			FA20185:`Haaye Hassan Moula`,
			FA20186:`Jawaan ki laash uthana bohot hi mushkil hai`,
			FA20187:`Kaha Ghareeb ka ghar`,
			FA20188:`Mekoon logo Sajjad`,
			FA20189:`Nabi ki Nawasi rida maangti hai`,
			FA201810:`Yateem hai Sakina hai`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year = "2017";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43711:"Abbas kahan ho bhai", n43712:"Abbas tumhe bali sakina ki qasam", n43713:"Ab mai paani na maangungi", n43714:"Baghdaad ke pul par kazim ka", n43715:"Jab karbala ki simt", n43716:"kaha se laaye baraadar", n43717:"Sabeel e Hussain", n43718:"Tiflaan e Muslim", n43719:"Ya khuda Ya khuda"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2016";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43721:"Abbas teri behno ko", n43722:"Aye hussaini maa tujhe salaam", n43723:"Jannat hai karbala", n43724:"Lashkar mein badi dhoom hai", n43725:"Pyaasi hai sakina", n43726:"Tu bekafan hai", n43727:"Unnesso hai zakhm", n43728:"zindaan se", n43729:"Zindaan se chut ke"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2015";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43731:"Abbas utho tumko sada deta hai hussain", n43732:"Bazaar bhulda nahi", n43733:"Drink Water think Hussain", n43734:"Karbala ki kahani", n43735:"Khaymon me sirf hoga", n43736:"Koi ghazi ko bulaye", n43737:"Matam rahega hussain ka", n43738:"Maula se mere nazo ka pala na uthega", n43739:"Meri mazlum behna sakina", n43740:"Sajjad ki is waqt", n43741:"Shabbir Madinay se gar Hind me aa jate"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2014";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43743:"Akbar ne di sada", n43744:"Haye Haye ye safar Zainab ka", n43745:"Haye Mere Hussain a.s pe kia waqt aagaya", n43746:"Haye zindaan tera watan", n43747:"Karbala da kafan gareeb jeddah", n43748:"Maa meri pyaari maa", n43749:"MAI PAIDAL CHALA KARBALA", n43750:"Mai Royi jahan", n43751:"Tera chehlum karne aayi hu"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2013";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43753:"Aagaya maahe moharram", n43754:"faatahe lashkar ali ali", n43755:"Hai sakina akeli yaha", n43756:"Jo muhafiz tha", n43757:"KARBAL TU PIYA LIKHDA", n43758:"labbaik ya hussain", n43759:"maan aa gayi hussain", n43760:"Nanha sa ek sar", n43761:"Soldiers of Imam - e - zaman", n43762:"waae abbasa"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2012";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43764:"beemaar hai tu sughra", n43765:"chal sakina chalein karbala", n43766:"ek aabid ek shabbir", n43767:"haaza mohammed", n43768:"mein thak gaya hun", n43769:"nana sham jo", n43770:"qatl alamdaar ho gaya hai", n43771:"Sab ka hussain", n43772:"we adore you hussain", n43773:"zainab ko ghazi yaad aaya"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2011";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43775:"Abbas tere jaane ke baad", n43776:"Aye shehre madina", n43777:"Ek inqelaab chahiye", n43778:"Jun jun bazaar", n43779:"Mera ghar jalaya", n43780:"Sari Duniya Hussain Hussain Karey", n43781:"Ya Rab Behaqqe zehra"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43783:"Akbar ka laasha", n43784:"Alma waley", n43785:"Bohot ro chuki hai sakina", n43786:"Kehti thi maa", n43787:"Zinda rakhenge hum Karbala"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43789:"Abbas", n43790:"Ali waris", n43791:"Allahu akbar", n43792:"Chalo rone waalo", n43793:"Kaise rehti ho bibi yahaa(n)", n43794:"Maa(n)", n43795:"Pardesi baba", n43796:"Sajjad ko be maut", n43797:"Zainabam"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2008";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43828:"Aik ahsaan kar", n43829:"Akbar ka janaza", n43830:"Gham-e-hussain", n43831:"Karbala ma", n43832:"Lot aa lot aa nafse mutmainna", n43833:"Lot aao baba", n43834:"Mehmaan Sakina", n43835:"Parah parah ma shud", n43836:"Yaad aayi na tumhe fatema sughra"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2007";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43799:"Ay mere baba", n43800:"Pyaari Sakina"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2006";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43802:"Mera naam Hussaini hai mera kaam hai maatam"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2005";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43804:"AAJ SHAHEEDU'N KA HAI CHEHLUM", n43805:"Ali ali ali ali", n43806:"Ghabrayi hai zainab", n43807:"Mera bhai salamat rahe"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2004";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43809:"Abbas ka maidan", n43810:"Ay mere maula", n43811:"Haaye mere Hussain", n43812:"Jaag utho", n43813:"Khaak urhaawo", n43814:"Kya muje", n43815:"Mei chal bhi nahi sakta", n43816:"Utho Akbar", n43817:"Watan tarasha"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2003";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43819:"Baba Aao Na", n43820:"Bhayi Kamar Torh Gaey", n43821:"Eik Hai Naara Haidery", n43822:"Haey Shaam", n43823:"Hosla Baba", n43824:"Ilayya Ya Bunaiyya", n43825:"Lashkar-e-Hussain Ban Kay", n43826:"Ya Rab"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2002";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43838:"Alqamah", n43839:"Alvida alvida", n43840:"Arzu-e-karbala", n43841:"Assalam ghazi mere", n43842:"Dard-e-jigar", n43843:"Haye Ali Akbaram(Farsi)", n43844:"Haye shaam-e-gharibaan", n43845:"Khabar", n43846:"Masooma ki faryad", n43847:"Nanna sa phool"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


	}else if(reciter == "Raza Abbas Zaidi"){
		var year = "2024";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20241:`Abbas na jao ruk jao`,
			RAZ20242:`Akhri Waar`,
			RAZ20243:`Aulad agar teri hoti akbar`,
			RAZ20244:`Madad kare ya Fatima (s.a)`,
			RAZ20245:`Nade Ali`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2023";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20231:`Diya Jalake sakina ke naam`,
			RAZ20232:`Ek yateema aisi bhi thi`,
			RAZ20233:`Kya baap se is tarha juda hote hai akbar`,
			RAZ20234:`Qatl Alamdar Hogaya`,
			RAZ20235:`Rauza nahi Hussain nazar aaye`,
			RAZ20236:`Shadat e shehzada ali asghar`,
			RAZ20237:`So Rahe Hain Sab Mere Waali o Dilbar Rait Par`,
			RAZ20238:`Utha nahi jata amma`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2022";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20221:`Battees baras ka saath`,
			RAZ20222:`Ghareeb e zahra ka badan`,
			RAZ20223:`Jawan bete seene mein hai sina`,
			RAZ20224:`Kyun Chor Jaati Hai Maa`,
			RAZ20225:`Sakina bibi ka hai janaza`,
			RAZ20226:`Shabbir ke chehre se ghum dur karnewale`,
			RAZ20227:`Sultane Karbala`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2021";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20211:`Athara baras in hatho'n se pala hai`,
			RAZ20212:`Ghareeb ka yeh ghareeb sar hai`,
			RAZ20213:`Laila duaein kijiye`,
			RAZ20214:`Maa maa hoti hai`,
			RAZ20215:`Mara gaya darya pe`,
			RAZ20216:`Mushkil ko meri hal karo`,
			RAZ20217:`Tadfeen shahzadi sakina`,
			RAZ20218:`Wasiyat - Zehra aur Hussain`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2020-21";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ2020211:`Aap Ki Zehra pe kaise zamane aaye`,
			RAZ2020212:`Acha Baba Ja Rahe Ho`,
			RAZ2020213:`Gham e Hussain Meray Dil Se Kum Na Ho`,
			RAZ2020214:`Haye Abbas Nahi Aye Na Aya Pani`,
			RAZ2020215:`Karbala Yaad Bohat Aati Hai`,
			RAZ2020216:`Laila Duain Kijiye Jeeta Rahay Akbar`,
			RAZ2020217:`Phir Chahe Sakina Ko Wo Jitna Bhi Sata Lay`,
			RAZ2020218:`Sir Dekh ke Shabbir Ka Shereen Ne Pukara`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2020";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20201:`Abbas mar gaye ali akbar juda hua`,
			RAZ20202:`Akhir hussain maa hu`,
			RAZ20203:`Arzoo e azadar`,
			RAZ20204:`Aye hur jawan ka laasha`,
			RAZ20205:`Banu asad ke shareef logo`,
			RAZ20206:`Bhare darbaar mein muslim ka aana aur tha`,
			RAZ20207:`Hai apni sakina ka abbas ko ghum maula`,
			RAZ20208:`Kya kya sitam guzar gaye`,
			RAZ20209:`Rukh se ek baar kafan aur hatado bhayya`,
			RAZ202010:`Tum bin kayi raato'n se mai soyi nahi baba`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2019";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20191:`Betiyon Kay Pass Lejao Mujhe`,
			RAZ20192:`Dil karbala mein reh gaya`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2018";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20181:`Baba ki kuch batein suna`,
			RAZ20182:`Hind ye zainab hai`,
			RAZ20183:`Laash akbar ki mere sath uthao amma`,
			RAZ20184:`Sattar qadam ka fasla bhai bahen me tha`,
			RAZ20185:`Sayyeda ka mohsin hai`,
			RAZ20186:`Ya ali ummed e mehsharam`,
			RAZ20187:`Yaad aayega abbas magar laut kar nahi`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2017";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20171:`Aap jo dil pe sina`,
			RAZ20172:`Baba mujhe lene aagaye hai`,
			RAZ20173:`Bismillah hussain`,
			RAZ20174:`Hazrat ki sawari`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2016";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20161:`Akbar chupa rahe hai`,
			RAZ20162:`Baba na aayenge`,
			RAZ20163:`Haan ye mere bete hai`,
			RAZ20164:`Hai mera bhai kahan`,
			RAZ20165:`Ishq e ali o zahra hussain`,
			RAZ20166:`Khali jhula kaise jhulau`,
			RAZ20167:`Khat e sughra`,
			RAZ20168:`Maa aayegi hussain`,
			RAZ20169:`Mai kaise chalu baba`,
			RAZ201610:`Zainab si behan hai`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2015";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20151:`Amma gawah rehna`,
			RAZ20152:`Farmaya sheh ne meri khata kya hai kufiyon`,
			RAZ20153:`Mere haath nahi hai`,
			RAZ20154:`Na Maro Na Maro Mujhe`,
			RAZ20155:`Rondi reh gayi sugra`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2013";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20131:`Aagaya abbas`,
			RAZ20132:`Mere Baba Ke Azadar Mera Haal Suno`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2012";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20121:`Assalamu Alaike Ya Sayeda`,
			RAZ20122:`Mai bhai bhai kehti thi Laasha behan behan`,
			RAZ20123:`Raah pidar ka dekhna Beemar chhod de`,
			RAZ20124:`Tumko rehna hai Rehna hai zindaan me`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2011";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20111:`Ay Raat Zara Tham`,
			RAZ20112:`Bohot Delair They Ammu`,
			RAZ20113:`Chalna Hai Tumhe`,
			RAZ20114:`Haye Abbas`,
			RAZ20115:`Sajjad Haye Sajjad`,
			RAZ20116:`Ye Meri Laadli haye sakina`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20101:`Kyun Na Roye Sajjad`,
			RAZ20102:`Laasha Jari Ka`,
			RAZ20103:`Meri sakina ko neend aa rahi hai`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			RAZ20091:`Amma Ghareeb Hoo mai`,
			RAZ20092:`Bole pidar se akbar Barchi Na Khaynchna`,
			RAZ20093:`Haye nana Shaam Ne Maar Diya hai`,
			RAZ20094:`Mehendi Laga Ke Qasim Maqtal ko jaraha hai`,
			RAZ20095:`Zainab Meri Bachi Ka Rakhna khayaal`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
	}else if(reciter == "Shahid Baltistani"){
		var year = "2020-21";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			SB20211:`Allahu Shafi Be Haqqil Hussain`,
			SB20212:`Aye Mere Chand Meri Ankh ke taare Asghar`,
			SB20213:`Bazaar aa raha hai`,
			SB20214:`Mera Abbas margaya Baba`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2020";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			SB20201:`Abbas Abbas Abbas`,
			SB20202:`Abbas ka Alam hai khoumi nishaan`,
			SB20203:`Amma Madad Karo`,
			SB20204:`Aon Bachra`,
			SB20205:`Behno Ke Saamne`,
			SB20206:`Karbobala se pehle ruqayya ujad gayi`,
			SB20207:`Masjid main huye zakhmi Haider zainab pe`,
			SB20208:`Taweez me Hassan ne ye rokar likha hussain`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2019";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			SH201901:"Mere Gareeb Hussain"

		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2018";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			SH201801:"Aao abbas",
			SH201801:"Aao taboot Mohammad ka uthao logo",
			SH201802:"Areeza e darvaish",
			SH201803:"Bhaiyya aa gayi zainab",
			SH201804:"Parda e ghaib mein"

		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2017";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43579:"Bhai ki laash pe Maqtal me", n43580:"Kiya hai waada jo zehra se", n43581:"Noke naiza pe hai mera Asghar", n43582:"Paani masooma ne maanga to", n43583:"Ya gareeb e karbala", n43584:"Yu Aaqri Hussain ne sajda ada kiya"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2016";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43586:"Azaane darwaish",
		n43587:"Dua Karna Ali AKber",
		n43588:"Haaye Zainab Ko Zamaane Ne",
		n43589:"Karbala waale yaad aayenge",
		n43590:"Soughra Ne Likha",
		n43591:"Utho Baba"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var mirnoha={n43593:"Aliyun waliullah", n43594:"Ana Ibnal Abbas", n43595:"Apne Baccho ko na royi", n43596:"Fatima ki amanat", n43597:"Ghazi ka salaam fizza", n43598:"Gurbate Shabbir pe", n43599:"Mazloom Hussain(english)"};

		var year = "2014";
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2013";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43601:"Aye Meri Laadli Zainab",
		n43602:"Baghdaad ka Qaidi",
		n43603:"Bas Raaj Karegi Karbobala",
		n43604:"Doosra Abbas Nahi",
		n43605:"Haaye Mera veer Hussain",
		n43606:"Kaise Bhoolu Tujhe",
		n43607:"Qafila Sadaat Ka"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2012";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43609:"Aye Mere Bhai Raza Main Saniye Zainab", n43610:"Qaimae kulsoom se", n43611:"Qayamat aur kya hogi", n43612:"Sakina Ki Turbat Banaate Banaate", n43613:"Shaam Aa Raha Hai", n43614:"Yaad Aaoge Bhayya"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2011";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43616:"Hussain Kal Bhi Tha", n43617:"Mai Ek Bekas Pardesi", n43618:"Mai Shaam jayungi", n43619:"Rozedaro Ali pe Koofe", n43620:"Sina Toot Gayi Hai", n43621:"Soja Mere Hussain", n43622:"Tanhai Ali Ki", n43623:"Ya Imam e Askari as"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43625:"Behta Paani", n43626:"Mera Mehdi as jab ayega", n43627:"Saamne Darbaar ke", n43628:"Sadaat Hai pardes Hai"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43630:"Ghabrayegi zainab", n43631:"Haye Hussain Jaan", n43632:"Naade Aliyan Mazharal", n43633:"Sakina Ye Kehti Rahi Raat Bhar", n43634:"Ye Bata Karbobala"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2008";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43636:"Aye bahen zainab", n43637:"Maa Sakina Ka shaana", n43638:"Ya Hamsheere Raza", n43639:"Ya Zehra sa Madar"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2007";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43641:"Bayaan sirre Shahadat Ki", n43642:"Beqata maara Gaya SIbte", n43643:"Bewa Hasan ki Rokar Pukaari", n43644:"Mera Asghar Kaafi Hai", n43645:"Mere Ghazi Kahan Ho", n43646:"Sakina Jaag Jayegi", n43647:"Shabe Taare", n43648:"Ya Moosa as e Kazim", n43649:"Zainab Binte Ali"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}



		var year = "2005";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43651:"Ghazi Ko Bachpane Me", n43652:"Karobaar Nahi", n43653:"Maa Pukaare Lout Aao", n43654:"Main Khaak Pe Sojaongi Haan", n43655:"Marhaba Khairun Nisa", n43656:"Suroode aman", n43657:"Vichora", n43658:"Zuljanah Aye Zuljanah"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


	}else if(reciter == "Meesam Abbas"){
		var year = "2020-21";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			MA20211:`Abbas Ka Laasha`,
			MA20212:`Aye Wallah`,
			MA20213:`Bibi Qabool Kare`,
			MA20214:`Hogayi Deer Mujhe Qasim`,
			MA20215:`Hussain Sayeen`,
			MA20216:`Jibreel aur Karbala`,
			MA20217:`Kareeme Karbala Hussain`,
			MA20218:`Kuch to bata mujhko zuljanah`,
			MA20219:`Lasha Ali Akbar Ka`,


		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2020";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			MA20201:`Aao Bahen sawaar karao Hussain`,
			MA20202:`Fizza teri wafa ki had`,
			MA20203:`Hai teri wafao'n ki ajab ghazi kahani`,
			MA20204:`Hamaara Pehla Imam`,
			MA20205:`Lanat Bar dushman e Zehra`,
			MA20206:`Mai Rahib Hoon`,
			MA20207:`Meri Jaan Akbar`,


		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year = "2019";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			MA20191:`Dil ba dil`,
			MA20192:`Gardan me Rahwaar ki Ghazi ka sar`,
			MA20193:`Ibne Muljim ne haider ko maara rozedaaro`,
			MA20194:`Qasim ki aati hai mehendi`,
			MA20195:`Safar e ishq e hussain`,
			MA20196:`Thoda sa fasla hai khanjar me aur gale me`,
			MA20197:`Wasiyat e Zehra`,
			MA20198:`Ya baabe hawaej asghar`,
			MA20199:`Zafar e Jinn`,


		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}




		var year = "2018";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			MA201801:"Jafar ka janaza",
			MA201801:"Karbala jaana",
			MA201802:"Khoon e haider",
			MA201803:"Maula koi ghum na de",
			MA201804:"Moharram na bhoolna",
			MA201805:"Padar zinda hai akbar",
			MA201806:"Sadaat",
			MA201807:"Sher e Fizza",
			MA201808:"Taboot hasan ka"

		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2017";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43668:"Aise hote hai mohammed ke", n43669:"Rona bhi hai baba ko", n43670:"Salaam bar Moharram", n43671:"Sina kaleje pe akbar ke maarne waale", n43672:"Tu dekh nahi paata jaber", n43673:"Zehra ki dua pana sajaana azakhana"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2015";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43675:"Abbas tere baad", n43676:"Ayaa Hai Alaam", n43677:"Bichaao farshe aza mai zarur aaungi", n43678:"Haaye Ali ya ALi", n43679:"Haaye beemar", n43680:"Hussaina Hussaina", n43681:"momino haidere qarrar ka matam karlo", n43682:"Ya Imam-e-Reza"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2013";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43684:"Abbas mere bhai", n43685:"Allaho Akbar ki azaan", n43686:"Azadari na chhodenge"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2011";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43688:"Alwida alwida ae behen alwida", n43689:"Hum musafir hai majboor hai", n43690:"Karbal ke jaane wale", n43691:"Tera Mehman Hon Shireen Tera Mehman Hon"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43693:"Kya Dhund Rahi hai jungle me sakina",
		n43694:"ya elahi mujhe abbas sa beta"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43696:"Aye momino sunata hu", n43697:"Mai jigar ke tukdo ko chhod ke jaau kaha", n43698:"Nana aye mere nana, main aagayi madina"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2008";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43700:"Abbas meer-e-Lashkaram", n43701:"Abbas sa beta dede", n43702:"Ghar lut gaya chadar chini", n43703:"Ya Habibi Ya Hussain"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2007";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43705:"bano se aake", n43706:"Husain o minni wa ana minal hussain"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2004";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43708:"Abbas chale aao", n43709:"Deti thi sada zahra aa dekh zara baba"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


	}else if(reciter == "Ameer Hassan Amir"){
		var year = "2017";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			AMA20171:`Abbas Bohot dushwari hai`,
			AMA20172:`Aye imam e raza`,
			AMA20173:`Chand rota raha`,
			AMA20174:`Jab hamein laya gaya shaam ke bazaro mein`,
			AMA20175:`Kaise Chale Hussain ka beemaar dhoop me`,
			AMA20176:`Khoon-e-hussain`,
			AMA20177:`Mera bhaiyya akbar salamat rahe`,
			AMA20178:`Mujhe shabbir kehte hai`,
			AMA20179:`Rang layega zaroor`,
			AMA201710:`Roke Kehti thi sakina mere baba se milado`,
			AMA201711:`Sakina pani aaya hai`,
			AMA201712:`So ja sakina`,
			AMA201713:`Sugra se tu sakina badi khushnaseeb hai`,
			AMA201714:`Tanhayi Hussain Ki`,
			AMA201715:`Tu Jise Milgaya Hussain`,
			AMA201716:`Ya Imam e Raza Aye shahenshahe`,
			AMA201717:`Ye Dono Kate hath to pehchane hue hai`,
		};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2016";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43859:"Aaja meri beti", n43860:"Baap ke sog mein", n43861:"Be maqna o chadar", n43862:"Chale aao mere pyaaro", n43863:"Mai kaise rokoo'n", n43864:"Sakina mar gai", n43865:"Sheh kehte the", n43866:"Tadap kar kehte the sarwar", n43867:"Tere Mehmaan aaye hai shiree'n"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2015";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43868:"Aisa lagta hai hasan", n43869:"Alwida aye mere sogwaroanam", n43870:"Baba baba kehte", n43871:"Jari Abbas", n43872:"Jiyo matamdaro jiyo", n43873:"Sab mar gaye amma", n43874:"Ye deti hai marqad se zahra sada", n43875:"Yun Bhai bahen ka qatl kiya"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2014";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43876:"Aaja mere asghar", n43877:"Abbas e ghazi", n43878:"Aza jaari rahegi", n43879:"Beemar behen ka khat", n43880:"Haye shaam", n43881:"Mabood qayamat ye", n43882:"Par baddua na ki", n43883:"Shabbir ka sar", n43884:"Teri laash hussain"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43885:"Maa mai pyaasa hu"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43886:"Tu padhta jaa qur'aan"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2007";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43887:"Hussain jaate hain rukhsat karo azadaron"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year = "2006";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n43888:"Chakkiyan pees k ay laal tujhe pala tha"};
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


	}else if(reciter == "Sibte Jaffer Shaheed"){
		var year = "Soz-o-Salaam";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={SJS01:"Aqraba kat gaye jab shahe karbala bari bari",
		SJS02:"Aye Chand Karbala Ke",
		SJS03:"Panch imamo ka raha banke sahaara Abbas",
		SJS04:"The Bain Sakina ke Abbas Nahi Aaye",
		SJS05:"Yahi Hai Sakina Yahi Fatima Hai",
		SJS06:"Ye The Bain Banu ke Shame Garibaan"
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
	}else if(reciter == "Farhan Razvi"){
		var year = "nouhay";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
		FRZ01:"Aagayi Shaam E Ghareeba",
		FRZ02:"Ana Mazloom Hussain",
		FRZ03:"Arbaeen Aagaya Tera Mere Mazloom Hussain",
		FRZ04:"Aye Mere Bhai Abbas",
		FRZ05:"Baba Mere Baba",
		FRZ06:"Bikhra Huwa Dilbar Shabbar Ka",
		FRZ07:"Chalo Hussain se Ehd e Wafaa nibhana hai",
		FRZ08:"Dar e Zehra Ko Jalaya Hai Musalmano Ne",
		FRZ09:"Haye Nana Tumhari Ummat Ne Kaisa Hum par Ye Zulm Dhaya hai",
		FRZ10:"Inna lillahi wa inna ilayhi rajiun",
		FRZ11:"Islaam pe ehsaan hai tera asghar e beshee",
		FRZ12:"Matam Hussain Ka",
		FRZ13:"Mushkil Kusha E Khalq Khudaara Madad Karo",
		FRZ14:"Sajjad Ka Gala Hai",
		FRZ15:"Sher e Khuda Ali",

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


	}else if(reciter == "Mir Afsar Ali Momin"){
		var year = "nouhay";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			MAAM22N1:`Akbar hai karbala me teri aaqri azaa'n`,
			MAAM22N2:`Har darood aur har salaam`,
			MAAM22N3:`Maqsade Ahle aza sirf Azadari hai`,
			MAAM22N4:`Ya rasool Allah Ya Habeeb Allah`,
			MAAM22N5:`Ye kiska Alam utha ye kiski nishaani hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

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


