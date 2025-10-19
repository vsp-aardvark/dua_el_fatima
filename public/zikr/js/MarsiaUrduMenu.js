$(document).ready(function () {

	var reciter = "";
	$("#heading").html("<center>" + reciter + "</center>")
	var nouhaOption = "";


	var year = "سفر امام حسین (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"safar\">"+year+"</div>";
    nouhaOption += "<div  id=\"safarList\" style=\"display:none\">";
	var mirnoha = {
		n8: "گھر سے جب بہرِ سفر سیدِ عالم نکلے",
		n1: "دشت غربت میں وطن سے شہِ دیں جاتے ہیں",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "شہزادی فاطمہ زہرا (ص)";
    nouhaOption+="<div class=\"hidelist\" id=\"sfatima\">"+year+"</div>";
    nouhaOption += "<div  id=\"sfatimaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "بلقیس پاسباں ہے یہ کس کی جناب ہے",
		n2: "بستر سے تھر تھرا کے اُٹھیں تھام کر عصا",
		n3: "رو کے کہتی تھی فاطمہ زہرا",
		n4: "فرزندوں کو پھر فاطمہ زہرا نے بلایا",
		n5: "کہتی تھی رو کے زینبِ نالاں جواب دو",
		n6: "پدر کی یاد میں روتی تھی فاطمہ زہرا",

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";


	year = "امام علی (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"iali\">"+year+"</div>";
    nouhaOption += "<div  id=\"ialiList\" style=\"display:none\">";
	var mirnoha = {
		IMA1: "آہوئے کعبۂ قربانیٔ داور ہے حسین",
		IMA: "ائے حیدر یو رحلتِ حیدر کی یہ شب ہے",
		n3: "ائے روزہ دارو آہ و بُکا کے یہ روز ہیں",
		n4: "حیدر بخدا عقدہ کشائے دوسرا ہے",
		n5: "ایماں کی جان کیا ہے محبت علی کی ہے",

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "پسران مسلم (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"pisaraan\">"+year+"</div>";
    nouhaOption += "<div  id=\"pisaraanList\" style=\"display:none\">";
	var mirnoha = {
		n1: "دربار میں جب کٹ کے یتیموں کے سر آئے",
		n2: "پردیس میں مسلمؑ کے یتیموں پہ جفا ہے",


	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "حضرت مسلم (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"hmuslim\">"+year+"</div>";
    nouhaOption += "<div  id=\"hmuslimList\" style=\"display:none\">";
	var mirnoha = {
		n1: "انساں کیلئے موت ہے غم بے وطنی کا",
		n2: "مسلم پہ لعینوں کی چڑھائی ہے سحر سے",



	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "محرم ۱-۲-۳";
    nouhaOption+="<div class=\"hidelist\" id=\"123Moharram\">"+year+"</div>";
    nouhaOption += "<div  id=\"123MoharramList\" style=\"display:none\">";
	var mirnoha = {
		n1: "ائے مومنو حسین سے مقتل قریب ہے",
		n2: "کسی بیمار نے خط اپنے مسیحا کو لکھا",
		n3: "مسافروں کی مدینے میں جب رسید آئی",
		n4: "رن میں جب شہ کی طرف سے حُرِ دیندار آیا",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "عون و محمد (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"saonmohd\">"+year+"</div>";
    nouhaOption += "<div  id=\"saonmohdList\" style=\"display:none\">";
	var mirnoha = {
		n0: "یہ ذکر ابھی تھا کہ صدا رونے کی آئی",
		n1: "جب زینبِ غریب کے رن میں پسر لڑے",
		n2: "اُمت پہ پسر اپنے فدا کرتی ہے زینب",



	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";


	year = "علی اصغر (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"sasghar\">"+year+"</div>";
    nouhaOption += "<div  id=\"sasgharList\" style=\"display:none\">";
	var mirnoha = {
		n1: "آہوئے کعبۂ قربانیٔ داور ہے حسین",
		n2: "بانو کے شیر خوار کو ہفتم سے پیاس ہے",
		n3: "بانو پچھلے پہر اصغر کے لئے روتی ہے",
		n4: "ہائے کس پیکس و مظلوم کا یہ ماتم ہے",
		n5: "لومومنو خلاصہ سُنو اِس بیان کا",
		n6: "رن میں اَبرو کماں کی آمد ہے",
		n7: "روانہ نہرِ لبن کو جو شیر خوار ہوا",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";


	year = "علی اکبر (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"sakbar\">"+year+"</div>";
    nouhaOption += "<div  id=\"sakbarList\" style=\"display:none\">";
	var mirnoha = {
		n2: "دشتِ بلا میں گم علی اکبر کی لاش ہے",
		n3: "کسی کا خانہ اُمید بے چراغ نہ ہو",
		n4: "مالک سے بھرے گھر کے اُجڑ جانے کو پوچھو",
		n5: "پدر کی موت ہے مرنا جوان بیٹے کا",
		n6: "ِرن سے جب کھا کے سناں اکبر ذیشاں آئے",

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "شہزادے قاسم (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"sqaasim\">"+year+"</div>";
    nouhaOption += "<div  id=\"sqaasimList\" style=\"display:none\">";
	var mirnoha = {
		n1: "نرغہ ہے دلبرِ حسنِ سبز پوش پر",
		n2: "روتے تھے دھاڑیں مار کے ناموسِ شاہِ دیں",
		n3: "زخمی جو رن میں قاسمِ گل پیرہن ہوا",
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "مولا عباس (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"mabbas\">"+year+"</div>";
    nouhaOption += "<div  id=\"mabbasList\" style=\"display:none\">";
	var mirnoha = {
		n1: "جب ابنِ بوتراب بروئے زمیں گرا",
		n11:"جب گرے رن میں باوفا عباس",
		n12: "جب قتل کیا نہر پہ سقائے حرم کو",
		n2: "جب صدرزیں سے گر پڑے عباسِ باوفا",
		n3: "جب اِذن پانی لانے کا عباس کو ملا",
		n4: "اہلِ حرم کا مونس و غم خوار مر گیا",
		n5: "جب کٹ گئے دریا پہ علمدار کے بازو",

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام حسین (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"ihussain\">"+year+"</div>";
    nouhaOption += "<div  id=\"ihussainList\" style=\"display:none\">";
	var mirnoha = {
		n1: "ابنِ علی جو باغِ رسالت لُٹا چکا",
		n2: "اعدا سے کہہ رہے تھے یہ مولا غریب ہوں",
		n3: "ایک جاں لاکھ خریدار عياذاً باللّٰه",
		n4: "جب نوجواں پسر شۂ دیں سے جُدا ہوا",
		n5: "جب پریشاں ہوئی مولا کی جماعت رن میں",
		n6: "جب خاتمہ بخیر ہوا فوجِ شاہ کا",
		n7: "نرغہ ہوا حسین پہ جو فوجِ شام کا",
		n8: "سب تھم گئے مگر نہ تھما شمرِ بد شیم",
		n9: "زخمی جو رن میں فاطمہ کا گلبدن ہوا",

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "زیارت امام حسین (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"zihussain\">"+year+"</div>";
    nouhaOption += "<div  id=\"zihussainList\" style=\"display:none\">";
	var mirnoha = {
		n1: "لکھتے ہیں راویانِ جگر سوز یہ کلام",

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "شہزادی سکینہ (ص)";
    nouhaOption+="<div class=\"hidelist\" id=\"ssakina\">"+year+"</div>";
    nouhaOption += "<div  id=\"ssakinaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "بانو سے دمبدم یہ سکینہ کا تھا بیاں",
		n2: "بانو کی آج کس لئے سنسان گود ہے",
		n3: "جب داغِ بیکسی نہ سکینہ اُٹھا سکی",
		n4: "کہتی تھی رن میں آ کے سکینہ جواب دو",
		n5: "روکر کہا یہ ماں نے کہ دلبر جواب دو",
		n6: "زنداں میں مقید ہوئے جسدم حرمِ شاہ",
		n7: "اللّہ کیا مہیب یتیمی کی رات ہے",
		n8: "جب گل ہوا چراغِ حرم قیدِ شام میں",

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "مولا سجّاد (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"isajjad\">"+year+"</div>";
    nouhaOption += "<div  id=\"isajjadList\" style=\"display:none\">";
	var mirnoha = {
		n1: "قید خانے میں تلاطم ہے کہ ہند آتی ہے",
		n2: "شہید سے کوئی شمشیر کا مزہ پوچھے",
		n3: "شاہِ والا نے شہادت کا سر انجام کیا",

	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "دربار";
    nouhaOption+="<div class=\"hidelist\" id=\"darbar\">"+year+"</div>";
    nouhaOption += "<div  id=\"darbarList\" style=\"display:none\">";
	var mirnoha = {
		n1: "آمد ہے اہلبیتِ پیمبر کی شام میں",
		n2: "جب لٹ کے کربلا سے اسیرِ ستم چلے",
		n3: "جب محفلِ یزید میں داخل حرم ہوئے",
		n4: "محشر کی صبح آج نمایاں ہے شام میں",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام رضا (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"iraza\">"+year+"</div>";
    nouhaOption += "<div  id=\"irazaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "آج امامِ رضا شہید ہوئے",
		n2: "مومنو آج خراساں میں ہے تازہ ماتم",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "شہزادی زینب (ص)";
    nouhaOption+="<div class=\"hidelist\" id=\"szainab\">"+year+"</div>";
    nouhaOption += "<div  id=\"szainabList\" style=\"display:none\">";
	var mirnoha = {
		n1: "غربت میں کس نے کی ہے رفاقت حسین کی",
		n2: "عزیز و زینبِ مضطر کا آج ماتم ہے",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "شہزادی ام کسلوم (ص)";
    nouhaOption+="<div class=\"hidelist\" id=\"skulsoom\">"+year+"</div>";
    nouhaOption += "<div  id=\"skulsoomList\" style=\"display:none\">";
	var mirnoha = {
		n1: "اُمِ كلثوم خواہرِ زينب",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "چہلم اور واپسی";
    nouhaOption+="<div class=\"hidelist\" id=\"chehlum\">"+year+"</div>";
    nouhaOption += "<div  id=\"chehlumList\" style=\"display:none\">";
	var mirnoha = {
		n1: "بھیا میں بن تمھارے وطن کو نہ جاؤں گی",
		n2: "چہلم جو کربلا میں بہتر کا ہو چکا",
		n5: "قید سے چھٹ کے آئی ہے زینب",
		n3: "جب شاہ کو سفر میں بہت دن گزر گئے",
		n4: "ناگاه گزار قافلہ کا شہر میں ہوا",
		n6: "آج چہلم تمام ہوتا ہے",
		n7: "سُنا تھا جب سے کہ آتے ہیں سیدِ اکرم",
		n8: "درود پڑھ کے وطن کو چلا حسین کا لال",
		n9: "بلا اُٹھا کے حرم کربلا میں آتے ہیں",
		
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "رسولِ خدا (ص)";
    nouhaOption+="<div class=\"hidelist\" id=\"rasool\">"+year+"</div>";
    nouhaOption += "<div  id=\"rasoolList\" style=\"display:none\">";
	var mirnoha = {
		n1: "ائے مومنو یثرب میں عجب نوحہ گری ہے",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام حسن (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"ihassan\">"+year+"</div>";
    nouhaOption += "<div  id=\"ihassanList\" style=\"display:none\">";
	var mirnoha = {
		n1: "جس دم حسن کا زہر سے ٹکڑے جگر ہوا",
		n2: "مومنو خانۂ زہرا میں قیامت ہے آج",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام حسن عسکری (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"ihasasnaskari\">"+year+"</div>";
    nouhaOption += "<div  id=\"ihasasnaskariList\" style=\"display:none\">";
	var mirnoha = {
		n1: "شہرہ جہان میں حسنِ عسکری کا ہے",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "الوداع";
    nouhaOption+="<div class=\"hidelist\" id=\"alweda\">"+year+"</div>";
    nouhaOption += "<div  id=\"alwedaList\" style=\"display:none\">";
	var mirnoha = {
		n1: "ائے شاہِ کربلا تیری خدمت نہ ہو سکی",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام محمد باقر (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"ibaqar\">"+year+"</div>";
    nouhaOption += "<div  id=\"ibaqarList\" style=\"display:none\">";
	var mirnoha = {
		n1: "ہے قصد کچھ فضائلِ باقر رقم کروں",
		n2: "باقر بھی تھے شریک شہنشاہ تشنہ لب",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام جعفر صادق (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"isadiq\">"+year+"</div>";
    nouhaOption += "<div  id=\"isadiqList\" style=\"display:none\">";
	var mirnoha = {
		n1: "بے چین دل تھے حضرتِ باقر کی یاد میں",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام موسیٰ کاظم (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"ikazim\">"+year+"</div>";
    nouhaOption += "<div  id=\"ikazimList\" style=\"display:none\">";
	var mirnoha = {
		n1: "سر پیٹو آج موسیٔ جعفر ہوا شہید",
		n2: "زندانِ غم تھا موسیٔ کاظم کے واسطے",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام محمد تقی (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"itaqi\">"+year+"</div>";
    nouhaOption += "<div  id=\"itaqiList\" style=\"display:none\">";
	var mirnoha = {
		n1: "کیا حال ہو رضا کے جگر بند کا بیاں",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "امام علی نقی (ع)";
    nouhaOption+="<div class=\"hidelist\" id=\"inaqi\">"+year+"</div>";
    nouhaOption += "<div  id=\"inaqiList\" style=\"display:none\">";
	var mirnoha = {
		n1: "کس عمر میں علی النقی بے پدر ہوئے",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	
	
	year = "شہزادی فضّہ(ص)"
	nouhaOption+="<div class=\"hidelist\" id=\"fizza\">"+year+"</div>";
    nouhaOption += "<div  id=\"fizzaList\" style=\"display:none\">";
	var mirnoha = {
		n1: 	"نام ہے نیک نام فضّہ کا",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "(ع) ابو طالب"
	nouhaOption+="<div class=\"hidelist\" id=\"abutalib\">"+year+"</div>";
    nouhaOption += "<div  id=\"abutalibList\" style=\"display:none\">";
	var mirnoha = {
		n1: 	"ائے کفیلِ نبی ابو طالب",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = 	"شہزادی فاطمہ صغریٰ (ص)"
	nouhaOption+="<div class=\"hidelist\" id=\"ssugra\">"+year+"</div>";
    nouhaOption += "<div  id=\"ssugraList\" style=\"display:none\">";
	var mirnoha = {
		n1: 		"بانو پے اور ایک مصیبت گزر گئی"	,
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	year = "شہزادی کبریٰ (ص)";
    nouhaOption+="<div class=\"hidelist\" id=\"skubra\">"+year+"</div>";
    nouhaOption += "<div  id=\"skubraList\" style=\"display:none\">";
	var mirnoha = {
		n1: "فاطمہ کبریٰ دخترِ شبیر",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";
	year = "(ص) أم البنين"
	nouhaOption+="<div class=\"hidelist\" id=\"sumbnin\">"+year+"</div>";
    nouhaOption += "<div  id=\"sumbninList\" style=\"display:none\">";
	var mirnoha = {
		n1: "أم البنين مادرِ عباس ذی وقار",
	
	}
	for (var nouha in mirnoha) {
		nouhaOption += "<div class = \"nouhas\" id = \"" + year + "/" + mirnoha[nouha] + "\">" + mirnoha[nouha] + "</div>";

	}nouhaOption += "</div>";

	

	$("#nouhas").html(nouhaOption);
	$("#searchOption").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#nouhas *").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
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

$(document).on("click", ".nouhas", function () {

	var id = this.id;

	var url = id;

	window.location.href = "MarsiyeUrduLyrics.html?lyrics/urduMarsiye/" + url;

});


