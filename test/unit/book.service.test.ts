const b = require('../../app/services/book.service');

describe("adder", () => {
    test('1,2 should result in 3', () => {
        expect(b.adder(1,2)).toBe(3);
    });
});