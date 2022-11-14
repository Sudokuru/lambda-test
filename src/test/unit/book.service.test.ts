const b = require('../../app/services/book.service');

describe("adder", () => {
    test('1,2 should result in 3', () => {
        expect(b.adder(1,2)).toBe(3);
    });
});

describe("callSomething", () => {
    test('should call mockFunction', () => {
        const mockFunction = jest.fn();
        b.callSomething(mockFunction);
        expect(mockFunction).toHaveBeenCalled();
    });
});