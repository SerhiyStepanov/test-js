const Car = function ({ brand, model, price, color } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.prototype.changeColor = function (newColor) {
  this.color = newColor;
};

const car1 = new Car({
  brand: "Audi",
  model: "Q-8",
  price: 40000,
  color: "blue",
});

const car2 = new Car({
  brand: "Reno",
  model: "Logan",
  price: 10000,
  color: "black",
});

const car3 = new Car({
  brand: "BMW",
  model: "M-5",
  price: 50000,
  color: "white",
});

car1.changePrice(750000);
car1.changeColor("green");

car2.changeColor("red");
car2.changePrice(25000);

console.log(`car1`, car1);
console.log(`car2`, car2);
console.log(`car3`, car3);
