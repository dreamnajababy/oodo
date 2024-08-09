export const defaultBill = {
  Red: 0,
  Green: 0,
  Blue: 0,
  Yellow: 0,
  Pink: 0,
  Purple: 0,
  Orange: 0,
} as const;
type Price = number;
export type Bill = {
  orderHistory: Record<keyof typeof defaultBill, number>;
  totalPrice: Price;
};
export const itemPriceLookupTable = {
  Red: 50,
  Green: 40,
  Blue: 30,
  Yellow: 50,
  Pink: 80,
  Purple: 90,
  Orange: 120,
} as const;

export type Item = keyof typeof itemPriceLookupTable;
export type Order = Item[];

export default class Calculator {
  public calculate(
    items: Order,
    isMembership: boolean,
    bill: Record<string, number>
  ): Bill {
    let totalPrice = items.reduce(
      (totalPrice, itemName) => totalPrice + itemPriceLookupTable[itemName],
      0
    );
    if (isMembership) {
      totalPrice = totalPrice * 0.9;
    }
    return {
      orderHistory: bill,
      totalPrice,
    };
  }
}
