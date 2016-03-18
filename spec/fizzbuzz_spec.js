var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it("can count from 1 to 100", function() {
		expect(fb.count(1, 10)).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz ");
		expect(fb.count(1, 5)).toBe("1 2 fizz 4 buzz ");
	});

	it("replaces multiples of 3 with fizz", function() {
		expect(fb.replace(3)).toBe("fizz ");
		expect(fb.replace(6)).toBe("fizz ");
	});

	it("replaces multiples of 5 with buzz", function() {
		expect(fb.replace(5)).toBe("buzz ");
		expect(fb.replace(10)).toBe("buzz ");
	});

	it("replaces multiples of 3 and 5 with fizzbuzz", function() {
		expect(fb.replace(15)).toBe("fizzbuzz ");
	});

	it("doesn't replace non multiples of 3 and 5", function() {
		expect(fb.replace(4)).toBe("4 ");
		expect(fb.replace(17)).toBe("17 ");
	});
});