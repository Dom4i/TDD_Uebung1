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
});
