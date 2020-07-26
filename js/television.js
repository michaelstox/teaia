
function Television(){
	var my = this;
	var tvOff=false, tvBuilt=false, ableToTurnOn=false;
	var noise;
	var tvBox, thisEntry;
	var tvContents, tvContentClasses;
	var offCallback, onCallback, offCallbackTime=0, onCallbackTime=0;
	this.init=function(entry){

		if (!tvBuilt){

            thisEntry = entry;
			tvBox = entry.id;
			
			tvContents = entry.tvContents;
			tvContentClasses = entry.tvContentClasses;

			if (typeof entry.offCallback!=='undefined'){
				offCallback = entry.offCallback;
				offCallbackTime = entry.offCallbackTime;
			}
			
			if (typeof entry.onCallback!=='undefined'){
				onCallback = entry.onCallback;
                onCallbackTime = entry.onCallbackTime;
			}

			T.q(tvBox).innerHTML = tV();
			noise = T.q(tvBox).childNodes[0].childNodes[0];
			


			noiseInit();

			T.watchEvents({id: T.q(tvBox).childNodes[0], e: ["click"], res: tvClicked});

		}

	};

	var tV = function(){
        var tV = "";
        if (thisEntry.id =="inspireTv"){
          tV = '<div class="tvBoxLarge pointer no-select grow pt4 pb4 relative ba b--black-10 br4 center bg-white" >';
        } else {
		  tV = '<div class="tvBox pointer no-select grow pt4 pb4 relative ba b--black-10 br4 center bg-white" >';
		}	
				tV += '<div class="w5-l w5-m h5-l h5-m w4 h4 noise br4 transform-center"></div>';
				
				tV += '<div class="w5-l w5-m h5-l h5-m w4 h4 o-10 bg-light-gray br4 transform-center"></div>';
				
				tV += '<div class="tvContents transform-center '+tvContentClasses+'">'+tvContents+'</div>';

			tV += '</div>';

		return tV;

	};


	var noiseInit = function(){


		setTimeout(function(){
			
			noiseFlutter();
			
			if (!tvOff){
				noiseInit();
			} else {
				ableToTurnOn=true;
			}

		},333);

	};

	var noiseFlutter = function(){
		var types = [
			'url("img/japanese-garden-in-portland.jpg")',
			'url("img/japanese-garden-in-portland.jpg")'
		];
        if (tvBox == "mintMorning" || tvBox == "mintDay" || tvBox == "mintNight"){
            types = [
                'url("img/frost.jpg")',
                'url("img/frost.jpg")'
            ];
        } else {
			
			if (noise.style.backgroundImage == types[0]){
				noise.style.backgroundImage = types[1];
			} else {
				noise.style.backgroundImage = types[0];
			}

		}
	};


	var tvClicked = function(){
		if (!tvOff){

			tvOff=true;
			T.fade(
				{
					is: "out",
					time:700,
					start: 0.4,
					end: 0.3,
					h: T.q(tvBox).childNodes[0].childNodes[0]
				}
			);
			

			T.classesOnOff(T.q(tvBox).childNodes[0].childNodes[2], ["green"],["black-50"]);
            

			setTimeout(function(){
				if (typeof offCallback === 'function'){
					offCallback(tvBox);
				}
			},offCallbackTime);

		} else if (ableToTurnOn) {

			tvOff=false;
			T.fade(
				{
					is: "in",
					time:700,
					start: 0.3,
					end: 0.4,
					h: T.q(tvBox).childNodes[0].childNodes[0]
				}
			);

			T.classesOnOff(T.q(tvBox).childNodes[0].childNodes[2], ["black-50"],[]);

			setTimeout(function(){
				if (typeof onCallback === 'function'){
					onCallback(tvBox);
				}
			},onCallbackTime);

			noiseInit();

		}

	};


}
