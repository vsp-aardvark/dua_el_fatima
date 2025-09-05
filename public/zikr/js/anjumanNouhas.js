$(document).ready(function() {

	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var array = queryString.split("/")
	var reciter = array[array.length-1]
	$("#heading").html("<center>"+reciter+"</center>")
	var nouhaOption = "";

	if(reciter == "Anjumane Al Abbas(Hyd-Ind)"){
		var year  = "Imam Ali (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALALI:"Tegh sajde mein sar par ali ke lagi",
			ALALI:"Uth gaya hain aaj baba zainab",


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Fatima (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALF:"Hai faza o mein imam e asr ki zaqmi sada",


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Shahzadi Sughra (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALASUG1:`Lout aao baba`,
			ALASUG2:`Sughra ne likha baba jeene ka maza koi nai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Azadari";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAZ1:`Aye momino Hussain ka tum par salaam hai`,
			ALAZ2:`Aye momino payaam  e sarwar`,
			ALAZ3:`Aye momino ye Gham karo`,
			ALAZ4:`haan karbala karbala`,
			ALAZ5:`Hai yeh matam hussain ka matam`,
			ALAZ6:`Heyhaat minnaz zilla`,
			ALAZ7:`Jab tak shahe mazloom pe giriya nahi hoga`,
			ALAZ8:`Karbala man kunto maula`,
			ALAZ9:`Karbala yaad rahey karbobala yaad rahey`,
			ALAZ10:`Shabbir ka matam hain yeh hota hi rahega`,
			ALAZ11:`zehra ke bhare ghar ka matam hai azadaro`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Aon o Mohd (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAAM:`Aye saniye zehra ke pisar aun o mohammed`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Ali Asghar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALASG1:`Aye lal mere asghar , aye lal mere asghar`,
			ALASG2:`qabr-e-asghar pa jo shabbir ko rona aaya`,
			ALASG3:`sar peth ke yeh bano ne kaha aaja ali asghar raat`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Ali Akbar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAKB1:`Allahu Akbar haye mera sona akbar`,
			ALAKB2:`aye mere kadiyal jawaan`,
			ALAKB3:`Ho gaya shaheed akbar e jawaa'n`,
			ALAKB4:`Jaane Zehra ki Jaan Ali AKbar`,
			ALAKB5:`Mehlan mehlan ya ali akbar`,
			ALAKB6:`Zainab ali akber ke jine ki dua mango`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Shahzad e Qasim (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALASQ1:`Farwa ke dulare aye qasim`,
			ALASQ2:`Karbala me shaaadi qasim ki ho rahi`,
			ALASQ3:`Pamaal ran mein hogaya noushahe karbala`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Moula Abbas (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAAB1:`Abbas aajao Zainab akeli hai`,
			ALAAB2:`Abbas Abbas`,
			ALAAB3:`Abbas Abbas e Alamdaar sidhaara`,
			ALAAB4:`Abbas ke matam daroon ko`,
			ALAAB5:`Abbas Margaye Mai Alamdaar bangayi`,
			ALAAB6:`Abbas Mera Margaya zainab`,
			ALAAB7:`Alam ke Saaye me Kehte chalo hussain`,
			ALAAB8:`Aye Alamdaare Hussain Ibne Ali`,
			ALAAB9:`Aye Ali Ke laal aye saqae haram`,
			ALAAB10:`Aye Bhai zara bhai hame kehke`,
			ALAAB11:`Berida kyun nazar aati zainab aaj abbas jo hote`,
			ALAAB12:`deti hai zainab sada ho kahan aye bawafa`,
			ALAAB13:`Jane zehra-o-ali janne baradar abbas`,
			ALAAB14:`Pounchi khaber jo khaime mein abbas margaye`,
			ALAAB15:`Pukari zainab-e-muztar kahan gaye abbas`,
			ALAAB16:`tham kar apni kamar shey ne sada di abbas`,
			ALAAB17:`Ya aqee abbas ya aqee abbas`,
			ALAAB18:`Yeh sada deti hai zainab mere jaani abbas`,
			ALAAB19:`zainab mera bhai margaya`,
			ALAAB20:`zainab ne kaha yeh ro ro kar`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Imam Hussain (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAHUS1:`Ahle Haram karte hain buka wawaila`,
			ALAHUS2:`Ana Mazloom Hussain`,
			ALAHUS3:`Aye Bekafan Hussain gareebul watan`,
			ALAHUS4:`Aye Hussain ibne Ali`,
			ALAHUS5:`Bala ke dasht mein ashoor ko jo shaam huwi`,
			ALAHUS6:`Dasht-e-bala mein sarwar basti basa rahe hain`,
			ALAHUS7:`Deen e islam ko karbal mein bachatay hai hussain`,
			ALAHUS8:`Hussain jab ke chale baad do pahar ran ko`,
			ALAHUS9:`Hussain kal bhi the Aaj bhi hai`,
			ALAHUS10:`Hussaino Minni`,
			ALAHUS11:`Jaha hussain waha lailaha illallah`,
			ALAHUS12:`jane mushkil kusha jane zehra hussain`,
			ALAHUS13:`koi to lasha e shabbir laye qaimo mein`,
			ALAHUS14:`marhaba marhaba marhaba ya hussain`,
			ALAHUS15:`Sada dete the yeh sarwar bahan zaianb khuda`,
			ALAHUS16:`sar noukay sina se sarwar ka`,
			ALAHUS17:`Shahzadiya ro ro kehti thi`,
			ALAHUS18:`Tha yeh zainab ka bayan aye mere mazloom hussain`,
			ALAHUS19:`Thi yeh zehra ki sada mere mazloom hussain`,
			ALAHUS20:`wa qilata nasera`,
			ALAHUS21:`Ya ali ya hussain ya abbas`,
			ALAHUS22:`Ya Hussain Ya Hussain Ya Hussain`,
			ALAHUS23:`Ya Hussain Ya Mazloom`,
			ALAHUS24:`Ya zainab -o- ume kulsum aley kunna minni salaam`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Shahzadi Sakina (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALASAK1:`Aye hai mere baba`,
			ALASAK2:`baba teri sakina har zulm seh rahi hai`,
			ALASAK3:`Baba yeh musalma mujhe rone nahi dete matam`,
			ALASAK4:`Meri beti meri sakina jaan`,
			ALASAK5:`qaid mein ek char sala zindagi roti rahi`,
			ALASAK6:`qayamat hogayi baba`,
			ALASAK7:`roro sakina kehti thi amma neend nahi aati`,
			ALASAK8:`zainab ne kaha rokar dekho to zara bibi`,
			ALASAK9:`zindan mein matam hai masoom sakina ka`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Imam Sajjad (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAIS1:`Langar hai kamar me`,
			ALAIS2:`Matam hai bahrobar mein bimar-e-karbala ka`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Shahzadi Zainab (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAZAI1:`Bazar mein jana hain darbar mein jana hain`,
			ALAZAI2:`Berida kyun nazar aati zainab aaj abbas jo hote`,
			ALAZAI3:`Bhare darbar mein zainab khadi hai`,
			ALAZAI4:`ek din mein bhare ghar ko luttay huwe dekhi hoon`,
			ALAZAI5:`islam ko sholon se bacha legayi zainab`,
			ALAZAI6:`Jab kabhi geerat -e- insaan ka sawaal aata hai`,
			ALAZAI7:`Kaha yeh shimr kayi ne rulaao zainab ko`,
			ALAZAI8:`main kaabe ki beti hoon`,
			ALAZAI9:`Main Zainab hoon`,
			ALAZAI10:`Shaam ka bazaar hain aur zainab e dilgir hain`,
			ALAZAI11:`shey kehte they zainab se darbar mein jana hai`,
			ALAZAI12:`Zainab Zaianab Zainab`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Arbayeen";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAARB1:`Haaye Alamdaar Haye Alamdaar`,
			ALAARB2:`karbala mein zainab ko arbaeen manana hai`,
			ALAARB3:`Manane bhai ke chehlum ko ayee hai zainab`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Wapasi e Ahle Haram";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAWPS1:`Amma Zainab aayi hai`,
			ALAWPS2:`Bhaiya teri maa jayi ne yeh bhi dekha shaam ke`,
			ALAWPS3:`Chod ke tujh ko maa jaye kaise watan zainab jaye`,
			ALAWPS4:`lahad pe fatima zahra kay tha bayaan amma`,
			ALAWPS5:`Sughra madina lut gaya`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Wapasi e Ahle Haram";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ALAAWD1:`Alweda aye Fatima Zehra ke dilbar`,
			ALAAWD2:`Alweda Aye Hussain Aye Hussain Alweda`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
	}

	else if(reciter == "Anjuman e Masoomeen"){
		var year  = "Imam Hussain (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMHUS1:`aashoor ki shab hai hashr bapa`,
			AMHUS2:`amma bas ek raat ka mehmaan hai hussain`,
			AMHUS3:`baba ko bachaale mere`,
			AMHUS4:`chala ran ko tera baba sakina`,
			AMHUS5:`Hussain Zinda Hai Shaheed Zinda Hai`,
			AMHUS6:`Khaak Par Lashae shabbir Hai Aao Nana`,
			AMHUS7:`Marne Ke Liye Jaata Hai Bhai Tera Zainab`,
			AMHUS8:`Meri Janib Palat Aa Hussain`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Moula Abbas (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMABS1:`abbas abbas aye mere bhai`,
			AMABS2:`Ajab Zehra Ke Bete Ki Ghareebi Ka Zamana Hai`,
			AMABS3:`aye jaane dile haidare karrar alamdar`,
			AMABS4:`ghazi abbas ke parcham ko uthaate rehna`,
			AMABS5:`Tha Yeh Abbas Ka Nouha Jab Mere Haath Kate`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Janaabe Muslim (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMMUS1:`Koofe Me Yeh Muslim Par Kya Aalame ghurbat Hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Azadari";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMAZD1:`Abbas o sakina Ki Hai Ataa Yeh Mashk o alam`,
			AMAZD2:`Ghame hussain Manana Bohat Zaroori Hai`,
			AMAZD3:`Hussain Zinda Hai Shaheed Zinda Hai`,
			AMAZD4:`Karbal Ke Maseeha Se Islam Shifa Maange`,
			AMAZD5:`maatame shabbir ka silsila jaari rahe`,
			AMAZD6:`Matam Ghame shabbir Me Aelaane wafa Hai`,
			AMAZD7:`ooncha rahe apna alam`,
			AMAZD8:`qaayam ghame shabbir hai jab tak hai zamana`,
			AMAZD9:`ye ghame shabbir hai dunya ko bataate chalo`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Ali Asghar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMASG1:`kahan ho be zaba'n asghar`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Ali Akbar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMAKB1:`aina aina aye ali akbar`,
			AMAKB2:`akbar chala hai marne ko`,
			AMAKB3:`ali akbar abhi maidaa'n me na jao beta`,
			AMAKB4:`Apne Pisar Ke Husn Ka Sadqa Utaarlo`,
			AMAKB5:`aye ali akbar mere`,
			AMAKB6:`barchiyo me dil ka tukda reh gaya`,
			AMAKB7:`goonji hai karbala me akbar teri azaa'n`,
			AMAKB8:`Tooti Hai Kamar Kaise Bataun Ali Akbar`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Aon o Mohd (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMAOM1:`aye auno mohammad mere`,
			AMAOM2:`Jalti Zameen Pe Aoun Muhammad Hain Khoon Me Tar`,
			

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzade Qasim (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMQSM1:`farwa ka laal ran me tukdou me batgaya hai`,
			AMQSM2:`paamaal hoke hazrate qasim guzar gaye`,
			AMQSM3:`Yeh Kis Shaheed Ki Mayyat Hussain Laate Hain`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Sakina (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMSKN1:`kaha hinda ne bibi koi yu'n bhi jaan khota hai`,
			AMSKN2:`Rihaayi Mil Gayi Rihaayi Mil Gayi`,
			AMSKN3:`Roke Zindan Me Yeh Kehti Thi Sakina Baba`,
			AMSKN4:`ye kehte the shahe wala sakina ham nahi honge`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Sajjad (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			AMSJD1:`Darbar Me Sajjad Pe Mushkil Yeh Padi Hai`,
			AMSJD2:`ho paao zaqmou se bhare aisa musafir koun hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "chehlum";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMCHL1:`aaj hai chehlum pyasou ka`,
			AMCHL2:`agaye haram hoga arbaee'n`,
			AMCHL3:`arbaee'n karne ko aayi hai behan`,
			AMCHL4:`arbaeen tera hogaya bhai`,
			AMCHL5:`beta chalenge karbala`,
			AMCHL6:`Bhai Mai Luti Aayi Hu, Zainab Ki Sada Hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Zainab (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMSZ1:`aye meri behan dukhiya zainab`,
			AMSZ2:`gayi darbaar me zainab qayamt kyu nahi aayi`,
			AMSZ3:`kya sunte ho aye abdullah`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Sughra (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMSS1:`chord na tanha beti mareeza`,
			AMSS2:`sun meri dukhya aye fatima soughra`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Alweda";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMSS1:`alvida aye hussain`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Ali (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMIMA1:`Ali Ke Ghar Me Qayamat Ki Subha Aayi Hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Raza (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMIMA1:`Aye Shaheed-e-jafa Ya Imam-e-raza`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		

		var year  = "Imam e Zamaana (ajtf)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AMIMA1:`Ghaibat Se Chale Aao Ansaar Bulate Hain`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		

		
	}
	else if(reciter == "Anjuman e Asghari"){
		var year  = "Anjuman e Asghari";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASG1:`Hum Anjuman e Asghari hai Shah ke Azadaar`,
			ASG2:`Hum Asghari shah ke matamdaar hai`,
			ASG3:`Hum Hai Hussain Waale`,
			ASG4:`Waqeyaate karbala hum kya`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Rasoole Khuda (saws)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			ASGRK1:`Nana ne nawaase ne zaher ek sa paaya`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Fatima (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			ASGSF1:`Darwaza gira pehlu pe Zehra(s.a) huin Shaheed`,
			ASGSF2:`Imam Aaj bhi Zehra ki qabr tooti hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Sughra s.a";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			ASGSUG1:`Watan me kaise mai tanha rahungi aye baba`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		

		var year  = "Shahzadi Ummul Baneen (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			ASGUB1:`Moula Meri Amma guzar gayi`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Ali (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={
			ASGIA1:`Hai Jahan me aaj Maatam Haidare Karrar ka`,
			ASGIA2:`Hyder ke Matamdaaro me hyder ka janaaza`,
			ASGIA3:`Magz tak Haider(a.s) ka sar do neem hogaya`,
			ASGIA4:`Momino aaj Ali(a.s) ka Maatam hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year  = "Janaabe Muslim (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGJM1:`Muslim Ke sar ko zalim dar dar`,
			ASGJM2:`Phir Aaj Ro Rahi Hai Koofe Me Shahzadi`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Aghaaz e Aza";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGAG1:`Hayya ala qairil amal hayya ala qairil amal`,
			ASGAG2:`Is mahe moharram me ajab hashr bapa hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Aon o Mohd (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGAM1:`Alweda Aun o Mohammad`,
			ASGAM2:`Aye Aon o Mohammad Aye Aon o Mohammad`,
			ASGAM3:`Qaime Ke Dar Pe Shaah Ne Rokar Yeh Di Sadaa`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Ali Asghar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGASG1:`Aajao Ali Asghar Aajao Mere Laal`,
			ASGASG2:`Ali Asghar Bhi Ran Ko Jaa Raha Hai`,
			ASGASG3:`Asghar Nahi Raha Mera`,
			ASGASG4:`Boli ro ro ke Maa Ali Asghar`,
			ASGASG5:`Haaye Asghar Haaye Asghar`,
			ASGASG6:`Inkaar Aasmaa ko hai razi zamee nahi`,
			ASGASG7:`Qalbe Zehra kat gaya gardan chidi besheer ki`,
			ASGASG8:`Aye Mere laal Asghar`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
		var year  = "Ali Akbar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGAKB1:`Akber Ke Kaleje Mein Sina Toot Gayi Hai`,
			ASGAKB2:`Hogaye Shabbir Tanha Margaya Beta Jawaan`,
			ASGAKB3:`Hussain Aaya Sirhaane utho Ali Akbar`,
			ASGAKB4:`Jaate Hai Ran Ko Akber Kohraam Mach Gaya Hai`,
			ASGAKB5:`Kadyal Jawaan beta maidaa ko jaa raha hai`,
			ASGAKB6:`Kaha Shah ne ye rokar mere akbar`,
			ASGAKB7:`Khaime se aarahi hai sada Ya Ali Madad`,
			ASGAKB8:`Nigahon ke sukoon ko qaake karbal mein`,
			ASGAKB9:`Bacho uthao aake janaza jawan ka`,
			ASGAKB10:`Jawaan Bete ki Mayyat Utha rahe hain Hussain`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzade Qasim (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGJQ1:`Aye shabbar ki jaan Noushahe Karbala`,
			ASGJQ2:`Taapo Se Hua Tukde Jab Tera Badan Qasim`,
			ASGJQ3:`Maqtal se aaraha hai gulgoo qaba ka laasha`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Moula Abbas (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGABS1:`Abbas Ke Marne Se Haram Toot Gaye Hain`,
			ASGABS2:`Abbas Mar Gaya Hai Main Lut Gaya Zainab`,
			ASGABS3:`Abbas Mere Abbas`,
			ASGABS4:`Aye Tamanna e Murtaza Abbas`,
			ASGABS5:`Ghazi Madad ko aao`,
			ASGABS6:`Ibne Zehra Ya abbas`,
			ASGABS7:`Jab hua farqe mubarak khoon se tar Abbas ka`,
			ASGABS8:`Kehte hain sarwar yahi meri kamar toot gayi`,
			ASGABS9:`Taskeene Qalbe Zehra Abbas Abbas`,
			ASGABS10:`Ya Moula Abbas Ya Moula Abbas`,
			ASGABS11:`Zainab ne tadapkar ye pukaara mere abbas`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Hussain (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGIH1:`Dekho Ujad gaya hai bhara ghar batool ka`,
			ASGIH2:`Haaye Hussaina pyaase Hussaina`,
			ASGIH3:`Hussain hai Namaz me`,
			ASGIH4:`Hussain Ya Hussain`,
			ASGIH5:`Milke kaho ya Hussain kehte raho Ya hussain`,
			ASGIH6:`Sarwar Ne Kaha Apna Ghar baar luta dunga`,
			ASGIH7:`Taaraj Hua Zehra Ka Ghar`,
			ASGIH8:`Tanha hai dushmano me`,
			ASGIH9:`Tanha Hussain rehgaya Karbal ki zamee par`,
			ASGIH10:`Wa Hussaina Hussaina Hussain`,
			ASGIH11:`Yeh Hai Ghame Hussain Kabhi Mit Na Paayega`,
			ASGIH12:`Fatima Roti Hai Karbal Ka Nazaara Dekhkar`,
			ASGIH13:`Kullona Fidaka Ya Hussain`,
			ASGIH14:`Hussainiyat ki Baqa hai Hussain Ka matam`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Zuljana";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGZJ1:`Aye Aspe bawafa mera baba kaha gaya`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Sakina (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGSS1:`Aajayiye Baba mere`,
			ASGSS2:`Hai Mera Naam Sakina`,
			ASGSS3:`Qaid me ashk bahati hai Sakina ab tak`,
			ASGSS4:`Sabr Sakina karna hai`,
			ASGSS5:`Sakina Yeh Kehti Hai Zindaan Mein Baba`,
			ASGSS6:`Utho Aye Sakina Utho`,
			ASGSS7:`Yeh Kaisa Qaidqana Hai`,
			ASGSS8:`Zindaan Andhera Hai Baba`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Sajjad (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGIS1:`Beemaare Karbala hai`,
			ASGIS2:`Sarwar ke sogwaar Haaye Abid e Beemaar`,
			ASGIS3:`Ye Beemaar kehta tha kufe me`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Zainab (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGSZ1:`Abbas ki bahen hoon koi sonchta nahi`,
			ASGSZ2:`Baade hussain zainab kya kya na bangayi`,
			ASGSZ3:`Berida Zainab hai bhayya`,
			ASGSZ4:`Shareekatul Hussain Ummul Masaeb`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		
		var year  = "Arbayeen";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGARB1:`Arbayee manaungi`,
			ASGARB2:`Arbayeen hai Arbayeen hai`,
			ASGARB3:`Chehlum karne aayi hai zainab`,
			ASGARB4:`Haaye Chehlum Hogaya`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Wapasi e Ahle Haram";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGWPS1:`Chalo Sajjad Beta Chalo Hum Karbala`,
			ASGWPS2:`Lut Gaya dashte bala me tera kunba amma`,
			ASGWPS3:`Main Bayaan Kaise Karu Meri Musibat Amma`,
			ASGWPS4:`Watan ko tanha na zainab hussain Jayegi`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year  = "Alweda";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGALV1:`Alweda Alweda Alweda`,
			ASGALV2:`Alweda Alweda Aye Hussain Alweda`,
			ASGALV3:`Alweda Alweda Aye Jaane Zehra Alweda`,
			ASGALV4:`Alweda Moula Hussain`,
			ASGALV5:`Alvida moula Hussain alvida moula Hussain`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Jaffer (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGIJ1:`Momino Mein Hai Hashr Sa Bapa Kar Gaye Qaza Jaffer e Sadiq`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Raza (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGIR1:`Qum se aati ha Sada Aye Ghareebul Ghoraba`,
			ASGIR2:`Uth raha hai janaaza raza ka`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam e Zamana (ajtf)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASGIMZ1:`Ro Rahe hai Imame zaman`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		
	}
	else if(reciter == "Anjuman e Safeere Aza"){
		var year  = "";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASIA1:`Aagaya maahe Aza`,
			ASIA2:`Zinda raheyga ye Safeer e aza`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

	}

	else if(reciter == "Anjuman e Hyderia"){
		var year  = "Imam Ali (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AHIA1:`jahan me momino shere quda ka matam hai`,
			AHIA2:`moula utho ke masjide koofa udaas hai`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Ali Akbar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AHAKB1:`chala marne ali akabar`,
			AHAKB2:`dua karo mera noore nazar palat aaye`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Moula Abbas (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AHABS1:`abbas abbas abbas mere bhai`,
			AHABS2:`abbas jald aao marjaaegi sakina`,
			AHABS3:`aye jaane dile hydere karrar alamdar`,
			AHABS4:`laaya hu mai baazu uthakar dekho na zainab`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Hussain (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AHIH1:`asr ko sheh ki sada aayi kise aawaaz du`,
			AHIH2:`milke sab kare matam`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Sakina (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AHSAK1:`baba bohot andhera hai`,
			AHSAK2:`kehti thi sakina kya baba nahi ayenge`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "chehlum";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AHCH1:`bhayya tere chehlum ke lie aayi hai zainab`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Wapasi e Ahle Haram";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			AHWPS1:`shabbir ki turbat pe ye zainab ka baya'n tha ghar jaake karu kya`,

		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
	}
	else if(reciter == "Anjuman e Parwana e Shabbir"){
		var year  = "Rasoole Khuda (saws)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSIA1:`karti thi fugha'n fatima zahra mere baba`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		
		var year  = "Imam Ali (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSIA1:`baba ko mere chod ke aaye ho tum kaha'n`,
			APSIA2:`koofe me jo gham ki fiza`,
			APSIA3:`matam hai fizaou me shahe kouno makan ka`,
			APSIA4:`sajde me tegh kha ke tadapte hai murtaza`,
			APSIA5:`shaheed hogaye moula ujad gaya koofa`,
			APSIA6:`zainab pe yateemi ki ghadi agayi baba`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year  = "Bibi Fatima Zahra (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSSF1:`kouno makaa'n me barpa`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Hassan (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSHSN1:`matam hai madine me shabbar ki shahadat ka`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Bibi Soughra (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSBSUG1:`Soona Hai Madina`,
			APSBSUG2:`Sughra ne likha Baba kab laotke Aaoge`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Aun o Mohd (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSAOM1:`ro ro ke ye zainab ne kaha auno mohammad`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		
		var year  = "Ali Asghar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSASG1:`Aye Shashmaahe Pyaase Asghar`,
			APSASG2:`Bain the ye Bano ke Mere Bezabaa'n Asghar`,
			APSASG3:`Ham karte hain Maatam Asghar ka`,
			APSASG4:`Jaao Sidhaaro ran ki taraf Mere Naunehaal`,
			APSASG5:`karte raho Besheer ka Maatam`,
			APSASG6:`Mere Asghar ki hai qabr kis ja`,
			APSASG7:`Mere Bhayya Ali Asghar`,
			APSASG8:`Rabab karti hai faryaad margaye Asghar`,
			APSASG9:`Shaheede teere sitam Bezabaan Ali Asghar`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Ali Akbar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSAKB1:`Ab ghar ko Chalo khaakh se Utho Ali Akbar`,
			APSAKB2:`Abbas Hamko Laashe Jawaa'n mil nahi rahi`,
			APSAKB3:`Bain karte the Sarwar Haay Naojawaa Akbar`,
			APSAKB4:`Jao ab Khuda Hafiz aye Mere Ali Akbar`,
			APSAKB5:`Laila Shaheed ho gaya Tera Jawaan Pisar`,
			APSAKB6:`Na jaane kis tarah Laila ne Dekha`,
			APSAKB7:`tha ran me sheh ka ye nouha mere ali akbar`,
			APSAKB8:`Zaeef Baap se Laashe Pisar nahi uthti`,
			APSAKB9:`Zameene garm pa Laasha pada hai Akbar ka`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzade Qasim (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSQ1:`Karbala me hua lakhte Dil e Shabbar Tukde`,
			APSQ2:`kis soone ban me sote ho`,
			APSQ3:`Maqtal se Laash Qasim e Naoshah ki aayi hai`,
			APSQ4:`Qatl hogaye Qasim Ya Ali duhaai hai`,
			APSQ5:`Utho zameene garm se Beta Utho Utho`,
			APSQ6:`Ye Hussain maqtal se kiski Laash Laate hain`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Moula Abbas (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSABS1:`Abbas Behn aayi hai darbar me ja kar`,
			APSABS2:`Abbas tujhe Ahle Wafa yaad karenge`,
			APSABS3:`Abbas Utho aag lagi jalte hain khaime`,
			APSABS4:`Abbase Ali Sheh ke Alamdar sidharo`,
			APSABS5:`Aye Shere Neyastaane Haidar`,
			APSABS6:`Dashte ghurbat me Sakina Main akela Hogaya`,
			APSABS7:`Jaate ho suwe maqtal Abbas Khuda hafiz`,
			APSABS8:`Kya so Rahe ho nehr pa Abbase Bawafa`,
			APSABS9:`Maatam hai aaj Dilbare Ummul Baneen ka`,
			APSABS10:`Shabbir hai tanha Mera Abbas kahan hai`,
			APSABS11:`Ya Abbas Ya Abbas`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shabe Ashoor";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSG1:`Aashoor ki ye shab hai shahadat ki raat hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Hussain (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSIHUS1:`Aaja Mere Dilbar Meri Aaghosh Me Ajaa`,
			APSIHUS2:`Asr ka hangaam hai aur Zainab-e-Dilgeer hai`,
			APSIHUS3:`Aye Faatehe Karbobala`,
			APSIHUS4:`Aye Karbala tuhi bataa`,
			APSIHUS5:`Aye Shaheed-e Karbala aye Jaane PaiGhambar Hussain`,
			APSIHUS6:`Aye Shaheede Karbala Fatima Zehra Ke Pisar`,
			APSIHUS7:`Bekafan hai maqtal me Laash Ibne Zehra ki`,
			APSIHUS8:`Deen e Ahmed ki Baqa Hai Karbala`,
			APSIHUS9:`deene mohammed ki baqa ya hussain`,
			APSIHUS10:`Garm reti pa Main girta hu sambhalo Amma`,
			APSIHUS11:`Gham e Karbobala Allah o Akbar`,
			APSIHUS12:`Ghar Fatima ka lut gaya`,
			APSIHUS13:`Ghar haay Mera barbaad huwa`,
			APSIHUS14:`Ghar lut gaya Amma`,
			APSIHUS15:`Ghurbat me Fatima ka aabaad Ghar luta hai`,
			APSIHUS16:`Haay Hussain Pyaase Hussain`,
			APSIHUS17:`Haay Hussain Wawaila`,
			APSIHUS18:`Haay Tanha hain Hussain Ibne Ali maqtal me`,
			APSIHUS19:`haaye karbala walo`,
			APSIHUS20:`Kis se Faryaad Karu`,
			APSIHUS21:`Mera Hussain Tadapta hai khaake maqtal par`,
			APSIHUS22:`Mere Bhayya ho kaha`,
			APSIHUS23:`Nazdeek Najaf hai koi Haidar ko bulale`,
			APSIHUS24:`Pada hai jalti zamee'n par Hussain ka Laasha`,
			APSIHUS25:`Pohncho Najaf se Karbobala Ya Ali Madad`,
			APSIHUS26:`Sab khoon ke pyaase the Moula ne jidhar Dekha`,
			APSIHUS27:`Shabbir Baharhaal Tera Naam Rahega`,
			APSIHUS28:`Shabbir kahan hai Mera Shabbir kahan hai`,
			APSIHUS29:`Sitam ke dasht me Zehra ka Laal Tanha hai`,
			APSIHUS30:`Sitamgaro Mera Bekas Hussain Pyasa Hai`,
			APSIHUS31:`Taqdeer badal jaaegi Zehra ki Dua le`,
			APSIHUS32:`Ya Hussainam Ya Hussainam Ya Hussain`,
			APSIHUS33:`zahra ki dua hai maatam ye`,
			APSIHUS34:`Zainab tadap rahi hai faryaad kar rahi hai`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shaam e Ghareebaan";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSG1:`Ab Aaye Ho Baba`,
			APSG2:`Jalti Huwi Zameen Pa Sarwar Hai Ya Ali`,
			APSG3:`Lut gaya Karbobala ke dasht me Zehra Ka Ghar`,
			APSG4:`Ya Ali Aaiye Zainab ko bachaane ke liye`,
			APSG5:`Zainab e Muztar Hai Tanha Ya Ali ab Aaiye`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Sakina (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSS1:`Abid Utha Rahe Hain Apni Bahan ka Laasha`,
			APSS2:`Aye Hussain ki pyaari aye Sakina jaan Bibi`,
			APSS3:`Jald Aaiye Baba`,
			APSS4:`Mazloom Meri Bachchi kaise ho Dafn Tera`,
			APSS5:`Qaid khaane me ye tha Baali Sakina ka Bayaa'n`,
			APSS6:`Shaam ke zindaan me Bekas Sakina Margayi`,
			APSS7:`Ye neend khaak pa kaisi Utho Utho Bibi`,
			APSS8:`Zindaa ke andhere me Sakina ka hai Maatam`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Sajjad (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSISJD1:`Abid ki nigaho'n me har karb ka manzar hai`,
			APSISJD2:`Kya zulm the Farzande Hussain Ibne Ali par`,
			APSISJD3:`Zanjeer me jakde huwe Beemaar ka Maatam`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shaam";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSHM1:`Aseer Hoke Chali Hu Salam Lo Baba`,
			APSHM2:`Berida Shaam ke darbar me Jana Zainab`,
			APSHM3:`Berida Zainab Khadi hai shaam ka darbar hai`,
			APSHM4:`Qaafela Gharibo'n ka Qaid hoke jaata hai`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Shahzadi Zainab (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSS1:`Aseere Fauje sitam Qaidiye Mehan Zainab`,
			APSS2:`Aye Hussaine Bekas ki Ghamzada Bahan Zainab`,
			APSS3:`Zainab jigar figaar jaha'n se guzar gayi`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Arbayeen";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSARB1:`Aabaad Ghar Hussain ka Viraan Hogaya`,
			APSARB2:`Abbas Zainab Aayi hai karne ko Arbaeen`,
			APSARB3:`Allah nigehbaan watan jaati hu Bhai`,
			APSARB4:`Arbaeen karna hai Shaahe Karbalaai ka`,
			APSARB5:`Hai Karbala ke bann me Ghareebon ka Arbaeen`,
			APSARB6:`Karna hai Fatima ke bhare ghar ka Arbaeen`,
			APSARB7:`Shabbir ka Chehlum hai`,
			APSARB8:`Zainab Lipat Gayi hai Mazaare Hussain se`,
			APSARB9:`Zainab Manane Aayi Hai Bhai ka Arbaeen`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Wapasi e Ahle Haram";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSWPS1:`Amma Teri Kamaai jangal me lut gayi hai`,
			APSWPS2:`Amma Tumhara lutgaya jangal me sara Ghar`,
			APSWPS3:`Dekh Madine kya kya yaadein saath me Apne laayi hai Zainab`,
			APSWPS4:`Kya dekhti hai Sughra Zainab ke aansuo me`,
			APSWPS5:`Lut gayi Karbobala me Teri Duniya Amma`,
			APSWPS6:`Maa ki Qabr par Zainab karti thi Fugha Amma`,
			APSWPS7:`Pardes me barbaad huwa Mera Bhara Ghar`,
			APSWPS8:`Ye boli Beti ba hasrat Salam Lo Amma`,
			APSWPS9:`Zainab Madine jaati hai kya kya liye huwe`,
			APSWPS10:`Zainab se Karbala ka zara maajra suno`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}


		var year  = "Alvida";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSALW1:`Aye Fatima ke Lal Tujhe aakhri Salaam`,
			APSALW2:`Aye Noor e Ain e Fatima Zehra Na Jaaiye`,
			APSALW3:`Aye Shahe Do jahan AlWida AlWida`,
			APSALW4:`Wa Hasrata Hussaina`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}

		var year  = "Imam Raza (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			APSIRG1:`Aaj hai Khuraasa me Ik Ghareeb ka Maatam`,
			APSIRG2:`Gham Shaahe Khurasa ka zamane me hai barpa Maatam hai Raza ka`,
			APSIRG3:`Sar pa ab Shaahe Khurasaan ka saya na raha`,


		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

		}
	}
	else if(reciter == "Anjuman e Aon o Mohd"){

		var year  = "Aon o Mohd (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANM1:`Ye Aun O Mohammad Ki Hai Aza`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Ali Asghar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMAS1:`Haye Asghar Wawaila Haye Asghar Wawaila`,
			ANMAS2:`Maa Keh Rahi Thi Rokar Aye Jhule Wale Asghar`,
			ANMAS3:`Nanha Mera Asghar Kaha Gaya`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		
		var year  = "Ali Akbar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMAK1:`Di sada shaahe zamaan margaya akbar jawan`,
			ANMAK2:`Mera Kadiyal Jawaan Beta Kaha Hai`,
			ANMAK3:`Shahedeen Bayn Karte The Mere Beta Ali Akbar`,
			ANMAK4:`Veer Akbar Veer Akbar`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		
		var year  = "Shahzade Qasim (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMSQ:`Paamal Hasan Ka Laal Hua`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Moula Abbas (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMMA1:`Alam Abbas E Ghaazi Ka`,
			ANMMA2:`Utho Kafile Hijab E Zainab`,
			ANMMA3:`ya abbas ya abbas dilbare Zehra ya Abbas`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}


		var year  = "Imam Hussain (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMIH1:`Karbobala Ke Dasht Me Kia Kia Hua Aashur Ko`,
			ANMIH2:`Karo Matam Shaheedo Ka`,
			ANMIH3:`Pyaas Ne Islam Ke Parcham Ko Oocha Kardiya`,
			ANMIH4:`sar Kat Gaya Hussain Ka Zahra Ke Samne`,
			ANMIH5:`Sehra e atash may zehra ka pisar hai`,
			ANMIH6:`Shah Zaadi Fatima Maa Nansa Hussaina`,
			ANMIH7:`Sibte Rasul Ka Gham Momin Ka Aasra Hai`,
			ANMIH8:`Tanha Hai Ab Hussain Alamdar Bhi Nahi`,
			ANMIH9:`Ya Hussain Ya Hussain`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		
		var year  = "Shaame Gharibaa";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMSG:`Shaam E Gham Shaam E Alam`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Shahzadi Sakina (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMSS1:`sakina naaz parwar qaid khane may rasan basta`,
			ANMSS2:`Sakina par musibat ki ghadi hai`,
			ANMSS3:`Thi Baali Sakina Ki Fugaa Baadile Muztar Baba Ho`,
			ANMSS4:`Ya Ali Kehne Pe Zaalim Ne Tamache Maare`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Imam Sajjad (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMIS1:`Islam bachaya hai sajjad ne zainab ne`,
			ANMIS2:`khoon Ro Rahi Hai Zainab beemar Ghamzada Hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}


		var year  = "Arbayeen";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMAR1:`Chehlum Apne Bhai Ka`,
			ANMAR2:`Chehlum karne aayi hoon Ay Mere Ghazi Abbas`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Shahzadi Zainab (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMSZ1:`Islam bachaya hai sajjad ne zainab ne`,
			ANMSZ2:`khoon Ro Rahi Hai Zainab beemar Ghamzada Hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Shahzadi Sughra (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ANMSG1:`Baba Ke Liye Roti Hai Yu Fatima Sughra suna hai madina`,
			ANMSG2:`Bohot Yaad Aati Hai Beemar Sughra`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

	}
	else if(reciter == "Anjuman e Shaidae Ali Asghar"){

		var year  = "Shaidae Ali Asghar";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASA1:`Hum Shah Ke Azadaraan Shaydaye Ali Asghar`,
			ASA2:`Kya Tera Muqaddar Hai Shaidae Ali Asghar`,
			ASA3:`Pucho Na Haal e Karbala (Title)`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Aaghaaz e Moharram";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASA1:`Aye Chand Moharram Ke Tu Badli Me Chala Ja`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Shahzadi Sughra (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASASSG1:`Ho Kaha bhayya mere aye Ali Akbar`,
			ASASSG2:`Sugra Watan Mein Roti Hai Jhula Jhula Ne Ke Liye`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Aon o Mohd (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAAM1:`Zainab Tumahare Bacche Margaye`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		

		var year  = "Ali Asghar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAAS1:`Ah asghar ah asghar`,
			ASAAS2:`Amma ke dulaare aa asghar mere pyaare aa`,
			ASAAS3:`Boond Pani Bhi Mayyasar Na Hua Asghar Ko`,
			ASAAS4:`Hurmula Zulm Na Kar`,
			ASAAS5:`Kis tarah jee paungi mai tujhko pyaasa dekhkar`,
			ASAAS6:`Masoom Asghar Masoom Asghar`,
			ASAAS7:`Roro Ke Kaha Maa Ne Jhula Main Jhulaoungi`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Ali Akbar (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAAK1:`Akber Ali Akbar Haaye Akbar Ali Akbar`,
			ASAAK2:`Barchi Se Huwa Tukde Akbar Ka Jigar Moula`,
			ASAAK3:`Jaate Ho Ali Akbar Jaate Ho Ali Akbar`,
			ASAAK4:`Khoon Akbar Ka Kaleja Hogaya`,
			ASAAK5:`Laila Ka Laal Khoon Me Sab Laal Hogaya`,
			ASAAK6:`Maa Sadqe Maa Wari Akber Tum Na Aaye`,
			ASAAK7:`Tasweere Mohammed Hai Laila Ki Kamayi Hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Shahzade Qasim (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASASQ1:`Ab Jaraha Hai Dulha`,
			ASASQ2:`Dekhkar laash Qasim ki mustafa roye`,
			ASASQ3:`Haye Mere Qasim Haye Qasim`,
			ASASQ4:`Karbobala ka Dulha Pamaal hogaya hai`,
			ASASQ5:`Mera Qasim Na Raha`,
			ASASQ6:`Zulm Huwa Ye Kaisa Qasim`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Moula Abbas (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAMA1:`Aao Abbas madad karne ko aao bhayya`,
			ASAMA2:`Abbas kaha ho Abbas Kaha ho`,
			ASAMA3:`Abbas Mere Bhai Zainab ki sada thi`,
			ASAMA4:`Abbas Nahi Hai`,
			ASAMA5:`Chacha Tum Yaad Aate Ho`,
			ASAMA6:`Haye Ghazi Alambardar`,
			ASAMA7:`Lashkare shah Ke Alamdar`,
			ASAMA8:`Le Chala Mashq o Alam Gazi Jo Darya Ki Taraf`,
			ASAMA9:`Nouha Tha Ya Zainab Ka Abbas Abbas`,
			ASAMA10:`Tuta Pyasoun Ka Sahara Hai Saqqa Gaya Mara`,
			ASAMA11:`Ummul Bani Ka Dilbar Kaise Gira Zameen Par`,
			ASAMA12:`Zainab Ki Sada Thi Mere Bhai Mere Abbas`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Shabe Ashoor";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASASA1:`Shabe Ashoor Ayee Hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Imam Hussain (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAIH1:`Aye Hussian Mere Jaan`,
			ASAIH2:`Deti Hai Zehra Sada Nainawa Ke Ban Main`,
			ASAIH3:`Ek Bibi Ro Rahi Hai Ek Bibi Ro Rahi Hai`,
			ASAIH4:`Ek Maa Ki Ye Sada Hai Mera Laal Beqatha Hai`,
			ASAIH5:`Ghar Ko Lutakar Deen Bachana`,
			ASAIH6:`Haye Hussaina Pyase Hussaina`,
			ASAIH7:`Inallaha Ma-Sabereen Inallaha Ma-Sabereen`,
			ASAIH8:`Karbala Ke Ban Mei Kaisi Hai Maizbani`,
			ASAIH9:`Karbala ki ye sada hai lailaha illallah`,
			ASAIH10:`Maali Ameer Siwal Hussain`,
			ASAIH11:`Mere Bhayya Hussain`,
			ASAIH12:`Na Raha Koyi Mera Chahane Wala Zainab`,
			ASAIH13:`Tadap ke maa ne yeh Kaha`,
			ASAIH14:`Ya Hussian Ya Hussian Marhaba Ya Hussian`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Shahzadi Sakina (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASASS1:`Bano ne sada de ke na tadpao sakina`,
			ASASS2:`Bolo Baba Mere Kab Aaoge`,
			ASASS3:`Khagaye Shaam Ke Zindaa Main Andhere Baba`,
			ASASS4:`Mazloom Sakina Masoom  Sakina`,
			ASASS5:`Ro kar sakina kahete thi zindane sham me`,
			ASASS6:`Roke Kehti thi sakina mere baba ho kaha`,
			ASASS7:`Sakina Sojao Sakina Sojao`,
			ASASS8:`Tha Sakina Ka Ye Nouha Mere Baba Baba`,
			ASASS9:`Yahan se Chaliye Phupi Jaan Abhi Savera Hai`,
			ASASS10:`Zindaan ke andhere me ye kehti thi sakina`,
			ASASS11:`Zulm Hai Andera Hai Qaid Me Sakina Hai`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Imam Sajjad (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAIS1:`Abid Ki shahadat ka matam hai azadaaro`,
			ASAIS2:`Bimar Ka Matam Hai Bimar Ka Matam Hai`,
			ASAIS3:`Bimar Nainawa Se Is tarha Ja Raha Hai`,
			ASAIS4:`Hai Qaid Abide Bimar Kya Qayamat Hai`,
			ASAIS5:`Haye Bemar Ko Zanjeer Pinathe Hai Aadu`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Shahzadi Zainab (sa)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASASZ1:`Aye Ghairat e Maryam Tera Bazar Me Jana`,
			ASASZ2:`Be Parda Zainab Hai`,
			ASASZ3:`Salle ala zainab sabr tera Zainab`,
			ASASZ4:`Sar Khule kis tarah darbaar me jaaye zainab`,
			ASASZ5:`Tanha Zainab Allahu Akbar`,
			ASASZ6:`Ya Zainab Ya Zainab`,
			ASASZ7:`Zainab ko qaid qaane me jab Hind ne dekha`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Arbayeen";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAAR1:`Arbayen Hai Jo Tera`,
			ASAAR2:`Roke Zainab Ne Kaha Aagaya Chelum Tera`,
			ASAAR3:`Ye Chehlum Ho Raha Hai Ye Chehlum Ho Raha Hai`,
			ASAAR4:`Zainab Gareeb Karti Hai Chelum Hussain Ka`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Wapasi e Ahle Haram";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAWP1:`Amma mai aayi hoon watan`,
			ASAWP2:`Amma Teri Duhai Amma Teri Duhai`,
			ASAWP3:`Ja Raha Hai Watan Ye Loota Qafila`,
			ASAWP4:`Jaa raha hai watan ye luta qafela`,
			ASAWP5:`Lut Gaya Zainab Ka Kunba Nana Jaan Pardes Me`,
			ASAWP6:`Mai Watan Na Jaongi Mai Watan Na Jaongi`,
			ASAWP7:`Sughra Sughra Zainab Ye Aayi Sughra`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Alweda";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAALW1:`Aao Hum Kare Karbal Ke Pyaso Ko Ruksat Ka Salam`,
			ASAALW2:`Alweeda Alweeda jaane khairul bashar`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		
		var year  = "Imam Raza (as)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAIM1:`Zahre Dagha Shaheed Imame Raza Huwa`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year  = "Imam Mehdi (ajtf)";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={

			ASAIM1:`Karbala ka lene inteqaam kijiye zahoor`,
		}
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}


	}
	else if(reciter == "Naaseraan e Aza"){
		var year = "Anjuman";
		var mirnoha= {
			n4:"Ay naserane Aza tumho fatima ki duaa",
			n3:"Alajal Alajal Alajal",
		}


		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Moula Ali (as)";
			var mirnoha= {
				n13:"Hyder ke janaze pe tha Hasnain ka nouha",
				n33:"shabbar utharahe hai hyder ka janaza",
				n30:"Zainab yateem hogaye Hyder guzar gaye",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

		var year = "Shahzadi Fatima (sa)";
			var mirnoha= {
				n10:"Haaye Fatima Zehra", 
				n27:"Ya Rab Yeh Fatima Pe hai Kaisa Sitam Hua",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

		var year = "Janaab e Muslim (as)";
			var mirnoha= {
				n17:"Kya sitam muslime bekas pa hua koofe me",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

		var year = "Aaghaaz e Moharram";
			var mirnoha= {
				n1:"Aaya jo karbala me mohammed ka gharaana",
				n5:"Azaae shaah ke aaye zamaane",
				n22:"Nusrate haq ke liye karbala me aaye Hussain",
				n29:"Ye maahe moharram hai mazloom ka maatam hai",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

		var year = "Aon o Mohd (as)";
			var mirnoha= {
				n20:"marhaba auno mohammed",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

		var year = "Ali Asghar (as)";
			var mirnoha= {
				n6:"Bano ke bain the  ali asghar kidhar",
				n32:"Margaya asghar mera aur alqama",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

		var year = "Ali Akbar (as)";
			var mirnoha= {
				n14:"Jawaan bete ka lasha uthake laaye hussain",
				n15:"hussain kehte hai rokar mere ali akbar"
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Shahzade Qasim (as)";
			var mirnoha= {
				n23:"Qasim ko jab hussain ne dulha",
				n24:"karbobala ke ban me qasim bana hai dulha"
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

		var year = "Moula Abbas (as)";
			var mirnoha= {
				n2:"Ae ghaazi mere bhayya abbas", 
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Imam Hussain (as)";
			var mirnoha= {
				n12:"Hussain imaam hussain", 
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Shahzadi Sakina (sa)";
			var mirnoha= {
				n21:"Mere baba aao", 
				n16:"Kya cheez yatimi hai poocho ye sakina se",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Imam Sajjad (as)";
			var mirnoha= {
				n28:"Ya syede sajjad",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Shahzadi Zainab (sa)";
			var mirnoha= {
				n28:"berida hai ye safar dushwaar zainab kya kare",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
			
		var year = "Arbayeen";
			var mirnoha= {
				n7:"Bhaiya Zainab aayi hai",
				 n8:"chehlum manaane qafela le aayi hai Zainab" ,
				 n31:"arbayeen hai tera mere bhaya husain",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

		var year = "Wapasi e Ahle Haram";
			var mirnoha= {
				n18:"Madine aayi hai Zainab",
				n19:"Mai ummul masaaib hu naana ke madine",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Alweda";
			var mirnoha= {
				n9:"Fatima ke dil  ke chain  alvida",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Imam Hassan (as)";
			var mirnoha= {
				 n25:"Ya hassan ya hassan",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

			
		var year = "Imam Raza (as)";
			var mirnoha= {
				 n24:"Sultaan Raza",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Imam Jaffer (as)";
			var mirnoha= {
				n26:"ya Jaffere sadiq",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}
		var year = "Imam Askari (as)";
			var mirnoha= {
				n11:"Haaye hassan askari",
			}
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
			}

	}
	else if(reciter == "Karwan e Aza"){
		var year = "Anjuman";
		var mirnoha= {
			KWNANJ1:`MATAMI ANJUMAN KARWAN E AZA`,
			KWNANJ2:`TA HASR KARWAN-E-AZA GHAM MANAINGE`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Aghaaze Aza";
		var mirnoha= {
			KWNAGZ1:`Aaye Alhe Aza Aaya Moharram Ka Mahina`,
			KWNAGZ2:`Chalo Habeeb Tumhe Karbala Bulati Hai`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Sugra (s.a)";
		var mirnoha= {
			KWNSSG1:`Sughra Ne khat Me Likha Tanha Na jee Sakungi`,
			KWNSSG2:`Yun Yaad Na Kar Ghar Me Sughra Ali Akber Ku`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Aon o Mohd (a.s)";
		var mirnoha= {
			KWNAOM1:`BAIN KARKE MAA HAAYE MERI JAAN AUN-O-MOHD`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Ali Asghar (a.s)";
		var mirnoha= {
			KWNASG1:`Di Sakina Ne Sada Aaye Mere Bhaiya Asghar`,
			KWNASG2:`Kehti Thi Roke Madar Aajou Run Se Asghar`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Ali Akbar (a.s)";
		var mirnoha= {
			KWNAKB1:`Aahista Chalo Beta Akber Yabunaiya Mehlan Mehlan`,
			KWNAKB2:`Umme Laila Yeh Kheti Thi Rokar Meri Duniya Ujaadh Gayi Akber`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzade Qasim (a.s)";
		var mirnoha= {
			KWNSHQ1:`Apni Aaba Zameen Par Sarwar Bicharahe Hai`,
			KWNSHQ2:`KUBRA KO AJAB RAAT YEH KHISMAT NE DIKHAYI`,
			KWNSHQ3:`Laahu Me Dooba Hai Sehra Ajeeb Manzar Hai`,
			KWNSHQ4:`Shaakh Se Ek Phool Tutha Tukdhe Tukdhe Hogaya`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Moula Abbas (a.s)";
		var mirnoha= {
			KWNIMH1:`Abbas Main Tanha Hu`,
			KWNIMH2:`HAAYE GAAZI BHAI GAAZI`,
			KWNIMH3:`Haaye Kamar Todh Gaye Bhai Hume Chodhe Gaye`,
			KWNIMH4:`SABSE OUCHA TERA ALAM ABBAS`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shabe Ashoor";
		var mirnoha= {
			KWNSBA1:`Udaas Udaas Hai Sab Bibiyan Shab-e-Aashoor`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Hussain (a.s)";
		var mirnoha= {
			KWNIMH1:`Aale Nabi Pe Aada Yeh Zulm Dharahe Hai`,
			KWNIMH2:`Aaye Nafs-e-Mutmayeena Palat Aa Meri Tarafka`,
			KWNIMH3:`Aaye Qateel-e-Karbala Ya Hussain Ya Hussain`,
			KWNIMH4:`Amma Meri Gardan Se Hathou Ku Hatalo`,
			KWNIMH5:`HAI SHOR JIN-O-BASHAR ME PAIHAM MALAK BHI AANSU BAHA RAHE HAI`,
			KWNIMH6:`Hussain Deen-e-Paiyambar Bacha Ke Dum Lenge`,
			KWNIMH7:`Maidan-E-Karbala Me Yeh Zainab Ke Bain Hai`,
			KWNIMH8:`Quran Lahu Me Doob Gaya`,
			KWNIMH9:`Sattar Khadam Se Zainab Bhai Ku Dekhti Hai`,
			KWNIMH10:`Umme Salma Hussain Maragaya`,
			KWNIMH11:`Ya Fatima Zehra Ya Fatima Zehra`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Sajjad (a.s)";
		var mirnoha= {
			KWNIMS1:`Sajjad Dil Sambhalo Bazar-e-Shaam Aaya`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Bazaar";
		var mirnoha= {
			KWNBZR1:`Sar Barehna Fatima Ki Betiyan Roti Rahi`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}


		var year = "Shahzadi Sakina (s.a)";
		var mirnoha= {
			KWNSHS1:`Ek Diya Koi Jalade Shaam Ke Zindan Me`,
			KWNSHS2:`Zinda Me Tha Sakina Ka Nouha Mere Baba`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Zainab (s.a)";
		var mirnoha= {
			KWNSZB1:`HAAYE SYEDA ZAINAB`,
			KWNSZB2:`JAALAYI SHAM E AZA AYATOU KE SAAYE ME`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Raza (a.s)";
		var mirnoha= {
			KWNIMR1:`HAAYE IMAM-E-RAZA HAAYE IMAM-E-RAZA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Arbayeen";
		var mirnoha= {
			KWNARB1:`AAYI HU CHELUM MANANE APKA AYE BHAI JAAN`,
			KWNARB2:`AKBER TERA CHEHLM HOTA HAI`,
			KWNARB3:`Mazloom-e-Karbala Ka Chehlum Hai Karbala Me`,
			KWNARB4:`ZAINAB KI TAMANNA HAI CHELUM HU BAHATTAR KA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Wapasi";
		var mirnoha= {
			KWNWPS1:`Kis Tarha Madina Jaaye Hum Sakina`,
			KWNWPS2:`Luthkar Madina Zainab Tashreef Larahi Hai`,
			KWNWPS3:`MAIN KYA BATOU KE KYA KYA GUZAR GAYI AMMA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		
	}
	else if(reciter == "Sipahe Hussaini"){
		var year = "Ali Akbar (as)";
		var mirnoha= {
			SPHAKB1:`Ankhon me Andhera  hai aaja Ali Akbar`,
			SPHAKB2:`Dam e Akbar Badi Mushkil Say Nikla`,
			SPHAKB3:`Barchi Ki Anee Rehgayi Hai Seene Me Baba`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzade Qasim (as)";
		var mirnoha= {
			SPHSHQ1:`Madad ko Ayiye ya shahe karbala meri`,
			SPHSHQ2:`Kubra bani hai dulhan  Qasim bana hai dulha`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Moula Abbas";
		var mirnoha= {
			SPHSABS1:`Bedast jari ran me ghode se gira baba`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		
		var year = "Imam Hussain (as)";
		var mirnoha= {
			SPHIMH1:`HUSSAIN KE AANSOO`,
			SPHIMH2:`Haaye Hussaina Haaye Hussaina`,
			SPHIMH3:`Tanhaa Reh gayaa Hussain`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Sakina (sa)";
		var mirnoha= {
			SPHSHQ1:`Shimr ne johi khainchi baliya sakina ki`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Zainab (sa)";
		var mirnoha= {
			SPHSHZ1:`Koi Zainab ka aasra na raha`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Arbayeen";
		var mirnoha= {
			SPHARB1:`Karbobala me chehlum manane aayi hai Zainab`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		
	}
	else if(reciter == "Groh e Miransha"){
		var year = "Azadari";
		var mirnoha= {
			GMRMAZD1:`sada karenge ghame shahe karbala barpa`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Matamdarane Ali Akbar"){
		var year = "Anjuman";
		var mirnoha= {
			MTAANJ:`HUM AKBER E JARRAR KE MATAM ME JIYEINGEY`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Tablighi Nouhe";
		var mirnoha= {
			MTAAZD1:`DIL ME RAHE KARBOBALA`,
			MTAAZD2:`ZEHRA TERI DUA HAI YE MATAM HUSSAIN KA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Hazrate Muslim a.s";
		var mirnoha= {
			MTAMSL:`NARGHE MAI AB HAI MUSLIM E NASHAAD YA HUSSAIN`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Pisaraane Muslim a.s";
		var mirnoha= {
			MTAPSM1:`KARTE HAIN SHAHADAT KA MASOOM SAFAR DONO.`,
			MTAPSM2:`MUSLIM KE LAADLON PE HAI UFTAAD YA HUSSAIN`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Sughra s.a";
		var mirnoha= {
			MTASUG1:`KEHTI HAI YAHI SUGHRA BE QARAR HOON BABA`,
			MTASUG2:`SADA YEH DETI HAI SUGHRA KE AOU AYE BABA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzade Aon o Mohd";
		var mirnoha= {
			MTAAOM1:`AYE MERE AOUN O MOHD`,
			MTAAOM2:`HOTA RAHEGA SHAAM O SAHER AOUN O MOHD KA MATAM`,
			MTAAOM3:`ZAINAB KE DULAAREY`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzade Ali Asghar a.s";
		var mirnoha= {
			MTAASG1:`AAJA ALI ASGHAR AAJA - AAJA DIL E MADAR AAJA`,
			MTAASG2:`ALI ASGHAR ALI ASGHAR ALI`,
			MTAASG3:`HAATOUN PE LAASHE ASGHAR LEKER CHALE HAI SARWAR`,
			MTAASG4:`HO SAKA NA AMBIYAA SE KAAM ASHGER KAR GAYA`,
			MTAASG5:`KEHTI HAI RORO KAR YEH MAA AAYE MERA ASGHAR BE ZUBAAN`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzade Ali Akbar a.s";
		var mirnoha= {
			MTAAKB1:`AASHOOR KI SEHAR HAI DEYAY HAIN AZAAN AKBAR`,
			MTAAKB2:`AKBAR KE JANAZE PA YE FARMATE THAY SARWAR`,
			MTAAKB3:`AYE JAWAAN ALI AKBER AYE HASEEN ALI AKBER`,
			MTAAKB4:`Azaa'n Ke Goonjte Hi Yaad Aajaati Hai Akber Ki`,
			MTAAKB5:`KEHTAY HAIN ROOKAY SARWAR, AAWAZ DO AYE AKBAR`,
			MTAAKB6:`LAILA KA LAAL RAN MAY TADAPTA HAI QAAK PAR`,
			MTAAKB7:`RAN SE SHEH KI SADA YEH AAEE HAI`,
			MTAAKB8:`TERI AZAAN AKBAR`,
			MTAAKB9:`UMME LAILA KA THA NOUHA MERE PYARE AKBAR`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzade Qasim a.s";
		var mirnoha= {
			MTAQSM1:`BARAAT AARAHI HAI IBNE HASAN KI RAN SE`,
			MTAQSM2:`FARWA KI HASRATOU KA AATA HAI RAN SE LASHA`,
			MTAQSM3:`HOGAYA TUKDEY BADAN NOUSHA KA`,
			MTAQSM4:`JEEENE KE ZAMANE ME QASIM MAIDAAN ME MARNE JAATEY HAI`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Moula Abbas a.s";
		var mirnoha= {
			MTAABS1:`ABBAS (A.S) ABBAS (A.S) ABBAS (A.S)`,
			MTAABS2:`ABBAS MERE BHAI`,
			MTAABS3:`ABBAS NAHI AAYE ABBAS NAHI AAYE`,
			MTAABS4:`DASHTE GURBAT MAY NA YUNN CHHOD KE JAO ABBAS`,
			MTAABS5:`HAYE ABBAS MERA HAYE ALAMDAR MERA`,
			MTAABS6:`HO TUM KAHAN ABBAS`,
			MTAABS7:`KAB LOUT KE AMMU AOUGE`,
			MTAABS8:`KHETEY THEY HARAM ROOKER SAQQA E SAKINA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shabe Ashoor";
		var mirnoha= {
			MTASHA1:`YA RAB NA HO IS SHAB KI SAHER`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Hussain a.s";
		var mirnoha= {
			MTAHUS1:`AASHOOR KO NOUHA THA YAHI BINTE ALI KA`,
			MTAHUS2:`BA-CHAANE DEEN KO SARWAR GALA KATATEY HAI`,
			MTAHUS3:`GALE PE TEGH HAI SAJDE ME SURQROO HAI HUSSAIN`,
			MTAHUS4:`GOONJ TI HAI ZAINAB KI SADA KARBOBALA KE MAIDAN MEIN`,
			MTAHUS5:`HAA -YE HUSSAIN HAA-YE HUSSAIN HAA-YE HUSSAINA`,
			MTAHUS6:`KARBAL YE TERE BAN ME KISKA YE GHAR LOOTA HAI`,
			MTAHUS7:`LAAHO LAAHO HAI ZAMEEN PER HUSSAIN KA LASHA`,
			MTAHUS8:`MOULA HUSSAIN A.S - YA SAARALLAH WABNA SAARII`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shaame Gharibaa";
		var mirnoha= {
			MTASHG1:`AAO MADAD KO YA ALI`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Sakina s.a";
		var mirnoha= {
			MTASKN1:`ABBAS KA DIL DUQTAR E SHABBIR SAKINA`,
			MTASKN2:`AYE MERE BABA HUSSAIN AA JAAOO`,
			MTASKN3:`BANO KA THA BAYAN MERI BACHI GUZARGAYI`,
			MTASKN4:`THI YEHI SHAAM KE ZINDAA'N MEIN SAKINA KI FUGAA`,
			MTASKN5:`YE ROOKE KEHTI THI MAADAR SAKINA SOJAO`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		
		var year = "Shaam";
		var mirnoha= {
			MTASHM1:`HAAYE SHAAM HAAYE SHAAM HAAYE SHAAM`,
			MTASHM2:`parda duniya ko sikhane wali aayi bazaaron may zainab`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Moula Sajjad a.s";
		var mirnoha= {
			MTASJD1:`BAQER KE BAIN TEH MERE QHAMQUAAR BABA JAAN`,
			MTASJD2:`CHALA BIMAAR CHALA BIMAAR`,
			MTASJD3:`DIL SE KABHI NA SHAAM KE MANZER JUDAA HOVEY`,
			MTASJD4:`ISLAM KA MASIHA THA BIMAAR KHUDAYA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Arbayeen";
		var mirnoha= {
			MTAARB1:`ARBAYEEN KARNE AAYI HAI ZAINAB`,
			MTAARB2:`CHELUM KARE JAWAAN ALI AKBER KE MATAMI`,
			MTAARB3:`KARBALA MEIN CHELUM HAI NOUJAWAN AKBER KA.`,
			MTAARB4:`WAPAS MEIN CHALI AAEE HOON WADA HOVA PURA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Zainab s.a";
		var mirnoha= {
			MTAZNB1:`AAJ DUNIYA ME AZA ZAINAB E DILGEER SE HAI`,
			MTAZNB2:`HAMSHEER SHAHE DEEN KI DUNIYA SE JAARAHI HAI...`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Wapasi";
		var mirnoha= {
			MTAWPS1:`BOLI ZAINAB MAI AAYI HUNN AMMA`,
			MTAWPS2:`JAATI HAI NABI ZAADIYAN AB LUTT KE WATAN KO`,
			MTAWPS3:`LOOT KE AAYI HAI WATAN DIL KO SAMBHALE ZAINAB`,
			MTAWPS4:`UTTHO RASOOL ABID E BIMAAR AAYE HAIN`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}


		var year = "Alweda";
		var mirnoha= {
			
			MTAALW1:`ALVIDA MOULA HUSSAIN ALVIDA MOULA`,
			MTAALW2:`Haye ghareebul watan aye asiremehan`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}


		var year = "Rasool e khuda sws";
		var mirnoha= {
			MTARSL1:`PEETO SAR AZADAARO MUSTAFA KA MATAM HAI`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi e Kounain s.a";
		var mirnoha= {
			MTAFTM1:`PEHLU SHIKISHTA BIBI`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	
		var year = "Imam Ali a.s";
		var mirnoha= {
			MTAIMA1:`KUFE MEI HORAHA HAI MUSHKIL KUSHA KA MATAM`,
			MTAIMA2:`Matam Hai Dojahan May Mushkil Kusha Ali Ka.`,
			MTAIMA3:`SHOUR HAI YAHI BARPA QATL HOGAYE MOULA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Hassan a.s";
		var mirnoha= {
			MTAHAS:`SHABBAR KA JANAZA JAATA HAIN AUR TEER LAYEEN BARSAAT E HAIN`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Baqar a.s";
		var mirnoha= {
			MTAIMB:`YA IMAM E MOHAMMED E BAQER`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Moosa e Kazim a.s";
		var mirnoha= {
			MTAIMK1:`KAZIM KE GHAM ME MOMIN AANSOO BAHARAHE HAIN.`,
			MTAIMK2:`PURSA QUBOOL KARLO MOULA IMAM E KAZIM`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Raza a.s";
		var mirnoha= {
			MTAIMR1:`HUWE SHAHEED GHAREEB UL WATAN IMAM E RAZA.`,
			MTAIMR2:`ROOKE HUMSHEEER NE KAHA BHAIYA`,
			MTAIMR3:`SULTAN E DEEN SHAHE KHURASAA GUZARGAYA`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Naqi a.s";
		var mirnoha= {
			MTAIMN1:`GHAMGEEN HAI JAHAAN SHAHADAT NAQI KI HAIN`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam e Zamana ajtf";
		var mirnoha= {
			MTAIMZ:`AYE WAARIS E SHABBIR AB AAJAO QUDARA`,
		}
		
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Grohe Shaidae Hussain(a.s)"){
		var year = "Anjuman";
		var mirnoha= {
			GSHANJ1:`Aaqa Hussain Jaanam Moula Hussain Jaanam`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Aon o Mohd (as)";
		var mirnoha= {
			GSHAOM1:`Kehte the aale Aba Margaye Zainab ke laal`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Ali Asghar (as)";
		var mirnoha= {
			GSHASG1:`Nau Gul E Gulzar E Haram Aaye Ali Asgher Aziz E Maadar`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Ali Akbar (as)";
		var mirnoha= {
			GSHAKB1:`Noujawaan Akbare Man`,
			GSHAKB2:`Noujawaan Akbare Man aarame jaan akbare man`,
			GSHAKB3:`Waaye Ali Ali Ali Akbaram`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzade Qasim (as)";
		var mirnoha= {
			GSHSHQ1:`Aah Yejha sam Yabuni`,
			GSHSHQ2:`Ya waladi Ehjasami`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Moula Abbas (as)";
		var mirnoha= {
			GSHABS1:`Al Madad Abbas Abbas Al Madad`,
			GSHABS2:`Aye Alamdaare Hussain`,
			GSHABS3:`Aye Dure Darya e Najaf shere yazdaani`,
			GSHABS4:`Aye Khalafe buturaab khuwwate bazu e man`,
			GSHABS5:`Shahe Wafa Abul Fazl`,
			GSHABS6:`Waaye Waaye Ammu Ammu Alatash`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Hussain (as)";
		var mirnoha= {
			GSHIMH1:`Aayi Shumr E Pur Jor O Jafa Zalim Amman Az Tishnagi`,
			GSHIMH2:`Ahlebaiti wada ooni`,
			GSHIMH3:`Aye Shahinshaahe Zaman aah hussainan wa`,
			GSHIMH4:`Hussain Ibne Ali bin shahe deen aast`,
			GSHIMH5:`Hussainan waah Hussainan waah Hussaina`,
			GSHIMH6:`Imshab Shabe Matame Hussainast`,
			GSHIMH7:`Karbobala Noore doainam Kuja aast`,
			GSHIMH8:`Qatle Shahe Shahaanast wa musibata im shab`,
			GSHIMH9:`Seena e sibte nabi paar layeen wawaila`,
			GSHIMH10:`Wayi Hussain E Maan Noor E Do Aaina E Maan`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Sakina (sa)";
		var mirnoha= {
			GSHSHS1:`Aah Dile Daare Hussain Aye Azadaare Hussain`,
			GSHSHS2:`Aayi Falak Tasht Kuja O Sar E Shabbir Kuja`,
			GSHSHS3:`Aye Binte Hussain wa Sakina`,
			GSHSHS4:`Sakina Guft Dagh E Pidar Zaram`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Darbaar e Shaam";
		var mirnoha= {
			GSHDRB1:`Maan Ba Qurbaan E Hussain`,
			GSHDRB2:`Ya shere kaha ho aao darbaare yazeedi me haram hai`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Sajjad (as)";
		var mirnoha= {
			GSHSJD1:`Kehte the zainulleba haal hamaara na pooch`,
			GSHSJD2:`Ya Imam e Chaarveen`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Shahzadi Zainab (sa)";
		var mirnoha= {
			GSHZNB1:`Khwahare sibte nabi Jaan E Ali O Zehra`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Arbayeen";
		var mirnoha= {
			GSHARB1:`Arbayeen Asth Arbayeen Asth Aayi Khuda`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Imam Raza (as)";
		var mirnoha= {
			GSHIMR1:`Ya Ghareeb Ul Ghuraba`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Rasool e Khuda";
		var mirnoha= {
			GSHRSK1:`Hai Kaun O Makaan Mein Aaj Mataam`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		
		var year = "Wapasi e Ahle Haram";
		var mirnoha= {
			GSHWPS1:`Zainab e hazeene man khwahara khuda hafiz`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		var year = "Widaye Ayyam e Aza";
		var mirnoha= {
			GSHWID1:`Ibne Hyder Alweda shahe besar alweda`,
			GSHWID2:`Shabbir Khuda Hafiz Shabbir Khuda Hafiz`,
			GSHWID3:`Sibte Payambar Alweda`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}

		
	}
	else if(reciter == "Wafadarane Ghazi"){
		var year = "Anjuman";
		var mirnoha= {
			WFDGH1:`Hame kehti hai duniya wafadarane ghazi`,

			WFDGH2:`Pursa khabool kijiye shahzadiye kounain (title)`
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Aghaz e Aza";
		var mirnoha= {
			WFDGH1:`Farshe aza bichao ab majlis e aza hai`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Aon o Mohd";
		var mirnoha= {
			WFDGH1:`Aye Aon o mohd mere waade ko nibhaana`,
			WFDGH2:`Islam ke pyare Aon o Mohd`
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Ali Asghar as";
		var mirnoha= {
			WFDGH1:`Aye mere asghare jaani aaja`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Ali Akbar as";
		var mirnoha= {
			WFDGH1:`Akbar e mehroo ko dulha to bana lijiye hussain`,
			WFDGH2:`Akbar ke kaleje me sina rahgayi moula`,
			WFDGH3:`Sughra Haaye Sughra`
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Shahzade Qasim as";
		var mirnoha= {
			WFDGH1:`Aisa pamal koi ran me na dulha dekha`,
			WFDGH2:`Manzar lahu bhara hai maidane karbala hai`,
			WFDGH3:`Sada Hassan ki thi maidaa me jayiye Qasim`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Moula Abbas";
		var mirnoha= {
			WFDGH1:`Aye Abbas Aye Abbas`,
			WFDGH2:`Maqtal me sada dete the ye sarwar e aalam`,
			WFDGH3:`Shah kehte the meri aankh ke taare abbas`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Imam Hussain as";
		var mirnoha= {
			WFDGH1:`Haaye Hussain Haaye Hussain`,
			WFDGH2:`Haye hussain ab kya kare`,
			WFDGH3:`Hussain Kehte the zainab mujhe sawar karo`,
			WFDGH4:`Shahedeen ye ab farmaaye`,
			WFDGH5:`Waada apna nibhadiya sheh ne`
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Shahzadi Sakina";
		var mirnoha= {
			WFDGH1:`Sakina Aalame Gurbat hai`,
			WFDGH2:`Sare Hussain Sakina ki goud me aaja`,
			WFDGH3:`Ya rab koi masooma`,
			WFDGH4:`Zindaa ke andhere me matam hai sakina ka`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Moula sajjad";
		var mirnoha= {
			WFDGH1:`Abid ke sath Aaye aseerane karbala`,
			WFDGH2:`Gham koun jaane aapka aye Abid e muztar`,
			WFDGH3:`Lashae be gour pe Abid ka tha nouha baba`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Shahzadi Zainab";
		var mirnoha= {
			WFDGH1:`Afsos aj zainab e dilgeer margayi`,
			WFDGH2:`Bijliyaa girti thi qalbe zainab e dilgeer par`,
			WFDGH3:`Haaye bazar hai zainab hai khule sar hai`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Arbayeen";
		var mirnoha= {
			WFDGH1:`Chehlum hai shaheedo ka karbal ke biyabaan me`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Wapasi";
		var mirnoha= {
			WFDGH1:`Tadap ke turbat me shah ki mayyat`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Alweda";
		var mirnoha= {
			WFDGH1:`Alweda Alweda ya Hussain Alweda`,
			WFDGH2:`Alweda aye hussain`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Moula Ali";
		var mirnoha= {
			WFDGH1:`Aaj hai shere khuda moula Ali ka matam`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Moula Hassan as";
		var mirnoha= {
			WFDGH1:`Chaar su koun o makaa me wa hassan ki hai sada`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
	}
	else if(reciter == "Saqqae Haram"){
		var year = "Anjuman";
		var mirnoha= {
			ANSQH22N1:`Abbas ke matamdaar hai hum`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Shahzadi Sughra s.a";
		var mirnoha= {
			ANSQHSG1:`Bhayya Ali Akbar Bhayya Ali Akbar`,
			ANSQHSG2:`Mai jee nahi paungi baba`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Azadari";
		var mirnoha= {
			ANSQHAZD1:`Hussain Ibne Ali ka charcha`,
			ANSQHAZD2:`Karbobala ke manzar Allahu Akbar`,
			ANSQHAZD3:`Lut Gaya tera bhara ghar fatima`,
			ANSQHAZD4:`Matam karo shabbir ka`,
			ANSQHAZD5:`Pyaase ki aza ka jo tarafdaar nahi hai`,
			ANSQHAZD6:`Shabbir ka matam karna hai`,
			ANSQHAZD7:`WA HUSSAINA WA HUSSAINA`,
			ANSQHAZD8:`YA SAARALLAH YA SAARALLAH`,
			ANSQHAZD9:`Ye karbobala hai wawaila`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Janabe Habeeb";
		var mirnoha= {
			ANSQHJH1:`Mai Aa raha hoon moula`,
			ANSQHJH2:`Zara bhi deer na karna Habeeb aajao`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Aon o Mohd";
		var mirnoha= {
			ANSQHAM1:`Assalaam Aon o Mohd`,
			ANSQHAM2:`Maa Aon o Mohd ki hoon zainab hai mera naam`,
			ANSQHAM3:`Maa ki Jaan Aon o Mohd`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Ali Asghar";
		var mirnoha= {
			ANSQHASG1:`Ali Asghar Ali Asghar`,
			ANSQHASG2:`Jhoola hai khali tum ho kaha`,
			ANSQHASG3:`Mera Jhoole wala Asghar`,
			ANSQHASG4:`Na tadpo Asghare Jaani badi ghareeb hai maa`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Ali Akbar";
		var mirnoha= {
			ANSQHAKB1:`Abbas Yaad aaya Abbas Yaad aaya`,
			ANSQHAKB2:`Barchi jawaan ke dil me naya dar hai kargayi`,
			ANSQHAKB3:`Bole shabbir meri jaan Akbar`,
			ANSQHAKB4:`Dil ki nazro ne sada gham ke andhere dekhe`,
			ANSQHAKB5:`Haaye Noujawan Akbar Haaye Noujawan Akbar`,
			ANSQHAKB6:`Noore Nigahe sarwar kadyal jawan Akbar`,
			ANSQHAKB7:`Sabre Hussain Karbe jawaan dekhta raha`,
			ANSQHAKB8:`Shabbir pa ye kaisi khayamat ki ghadi hai`,
			ANSQHAKB9:`Yaad laila ko jawan bete ki tadpati hai`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Shahzade Qasim";
		var mirnoha= {
			ANSQHSQ1:`Hasan ke laal ka lasha bikhar gaya ran me`,
			ANSQHSQ2:`Pamaal hua qasime dilgeer ka lasha`,
			ANSQHSQ3:`Pamaal lashe qasim sarwar jo laye ran se`,
			ANSQHSQ4:`Pamaal ran me hogaya noushahe karbala`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Moula Abbas";
		var mirnoha= {
			ANSQHABS1:`Aajayiye Abbas aajayiye Abbas`,
			ANSQHABS2:`Aati hai ye khaimo se sada haye alamdaar`,
			ANSQHABS3:`Abbas kaha'n ho aajao`,
			ANSQHABS4:`Abbas ke lashe pa bayaa karte the sarwar`,
			ANSQHABS5:`Abbas tere bin mujhe dushwar hai jeena`,
			ANSQHABS6:`Aye jaane dile hydere karrar alamdaar`,
			ANSQHABS7:`Ek baar mujhe bhai to kehdo`,
			ANSQHABS8:`Haaye Husssain Haaye Abbas`,
			ANSQHABS9:`Jab sar pe laga gurz to Abbas pukaare`,
			ANSQHABS10:`Kaisa ye dardnaak hai manzar furaat par`,
			ANSQHABS11:`Paighaame Jari hai yahi`,
			ANSQHABS12:`Pyasa darya se gaya sheh ka sahara Abbas`,
			ANSQHABS13:`Sahil pa pada rehne de aaqa mera lasha`,
			ANSQHABS14:`Saqqae Haram sad wawaila`,
			ANSQHABS15:`Tashnagi bali sakina ki bhujao kaise`,
			ANSQHABS16:`Wawaila wawaila kehte the sarwar wawaila`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Shabe Ashoor";
		var mirnoha= {
			ANSQHSAS16:`Shabe Ashoor hai Zehra`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Ruqsati e Imam Hussain";
		var mirnoha= {
			ANSQHRQH1:`Aaqri baar kaleje se lagalo baba`,
			ANSQHRQH2:`Ab to seene pa mere soyega nanha Asghar`,
			ANSQHRQH3:`Rawana hote hain khaime se shah ran ke liye`,
			ANSQHRQH4:`Zainab tera Allah Nigehbaan rahega`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Imam Hussain a.s";
		var mirnoha= {
			ANSQHIMH1:`Aayiye ab karbala me hogaye tanha hussain`,
			ANSQHIMH2:`Abbas tera bhai hai maidan me tanha`,
			ANSQHIMH3:`Allah Allah Hussain ki ghurbat`,
			ANSQHIMH4:`Chala pyaase gale par kund khanjar`,
			ANSQHIMH5:`Haaye Hussain Haaye Hussain`,
			ANSQHIMH6:`Haaye mere mazloom hussain`,
			ANSQHIMH7:`Halmin nasir yansurna`,
			ANSQHIMH8:`Shadeed zulm se kaata gaya hussain ka sar`,
			ANSQHIMH9:`Zehra ka dulara pyaasa hai`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Shaam o Kufa";
		var mirnoha= {
			ANSQHSOK1:`Atthara bhayiyo ki bahen qaid hui hai`,
			ANSQHSOK2:`Dukhiya Zainab kisko pukaare`,
			ANSQHSOK3:`Mai hogayi tanha`,
			ANSQHSOK4:`Maqtal me roke dukhtare sarwar yahi kahi`,
			ANSQHSOK5:`Mere Abbas Aajao`,
			ANSQHSOK6:`Pada hai naher pa ghazi ka lasha`,
			ANSQHSOK7:`Ran se aajayiye ab humko bachane baba`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Moula Ali a.s";
		var mirnoha= {
			ANSQHMA1:`Moula Ali ke Gham me ye duniya hai sogwaar`,
			ANSQHMA2:`Moula hue shaheed khuda ke makaan me`,
			ANSQHMA3:`Safar jahaan se moulae kayenaat ka hai`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
			nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		}
		var year = "Imam Hassan as";
		var mirnoha= {
			ANSQHMH1:`Janaza bhai hassan ka utha rahe hain hussain`,
		}
		nouhaOption+="<h4>"+year+"</h4>";
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


