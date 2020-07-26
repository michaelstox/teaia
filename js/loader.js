var loader = new Nav();

function Nav(){

    var my = this;
    var q = function(key){return document.querySelector("#"+key);};

    this.footer = function(){
        var builder = '<div class="fr pa3">';
                builder += '<div class="footerText dib pa3">© Teaía ∙ the art of tea ∙ Made in Canada ∙ 2019</div>';
                builder += '<a id="lang" class="dib ba pa3 br3 b--black-70 hover-bg-light-yellow no-underline black-90 ma1 pointer">EN</a>';
                builder += '<a href="shop.html" class="shopText dib ba pa3 br3 b--black-70 hover-bg-light-yellow no-underline black-90 ma1 pointer">Shop</a>';
                builder += '<a class="contactText dib ba pa3 br3 b--black-70 hover-bg-light-yellow no-underline black-90 ma1" href="contact.html">Contact</a>';
            builder += '</div>';
            q("footer").innerHTML = builder; 
    };

    this.header = function(){

        var header = '<title>Discovering the world of teas together ∙ Teaía</title>';
            header += '<meta name="description" content="Tachyons Component">';
            header += '<meta http-equiv="X-UA-Compatible" content="IE=Edge">';
            header += '<meta name="author" content="@mrmrs">';
            header += '<meta name="viewport" content="width=device-width, initial-scale=1">';
            header += '<link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">';
            header += '<link rel="stylesheet" href="css/s.css">';
            header += '<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>';
            header += '<script type="text/javascript" src="dpd.js"></script>';

        return header;
    };



    this.nav = function(selected){
        
        var arrowUseOrder = ["shop.html","inspire.html","index.html"];
        var forArrowUse = (typeof selected!=='undefined' ? selected + ".html" : arrowUseOrder[0]);
        var settingForArrowUse = "";
        for (var x = 0; x<arrowUseOrder.length; x++){

            if (forArrowUse == arrowUseOrder[x]){
                if (x==arrowUseOrder.length-1){
                    settingForArrowUse = arrowUseOrder[0];
                } else {
                    settingForArrowUse = arrowUseOrder[x+1];
                }
            }
        }
 
        var selectionTypes = {

            lang: {href:"",name:"EN", classes:" br3 pv2 f6 ph3 "},
            arrow: {href: settingForArrowUse ,name:"&#x2192;", classes:" ba f4 ba ph3 b--black-10 br3 pv2 "}

        };

        var res = '<nav class="pv2 flex justify-between bb  b--black-30 ">';
              
              res += '<a class="teaiaText no-select grow f5 f3-l black-70 hover-black-30 no-underline flex items-center pl4 pa3" href="index.html">';
                res += 'Tea<span class="light-blue ">í</span>a';
              res += '</a>';


            if (selected=="shop"){
                res += '<section class="navContents ph3 pt3 pb3">';
                  res += '<article class="measure-ns mw8  br2 center-m">';
                    res += '<div class="dt-ns dt--fixed-ns w-100">';

                        res += '<div class="dtc-ns v-mid ">';
                            res += '<div id="cartProceed" class="shopText no-select db no-underline pv3 pa3 tc f3  ba b--black-10 bg-white black-90 br4 bg-washed-green hover-bg-light-green"><span id="cartProceedCount">0</span> <span id="cartItemsText">Items in Cart</span> <span id="cartViewLink"></span></div>';
                        res += '</div>';

                    res += '</div>';
                  res += '</article>';
                res += '</section>';

            } else {

              res += '<div class="o-0 navContents flex-grow pa3 flex items-center">';

                for (var key in selectionTypes){
                    if (key=="arrow"){
                        if (selected == "shop"){
                            res += '<a id="arrowBtn" class="'+(typeof selected!=='undefined' && selected==key?"light-blue":"")+' dib hover-light-blue no-underline black-50 dim mr3 mr4-ns pointer '+selectionTypes[key].classes+'">'+selectionTypes[key].name+'</a>';
                        } else {
                            res += '<a id="arrowBtn" class="'+(typeof selected!=='undefined' && selected==key?"light-blue":"")+' dib hover-light-blue no-underline black-50 dim mr3 mr4-ns '+selectionTypes[key].classes+'" href="'+selectionTypes[key].href+'">'+selectionTypes[key].name+'</a>';
                        }
                    } else if (key=="lang") {
                    } else {
                        res += '<a class="'+(typeof selected!=='undefined' && selected==key?"light-blue":"")+' dn dib-l hover-light-blue no-underline black-50 dim mr3 mr4-ns '+selectionTypes[key].classes+'" href="'+selectionTypes[key].href+'">'+selectionTypes[key].name+'</a>';
                    }

                }


              res += '</div>';
            }

            res += '</nav>';
            if (selected=="shop"){

            }
        
        q("nav").innerHTML = res;

    };

}