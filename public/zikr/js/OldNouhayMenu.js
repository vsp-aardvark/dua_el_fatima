$(document).ready(function() {

	var reciter = "";
	$("#heading").html("<center>"+reciter+"</center>")
	var nouhaOption = "";
	var year = "Imam Hussain(as)";
	nouhaOption+="<h4>"+year+"</h4>";
	mirnoha={n1:"Ae arze karbala teri godi me aan kar",
	n2:"Band paani kar diya",
	n3:"Bikhre pade hai laashe",
	n4:"Gulshane panjetan ko loot liya",
	n5:"Haaye hussain pyaase hussain",
	n6:"Jab kabhi gheerate insaa'n ka",
	n7:"Karbala waale hame",
	n8:"Koi na tha uthata jo lasha",
	n9:"Maqtal me sada goonji hai",
	n10:"Pukaari zainabe muztar husssain",
	n11:"Qatle sarwar hai aaj waawaila",
	n12:"Qayamat ki tapish hai",
	n13:"Sheh ne ro kar kaha alvida",
	n14:"Teero ke  musalle par wo sajdae  shukraana",
	n15:"Zalzalo me dunya thi",
	n16:"Garm rethi pa mai girta hu",
	n17:"Shabbir ko sar dekar islam bachaana hai",
	n18:"Zaalimo ne loota hai haaye ghar"

	
}
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Janaab e Muslim (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
	ONJMSLM1:`koofa hai aaj hashr ka manzar lie hue`,
	ONJMSLM2:`koofe me aaj muslime nachar haaye haaye`,
	ONJMSLM3:`muslim ka khoon haye`,
	ONJMSLM4:`roohe aqeel kehti thi dilbar hua shaheed`,
	ONJMSLM5:`syed ka qoon haye bahate hai ashqiya`,
	ONJMSLM6:`zulm ki ibtedaa hai wawaila`,
};
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Pisraan e Muslim (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
	ONPSM1:`darbar me do nanhe se sar laata hai zalim`,
	ONPSM2:`dekha kiye yateem jo qanjar tamaam raat`,
	ONPSM3:`haaris quda  ko maan ye  joro jafa na kar`,
	ONPSM4:`kehte the  muslim ke laal  maar na haris hame`,
	ONPSM5:`margaye muslim ke pisar haaye  haaye`,
	ONPSM6:`ro ro kehte the muslim ke pyaare`,
};
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Shahzadi Sughra (sa)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
	OLDSS1:`bulwaaiye baba ya aaiye baba`,
	OLDSS2:`kyu ho soughra se tum qafa baba`,
	OLDSS3:`qaasid mera qat leja ehsaan bada hoga`,
	OLDSS4:`soughra ne likha baba tumhe qaab me dekha`,
	OLDSS5:`soughra se milaado`,
	OLDSS6:`yaad aayi na tumhe fatima soughra baba`,
	OLDSS7:`ye duqtar beemaar ne shabbir ko likha`,
};
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}



year ="1-2 moharram";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
	n1:"aayi haatif ki aawaz sheh ko",
	n2:"abbas se kehti thi ye fouje",
	n3:"Bula kar sab to hazrat ne",
	n4:"Ibtedaae aza hai",
	n5:"Is maahe moharram me",
	n6:"Luta hai gulshane zahra",
};
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Aon o Mohammad a.s";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
an1:`Fizza ne kaha auno mohammed gaye maare`,
an2:`kehte the aale aba margaye zainab ke laal`,
an3:`Sar peet'ti hai zainabe naashaad ya ali`,
an4:`zainab ke laal dono maqtal`,
an5:`Zainab ye fugha karti thi tum aankhe to kholo`,

};	
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year = "Ali Asghar (a.s)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
n2:"Ae qaake paak",
n3:"Bano kehti hai khudaya",
n4:"Gham ye bano ko sada",
n5:"Gham ye barpa hai aaj asghar",
n6:"Haatho pa shaahedee'n ke",
n7:"Nanha sa ek sipaahi",
n8:"Qabre asghar  pa kehti thi",
n9:"Ae zameene karbala"
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Ali Akbar (a.s)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={n1:"Akber ne ye sheh se kaha dam toot raha hai",
n2:"Armaan nikaalu tumhe parwan",
nn2:"Roke kehte the sarwar kya hue ali akbar",
n3:"Barchiyo me dil ka tukda reh gaya",
n5:"Dil me akber ke hai sina baba",
n6:"kya hua ali akber",
n9:"Shabihe payambar akber",
n10:"Tadapna wo akber ka keh",
n11:"Doobi hui lahu me pyaso ki daastaa_n hai"

};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year = "Shahzad e Qasim (a.s)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
SQ1:`barat dulha ki aa rahi hai`,
SQ2:`binte sheh kehti thi haaye qasim bane`,
SQ4:`dar se bali sakina pukari dulha bhai ki aati hai mehndi`,
SQ5:`dulha ki lash ran se shabbir la rahe hai`,
SQ6:`ghul hai ye maqtal me bapa haye haye`,
SQ7:`kis shaan se laate hai shahinshaahe do aalam`,
SQ8:`maidane jung me jaane qasim`,
SQ9:`ran me bewa hassan ki pukari meri qasim ki aati hai mehandi`,
SQ10:`roke boli ye maa alvida alvida`,
SQ11:`roke kehti thi maa khudahfz`,
SQ12:`Shaahedeen laashe ibne hasan par`,
SQ13:`tha ye haram me shoro buka wawaila`,
SQ14:`Dono jahan me barpa hai mehshar`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
year ="Mola abbas(as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={n1:"Abbas ka matam hai wafadar ka",
n2:"abbas tujhe ahle wafa",
n3:"Ae wafa ke paighambar",
n4:"Hai shor abbas aa rahe hai",
n5:"Karte hai maatm haram abbas ka",
n6:"karte the ro ro ke ye",
n7:"Le jaaiye qaime me ye",
n8:"Qatl hue abbase ali wawaila",
n9:"Jab pyaas ki shiddat me bacche"
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
year ="Shehzadi sakina (sa)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
SS1:`ab sakina me nahi zabt ka yaara baba`,
SS2:`Ae jaan sakina`,
SS3:`Baade hussain kis ne kaha mai yateem hu`,
SS4:`Bole sajjad kya gham uthaae`,
SS5:`dam todti hai qaak pe naadaan ya hussain`,
SS6:`Jab yaad sakina ko teri aati`,
SS7:`Jhukae baithe hai sar ko`,
SS8:`karte hai sab zinda'n me fugha'n waawaila`,
SS9:`Kehti thi  baane muztar alvida`,
SS10:`khaa gaye shaam ke zinda'n me andhere baba`,
SS11:`Mar gayi hai binte`,
SS12:`meri tarah mere baba koi yateem na ho`,
SS13:`Qaid me sakina ne shaah`,
SS14:`qaid qaane me sakina ye bayaa'n karti thi`,
SS15:`Roke zindaan me boli bano`,
SS16:`sajjad leke jaate hai lasha yateem ka`,
SS17:`Ya bunayya ilayya`,
SS18:`zindaane shaam kis lie maatam sara`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
year ="Imam Sajjad (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IZA1:`aaj maatam bapa hai waawaila`,
IZA2:`Abid ghareeb bekaso`,
IZA3:`Afsos nabi zaadiyo'n ka`,
IZA4:`ahle haram me shor hai moula kahan chale`,
IZA5:`Baqar Yateem Hogaye Sajjad Margaye`,
IZA6:`ek shor qayamat ka madine me hai barpa`,
IZA7:`faqre rasoolaane zaman haaye haaye`,
IZA8:`Hai qaid abide beemar`,
IZA9:`Kar gaye sajjad qaza`,
IZA10:`Qaidi hai beemaar`,
IZA11:`shaam ka bazar abide beemar`,
IZA12:`touqo zanjeer kuja abide beemar kuja`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
year ="Shahzadi Zainab (sa)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
SZ1:`berida  kyu nazar aati zainab`,
SZ2:`margayi sarwar ki behen haaye haaye`,
SZ3:`momino me hai hashr ek bapa`,
SZ4:`zainabe benawa ka matam hai`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
year ="Shireen";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
S1:`sheeree'n ne kaha dekh ke sheh ka sare anwar`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}


year ="Chehlum and waapsi";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
cw1:`Dee basheer ne roke ye sada`,
cw2:`kaha ye zainab ne qabre sheh par`,
cw3:`Maa'n jaayi hai zainab`,
cw4:`Mai falak ki sataayi hu nana`,
cw5:`Mera sab ghar ujad gaya bhai`,
cw6:`Ro ro ke madeene walo se`,
cw7:`roke zainab ne di sada nana`,
cw8:`shaahinshahe tashnalab ke bhai`,
cw9:`Sitam raseeda falak ki sataayi`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
year ="Rasool Allah (saws)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
RA1:`aagayi aap ki qaza baba`,
RA2:`hyder utha rahe hai janaza rasool ka`,
RA3:`kar gaye qaza shaahe ambiya`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Imam Ali(as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IA1:`Aaj koofe me shabbiro`,
IA2:`bekal hai kal se kul ka madadgaar haaye haaye`,
IA3:`ghul ye koofe me tha khuda hafiz`,
IA4:`Ibne muljim ne hyder ko maara`,
IA5:`Jaate ho kis pa chord ke`,
IA6:`Pukaari zainab ghareeb roro`,
IA7:`sar peeto momino ke ye zarbat ki raat hai`,
IA8:`thi ye shabbir ki sada baba`,
IA9:`Uth gaye dunya se ali haye`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Shehzadi kounain(as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
SFZ1:`aaj ki shab se lahad hai aur zahra ya ali`,
SFZ2:`bain zainab ka tha alvida alvida`,
SFZ3:`binte mustafa kar gayi qaza`,
SFZ4:`Boli zainab chali kahaa'n amma`,
SFZ5:`Dono jahan me hashr bapa hai`,
SFZ6:`Ghul hai madine me bapa`,
SFZ7:`ghul ye harsu bapa hai waawaila`,
SFZ8:`Guzar gayi fatima jahaa'n se`,
SFZ9:`kya hui thi kaho jafa zahra`,
SFZ10:`Phir fatima pa zulm hua`,
SFZ11:`yasrab me uth raha hai janaza batool ka`,
SFZ12:`zahra nahi ghar me`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Imam Hassan (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IH1:`karti thi zainab bayaa'n bhai hassan mar gaye`,
IH2:`kyu'n tadapte ho farsh par moula`,
IH3:`laqte jigar ugalte hai shabbar hussainio`,
IH4:`lut ta hai ahmad ka chaman haaye haaye`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Imam Mohd Baqir (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IMB1:`aaj roze aza hai waawaila`,
IMB2:`dunya se aaj paanchwa rehbar`,
IMB3:`farmaate the sar peet ke ye jafare sadiq`,
IMB4:`kehte the sab peet ke sar haaye haaye`,
IMB5:`kouno maka'n me ghul hai bapa wawaila`,
IMB6:`Jaffer Yateem Hogaye Baqar  Guzar Gaye`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
year ="Imam Jaffer e Sadiq (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IJS1:`aye qateele jafa alvida alvida`,
IJS2:`hashr hai aalam me bapa haaye haaye`,
IJS3:`qatle sarwar hai aaj wawaila`,
IJS4:`sar peet ke sab kehte the aye sarware zeesha'n`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
year ="Imam Moosa e Kazim (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IMK1:`hogayi kazim pe jafa haye haye`,
IMK2:`mehshar hai aya'n musie kazim ne qaza ki`,
IMK3:`shaahe dee'n par sitam hai wawaila`,
IMK4:`tha raza ka ye laashe pe nouha`,
IMK5:`zehre dagha se waarise hyder hua shaheed`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}


year ="Imam Raza(as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={n1:"Ghul hai quraasaa'n me barpa",
n2:"janaza ghareeb ka",
n3:"bekaso mazloom raza haye haye",
n4:`panjetan laashe musa raza par rorahe hai`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Imam Ali Naqi (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IAN1:`aaj roze aza hai wawaila`,
IAN2:`kehte hai sab peet kar sar alvida`,
IAN3:`mardo zan kehte the peet kar sar`,
IAN4:`matam karo ke aaj qayamat ka roz hai`,
IAN5:`samere me ghul hai bapa haaye haaye`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Imam Mohd Taqi (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IMT1:`bole ro kar yahi alvida alvida`,
IMT2:`kehte hai sab ro ro ke yahi wawaila`,
IMT3:`shiyo'n ka tha ye bayaa'n haye taqi haaye haaye`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}


year ="Imam Hassan Askari (as)";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
IHA1:`azadaro imame bewatan ki aaj rehlat hai`,
IHA2:`bole mehdi yahi alvida alvida`,
IHA3:`gyaarweh moula ki hoti hai shahadat haaye haaye`,
IHA4:`roke madar ye karti thi nouha`,
IHA5:`samere me ghul hai bapa haaye haaye`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

year ="Inhedaam e Jannatul Baqi";
nouhaOption+="<h4>"+year+"</h4>";
mirnoha={
INJ1:`faryaad quda ki zaalim ne jafa ki`,
INJ2:`kis tarah sar na peete layee'n zulm dhaaya hai`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}

$("#nouhas").html(nouhaOption);	



$(document).on("click",".nouhas",function() {

var id = this.id;

var url =id;

window.location.href="nouhaLyrics.html?lyrics/oldNouhay/"+url;

});

$("#searchOption").on("keyup", function() {
var value = $(this).val().toLowerCase();
$("#nouhas *").filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
});
});
});





