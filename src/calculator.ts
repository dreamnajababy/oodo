type Price = number;
export type Order = Record<keyof typeof ITEM_PRICE_TABLE, number>;
export type Bill = {
  order: Order;
  totalPrice: Price;
};
export type Item = keyof typeof ITEM_PRICE_TABLE;
export type Items = Item[];
export const ITEM_PRICE_TABLE = {
  Red: 50,
  Green: 40,
  Blue: 30,
  Yellow: 50,
  Pink: 80,
  Purple: 90,
  Orange: 120,
} as const;
export const DEFAULT_ORDER: Order = {
  Red: 0,
  Green: 0,
  Blue: 0,
  Yellow: 0,
  Pink: 0,
  Purple: 0,
  Orange: 0,
};
export default class Calculator {
  private MEMBER_DISCOUNT_RATE = 0.9;
  private DOUBLE_ITEMS_DISCOUNT_RATE = 0.95;

  public calculate(items: Items, isMembership: boolean, order: Order): Bill {
    let totalPrice = items.reduce(this.summarizeToPrice(ITEM_PRICE_TABLE), 0);
    const updatedOrder = items.reduce(this.incrementItemInBill, {
      ...order,
    });
    if (isMembership) {
      totalPrice *= this.MEMBER_DISCOUNT_RATE;
    }
    if (this.isDoubleItemsPromotion(updatedOrder)) {
      totalPrice *= this.DOUBLE_ITEMS_DISCOUNT_RATE;
    }
    return {
      order: updatedOrder,
      totalPrice,
    };
  }
  private summarizeToPrice(itemPriceLookupTable: Record<Item, Price>) {
    return (accumulatePrice: Price, name: Item) =>
      accumulatePrice + itemPriceLookupTable[name];
  }
  private incrementItemInBill(updatedBill: Order, name: Item) {
    if (name in updatedBill) {
      updatedBill[name] += 1;
    }
    return updatedBill;
  }
  private isDoubleItemsPromotion(updatedBill: Order): boolean {
    const doublePromotionList: Item[] = ["Pink", "Orange", "Green"];
    return doublePromotionList.some((itemName) => updatedBill[itemName] >= 2);
  }
}
