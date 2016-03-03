var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it("can count from 1 to 100", function() {
		expect(fb.count(1, 10)).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz ");
		expect(fb.count(1, 5)).toBe("1 2 fizz 4 buzz ");
	});

});