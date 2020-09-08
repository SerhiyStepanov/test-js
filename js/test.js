const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {},
  clear() {
    return (this.items = []);
  },
  countTotalPrice() {},
};

cart.add({ name: "apple", price: 50 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "banan", price: 100 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "banan", price: 100 });
cart.add({ name: "banan", price: 100 });
cart.add({ name: "banan", price: 100 });

console.table(cart.getItems());
cart.remove("lemon");
console.log(cart.getItems());
cart.clear();
console.log(cart.getItems());
// console.log(cart.countTotalPrice());
