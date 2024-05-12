// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(map) {
	var x = 0;
	var y = 0;
	
	if (map.length === 0) {
		return "Spaceship lost forever.";
	} else  if (map === 'X') {
		return '[0,0]';
	}
	
};
