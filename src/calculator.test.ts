import Calculator, {
  defaultBill,
  Order,
  itemPriceLookupTable,
  Bill,
} from "./calculator";

describe("Calculator", () => {
  describe("Happy cases", () => {
    test("When customer order red set without membership then get no discount", () => {
      const order: Order = ["Red"];
      const expectedBill = { ...defaultBill, Red: 1 };
      const isMembership = false;
      const expected: Bill = {
        orderHistory: { ...defaultBill, Red: 1 },
        totalPrice: itemPriceLookupTable["Red"],
      };
      const result = new Calculator().calculate(
        order,
        isMembership,
        expectedBill
      );
      expect(result).toEqual(expected);
    });
    test.todo(
      "When customer order red set with membership then get 10% discount"
    );
    test.todo(
      "When customer order red set with orange set 2 item then customer get 5% discount"
    );
    test.todo(
      "When customer order orange set 2 item then customer get 5% discount."
    );
    test.todo(
      "When customer order orange set more than 2 item then customer get 5% discount"
    );
    test.todo(
      "When customer order orange set more than 2 item with membership then get 10% and 5% discount"
    );
  });
  describe("Edge cases", () => {
    test.todo("When customer order no item then customer should get 0 price");
  });
});
