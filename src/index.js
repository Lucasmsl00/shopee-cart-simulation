import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee cart!");

const item1 = await createItem("Mouse", 99.90, 1);
const item2 = await createItem("Keyboard", 320, 2);
const item3 = await createItem("MousePad", 50, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.calculateTotal(myCart);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);
