var T = new NTools();

function NTools(){

    var my = this;
    
    this.menuFinality = function(name){
        
            T.fade(
                {
                    is: "in",
                    time:99,
                    start: 0,
                    end: 1,
                    h: T.qAll(".navContents")[0]
                }
            );

    };


    this.q = function(key){ return document.querySelector("#"+key); };

    this.qAll = function(key){ return document.querySelectorAll(key); };

    this.preventEvent = function(input){

        input.addEventListener("submit", my.stopFormEvent, true);

    };

    this.stopFormEvent = function(event) { event.preventDefault(); };

    this.isFunctionCallMe = function(incoming){
        console.log("Optional function attempting to run it.");
        if (typeof incoming !== 'undefined' && typeof incoming === 'function'){
            console.log("Function valid, calling it now.");
            incoming();
        }
    };

    this.isDef = function(incoming){
        if (typeof incoming !== 'undefined' && incoming !== null){ return true; } else return false;
    };

    this.classesOnOff = function(itemEntity,toAddArray,toRemoveArray){
        my.toggleClasses(itemEntity,false,toRemoveArray);
        my.toggleClasses(itemEntity,true,toAddArray);
    };
    
    this.toggleClasses = function(itemEntity,toAdd,arrayOfNames){
        for(var x=0;x<arrayOfNames.length;x++){
            if (toAdd){
                itemEntity.classList.add(arrayOfNames[x]);
            } else {
                itemEntity.classList.remove(arrayOfNames[x]);
            }
        }
    };
    this.watchEvents = function(entry){
        for (var x=0;x<entry.e.length;x++){
            entry.id.addEventListener(entry.e[x], entry.res);
        }
    };


    this.fade = function(entry) {

        var el = entry.h;

            el.style.opacity = entry.start;

            var last = +new Date();

            var tick = function() {

                if (entry.is=="out"){
                    el.style.opacity = +el.style.opacity - (new Date() - last) / entry.time;
                } else {
                    el.style.opacity = +el.style.opacity + (new Date() - last) / entry.time;
                }

                last = +new Date();


                if (entry.is == "out"){
                    
                    if (+el.style.opacity > entry.end) {
                        var out = (window.requestAnimationFrame && requestAnimationFrame(tick) ||  setTimeout(tick, 16));
                    }

                } else {

                    if (+el.style.opacity < entry.end) {
                        var ins = (window.requestAnimationFrame && requestAnimationFrame(tick) ||  setTimeout(tick, 16)); 
                    }

                }


            };

        tick();

    };

    this.randInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    };
    
}