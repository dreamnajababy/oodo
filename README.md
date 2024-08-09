Problem: Price
    Objectives:
    - if customer has member card then discount 10%
    - if order contains double or more of { orange, pink, green } then discount 5%
    Input:
    - Item[]
    - Membership
    - Item's Lookup Table
    Output:
    - Price
      Solution:
    - Using hashmap to be a lookup table for counting promotion and sum total
  Cases:
    * Happy
      - When customer order red set without membership then get no discount.
      - When customer order red set with membership then get 10% discount.
      - When customer order red set with orange set 2 item then customer get 5% discount.
      - When customer order orange set 2 item then customer get 5% discount.
      - When customer order orange set more than 2 item then customer get 5% discount.
      - When customer order orange set more than 2 item with membership then get 10% and 5% discount. => which discount should be apply first ?
    * Edge
      - When customer order no item then customer should get 0 price
