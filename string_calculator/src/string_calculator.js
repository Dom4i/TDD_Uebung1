// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(map) {
	
	var x = 0;
	var y = 0;
	var foundShip = false;

	console.log(map.length); //debugging

	if(map.length === 0) {
		return "Spaceship lost forever.";
	}
	else {
		for (var i = map.length; i >= 0 ; i--) {
			if(map[i] === 'X') {
				foundShip = true; //y Koordinate des Schiffs gefunden
				console.log(x, y);
			}
			if(foundShip === false) {
				if (map[i] === '\n') {
					y++;
				}
			}
			else {
				if (map[i] === '.') {
					x++; //x Koordinate des Schiffs gefunden
					console.log(x, y);
				}
				else if (map[i] === '\n') {
					return [x,y];
				}
			}
		}

			return [x,y];
		
		
	}
};