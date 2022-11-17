const b = require('../../app/services/book.service');

describe("adder", () => {
    test('1,2 should result in 3', () => {
        expect(b.adder(1,2)).toBe(3);
    });
});

describe("multiplier", () => {
    test('2 times 3 should equal 6 and call adder 3 times', () => {
        const spy = jest.spyOn(b, 'adder');
        const result = b.multiplier(2, 3);

        expect(spy).toHaveBeenCalledTimes(3);
        expect(result).toBe(6);

        spy.mockRestore();
    });
});

describe("callSomething", () => {
    test('should call mockFunction', () => {
        const mockFunction = jest.fn();
        b.callSomething(mockFunction);
        expect(mockFunction).toHaveBeenCalled();
    });
});