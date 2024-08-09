# Problem: Price Calculator

## Objectives:

- If the customer has a member card, then apply a 10% discount.
- If the order contains double or more of {orange, pink, green}, then apply a 5% discount.

## Input:

- `Item[]`
- `Membership`
- `Item's Lookup Table`

## Output:

- `Price`

## Solution:

- Use a hashmap as a lookup table for counting promotions and summing the total.

## Cases:

### Happy

- When the customer orders the red set without membership, they get no discount.
- When the customer orders the red set with membership, they get a 10% discount.
- When the customer orders the red set with 2 orange items, they get a 5% discount.
- When the customer orders 2 orange items, they get a 5% discount.
- When the customer orders more than 2 orange items, they get a 5% discount.
- When the customer orders more than 2 orange items with membership, they get both a 10% and 5% discount. _(Which discount should be applied first?)_

### Edge

- When the customer orders no items, the total price should be `0`.
