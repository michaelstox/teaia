var LL = new Localize();
	LL.init();

function Localize(){
	var my = this;

	var localesList =
		[
			"af-ZA",
			"am-ET",
			"ar-AE",
			"ar-BH",
			"ar-DZ",
			"ar-EG",
			"ar-IQ",
			"ar-JO",
			"ar-KW",
			"ar-LB",
			"ar-LY",
			"ar-MA",
			"arn-CL",
			"ar-OM",
			"ar-QA",
			"ar-SA",
			"ar-SY",
			"ar-TN",
			"ar-YE",
			"as-IN",
			"az-Cyrl-AZ",
			"az-Latn-AZ",
			"ba-RU",
			"be-BY",
			"bg-BG",
			"bn-BD",
			"bn-IN",
			"bo-CN",
			"br-FR",
			"bs-Cyrl-BA",
			"bs-Latn-BA",
			"ca-ES",
			"co-FR",
			"cs-CZ",
			"cy-GB",
			"da-DK",
			"de-AT",
			"de-CH",
			"de-DE",
			"de-LI",
			"de-LU",
			"dsb-DE",
			"dv-MV",
			"el-GR",
			"en-029",
			"en-AU",
			"en-BZ",
			"en-CA",
			"en-GB",
			"en-IE",
			"en-IN",
			"en-JM",
			"en-MY",
			"en-NZ",
			"en-PH",
			"en-SG",
			"en-TT",
			"en-US",
			"en-ZA",
			"en-ZW",
			"es-AR",
			"es-BO",
			"es-CL",
			"es-CO",
			"es-CR",
			"es-DO",
			"es-EC",
			"es-ES",
			"es-GT",
			"es-HN",
			"es-MX",
			"es-NI",
			"es-PA",
			"es-PE",
			"es-PR",
			"es-PY",
			"es-SV",
			"es-US",
			"es-UY",
			"es-VE",
			"et-EE",
			"eu-ES",
			"fa-IR",
			"fi-FI",
			"fil-PH",
			"fo-FO",
			"fr-BE",
			"fr-CA",
			"fr-CH",
			"fr-FR",
			"fr-LU",
			"fr-MC",
			"fy-NL",
			"ga-IE",
			"gd-GB",
			"gl-ES",
			"gsw-FR",
			"gu-IN",
			"ha-Latn-NG",
			"he-IL",
			"hi-IN",
			"hr-BA",
			"hr-HR",
			"hsb-DE",
			"hu-HU",
			"hy-AM",
			"id-ID",
			"ig-NG",
			"ii-CN",
			"is-IS",
			"it-CH",
			"it-IT",
			"iu-Cans-CA",
			"iu-Latn-CA",
			"ja-JP",
			"ka-GE",
			"kk-KZ",
			"kl-GL",
			"km-KH",
			"kn-IN",
			"kok-IN",
			"ko-KR",
			"ky-KG",
			"lb-LU",
			"lo-LA",
			"lt-LT",
			"lv-LV",
			"mi-NZ",
			"mk-MK",
			"ml-IN",
			"mn-MN",
			"mn-Mong-CN",
			"moh-CA",
			"mr-IN",
			"ms-BN",
			"ms-MY",
			"mt-MT",
			"nb-NO",
			"ne-NP",
			"nl-BE",
			"nl-NL",
			"nn-NO",
			"nso-ZA",
			"oc-FR",
			"or-IN",
			"pa-IN",
			"pl-PL",
			"prs-AF",
			"ps-AF",
			"pt-BR",
			"pt-PT",
			"qut-GT",
			"quz-BO",
			"quz-EC",
			"quz-PE",
			"rm-CH",
			"ro-RO",
			"ru-RU",
			"rw-RW",
			"sah-RU",
			"sa-IN",
			"se-FI",
			"se-NO",
			"se-SE",
			"si-LK",
			"sk-SK",
			"sl-SI",
			"sma-NO",
			"sma-SE",
			"smj-NO",
			"smj-SE",
			"smn-FI",
			"sms-FI",
			"sq-AL",
			"sr",
			"sr-Cyrl-CS",
			"sr-Cyrl-ME",
			"sr-Cyrl-RS",
			"sr-Latn-BA",
			"sr-Latn-CS",
			"sr-Latn-ME",
			"sr-Latn-RS",
			"sv-FI",
			"sv-SE",
			"sw-KE",
			"syr-SY",
			"ta-IN",
			"te-IN",
			"tg-Cyrl-TJ",
			"th-TH",
			"tk-TM",
			"tn-ZA",
			"tr-TR",
			"tt-RU",
			"tzm-Latn-DZ",
			"ug-CN",
			"uk-UA",
			"ur-PK",
			"uz-Cyrl-UZ",
			"uz-Latn-UZ",
			"vi-VN",
			"wo-SN",
			"xh-ZA",
			"yo-NG",
			"zh-CN",
			"zh-HK",
			"zh-MO",
			"zh-SG",
			"zh-TW",
			"zu-ZA"
		];

	var fixList = ["en"];

	this.localesList = function(){return localesList; };

	this.localesListFixed = function(){ return fixList; };

	this.init = function(){
		if (window.Intl && typeof window.Intl === "object"){
			var these = Intl.DateTimeFormat.supportedLocalesOf(localesList);
			console.log(these);
			fixList = these;
		}
	};

	this.toLocaleDateStringSupportsLocales = function() {
		
		try {
		
			new Date().toLocaleDateString('i');
		
		} catch (e) {
		
			return e.name === 'RangeError';
		
		}

		return false;
	};
}