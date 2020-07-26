
T.menuFinality("");
loader.footer();

var cartProceed = new CartProceed();
cartProceed.init();
function CartProceed(){
	var my = this;
	var count = 0;
	var firstTime=true;
	var counts = [0,0,0];
	var totalCost = 0;
	var bagCost = 5;
	var onStage=0;
	var langSwitch = "";
	var loaded = false;
	var handleCounts = function(whichIn){
		if (whichIn == "mintMorning"){
			counts[0]++;
		} else if (whichIn == "mintDay"){
			counts[1]++;
		} else if (whichIn == "mintNight"){
			counts[2]++;
		}
		updateTotalCost();
	};
	var updateCount = function(){
		count = counts[0] + counts[1] + counts[2];
	};
	this.init = function(){
		if (!loaded){
			langSwitch = T.q("lang");
			T.watchEvents({id: T.q("subNextBtn"), e: ["click"], res: arrowProceeded});
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

		T.q("shopHeader").innerHTML = "L'essence du menthe, la matin, la journée, ou la soirée";
		T.qAll("title")[0].innerHTML = "Decouvrir la monde du thé ensemble ∙ Teaía";
		classSwitch(".eachBag","5$ chaque 100gr sac");
		T.q("cartItemsText").innerHTML = "articles dans la panier";
		T.q("cartViewLink").innerHTML = "- Ouvrir";
		T.q("backSelection").innerHTML = "Retourner";
		classSwitch(".addToCart","Ajouter dans la panier");
		classSwitch(".mintAwakeningDesc","Pour la commencement du jour avec earl grey et l'essence du menthe.");
		classSwitch(".mintRevitalizeDesc","Augmenter votre système immunitaire avec cette groupe herbale du echinacea and menthe.");
		classSwitch(".mintDreamsDesc","Profitez d'un sommeil zen avec ce mélange équilibré de camomille et de menthe verte.");
		classSwitch(".nextBtn","Prochain");
		classSwitch(".yourCart","Votre Panier");
		classSwitch(".checkout","La caisse");

	};

	var switchEnglish = function(){
		
		T.q("shopHeader").innerHTML = "A hint of mint • Morning, day, night.";
		classSwitch(".addToCart","Add to cart");
		classSwitch(".mintAwakeningDesc","A gentle start to your morning with this earl grey and a subtle touch of mint.");
		classSwitch(".eachBag","5$ each 100gr bag");
		T.q("cartItemsText").innerHTML = "Items in Cart";
		T.q("cartViewLink").innerHTML = "- View Cart";
		T.q("backSelection").innerHTML = "- Go Back";
		classSwitch(".mintRevitalizeDesc","Refresh and increase your immune system in the day with this revitalizing herbal blend of echinacea and spearmint.");
		classSwitch(".mintDreamsDesc","Enjoy a zen-like sleep with this balanced blend of chamomile and spearmint.");
		classSwitch(".nextBtn","Next");
		classSwitch(".yourCart","Your Cart");
		classSwitch(".checkout","Checkout");

	};

	this.increaseCartCount = function(evt){
		console.log(evt);
		handleCounts(evt);
		updateCount();
		refreshCount();
		if (firstTime){
			T.watchEvents({id: T.q("cartProceed"), e: ["click"], res: proceedClicked});
			T.watchEvents({id: T.q("backSelection"), e: ["click"], res: proceedBack});
			
			rmWatchers();
	
			T.watchEvents({id: T.q("mintMorningCartCount"), e: ["change", "click", "keyup"], res: handleCountChange});
			T.watchEvents({id: T.q("mintDayCartCount"), e: ["change", "click", "keyup"], res: handleCountChange});
			T.watchEvents({id: T.q("mintNightCartCount"), e: ["change", "click", "keyup"], res: handleCountChange});



			firstTime=false;
			T.q("cartProceed").classList.add("pointer");
			NM.hideRmAnyNotices();
		}
		
		updateCartLinkText();
	};
	var updateCartLinkText = function(){
		if (onStage==0){
			T.q("cartViewLink").innerHTML = " - View Cart";
		} else if (onStage==1){
			T.q("cartViewLink").innerHTML = " - Checkout";
		}

	};
	var rmWatchers = function(){
		console.log("RM WATCHERS");
		T.watchEvents({id: T.q("mintMorningCartRm"), e: ["click"], res: morningRm});
		T.watchEvents({id: T.q("mintDayCartRm"), e: ["click"], res: dayRm});
		T.watchEvents({id: T.q("mintNightCartRm"), e: ["click"], res: nightRm});
	};
	var morningRm = function(){
		console.log("Monrnig remove");	
		counts[0]=0;
		updateCount();
		updateTotalCost();
		refreshCount();
		proceedClicked();
		allZeroCheck();
	};
	var dayRm = function(){
		counts[1]=0;
		updateCount();
		updateTotalCost();
		refreshCount();
		proceedClicked();
		allZeroCheck();
	};
	var nightRm = function(){
		counts[2]=0;
		updateCount();
		updateTotalCost();
		refreshCount();
		proceedClicked();
		allZeroCheck();
	};
	var allZeroCheck = function(){
		console.log("All zero check");
		if (counts[0]==0 && counts[1]==0 && counts[2]==0){
			console.log("Was all zeros");
			T.q("cartViewLink").innerHTML = "";
			proceedBack();
		}
	};
	var refreshCount = function(){
		T.q("cartProceedCount").innerHTML = count;
	};
	var proceedBack = function(){
		onStage=0;
		T.q("viewingCart").style.display="none";
		T.q("selectingProducts").style.display="";
		updateCartLinkText();
	};
	var arrowProceeded = function(){
		console.log("ARRORWED");
		if (count==0){
			var noticeBundle = {

		        id: "arrowNotice",
		        icon: '',
		        location: "top-bottom-2-m",
		        txtClass: "",
		        text: 'You have no items in your cart yet',
		        colour: "bg-washed-yellow br3 ba b--black-10",
		        type: "static",
		        fade: true,
		        skippable: true,
		        beLinkNow: false

			};
	        NM.makeNotice(noticeBundle,function(){});
		} else {
			proceedClicked();
		}
	};
	var proceedClicked = function(){
		onStage=1;
		T.q("viewingCart").style.display="";
		T.q("selectingProducts").style.display="none";
		if (counts[0]!==0){
			T.q("mintMorningCart").style.display="";
		} else {
			T.q("mintMorningCart").style.display="none"; 
		}
		T.q("mintMorningCartCount").value = counts[0];
		T.q("mintMorningCartTotal").innerHTML = counts[0] + " x "+ bagCost + "$ = " + bagCost*counts[0] + " $";

		if (counts[1]!==0){
			T.q("mintDayCart").style.display="";
		} else {
			T.q("mintDayCart").style.display="none"; 
		}
		T.q("mintDayCartCount").value = counts[1];
		T.q("mintDayCartTotal").innerHTML = counts[1] + " x "+ bagCost + "$ = " + bagCost*counts[1] + " $";

		if (counts[2]!==0){
			T.q("mintNightCart").style.display="";
		} else {
			T.q("mintNightCart").style.display="none"; 
		}
		T.q("mintNightCartCount").value = counts[2];
		T.q("mintNightCartTotal").innerHTML = counts[2] + " x "+ bagCost + "$ = " + bagCost*counts[2] + " $";

		T.q("cartTotal").innerHTML = "Total = " + totalCost + "$";

		updateCartLinkText();
		allZeroCheck();
	};

	var handleCountChange = function (evt) {
		console.log(evt.target);
		var MAX_ITEMS = 30;
		var handleType = -1;
		
		if (evt.target.id == "mintMorningCartCount"){handleType=0;}
		else if (evt.target.id == "mintDayCartCount"){handleType=1;}
		else if (evt.target.id == "mintNightCartCount"){handleType=2;}

		if (evt.target.value > MAX_ITEMS) { console.log("larget then max!"); 
			evt.target.value = counts[handleType];
		} else {
			console.log("update value");
			counts[handleType] = evt.target.value;
		}
		updateTotalCost();
		proceedClicked();

	};

	var updateTotalCost = function(){
		totalCost = (counts[0]*bagCost) + (counts[1]*bagCost) + (counts[2]*bagCost);
	};


}

var television = new Television();
television.init({
	id:"mintMorning",
	tvContents:'<div class="db tc">🌄</div> <span class="addToCart db f4 pt3">Add to cart</span>',//"&#127861;",
	tvContentClasses:"black-70 large",
	offCallback: cartProceed.increaseCartCount,
	onCallback: cartProceed.increaseCartCount,
	offCallbackTime:0,
	onCallbackTime:0
});

var television2 = new Television();
television2.init({
	id:"mintDay",
	tvContents:'<span class="db tc">🌞</span> <span class="addToCart db f4 pt3">Add to cart</span>',//"&#127861;",
	tvContentClasses:"black-70 large",
	offCallback: cartProceed.increaseCartCount,
	onCallback: cartProceed.increaseCartCount,
	offCallbackTime:0,
	onCallbackTime:0
});


var television3 = new Television();
television3.init({
	id:"mintNight",
	tvContents:'<span class="db tc">🌜</span> <span class="addToCart db f4 pt3">Add to cart</span>',//"&#127861;",
	tvContentClasses:"black-70 large",
	offCallback: cartProceed.increaseCartCount,
	onCallback: cartProceed.increaseCartCount,
	offCallbackTime:0,
	onCallbackTime:0
});
