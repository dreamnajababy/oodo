export const itemPriceLookupTable = {
  Red: 50,
  Green: 40,
  Blue: 30,
  Yellow: 50,
  Pink: 80,
  Purple: 90,
  Orange: 120,
} as const;
export const defaultBill: Bill = {
  Red: 0,
  Green: 0,
  Blue: 0,
  Yellow: 0,
  Pink: 0,
  Purple: 0,
  Orange: 0,
};
type Price = number;
export type Bill = Record<keyof typeof itemPriceLookupTable, number>;
export type CalculatedBill = {
  orderHistory: Bill;
  totalPrice: Price;
};

export type Item = keyof typeof itemPriceLookupTable;
export type Order = Item[];

export default class Calculator {
  public calculate(
    items: Order,
    isMembership: boolean,
    bill: Bill
  ): CalculatedBill {
    let totalPrice = items.reduce(
      (accumulatePrice, name) => accumulatePrice + itemPriceLookupTable[name],
      0
    );
    const updatedBill = items.reduce(
      (updatedBill, name) => {
        if (name in updatedBill) {
          updatedBill[name] += 1;
        }
        return updatedBill;
      },
      { ...bill }
    );
    const isDoubleItemPromotion = (updatedBill: Bill): boolean => {
      if (updatedBill["Orange"] >= 2) {
        return true;
      }
      if (updatedBill["Pink"] >= 2) {
        return true;
      }
      if (updatedBill["Green"] >= 2) {
        return true;
      }
      return false;
    };
    if (isMembership) {
      totalPrice = totalPrice * 0.9;
    }
    if (isDoubleItemPromotion(updatedBill)) {
      totalPrice = totalPrice * 0.95;
    }
    return {
      orderHistory: updatedBill,
      totalPrice,
    };
  }
}
