$(document).ready(function() {

	var reciter = "";
	$("#heading").html("<center>"+reciter+"</center>")
	var nouhaOption = "";
	
	var year = "Imam Hussain(as)";
	nouhaOption+="<div class=\"hidelist\" id=\"imamhussain\">"+year+"</div>";
	nouhaOption += "<div  id=\"imamhussainList\" style=\"display:none\">";
	
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
	n18:"Zaalimo ne loota hai haaye ghar",
	n19:"Baitha hai leke hakime khudsar sare Hussain",
	
}
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";

year ="Janaab e Muslim (as)";
nouhaOption+="<div class=\"hidelist\" id=\"janaabeMuslim\">"+year+"</div>";
nouhaOption += "<div  id=\"janaabeMuslimList\" style=\"display:none\">";
mirnoha={
	ONJMSLM1:`koofa hai aaj hashr ka manzar lie hue`,
	ONJMSLM2:`koofe me aaj muslime nachar haaye haaye`,
	ONJMSLM3:`muslim ka khoon haye`,
	ONJMSLM4:`roohe aqeel kehti thi dilbar hua shaheed`,
	ONJMSLM5:`syed ka qoon haye bahate hai ashqiya`,
	ONJMSLM6:`zulm ki ibtedaa hai wawaila`,
	ONJMSLM7:`Pardes hai Muslim hai aur lashkare aada hai`
};
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";
year ="Pisraan e Muslim (as)";
nouhaOption+="<div class=\"hidelist\" id=\"pisaraanemuslim\">"+year+"</div>";
nouhaOption += "<div  id=\"pisaraanemuslimList\" style=\"display:none\">";
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
nouhaOption += "</div>";

year ="Shahzadi Sughra (sa)";
nouhaOption+="<div class=\"hidelist\" id=\"ssugra\">"+year+"</div>";
nouhaOption += "<div  id=\"ssugraList\" style=\"display:none\">";
mirnoha={
	OLDSS1:`bulwaaiye baba ya aaiye baba`,
	OLDSS2:`kyu ho soughra se tum qafa baba`,
	OLDSS3:`qaasid mera qat leja ehsaan bada hoga`,
	OLDSS4:`soughra ne likha baba tumhe qaab me dekha`,
	OLDSS5:`soughra se milaado`,
	OLDSS6:`yaad aayi na tumhe fatima soughra baba`,
	OLDSS7:`ye duqtar beemaar ne shabbir ko likha`,
	OLDSS8:`Maa ne rokar kaha alweda alweda sugra`,
	OLDSS9:`Kehti thi maa yahi haye sughra meri`,
	OLDSS10:`Peeto sar ahle aza ghar se janaza chala sughra`,
	OLDSS11:`Bain karti thi yahi rokar madar haye sughra`,
	OLDSS12:`Koun Sughra ka uthayega janaza bhayya`,
};
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";

year ="Safar e Imam Hussain";
nouhaOption+="<div class=\"hidelist\" id=\"safarIH\">"+year+"</div>";
nouhaOption += "<div  id=\"safarIHList\" style=\"display:none\">";
mirnoha={
	n1:"Dil hai bechain shahe huda ka Ho raha hai safar karbala ka",
};
for(var nouha in mirnoha){
	nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";


year ="1-2 moharram";
nouhaOption+="<div class=\"hidelist\" id=\"123Moharram\">"+year+"</div>";
nouhaOption += "<div  id=\"123MoharramList\" style=\"display:none\">";
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
nouhaOption += "</div>";

year ="Aon o Mohammad a.s";
nouhaOption+="<div class=\"hidelist\" id=\"aonmohd\">"+year+"</div>";
nouhaOption += "<div  id=\"aonmohdList\" style=\"display:none\">";
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
nouhaOption += "</div>";

year = "Ali Asghar (a.s)";
nouhaOption+="<div class=\"hidelist\" id=\"aliasghar\">"+year+"</div>";
nouhaOption += "<div  id=\"aliasgharList\" style=\"display:none\">";
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
nouhaOption += "</div>";

year ="Ali Akbar (a.s)";
nouhaOption+="<div class=\"hidelist\" id=\"aliakbar\">"+year+"</div>";
nouhaOption += "<div  id=\"aliakbarList\" style=\"display:none\">";
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
nouhaOption += "</div>";

year = "Shahzad e Qasim (a.s)";
nouhaOption+="<div class=\"hidelist\" id=\"sqasim\">"+year+"</div>";
nouhaOption += "<div  id=\"sqasimList\" style=\"display:none\">";
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
nouhaOption += "</div>";
year ="Mola abbas(as)";
nouhaOption+="<div class=\"hidelist\" id=\"mabbas\">"+year+"</div>";
nouhaOption += "<div  id=\"mabbasList\" style=\"display:none\">";
mirnoha={n1:"Abbas ka matam hai wafadar ka",
n2:"abbas tujhe ahle wafa",
n3:"Aye wafa ke paighambar",
n4:"Hai shor abbas aa rahe hai",
n5:"Karte hai maatm haram abbas ka",
n6:"karte the ro ro ke ye",
n7:"Le jaaiye qaime me ye",
n8:"Qatl hue abbase ali wawaila",
n9:"Jab pyaas ki shiddat me bacche",
OLDN10:"ZaInab lipat ke royi abbas ke alam se",
SMB137:`Margaye saqqae haram haye haye`,
OLD11:`Halchal hai fouje shaam me abbas aate hain`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";
year ="Shehzadi sakina (sa)";
nouhaOption+="<div class=\"hidelist\" id=\"ssakina\">"+year+"</div>";
nouhaOption += "<div  id=\"ssakinaList\" style=\"display:none\">";
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
SS19:`Bano ye Abid ko batlarahi hai meri sakina ko neend aa rahi hai`,
SS20:`Sakina dafn hoti hai`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";
year ="Imam Sajjad (as)";
nouhaOption+="<div class=\"hidelist\" id=\"isajjad\">"+year+"</div>";
nouhaOption += "<div  id=\"isajjadList\" style=\"display:none\">";
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
nouhaOption += "</div>";
year ="Shahzadi Zainab (sa)";
nouhaOption+="<div class=\"hidelist\" id=\"szainab\">"+year+"</div>";
nouhaOption += "<div  id=\"szainabList\" style=\"display:none\">";
mirnoha={
SZ1:`berida  kyu nazar aati zainab`,
SZ2:`margayi sarwar ki behen haaye haaye`,
SZ3:`momino me hai hashr ek bapa`,
SZ4:`zainabe benawa ka matam hai`,
SZ5:`Sehke ranjo gham haaye chal basi`,
SZNB83:`Momino peeto ro ro ke sar wawaila`,
SZ6:`Zainabe bawafa alweda alweda`,
SZ7:`Roke Fizza ye karti thi nauha aya taboote saniye zehra`,
SZ8:`Binte Fatima kargayi qaza`,
SZ9:`Sajjad bayaa karte the mazloom phuphi jaan`,
SZ10:`Behaal hai behain hai ghabrayi hai zainab`,
SZ11:`Zulm seh seh ke har ghadi zainab`,
SZ12:`Abid ne kaha laash pe zainab ki`,
SZ13:`Baniye Majlise aza zainab`,
SZ14:`Zehra se kehdo Aon o Mohd ko layiye`,

};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";
year ="Shahzadi Umme Kulsoom (sa)";
nouhaOption+="<div class=\"hidelist\" id=\"skulsoom\">"+year+"</div>";
nouhaOption += "<div  id=\"skulsoomList\" style=\"display:none\">";
mirnoha={
SUK1:`Umme kulsoom kehti thi rokar`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";
year ="Shireen";
nouhaOption+="<div class=\"hidelist\" id=\"shireen\">"+year+"</div>";
nouhaOption += "<div  id=\"shireenList\" style=\"display:none\">";
mirnoha={
S1:`sheeree'n ne kaha dekh ke sheh ka sare anwar`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";


year ="Chehlum and waapsi";
nouhaOption+="<div class=\"hidelist\" id=\"chehlum\">"+year+"</div>";
nouhaOption += "<div  id=\"chehlumList\" style=\"display:none\">";
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
cw10:`Chehlum tera karne ko bahen aayi hai bhai`,
cw11:`Nana mai aagayi hoon ghar baar sab lutaake`,
cw12:`Zabaa pa zainabe bekas ki thi sada amma`,
cw13:`Pohunche qareeb shahre madina to rodiye`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";


year ="Janaabe Ummul Baneen (sa)";
nouhaOption+="<div class=\"hidelist\" id=\"jbaneen\">"+year+"</div>";
nouhaOption += "<div  id=\"jbaneenList\" style=\"display:none\">";
mirnoha={
JUB1:`Ummul baneen ne ki jaha se qaza hai aaj`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";

year ="Rasool Allah (saws)";
nouhaOption+="<div class=\"hidelist\" id=\"rasool\">"+year+"</div>";
nouhaOption += "<div  id=\"rasoolList\" style=\"display:none\">";
mirnoha={
RA1:`aagayi aap ki qaza baba`,
RA2:`hyder utha rahe hai janaza rasool ka`,
RA3:`kar gaye qaza shaahe ambiya`,
RA4:`Hai dono aalam me shor o girya rasool dunya se jaa rahe hai`,
RA5:`Maatam hai bapa aaj rasoole arabi ka`,
RA6:`Hazrat ki judai me tadapte hai dile zaar ya ahmade muqtaar`,
RA7:`Hai kouno makaa me aaj matam`,
RA8:`Kounain me ghul hai ke payambar guzar gaye`,
RA9:`Batool kehti thi rokar mere ghareeb pidar`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";

year ="Imam Ali(as)";
nouhaOption+="<div class=\"hidelist\" id=\"iali\">"+year+"</div>";
nouhaOption += "<div  id=\"ialiList\" style=\"display:none\">";
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
nouhaOption += "</div>";

year ="Shehzadi kounain(as)";
nouhaOption+="<div class=\"hidelist\" id=\"skounain\">"+year+"</div>";
nouhaOption += "<div  id=\"skounainList\" style=\"display:none\">";
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
nouhaOption += "</div>";

year ="Imam Hassan (as)";
nouhaOption+="<div class=\"hidelist\" id=\"ihassan\">"+year+"</div>";
nouhaOption += "<div  id=\"ihassanList\" style=\"display:none\">";
mirnoha={
IH1:`karti thi zainab bayaa'n bhai hassan mar gaye`,
IH2:`kyu'n tadapte ho farsh par moula`,
IH3:`laqte jigar ugalte hai shabbar hussainio`,
IH4:`lut ta hai ahmad ka chaman haaye haaye`,
IH5:`Aye Hassan e Mujtaba`,
IH6:`Nouha ye zainab ka tha aye hassan e mujtaba`,
IH7:`Karte hain Momin buka aye hassan e mujtaba`,
IH8:`Thaame hue hassan ko ye zainab ne di sada`,
IH9:`Ahle Aza me sibte payambar ka hai matam`,
IH10:`Ibne janaabe fatima zehra ni ki qaza`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";

year ="Imam Mohd Baqir (as)";
nouhaOption+="<div class=\"hidelist\" id=\"ibaqir\">"+year+"</div>";
nouhaOption += "<div  id=\"ibaqirList\" style=\"display:none\">";
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
nouhaOption += "</div>";
year ="Imam Jaffer e Sadiq (as)";
nouhaOption+="<div class=\"hidelist\" id=\"ijaffar\">"+year+"</div>";
nouhaOption += "<div  id=\"ijaffarList\" style=\"display:none\">";
mirnoha={
IJS1:`aye qateele jafa alvida alvida`,
IJS2:`hashr hai aalam me bapa haaye haaye`,
IJS3:`qatle sarwar hai aaj wawaila`,
IJS4:`sar peet ke sab kehte the aye sarware zeesha'n`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";
year ="Imam Moosa e Kazim (as)";
nouhaOption+="<div class=\"hidelist\" id=\"ikazim\">"+year+"</div>";
nouhaOption += "<div  id=\"ikazimList\" style=\"display:none\">";
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
nouhaOption += "</div>";


year ="Imam Raza(as)";
nouhaOption+="<div class=\"hidelist\" id=\"iraza\">"+year+"</div>";
nouhaOption += "<div  id=\"irazaList\" style=\"display:none\">";
mirnoha={n1:"Ghul hai quraasaa'n me barpa",
n2:"Gurbat me uth raha hai janaza gareeb ka",
n3:"bekaso mazloom raza haye haye",
n4:`panjetan laashe musa raza par rorahe hai`,
n5:`Mere bhai se mujhko milado`,
n6:`Sar peet ke chillayi ye masoma e muztar`,
n7:`Ye shehre qurasaan me harsu duhayi hai`,
n8:`Aye Shaheede Jafa imam e Raza`,
n9:`Momino Shahe khurasaan ka matam karlo`,

};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";

year ="Shahzadi Masooma e Qum (sa)";
nouhaOption+="<div class=\"hidelist\" id=\"squm\">"+year+"</div>";
nouhaOption += "<div  id=\"squmList\" style=\"display:none\">";
mirnoha={
	SJMQ4:`Aye Momino sar peeto jati hai ba hasrat masoma ki mayat`,

};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";

year ="Imam Ali Naqi (as)";
nouhaOption+="<div class=\"hidelist\" id=\"inaqi\">"+year+"</div>";
nouhaOption += "<div  id=\"inaqiList\" style=\"display:none\">";
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
nouhaOption += "</div>";

year ="Imam Mohd Taqi (as)";
nouhaOption+="<div class=\"hidelist\" id=\"itaqi\">"+year+"</div>";
nouhaOption += "<div  id=\"itaqiList\" style=\"display:none\">";
mirnoha={
IMT1:`bole ro kar yahi alvida alvida`,
IMT2:`kehte hai sab ro ro ke yahi wawaila`,
IMT3:`shiyo'n ka tha ye bayaa'n haye taqi haaye haaye`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";


year ="Imam Hassan Askari (as)";
nouhaOption+="<div class=\"hidelist\" id=\"iaskari\">"+year+"</div>";
nouhaOption += "<div  id=\"iaskariList\" style=\"display:none\">";
mirnoha={
IHA1:`azadaro imame bewatan ki aaj rehlat hai`,
IHA2:`bole mehdi yahi alvida alvida`,
IHA3:`gyaarweh moula ki hoti hai shahadat haaye haaye`,
IHA4:`roke madar ye karti thi nouha`,
IHA5:`samere me ghul hai bapa haaye haaye`,
IH6:`Bain Narjis ka tha aye Hassan Askari`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";

year ="Inhedaam e Jannatul Baqi";
nouhaOption+="<div class=\"hidelist\" id=\"inhedaam\">"+year+"</div>";
nouhaOption += "<div  id=\"inhedaamList\" style=\"display:none\">";
mirnoha={
INJ1:`faryaad quda ki zaalim ne jafa ki`,
INJ2:`kis tarah sar na peete layee'n zulm dhaaya hai`,
};
for(var nouha in mirnoha){
nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";

}
nouhaOption += "</div>";
$("#nouhas").html(nouhaOption);	



$(document).on("click",".nouhas",function() {

var id = this.id;

var url =id;

window.location.href="nouhaLyrics.html?lyrics/oldNouhay/"+url;

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

$("#searchOption").on("keyup", function() {
var value = $(this).val().toLowerCase();
$("#nouhas *").filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
});
});
});





