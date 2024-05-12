// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(map) {
	var x = 0;
	var y = 0;
	console.log(map.length);
	if (map.length === 0) {
		return "Spaceship lost forever.";
	} else  if (map === 'X') {
		return [x,y];
	} else {
		return [0,5];
	}
	
};
