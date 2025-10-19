$(document).ready(function () {

	var reciter = "";
	$("#heading").html("<center>" + reciter + "</center>")
	var nouhaOption = "";


	var year = "Bibi Fatima (SA)";
	nouhaOption += "<div class=\"hidelist\" id=\"bfatima\">" + year + "</div>";
	nouhaOption += "<div  id=\"bfatimaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "bilqees paasbaan hai ye",
		n2: "BISTAR SE THARTHARA KE UTHEY THAM KAR ASAA",
		n3: "FARZANDOUN KO PHIR FATIMA ZEHRA NE BULAYA",
		n4: "KAHTI THI ROKE ZAINAB-E- NALAAN JAWAB DO",
		n5: "ROKE KEHTI THI FATEMA ZEHRA",
		n6: `Pidar ki yaad me roti thi Fatima Zehra`,
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	year = "Imam Ali (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"iiali\">" + year + "</div>";
	nouhaOption += "<div  id=\"iialiList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Aye hyderio Rahlate HYDER Ki Ye Shab Hai",
		n2: "AYE ROZEDAARO AAHO BUKA KE YE ROZ HAI",
		n3: "IMAAN KI JAAN KYA HAI MOHABBAT ALI KI HAI",
		n4: "WARID HUWI NAAGAAH SHAB-E ZARBATH-E HYDER",
		n5: "Momino ro o ke ye roze ghamo aafat hai",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Hz Muslim(as) aur pisaraan";
	nouhaOption += "<div class=\"hidelist\" id=\"hmuslim\">Hazrate Muslim (as)</div>";
	nouhaOption += "<div  id=\"hmuslimList\" style=\"display:none\">";
	var mirnoha = {
		n2: "INSAAN KELIYE MOUT HAE GHAM BEWATANI KA",
		n3: "MUSLIM PA LAEENOUN KI CHADAAI HAI SAHAR SE"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";


	nouhaOption += "<div class=\"hidelist\" id=\"pisaraanemuslim\">Hz. Pisaraane Muslim (as)</div>";
	nouhaOption += "<div  id=\"pisaraanemuslimList\" style=\"display:none\">";

	var mirnoha = {
		n1: "DARBAAR ME JAB KATKE YATIMOUN KE SAR AAE",
		n4: "PARDES ME MUSLIM KE YATIMOUN PA JAFAA HAI",
		n5: "QAID SE JAB PISARE MUSLIM-E BEPAR CHUTE"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Safare Imam Husain (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"safarehussain\">" + year + "</div>";
	nouhaOption += "<div  id=\"safarehussainList\" style=\"display:none\">";
	var mirnoha = {
		n1: "DASHT-E- GHURBAT ME WATAN SE SHAH-E- DEEN JAATE HAIN",
		n2: "GHAR SE JAB BAHRE SAFAR SYED-E- AALAM NIKLE"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Moharram(1-2-3)";
	nouhaOption += "<div class=\"hidelist\" id=\"123Moharram\">" + year + "</div>";
	nouhaOption += "<div  id=\"123MoharramList\" style=\"display:none\">";
	var mirnoha = {
		n1: "AYE MOMINO HUSSAIN SE MAQTAL QAREEB HAI",
		n2: "KISI BEEMAR NE KHAT APNE MASIHA KO LIKHA",
		n3: "MUSAFEROUN KI MADINE ME JAB RASEED AAI",
		n4: "RAN ME JAB SHEH KI TARAF SE HURR-E- DEENDAR AAYA"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Shahzade Aun o Mohd (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"saonmohd\">" + year + "</div>";
	nouhaOption += "<div  id=\"saonmohdList\" style=\"display:none\">";
	var mirnoha = {
		n1: "JAB ZAINAB-E- GHAREEB KE RAN ME PISAR LADE",
		n2: "YEH ZIKR ABHI THA KAY SADAA RONEY KI AAYI",
		n4: `Ummat pe pisar apne fida karti hai zainab`,
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Shahzade Ali Asghar (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"sasghar\">" + year + "</div>";
	nouhaOption += "<div  id=\"sasgharList\" style=\"display:none\">";
	var mirnoha = {
		n1: "BANO KE SHEER QHWAAR KO HAFTUM SE PYAAS HAE",
		n2: "BANO PICHLE PAHAR ASGHAR KE LIYE ROTI HAI",
		n3: "HAAE KIS BEKAS-O MAZLOOM KA YE MAATAM HAE",
		n4: "LO MOMINO QULAASA SUNO IS BAYAAN KA",
		n5: "RAN ME ABRU KAMAAN KI AAMAD HAE",
		n6: "RAWANA NAHR-E- LABAN KO JO SHEERQHWAR HUWA",
		n7: "Aaho kabaye Khurbaniye dawar hai hussain",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Shahzade Ali Akbar (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"sakbar\">" + year + "</div>";
	nouhaOption += "<div  id=\"sakbarList\" style=\"display:none\">";
	var mirnoha = {
		n1: "DASHTEY BALAA MEY GUMH ALI AKBAR KI LAASH HAI",
		n2: "KISI KA QAANA-E- UMMED BE CHARAAGH NA HO",
		n3: "MAALIK SE BHARE GHAR KE UJAD JAANE KO POOCHO",
		n4: "PIDAR KI MOUTH HAI MARNA JAWAAN BETE KA",
		n5: "RAN SE JAB KHAKE SINAAN AKBAR -E- ZISHAAN AAYE",
		n6: "ZAQMI SINAA SE RAN ME JO SHAH KA PISAR HUWA"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Shahzade Qasim (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"sqasim\">" + year + "</div>";
	nouhaOption += "<div  id=\"sqasimList\" style=\"display:none\">";
	var mirnoha = {
		n1: "NARGHA HAE DILBAR-E- HASSAN-E- SABZ POSH PAR",
		n2: "QASIM JO HAMSHABEEH-E- JANAAB-E- AMEER THA",
		n3: "ROTE THE DHAADE MAARKE NAAMOOSE SHAAHE DEE_N",
		n4: "ZAQMI JO RAN ME QAASIM-E- GUL PAHRAHAN HUWA"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Hazrat Abbas (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"habbas\">" + year + "</div>";
	nouhaOption += "<div  id=\"habbasList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Jab gire ran me baawafa abbas",
		n2: "JAB IBN-E- BUTURAAB BAROO-E- ZAMIN GIRAA",
		n3: "JAB IZN PAANI LAANE KA ABBAS KO MILAA",
		n4: "JAB QATL KIYA NAHAR PA SAQQA-E- HARAM KO",
		n5: "JAB SADR-E- ZEEN SE GIR PADE ABBAS-E- BAAWAFAA",
		n6: "JAB KAT GAYE DARIYA PE ALAMDAAR KE BAAZU",
		n7: `Ahle Haram ka moniso ghamqaar margaya`,
		n8: `Nikla wo sher khaime ke bahar alam liye`,
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Imam Hussain (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"ihussain\">" + year + "</div>";
	nouhaOption += "<div  id=\"ihussainList\" style=\"display:none\">";
	var mirnoha = {
		n1: "AADA SE KEH RAHE THE YE MOULA GHAREEB HOO_N",
		n2: "EK JAA_N LAAKH QAREEDAAR AYAAZAN BILLAH",
		n3: "IBN-E- ALI JO BAAGH-E- RISAALATH LUTAA CHUKA",
		n4: "JAB NOUJAWAAN PISAR SHAH-E- DEEN SE JUDA HUWA",
		n5: "JAB PARISHAAN HUWI MOULA KI JAMAA ATH RAN ME",
		n6: "JAB QAATEMA BA QAIR HUWA FOUJ-E SHAAM KA",
		n7: "NARGHA HUWA HUSSAIN PA JO FOUJ-E SHAAM KA",
		n8: "SAB THAM GAYE MAGAR NA THAMA SHIMR -E BAD SHIYUM",
		n9: "ZAQMI JO RAN ME FATEMA KA GULBADAN HUWA"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	year = "Ziyaarat Imam e Hussain a.s";
	nouhaOption += "<div class=\"hidelist\" id=\"zhussain\">" + year + "</div>";
	nouhaOption += "<div  id=\"zhussainList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Likhthe Hain Raaviyaan-E Jigar Souz Ye Kalaam"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";


	year = "Shehzadi Sakina (sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"ssakina\">" + year + "</div>";
	nouhaOption += "<div  id=\"ssakinaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "BAANO SE DAM BADAM YE SAKINA KA THA BAYAAN",
		n2: "BAANU KI AAJ KIS LIYE SUNSAAN GOD HAI",
		n3: "JAB DAAGHE BEKASI NA SAKINA UTHAA SAKI",
		n4: "KAHTHI THI RAN ME AAKE SAKINA JAWAAB DO",
		n5: "ROKAR KAHAA YEH MAA NEY KAY DILBAR JAWAAB DO",
		n6: "ZINDAAN ME MUQAYAAD HUWE JIS DAM HARAM-E SHAAH",
		n7: "allah kya muheeb yateemi ki raat hai",
		n: `Jab Gul hua charaaghe haram qaide shaam me`,
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";


	year = "Imam Sajjad (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"ssajjad\">" + year + "</div>";
	nouhaOption += "<div  id=\"ssajjadList\" style=\"display:none\">";

	var mirnoha = {
		n1: "QAID QAANE ME TALAATUM HAI KE HIND AATHI HAI",
		n2: "SHAHEED SE KOYI SHAMSHEER KA MAZAA POOCHE",
		n3: "SHAH-E WAALA NE SHAHAADAT KA SAR ANJAAM KIYAA"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	year = "Darbaar";
	nouhaOption += "<div class=\"hidelist\" id=\"darbar\">" + year + "</div>";
	nouhaOption += "<div  id=\"darbarList\" style=\"display:none\">";

	var mirnoha = {
		n1: "Aamad hai Ahlebaite  payambar ki shaam me",
		n2: "Jab lut ke karbala se aseere sitam chale",
		n3: "Jab mehfile yazeed me daaqil haram hue",
		n4: "Mehshar ki subha aaj numaya hai shaam me"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "Imam Raza (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"iraza\">" + year + "</div>";
	nouhaOption += "<div  id=\"irazaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "AAJ IMAAM-E- RAZA SHAHEED HUWE",
		n2: "MOMINOU AAJ QURASAAN ME HAI TAAZA MAATAM"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	year = "Shahzadi Masooma e Qum (sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"squm\">" + year + "</div>";
	nouhaOption += "<div  id=\"squmList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Masooma e kounain chali aaj watan se",
		n2: `Zainab sifat bahen thi Imam e Raza ki bhi`,
		n3: `Sote hai aah shaahe qurasaan mazaar me`,
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";


	year = "Shahzadi Zainab(sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"szainab\">" + year + "</div>";
	nouhaOption += "<div  id=\"szainabList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Gurbat me kisne ki hai rifaaqat Hussain ki",
		n2: "Azeezo  zainabe muztar ka aaj maatam hai"

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	year = "Shahzadi Umme Kulsoom (sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"skulsoom\">" + year + "</div>";
	nouhaOption += "<div  id=\"skulsoomList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Umme kulsoom qwaahar e zainab",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";


	year = "Chehlum aur waapsi";
	nouhaOption += "<div class=\"hidelist\" id=\"chehlum\">" + year + "</div>";
	nouhaOption += "<div  id=\"chehlumList\" style=\"display:none\">";
	var mirnoha = {
		n1: "BHAIYYA MAI BIN TUMHAARE WATAN KO NA JAAOONGI",
		n2: "CHAHLUM JO KARBALA ME BAHATTAR KA HO CHUKA",
		n3: "JAB SHAAH KO SAFAR ME BAHOTH DIN GUZAAR GAYE",
		n4: "NAAGAAH GUZAAR QAAFELE KA SHAHER ME HUWA",
		n5: "QAID SE CHUT KE AAI HAI ZAINAB",
		n55: `Aaj Chehlum tamaam hota hai`,
		n6: "SUNAA THA JAB SE KE AATHE HAIN SYED-E- AKRAM",
		n7: `Durood padhke watak ko chala Hussain ka laal`,
		n8: `Bala uthaake haram karbala se aate hai`,
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";


	year = "Alvida and 11th Imaam";
	nouhaOption += "<div class=\"hidelist\" id=\"alweda\">" + year + "</div>";
	nouhaOption += "<div  id=\"alwedaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "AYE SHAAH-E KARBALA TERI QIDMATH NA HO SAKI",
		n2: "SHORA JAHAAN ME HASSAN-E ASKARI KA HAI"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	year = "Rasoole Khuda (saws)";
	nouhaOption += "<div class=\"hidelist\" id=\"rasool\">" + year + "</div>";
	nouhaOption += "<div  id=\"rasoolList\" style=\"display:none\">";
	var mirnoha = {
		n4: "Aye momino yasrab me ajab nouha gari hai"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	year = "2-5-6-7-9-10th(Imaam)";

	nouhaOption += "<div class=\"hidelist\" id=\"imamhassan\">Imam Hassan (as)</div>";
	nouhaOption += "<div  id=\"imamhassanList\" style=\"display:none\">";
	var mirnoha = {
		n4: "JIS DAM HASSAN KA ZAHER SE TUKDE JIGAR HUWA",
		n44: `Momino qaana e zehra me qayamat hai aaj`,
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	nouhaOption += "<div class=\"hidelist\" id=\"ibaqar\">Imam Baqar (as)</div>";
	nouhaOption += "<div  id=\"ibaqarList\" style=\"display:none\">";
	mirnoha = {
		n3: "HAI QASD KUCH FAZAEL-E BAQUAR RAQAM KAROON",
		n1: "BAQUAR BHI THE SHAREEK-E SHAHINSHAAH-E TASHNALAB"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";


	nouhaOption += "<div class=\"hidelist\" id=\"isadiq\">Imam Sadiq (as)</div>";
	nouhaOption += "<div  id=\"isadiqList\" style=\"display:none\">";
	mirnoha = {
		n2: "BECHAIN DIL THA HAZRATHE BAQUAR KI YAAD ME"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	nouhaOption += "<div class=\"hidelist\" id=\"ikazim\">Imam Kazim (as)</div>";
	nouhaOption += "<div  id=\"ikazimList\" style=\"display:none\">";

	mirnoha = {
		n7: "SAR PEETO AAJ MOOSA-E JAAFAR HUWA SHAHEED",
		n8: "ZINDAAN-E GHAM THA MOOSA-E KAAZIM KE WAASTHE"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	nouhaOption += "<div class=\"hidelist\" id=\"itaqi\">Imam Mohd Taqi (as)</div>";
	nouhaOption += "<div  id=\"itaqiList\" style=\"display:none\">";
	mirnoha = {
		n6: "KYA HAAL HO RAZAA KE JIGAR BAND KA BAYAAN"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	nouhaOption += "<div class=\"hidelist\" id=\"inaqi\">Imam Ali Naqi (as)</div>";
	nouhaOption += "<div  id=\"inaqiList\" style=\"display:none\">";

	mirnoha = {
		n5: "KIS UMR ME ALI-E NAQI BE PIDAR HUWE"
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>"; var year = "Shahzadi Fizza (sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"sfizza\">" + year + "</div>";
	nouhaOption += "<div  id=\"sfizzaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Naam hai nek naam fizza ka",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>"; var year = "Ummul Baneen (sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"sbaneen\">" + year + "</div>";
	nouhaOption += "<div  id=\"sbaneenList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Ummul baneen madare abbase zi wiqaar",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>"; var year = "Shahzadi Sugra (sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"ssugra\">" + year + "</div>";
	nouhaOption += "<div  id=\"ssugraList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Bano pe aur ek musibat guzar gayi",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>"; var year = "Shahzadi Fatima Kubra (sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"skubra\">" + year + "</div>";
	nouhaOption += "<div  id=\"skubraList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Fatima kubra duqtare shabbir",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	var year = "Janaab e Abu Talib (as)";
	nouhaOption += "<div class=\"hidelist\" id=\"jtalib\">" + year + "</div>";
	nouhaOption += "<div  id=\"jtalibList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Aye Kafeele nabi abu talib",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	var year = "Janaab e Zaid";
	nouhaOption += "<div class=\"hidelist\" id=\"jzaid\">" + year + "</div>";
	nouhaOption += "<div  id=\"jzaidList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Zaid e shaheed ka hai zabaa'n par ye marsiya",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";
	var year = "Shahzadi Rabab (sa)";
	nouhaOption += "<div class=\"hidelist\" id=\"srabab\">" + year + "</div>";
	nouhaOption += "<div  id=\"srababList\" style=\"display:none\">";
	var mirnoha = {
		n1: "Jab karbala se lut ke watan ko haram phire",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}
	nouhaOption += "</div>";

	
	$("#nouhas").html(nouhaOption);
	$("#searchOption").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#nouhas *").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});


$(document).on("click", ".nouhas", function () {

	var id = this.id;

	var url = id;

	window.location.href = "nouhaLyrics.html?lyrics/marsias/" + url;

});

$(document).on("click",".hidelist",function() {
	
	var year=this.innerHTML;
	//$("#"+this.id+"List").show()
	var x = document.getElementById(this.id+"List");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
	});

$(document).on("click", ".urduMarsia", function () {
	console.log("test")
	var id = this.id;

	var url = id;

	window.location.href = "MarsiyeUrduLyrics.html?lyrics/urduMarsiye/" + $(this.id);

});



