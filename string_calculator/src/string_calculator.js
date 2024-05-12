// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(map) {
	var x = 0;
	var y = 0;
	var foundShip = false;

	console.log(map.length);

	if (map.length === 0) {
		return "Spaceship lost forever.";
	} else {

		for (var i = 0; i < map.length; i++) {
			if (map[i] === 'X') {
				foundShip = true;
				return [x,y];
			}
			else {
				return "Spaceship lost forever.";
				
			}
		}
	}
		
	
	
};
