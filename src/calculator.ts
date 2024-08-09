type Price = number;
export type Bill = Record<keyof typeof ITEM_PRICE_TABLE, number>;
export type CalculatedBill = {
  orderHistory: Bill;
  totalPrice: Price;
};
export type Item = keyof typeof ITEM_PRICE_TABLE;
export type Order = Item[];
export const ITEM_PRICE_TABLE = {
  Red: 50,
  Green: 40,
  Blue: 30,
  Yellow: 50,
  Pink: 80,
  Purple: 90,
  Orange: 120,
} as const;
export const DEFAULT_BILL: Bill = {
  Red: 0,
  Green: 0,
  Blue: 0,
  Yellow: 0,
  Pink: 0,
  Purple: 0,
  Orange: 0,
};
export default class Calculator {
  public calculate(
    items: Order,
    isMembership: boolean,
    bill: Bill
  ): CalculatedBill {
    let totalPrice = items.reduce(this.summarizeToPrice(ITEM_PRICE_TABLE), 0);
    const updatedBill = items.reduce(this.incrementItemInBill, {
      ...bill,
    });
    if (isMembership) {
      totalPrice = totalPrice * 0.9;
    }
    if (this.isDoubleItemPromotion(updatedBill)) {
      totalPrice = totalPrice * 0.95;
    }
    return {
      orderHistory: updatedBill,
      totalPrice,
    };
  }
  private summarizeToPrice(itemPriceLookupTable: Record<Item, Price>) {
    return (accumulatePrice: Price, name: Item) =>
      accumulatePrice + itemPriceLookupTable[name];
  }
  private incrementItemInBill(updatedBill: Bill, name: Item) {
    if (name in updatedBill) {
      updatedBill[name] += 1;
    }
    return updatedBill;
  }
  private isDoubleItemPromotion(updatedBill: Bill): boolean {
    const doublePromotionList: Item[] = ["Pink", "Orange", "Green"];
    return doublePromotionList.some((itemName) => updatedBill[itemName] >= 2);
  }
}
