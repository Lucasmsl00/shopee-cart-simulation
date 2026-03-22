async function addItem(userCart, item) {
  console.log(`\nAdding ${item.name} to cart...`);
  if (userCart.push(item)) {
    console.log("Product added successfully");
  }
  //   userCart.push(item);
}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\nShopee cart total is: R$ ${result}`);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    console.log(
      `\nRemoving ${name} to cart...\nProduct removed successfully!`,
    );
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  // encontrando indicedo produto
  const indexFound = userCart.findIndex(
    (product) => product.name === item.name,
  );

  if (indexFound === -1) {
    console.log("\nItem not found.");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    console.log(`\nDecreasing ${userCart[indexFound].name} to cart...`)
    userCart[indexFound].quantity -= 1;
  } else {
    deleteItem(userCart, item.name);
  }
}

async function displayCart(userCart) {
  console.log("\nShopee cart list updated:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`,
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
