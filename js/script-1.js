//   1 Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции - конструктора добавь метод getInfo()
//  , который возвращает строку со значениями свойств login и email объекта.
// // Write code under this line

// const Account = function (login, email = {}) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function (login, email) {
//   return `login :${this.login}, email :${this.email}`;
// };

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account("Mangozedog", "mango@dog.woof");
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account("Poly", "poly@mail.com");
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com';

//    2  Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число

// Добавь метод getInfo(), который,
//     выводит строку: User ${ имя }
// is ${ возраст } years old
// and has ${ кол - во фоловеров } followers

// Write code under this line
// const User = function (name, age, followers) {
//   this.name = name;
//   this.age = age;
//   this.followers = followers;
// };
// User.prototype.getInfo = function (name, age, followers) {
//   return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
// };

// console.log(typeof User);
// // 'function'

// const mango = new User("Mango", 2, 20);
// console.log(mango.getInfo());
// //  'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// // 'function'

// const poly = new User("Poly", 3, 17);
// console.log(poly.getInfo());

//    3   Напиши класс Storage, который будет создавать объекты для управления складом товаро
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих
