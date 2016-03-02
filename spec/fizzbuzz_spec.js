var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it("can count from 1 to 100", function() {
		expect(fb.count(1, 10)).tobe("1 2 fizz 4 buzz fizz 7 8 fizz buzz");
	});

});