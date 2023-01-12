import {getMonth} from "./test1";

describe("tests for getPercents function", () => {
  it("should correct answer", () => expect(getMonth(12)).toBe('декабрь'));
});

describe("tests for getPercents function", () => {
    it('should incorrect answer', () => expect(getMonth('fsdf')).toBe('Введите число'));
});
describe("tests for getPercents function", () => {
    it('should incorrect answer', () => expect(getMonth(13)).toBe('неизвестно'));
});
