if(Titanium.App.Properties.getDouble("userHeight") !== null){
	$.inputHeight.setText(Titanium.App.Properties.getDouble("userHeight"));
}
if(Titanium.App.Properties.getDouble("userWeight") !== null){
	$.inputWeight.setText(Titanium.App.Properties.getDouble("userWeight"));
}
if(Titanium.App.Properties.getDouble("userJHeight") !== null){
	$.inputJumpHeight.setText(Titanium.App.Properties.getDouble("userJHeight"));
}


$.index.open();

$.inputHeight.addEventListener("change", function(e){
	Titanium.App.Properties.setDouble("userHeight",e.value);
});

$.inputWeight.addEventListener("change", function(e){
	Titanium.App.Properties.setDouble("userWeight",e.value);
});

$.inputJumpHeight.addEventListener("change", function(e){
	Titanium.App.Properties.setDouble("userJHeight",e.value);
});

$.inputKCal.addEventListener("change", function(e){
	var userHeight = Titanium.App.Properties.getDouble("userHeight") * 0.0254,
	userWeight = Titanium.App.Properties.getDouble("userWeight") * 0.453592,
	userJHeight = Titanium.App.Properties.getDouble("userJHeight") * 0.0254,
	calories = e.value;
	
	if( userHeight !== null && userWeight !== null && userJHeight !== null && e.value !== null){
		var work = userWeight * (userHeight + userJHeight),
		kCal = 426.4,
		calPerBurpee = work/kCal,
		internalWork = calPerBurpee*4; //.25 efficiency internal work to external mechanical work
		var avgO2ToBurpee = (userWeight * 3.5)/1000;
		var avgO2KcalToBurpee = avgO2ToBurpee * 5;
		var mechanicalBurpees = Math.round(calories/internalWork);
		var o2Burpees = Math.round(calories/avgO2KcalToBurpee);
		$.outputBurpees.setText("Between "+mechanicalBurpees+ " and " + o2Burpees + " Burpees");		
	} else if(userHeight === null){
		alert("Please enter a user height in the configure tab");
	} else if(userWeight !== null){
		alert("Please enter a user weight in the configure tab");
	} else if(userJHeight === null){
		alert("Please enter a user jump height in the configure tab");
	}
});
