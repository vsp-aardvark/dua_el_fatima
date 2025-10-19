$(document).ready(function() {

 var reciter = "";
 $("#heading").html("<center>Salaam</center>")
var nouhaOption = "";
var mirnoha={
			s1:"Aahe soza'n lab tak aayi ashke naab aane ko hai",
s2:"Aankho me basi thi karbobala sajjad tadapte rehte",
s3:"Ab Aaye Ho Baba",
s4:"Ae ghuncha dahan bekas dulha",
ss4:`Shaahe hardo sara ki rehlat hai`,
s5:"Ae shahe do jaha'n khudahafiz",
s6:"Ali ki mad'ha karta hu'n",
s7:"Ali sa bhi na koi aadile zamana hua",
s8:"arbaee'n ke sogwaaro alvidah",
s9:"Asghar salaami teere sitam khaae aate hai",
s10:"Aye salami qayaam jalte hai",
s11:"Bano ki dilruba sakina jaa'n",
s12:"Bano maqtal me kehti ye aayi aa meri godi aa mere",
s13:"Behre zikre murtaza irfane dawar chahiye",
s14:"Bekasi ka sheh ke charcha reh gaya",
s15:"boli maa kya hua sakina ko",
s16:"Boli ye zainab dukhya tera chehlum karne",
s17:"boli zainab utho imdaad ko aao",
s18:"Darouna jangal hai raat andheri",
s19:"Dil thaam ke ye kubra ne kaha kyu mujh ko akela",
s20:"Ek beemaar se ae mujrayi sab ghar choota",
s21:"Ek musaafir qaid hai beemaar hai",
s22:"Ek sakta hai biyabaan ki fiza qamosh hai",
s23:"fida hu us pa salaami",
s24:"Ghabraegi zainab ghabraegi zainab",
s25:"Gham zada saara ghar hai zainab ka",
s26:"ghar chalo bhai mehndi lagaoo'n",
s27:"Ghar ko chodha shaah ne",
s28:"Ghurbat ki inteha hai, na saya na rida hai",
s29:"Hai aale nabi me shore buka dunya se uthi umme kul",
s30:"Hai ahle haram me shore buka sheh laate hai lasha",
s31:"Hai rukhsat  ki ghadi ae karbala  walo",
s32:"Hai Salaam us pe jo qaidi bhi hai",
s33:"Hussain ban ke zamane pe chaa gayi Zainab",
s34:"Is qoum ke rone ko yahi baat badi hai",
s35:"Juz panjetan kisi se tawalla na chahiye",
s36:"Karbala se jo kabhi ho ke hawa aati hai",
s37:"kaunsa ranj tha jo sheh se uthaya na gaya",
s38:"Kehke sab ya imam rote hai",
s39:"kehti thi yahi zainab dukhya mere",
s40:"Khaakar sina jo seene pa akber guzar gaye",
s41:"khat me soughra ne ye likha baba",
s42:"khoke bhai ko aayi hai zainab",
s43:"Khoon me tar qamar hai Muslim ke",
s44:"maqtal me tha jo laashae asghar tamaam raat",
s45:"Meri tarah mere baba ,koi yateem na ho",
s46:"misaale badr jo haasil hua kamaal",
s47:"mujhe matloob hoga",
s48:"Mujrayi koi na karta tha dawaae sajjad",
s49:"mujrayi paida hua tha sam hasan",
s50:"Mujrayi qahate aab bhi tha aur ghiza na thi",
s51:"Mujrayi qalq me in aankho ne kya kya",
s52:"Mujrayi sheh ne kaha bhool na jaana zainab",
s53:"naam par shaah ke paani",
s54:"Pardes me zainab kho baithi",
s55:"pohnche ye nazm yu'n shahe",
s56:"Pyaso se zyada door na tha behte hue darya ka pani",
s566:"Phir hai ab shaam ka safar bhai",
s57:"Qaafela sheh ka salaami labe darya",
s58:"Qabr asghar ki banane me bohot der lagi",
s59:"Ran me gala kata diya moula hussain ne",
s60:"Rasane zulm me nanhi si kalaai hogi",
s61:"ro ro kehti thi baanoe dukhya",
s62:"Salaami har taraf mehshar bapa hai",
s63:"Salaami har taraf shore buka hai",
s64:"salaami jaagaza hai ranjo gham",
s65:"salaami jisne dare baaghe panjetan",
s66:"salaami layeeno'n  ne kya kya",
s67:"Salaami sooe maqtal sayyade abraar aate hai",
s68:"salam khaak nasheeno pa sogwaro ka",
s69:"Sar peeto karo maatam barpa",
sk1:"Sar peeto karo matam barpa duniya se uthi umme kulsoom",
s70:"Shabbir ko aati hai ye sada abbase dilawaar qatl",
s71:"shabeehe imaame zamaa'n khainchte hai",
s72:"Shehr bano kahi peet ke sar gor me mera bacha darega",
s73:"Soja asghar jaani soja",
s74:"Tashnalab mazloom sarwar alvida",
s75:"Wajibur rehm the zinda'n ke sazawaar na the",
s76:"ya imaame raza khuda hafiz",
s761:`Ya Ali Karbala me aag lagi`,
s761:"Aye Shaheede Jafa imam e Raza",
s77:"Ye keh rahe hai aaj bhi naale furaat ke",
s78:"Yu sakina ne pukaara",
s79:"Zabaa'n par mad'ha hai baaghe Ali ke nounehaalo ki",
s80:"Zikre ghame hussain se",
s81:"Zulm karte the jo sheh par baanie shar baar baar"
		};
  var year = "";
	
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
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
    
 window.location.href="nouhaLyrics.html?lyrics/salaam"+url;
  
});


