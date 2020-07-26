loader.footer();

var langs = new Langs();
langs.init();

function Langs(){
	var loaded = false;
	var langSwitch = "";

	this.init = function(){

		if (!loaded){
			langSwitch = T.q("lang");
			T.watchEvents({id: langSwitch, e: ["click"], res: handleLang});
			loaded=true;
		}

	};

	var handleLang = function(){

		if (langSwitch.innerHTML == "EN"){
			langSwitch.innerHTML = "FR";
			switchFrench();
		} else {
			langSwitch.innerHTML = "EN";
			switchEnglish();
		}

	};
	
	var classSwitch = function(classIs, textIn){
		
		var inspireTexts = T.qAll(classIs);
		for (var y=0;y<inspireTexts.length;y++){
			inspireTexts[y].innerHTML = textIn;
		}

	};

	var switchFrench = function(){

		T.q("indexHeader").innerHTML = "La thé specialisé creér avec passion";
		T.qAll("title")[0].innerHTML = "Decouvrir la monde du thé ensemble ∙ Teaía";
		classSwitch(".inspireText","Inspirations");
		classSwitch(".shopText","Webshop");
		classSwitch(".footerText", "© Teaía ∙ l'art du thé ∙ Fabriquer à Canada ∙ 2019");
		classSwitch(".teaiaText", 'Tea<span class="lightest-blue ">í</span>a');
		classSwitch(".firstSubText","Achetez du thé specialiser");
		classSwitch(".firstSubTextBody","Ajoutez des periodes de la relaxation dans votre journeé. Bouvez notre <i>essence de la menthe</i> ligne du thé par la <b>matin</b>, <b>journeé</b>, et <b>nuit</b>. ");
		classSwitch(".secondSubText","L'intersection de l'art et thé");
		classSwitch(".secondSubTextBody","Trouvez l'inspiration creatif par les photographs jolie dans cette <b>interaction artistique</b>, infuseé avec la relaxion. Un bon activité pour faire quand bouvoir la thé.");
		classSwitch(".thirdSubText","Biologique et sustainable");
		classSwitch(".thirdSubTextBody","Tous les mix du thé par Teaía et trouver propre avec passion pour les hautes standards pour un mondial belle et jolie.");

		var noticeBundle = {

	        id: "welcomeExploria",
	        icon: '',
	        location: "top-bottom-2-m right-2",
	        txtClass: "",
	        text: 'Bienvenue à Teaía. Par la continuation en utiliser ce site web, vous êtez accord avec notre utilisation de les cookies.',
	        colour: "bg-washed-yellow br3 ba b--black-10",
	        type: "static",
	        fade: true,
	        skippable: true,
	        beLinkNow: false

		};

       NM.makeNotice(noticeBundle, function(){});


	};

	var switchEnglish = function(){
		
		T.q("indexHeader").innerHTML = "Fine teas blended to perfection";
		T.qAll("title")[0].innerHTML = "Discovering the world of teas together ∙ Teaiía";
		classSwitch(".footerText", "© Teaía ∙ the art of tea ∙ Made in Canada ∙ 2019");
		classSwitch(".inspireText","Inspire");
		classSwitch(".shopText","Shop");
		classSwitch(".teaiaText", 'Tea<span class="lightest-blue ">í</span>a ∙ the art of tea');
		classSwitch(".firstSubText","Shop fine loose teas");
		classSwitch(".firstSubTextBody","Add some relaxation to your routine. Enjoy our <i>hint of mint</i> blend series <b>morning</b>, <b>day</b>, and <b>night</b>.");
		classSwitch(".secondSubText","Intersection of art and tea");
		classSwitch(".secondSubTextBody","Be inspired by incredible photographers in this <b>collage interaction playground</b>, infused relaxation inspiration. ");

		classSwitch(".thirdSubText","Organic and sustainable");
		classSwitch(".thirdSubTextBody","All Teaía blends are sourced meticulously to provide the <b>highest standards</b> for a sustainable and healthy world.");

		var noticeBundle = {

	        id: "welcomeExploria",
	        icon: '',
	        location: "top-bottom-2-m",
	        txtClass: "",
	        text: 'Welcome to Teaía. In using this site, you agree to cookie usage',
	        colour: "bg-washed-yellow br3 ba b--black-10",
	        type: "static",
	        fade: true,
	        skippable: true,
	        beLinkNow: false

		};

        NM.makeNotice(noticeBundle,function(){});

	};

}


T.menuFinality("");

var homeHandle = new HomeHandle();
	homeHandle.init();

var television = new Television();
television.init({
	id:"insertTv",
	tvContents:"",
	tvContentClasses:"black-50 large",
	offCallback: homeHandle.viewDisconnect
});


function HomeHandle(){
	var welcomeBuilt=false, activeNameViewing=false, currentDayName;

	this.init = function(){
		
		if (!welcomeBuilt){

        	welcomeBuilt=true;

			var noticeBundle = {

		        id: "welcomeExploria",
		        icon: '',
		        location: "top-bottom-2-m",
		        txtClass: "",
		        text: 'Welcome to Teaía. In using this site, you agree to cookie usage',
		        colour: "bg-washed-yellow br3 ba b--black-10",
		        type: "static",
		        fade: true,
		        skippable: true,
		        beLinkNow: false

			};

	        NM.makeNotice(noticeBundle,function(){});

		}

	};

}
