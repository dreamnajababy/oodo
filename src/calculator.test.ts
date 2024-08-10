import Calculator, { DEFAULT_ORDER, Items, Bill } from "./calculator";

describe("Calculator", () => {
  describe("Happy cases", () => {
    test("When customer order red set without membership then get no discount", () => {
      const items: Items = ["Red"];
      const isMembership = false;
      const expected: Bill = {
        order: { ...DEFAULT_ORDER, Red: 1 },
        totalPrice: 50,
      };
      const result = new Calculator().calculate(
        items,
        isMembership,
        DEFAULT_ORDER
      );
      expect(result).toEqual(expected);
    });
    test("When customer order red set with membership then get 10% discount", () => {
      const items: Items = ["Red"];
      const isMembership = true;
      const expected: Bill = {
        order: { ...DEFAULT_ORDER, Red: 1 },
        totalPrice: 45,
      };
      const result = new Calculator().calculate(
        items,
        isMembership,
        DEFAULT_ORDER
      );
      expect(result).toEqual(expected);
    });
    test("When customer order red set with orange set 2 item then customer get 5% discount", () => {
      const items: Items = ["Orange", "Orange", "Red"];
      const isMembership = false;
      const expectedBill: Bill = {
        order: { ...DEFAULT_ORDER, Orange: 2, Red: 1 },
        totalPrice: 275.5,
      };
      const result = new Calculator().calculate(
        items,
        isMembership,
        DEFAULT_ORDER
      );
      expect(result).toEqual(expectedBill);
    });
    test("When customer order orange set 2 item then customer get 5% discount.", () => {
      const items: Items = ["Orange", "Orange"];
      const isMembership = false;
      const expectedBill: Bill = {
        order: { ...DEFAULT_ORDER, Orange: 2 },
        totalPrice: 228,
      };
      const result = new Calculator().calculate(
        items,
        isMembership,
        DEFAULT_ORDER
      );
      expect(result).toEqual(expectedBill);
    });
    test("When customer order pink set more than 2 item then customer get 5% discount", () => {
      const items: Items = ["Pink", "Pink", "Pink"];
      const isMembership = false;
      const expectedBill: Bill = {
        order: { ...DEFAULT_ORDER, Pink: 3 },
        totalPrice: 228,
      };
      const result = new Calculator().calculate(
        items,
        isMembership,
        DEFAULT_ORDER
      );
      expect(result).toEqual(expectedBill);
    });
    test("When customer order orange set more than 2 and red set with membership then get 10% and 5% discount", () => {
      const items: Items = ["Orange", "Orange", "Orange", "Red"];
      const isMembership = true;
      const expectedBill: Bill = {
        order: { ...DEFAULT_ORDER, Orange: 3, Red: 1 },
        totalPrice: 350.55,
      };
      const result = new Calculator().calculate(
        items,
        isMembership,
        DEFAULT_ORDER
      );
      expect(result).toEqual(expectedBill);
    });
  });
  describe("Edge cases", () => {
    test("When customer order no item then customer should get 0 price", () => {
      const items: Items = [];
      const isMembership = false;
      const expectedBill: Bill = {
        order: DEFAULT_ORDER,
        totalPrice: 0,
      };
      const result = new Calculator().calculate(
        items,
        isMembership,
        DEFAULT_ORDER
      );
      expect(result).toEqual(expectedBill);
    });
  });
});
