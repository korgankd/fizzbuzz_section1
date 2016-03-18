var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it("can count from 1 to 100", function() {
		expect(fb.count(1, 10)).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz ");
		expect(fb.count(1, 5)).toBe("1 2 fizz 4 buzz ");
		expect(fb.count(10, 15)).toBe("buzz 11 fizz 13 14 fizzbuzz ");
		expect(fb.count(25, 35)).toBe("buzz 26 fizz 28 29 fizzbuzz 31 32 fizz 34 buzz ");
	});

	it("replaces multiples of 3 with fizz", function() {
		expect(fb.replace(3)).toBe("fizz ");
		expect(fb.replace(6)).toBe("fizz ");
		expect(fb.replace(9)).toBe("fizz ");
		expect(fb.replace(12)).toBe("fizz ");
		expect(fb.replace(99)).toBe("fizz ");
	});

	it("replaces multiples of 5 with buzz", function() {
		expect(fb.replace(5)).toBe("buzz ");
		expect(fb.replace(10)).toBe("buzz ");
		expect(fb.replace(20)).toBe("buzz ");
		expect(fb.replace(25)).toBe("buzz ");
		expect(fb.replace(85)).toBe("buzz ");
	});

	it("replaces multiples of 3 and 5 with fizzbuzz", function() {
		expect(fb.replace(15)).toBe("fizzbuzz ");
		expect(fb.replace(30)).toBe("fizzbuzz ");
		expect(fb.replace(45)).toBe("fizzbuzz ");
		expect(fb.replace(345)).toBe("fizzbuzz ");

	});

	it("doesn't replace non multiples of 3 and 5", function() {
		expect(fb.replace(4)).toBe("4 ");
		expect(fb.replace(17)).toBe("17 ");
		expect(fb.replace(19)).toBe("19 ");
		expect(fb.replace(67)).toBe("67 ");
	});
});