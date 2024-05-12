describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return "Spaceship lost forever." for an empty string: ""', function() {
		expect(calculator.add('')).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship lost forever." for input: "......"', function() {
		expect(calculator.add('')).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship lost forever." for input: "..\n...\n...."', function() {
		expect(calculator.add('')).toEqual("Spaceship lost forever.");
	});

	it('should return "[0,0]" for input: "X"', function() {
		expect(calculator.add('X')).toEqual([0,0]);
	});

	it('should return [0,5] for map', function() {
		expect(calculator.add("X.........\n..........\n..........\n..........\n..........\n..........")).toEqual([0,5]);
	});

	it('should return [9,5] for map', function() {
		expect(calculator.add(".........X\n..........\n..........\n..........\n..........\n..........")).toEqual([9,5]);
	});
});
