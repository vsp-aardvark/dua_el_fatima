$(document).ready(function() {

var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var array = queryString.split("/")
 var reciter = array[array.length-1]
 $("#heading").html("<center>"+reciter+"</center>")
var nouhaOption = "";
var searchOption = "<option></option>";
    if(reciter == "Mir Hassan Mir"){
		var year = "2022";
		var mirnoha = {		MHM22M1:`Aagaye Hassan`, MHM22M2:`Dar e Ghazi`, MHM22M3:`Fatima koun hai`, MHM22M4:`Hussain Bismillah`, MHM22M5:`Junge Khandaq`, MHM22M6:`Qasim e Ibne Hassan`, MHM22M7:`Wo Moula Raza Hai`}
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		var year = "2021";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha = {MHM21M1:`14 Sharaab khano ki yakja mila ke laa sharaabe ishqe ali`, MHM21M2:`Ali Ya Ali Haider Haider`, MHM21M3:`Arbaab Raza Maula`, MHM21M4:`Ba Mansha e Rab e Jahan Khenchtey Hain`, MHM21M5:`Hussain hai na`, MHM21M6:`Mera Murshad Hussain hai`, MHM21M7:`Mouaiyo Ghadeer Ka Rastaa Na Chorna`, MHM21M8:`Utri hain aaj fatima zehra zameen par`,}
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}

		var year = "2021";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha = {		MHM20M1:`Jaisa mera maula waisa koi nahi`, MHM20M2:`Kaise milta hai khuda dekh liya hai mai ne`, MHM20M3:`Lylatul qadr ka tarjuma Fatima`, MHM20M4:`Madh e Zainab labon pe jaari hai`, MHM20M5:`Raza ke rouze par`, MHM20M6:`Suno shabbir se ghazi ki sana`, MHM20M7:`Wo aa raha hai ke jiske aage kisi ka kehna nahi chalega`, MHM20M8:`Ye kahani phir sahi`, MHM20M9:`Zainab e moula raza masooma`,}
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
    	var year = "2019";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={mir20191:"Ali shere khuda haider haider", mir20192:"Hussain bant rahe hai nijaat le jao",mir20193:"Hussain ka rutba",mir20194:"Jis Nay Ek Baar Tumhai Dil Say Pukara Abbas",mir20195:"Suno Baad e Zahoor Kiya",mir20196:"Tere Sadqay Main Zahra Ho Raha hai"
		}
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
		var year = "2018";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={mir20181:"Aagaya shabaan", mir20182:"Aao tareekh sunau mai shabe hijrat ki", mir20183:"Allah o akbar ya ali", mir20184:"Faqeer ki sada hussain hai", mir20185:"Husain baat rahe hai nijaat le jao", mir20186:"Roab abbas ki ankho mein hai haider jaisa", mir20187:"Wo ghar ke hukm jahan"
		}
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
		var year = "2017";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={mir20171:"Aise hum saqiye kausar ki taraf", mir20172:"Ali e murtaza se pyaar karo", mir20173:"Bainul haramain", mir20174:"Darwaza e hussain pe sajda kiye baghair", mir20175:"Intezaar - Aaj ka din bhi maula beet gaya", mir20176:"Qalandar saee'n", mir20177:"Shabaan aagaya hai", mir20178:"Shukriya maula reza", mir20179:"Zikr e alamdaar baar baar"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2016";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42900:"Duniya mein haider dusra", n42901:"La hawla wala quwwata illa billah", n42902:"Likh qalam sani e zehra ki sana bismillah", n42903:"Shehr e sarwar", n42904:"Suno Siffeen suno"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2015";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42886:"Ali ke baba ka", n42887:"Bichana Chod de", n42888:"Haider ka musalla", n42889:"Hussain ghaiz mein hai", n42890:"Jab maula mehdi aaenge", n42891:"Musadas Hazrat e zahra", n42892:"Suno arsh walo Sehra ali ka", n42893:"Teri Kya baat hai", n42894:"Ya ali musa reza", n42895:"Ya ali tera shukriya"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2014";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42882:"Hussain ke dar par", n42883:"Jo Azadar Nahi Ho Sakta", n42884:"Yeh Baat Maan Lijiye", n42885:"Zikr Khayber Ka Sunaya"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2013";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42872:"Aye Zaire Hussain assalam", n42873:"Bandae Rehman nahi", n42874:"Fazilat namaz padhne ki", n42875:"Hussain Tere Liye", n42876:"Ishqe Haider Jeet gaya", n42877:"Jab Aayae Balligh", n42878:"Jab Khuda ko pukara", n42879:"Khaybar ka maajra suno", n42880:"Mai hua sajda hua", n42881:"Sar dare Aale Mohammad"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2012";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42861:"Aap par durood aur salaam aye mere imam", n42862:"Ali ali ali ali bol", n42863:"Aye maula Raza shahe khurasan", n42864:"Dastoor juda jaana", n42865:"Husain ki khatir", n42866:"Jab koi dua aur na dawa", n42867:"Kaho ya mehdi", n42868:"Mukhtar Zindabad", n42869:"Panjetan ke aastaane ki", n42870:"Saqiye Kausar ki Sana", n42871:"Zehra s.a ke haath me"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
		var year = "2011";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42850:"Ali ke dar par", n42851:"Bol rahi hai zainab", n42852:"Haider haider haider haider", n42853:"Hawa par", n42854:"Kar de ghaazi karam", n42855:"Khuda ki pehchan banke jabse", n42856:"Mai shaheed e raah e khuda hu", n42857:"Main kya bataon dosto tumhein keh kya HUSSAIN hai", n42858:"Maula mehdi aa jaiye", n42859:"Tabarrukat e husaini ka ehteraam karo", n42860:"Ya kareema"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2010";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42841:"Aapke aane ke baad", n42842:"Abbas naam hai mera", n42843:"Ali nahi to kuch nahi", n42844:"Aye rabbe panjetan", n42845:"Aye zamin e ahoo", n42846:"Had Hogai Hai", n42847:"Qambar aur fizza", n42848:"Sayyada, fatima, zehra o batool e azra", n42849:"Tera naam hi aisa hai"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2009";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42830:"Ana majnoon al husain", n42831:"Ayse hote hai ali ke naukar", n42832:"Bade badon se bada hai", n42833:"Haan wo hai fatima", n42834:"Haq ka irfan jo paya", n42835:"Kab aaoge maula", n42836:"Main karbobala hu", n42837:"Manazara", n42838:"Mashhad mein", n42839:"Mera waris hai ali", n42840:"Ya Muhammad"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2008";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42819:"Aa gaye panjetan aagaye", n42820:"Haider hu mai haider", n42821:"Haider hu main haider", n42822:"Khuld me sabr", n42823:"Kya batau maqaam zainab ka", n42824:"Mad'he abbas mad'he haider hai", n42825:"Mimbar jaane haider jaane", n42826:"Noor ki anjuman Fatema", n42827:"Sajda ek aisa", n42828:"Sarwar ke azadar", n42829:"Ya imam e raza"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2007";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42816:"Ali ke saath hai Zehra ki Shaadi", n42817:"Jibrael Murtaza ko Dulha", n42818:"Quran O Ali Ilm ka Meyaar"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2006";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42812:"Apni kismat azma kar dekhna", n42813:"Karbobala naseeb se jaana naseeb ho", n42814:"Kya hai sakina", n42815:"Ya rab mera har lafz"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
		var year = "2005";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42811:"Hussain ka matam"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2004";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42808:"Jo Haider e karrar hai", n42809:"Marhaba Shere Ali", n42810:"Sun Lain wo jin kay liye"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2003";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42804:"Haq Ka Irfan", n42805:"Karbobala naseeb se jaana naseeb ho", n42806:"Maula ali ali", n42807:"Wafa jiska padhe kalma"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2002";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42803:"Is Tarha Se Jeene Ka Hunar Dete Hain Abbas (A.s.)"};
		
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
		var year = "2000";
		nouhaOption+="<h4>"+year+"</h4>";
		var mirnoha={n42802:"KUL NAZME QAAENAAT HAI ZAHRA KE HAATH MEI"};
		

		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			
    }else if(reciter == "Muqtar Hussain"){
      var year = "2014";
		var mirnoha={n42763:"Abbas karbala ki", n42764:"Al ajal ya mehdi", n42765:"Ali Ali karke", n42766:"Amal se apne", n42767:"Hussain aaj bhi hai", n42768:"Rasool ki beti", n42769:"Rokega rab zarur", n42770:"Shehre Mashhad me", n42771:"Yu tere naam se", n42772:"zulm ko sheh ki himayat nhi milne wali"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
		var year = "2013";
		var mirnoha={n42761:"Ali ke noor ka sadqa dikhai deta hai", n42762:"Uska rutba sare mehshar bhi nirala hoga"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
				var year = "2010";
			var mirnoha={n42760:"Chand suraj jise kehti hai ye duniya zehra"};
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
					var year = "2008";
				var mirnoha={n42759:"Main husain hun"};
				nouhaOption+="<h4>"+year+"</h4>";
				for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
			var year = "2006";
		var mirnoha={n42757:"Khayaale khaaliqe Akbar ka hum khayaal hussain", n42758:"QAYAAL E QAALIQ E AKBAR"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
		nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
		
		}
		
    }else if(reciter == "Farhan Ali"){
    	var year = "2016";
		var mirnoha={n42751:"Abbas tere dar sa", n42752:"Ali ali maula ali ali", n42753:"Kaash mai daur e payambar mein", n42754:"Madine ka musafir hu", n42755:"Midhat e sakina", n42756:"Nalain rakh dena"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
			
			var year = "2015";
		var mirnoha={n42749:"Ali waley jahan baithe", n42750:"Haider Haider Haider"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
			
			var year = "2013";
		var mirnoha={n42746:"Mai hu paani suno meri kahani", n42747:"Tera faqeer hu maula", n42748:"Ya Mustafa"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
			
			var year = "2011";
		var mirnoha={n42740:"Abbas tere dar sa", n42741:"Bibi Zehra ki hai rukhsati", n42742:"Dam mast qalandar Ali Ali", n42743:"Dilo pe aaj bhi jo hukmaran hai hussain hai", n42744:"MAI HUSSAIN IBNE ALI HOON", n42745:"Mujhe maulai banana"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
			
			
			var year = "2010";
		var mirnoha={n42738:"Mai Husain ibne Ali hu", n42739:"Mohammad Mohammad"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
			
			var year = "2008";
		var mirnoha={n42737:"eid aayi hai rajab shaban ki"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
			
    }else if(reciter == "Ali Safdar"){
    	var year = "2016";
			var mirnoha={n42787:"Sab ke bas ki baat nahi"};
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
				
				var year = "2014";
			var mirnoha={n42784:"Ali imam e man asto manam ghulam e ali", n42785:"Ali ke chahne wale khushi aise manate hai", n42786:"Mubarak ho ye shaadi"};
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
				var year = "2010";
			var mirnoha={n42782:"Allah Muje Lashkare mehdi se mila de", n42783:"Rashke Maryam naaze Saara Sayyeda"};
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
				var year = "2007";
			var mirnoha={n42781:"Aye mere baradar e eemani"};
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
    }else if(reciter == "Nayaab Hallori"){
		var year = "2012";
			var mirnoha={n42763:"Wo mera ali mera ali mera ali hai"};
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		  
    }else if(reciter == "Shadman Raza"){
    	var year = "2011";
			var mirnoha={n42908:"Aaj zehra ki shaadi Rachi hai", n42909:"Ali ka darwaza", n42910:"Imam e zamana ka ashiq bana de", n42911:"Ye Fatima bhi hai Zehra bhi hai", n42912:"Ye meri zindagi maula ke naam hai"};
			
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
				var year = "2010";
			var mirnoha={n42914:"Allah Mohammad Ali Fatema Hasan Husain",
					n42915:"BAAP"};
			
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
				var year = "2009";
			var mirnoha={n42917:"Gar ho meri hayaat mere ikhteyar me", n42918:"Zehra ki hai rukhsati"};
			
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
					var year = "2008";
				var mirnoha={n42920:"Aap kya jaane Fatema kya hai", n42921:"allah ek hai panjetan paanch hai"};
				
				for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
							var year = "2006";
						var mirnoha={n42923:"Wah hamshakle nabi"};
						
						for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
							var year = "2000";
						var mirnoha={n42925:"maula zahoor kijiye dil bekarar hai"};
						
						for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		      
    }else if(reciter == "Sibte Jaffer Shaheed"){
		var mirnoha={n42774:"Abbas ka parcham", n42775:"Aise Waiso se pyaar mat keejo", n42776:"Wila ki mehfil", n42777:"woh husain mera hai"};
			var year = "2012";
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
				
				var year = "2004";
			var mirnoha={n42773:"Jab Imam Aayenge"};
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
		
		      var year = "others";
			var mirnoha={
				SJS001:"Aqd Ummul Banee'n se Ali ne kiya",
				SJS002:"Hai Nabi se mohabbat ka dawa jise",
				SJS003:"Jab Khuda ko Pukaara Ali Aagae",
				SJS004:"Shabbir Ye sab Duniya Tere Naam Se Zinda Hai",
				SJS005:"Wiladat ki khushiyaa'n manaane ke din hai"
			};
			nouhaOption+="<h4>"+year+"</h4>";
			for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
				
				
    }else if(reciter == "Shahid Baltistani"){
    	
			var year = "2012";
		var mirnoha={n42779:"Aap aajae jo maula",
				n42780:"Munazera"};
		nouhaOption+="<h4>"+year+"</h4>";
		for(var nouha in mirnoha){
				nouhaOption+="<div class = \"nouhas\" id = \""+year+"/"+mirnoha[nouha]+"\">"+mirnoha[nouha]+"</div>";
				
				}
			
    }

    
    /*$("#searchOption").select2({
    allowClear: true,
    placeholder: "Search Nouha",
    
  });      
	$("#searchOption").html(searchOption);*/
    $("#nouhas").html(nouhaOption);	
    $("#searchOption").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#nouhas *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
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


});

