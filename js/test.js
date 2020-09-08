const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = { ...product, quantity: 1 };

    this.items.push(newProduct);
  },

  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      // console.log(this.items[i]);
      if (this.items[i].name === productName) {
        this.items.splice(i, 1);
      }
    }
  },

  clear() {
    return (this.items = []);
  },

  countTotalPrice() {
    let total = 0;
    for (const { price, quantity } of this.items) {
      // console.log(item);
      total += price * quantity;
    }
    return total;
  },
};

cart.add({ name: "chees", price: 30 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "chees", price: 30 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "chees", price: 30 });
cart.add({ name: "banan", price: 20 });
cart.add({ name: "chees", price: 30 });
cart.add({ name: "chees", price: 30 });
cart.add({ name: "cuconut", price: 75 });

console.table(cart.getItems());

// cart.getItems();
// cart.remove(productName);
// cart.clear();
console.log(`Total price : ${cart.countTotalPrice()} $`);
// console.log(cart.getItems());
// console.log(cart);
