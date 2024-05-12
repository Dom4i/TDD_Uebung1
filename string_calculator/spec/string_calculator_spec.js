describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return "Spaceship lost forever." for an empty string: ""', function() {
		expect(calculator.add('')).toEqual("Spaceship lost forever.");
	});
});
