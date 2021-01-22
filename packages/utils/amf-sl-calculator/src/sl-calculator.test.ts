import { SlCalculator } from "./sl-calculator";

const calculator: SlCalculator = new SlCalculator();

describe("sum()", () => {

    describe("When args are empty", () => {
        test("should return 0", () => {
            expect(calculator.sum()).toEqual(0);
        });
    });

    describe("When given an invalid arg", () => {
        test("should throw an error", () => {
            expect(() => calculator.sum(null as any)).toThrowError('invalid argument');
            expect(() => calculator.sum("hello" as any)).toThrow('invalid argument');
            expect(() => calculator.sum(undefined as any)).toThrow('invalid argument');

            expect(() => calculator.sum(8, null as any)).toThrow('invalid argument');
            expect(() => calculator.sum(3, 7, undefined as any)).toThrow('invalid argument');
            expect(() => calculator.sum("" as any, null as any, 4, 5)).toThrow('invalid argument');
            expect(() => calculator.sum(8, 9, 10, undefined as any, 18)).toThrow('invalid argument');

        });
    });


    describe("When there's just one arg", () => {
        test("should return the number", () => {
            expect(calculator.sum(6)).toEqual(6);
        });
    });

    describe("When given 2 or more valid args", () => {
        test("should return the sum of the args", () => {
            expect(calculator.sum(6, 15)).toEqual(21);
            expect(calculator.sum(6, 15, 3)).toEqual(24);
            expect(calculator.sum(6, 15, 3, 58)).toEqual(82);
        });
    });

})
