import Calculator, { DEFAULT_BILL, Order, CalculatedBill } from "./calculator";

describe("Calculator", () => {
  describe("Happy cases", () => {
    test("When customer order red set without membership then get no discount", () => {
      const order: Order = ["Red"];
      const isMembership = false;
      const expected: CalculatedBill = {
        orderHistory: { ...DEFAULT_BILL, Red: 1 },
        totalPrice: 50,
      };
      const result = new Calculator().calculate(
        order,
        isMembership,
        DEFAULT_BILL
      );
      expect(result).toEqual(expected);
    });
    test("When customer order red set with membership then get 10% discount", () => {
      const order: Order = ["Red"];
      const isMembership = true;
      const expected: CalculatedBill = {
        orderHistory: { ...DEFAULT_BILL, Red: 1 },
        totalPrice: 45,
      };
      const result = new Calculator().calculate(
        order,
        isMembership,
        DEFAULT_BILL
      );
      expect(result).toEqual(expected);
    });
    test("When customer order red set with orange set 2 item then customer get 5% discount", () => {
      const order: Order = ["Orange", "Orange", "Red"];
      const isMembership = false;
      const expectedBill: CalculatedBill = {
        orderHistory: { ...DEFAULT_BILL, Orange: 2, Red: 1 },
        totalPrice: 275.5,
      };
      const result = new Calculator().calculate(
        order,
        isMembership,
        DEFAULT_BILL
      );
      expect(result).toEqual(expectedBill);
    });
    test("When customer order orange set 2 item then customer get 5% discount.", () => {
      const order: Order = ["Orange", "Orange"];
      const isMembership = false;
      const expectedBill: CalculatedBill = {
        orderHistory: { ...DEFAULT_BILL, Orange: 2 },
        totalPrice: 228,
      };
      const result = new Calculator().calculate(
        order,
        isMembership,
        DEFAULT_BILL
      );
      expect(result).toEqual(expectedBill);
    });
    test("When customer order pink set more than 2 item then customer get 5% discount", () => {
      const order: Order = ["Pink", "Pink", "Pink"];
      const isMembership = false;
      const expectedBill: CalculatedBill = {
        orderHistory: { ...DEFAULT_BILL, Pink: 3 },
        totalPrice: 228,
      };
      const result = new Calculator().calculate(
        order,
        isMembership,
        DEFAULT_BILL
      );
      expect(result).toEqual(expectedBill);
    });
    test("When customer order orange set more than 2 and red set with membership then get 10% and 5% discount", () => {
      const order: Order = ["Orange", "Orange", "Orange", "Red"];
      const isMembership = true;
      const expectedBill: CalculatedBill = {
        orderHistory: { ...DEFAULT_BILL, Orange: 3, Red: 1 },
        totalPrice: 350.55,
      };
      const result = new Calculator().calculate(
        order,
        isMembership,
        DEFAULT_BILL
      );
      expect(result).toEqual(expectedBill);
    });
  });
  describe("Edge cases", () => {
    test("When customer order no item then customer should get 0 price", () => {
      const order: Order = [];
      const isMembership = false;
      const expectedBill: CalculatedBill = {
        orderHistory: DEFAULT_BILL,
        totalPrice: 0,
      };
      const result = new Calculator().calculate(
        order,
        isMembership,
        DEFAULT_BILL
      );
      expect(result).toEqual(expectedBill);
    });
  });
});
