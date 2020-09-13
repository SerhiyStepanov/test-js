// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = { ...product, quantity: 1 };

//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       // console.log(this.items[i]);
//       if (this.items[i].name === productName) {
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
//       // console.log(item);
//       total += price * quantity;
//     }
//     return total;
//   },
// };

// cart.add({ name: "chees", price: 30 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "chees", price: 30 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "chees", price: 30 });
// cart.add({ name: "banan", price: 20 });
// cart.add({ name: "chees", price: 30 });
// cart.add({ name: "chees", price: 30 });
// cart.add({ name: "cuconut", price: 75 });

// console.table(cart.getItems());

// // cart.getItems();
// // cart.remove(productName);
// // cart.clear();
// console.log(`Total price : ${cart.countTotalPrice()} $`);
// // console.log(cart.getItems());
// // console.log(cart);

//  перебор масива

const numbers = [2, 4, 25, 6, 57, 10, 11, 15, 20, 22, 30, 70, 45, 50];

const players = [
  { id: "player-1", name: "Mango", timePlayer: 200, points: 50, onLine: false },
  { id: "player-2", name: "Polly", timePlayer: 50, points: 100, onLine: false },
  { id: "player-3", name: "Pepsi", timePlayer: 150, points: 150, onLine: true },
  { id: "player-4", name: "Cola", timePlayer: 50, points: 100, onLine: false },
  { id: "player-5", name: "Kiwi", timePlayer: 100, points: 150, onLine: false },
];

console.table(players);

const product = [
  { name: "Kiwi", id: "001", prices: 50, tags: ["css", "js", "c#"] },
  { name: "banan", id: "002", prices: 10, tags: ["js", "html", "c#"] },
  { name: "coconut", id: "003", prices: 20, tags: ["css", "html", "c#"] },
  { name: "coca", id: "004", prices: 35, tags: ["css", "noda", "c#"] },
];

console.table(product);
