// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       console.log(item);
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = { ...product, quantity: 1 };
//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     // const { items } = this;
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];
//       if (productName === item.name) {
//         this.items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     return (this.items = []);
//   },

//   countTotalPrice() {
//     let total = 0;
//     for (const { price, quantity } of this.items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "banan", price: 100 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "banan", price: 100 });
// cart.add({ name: "banan", price: 100 });
// cart.add({ name: "banan", price: 100 });

// // console.table(cart.getItems());
// // cart.remove("lemon");
// // console.log(cart.getItems());
// // // cart.clear();
// // // console.log(cart.getItems());
// // console.log(cart.countTotalPrice());

// ------------
