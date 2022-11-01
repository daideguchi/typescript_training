"use strict";
// enum CoffeSize {
//   SHORT,
//   TALL,
//   GRANDE,
//   VENTI,
// }
// const coffee = {
//   hot: true,
//   size: CoffeSize.TALL,
// };
// coffee.size = CoffeSize.SHORT;
// console.log(CoffeSize.SHORT);
// let unionType: number | string = 10;
// type ClothSize = "small" | "medium" | "large";
// const apple = "hello";
// let clothSize: ClothSize = "medium";
// const cloth: {
//   color: string;
//   size: ClothSize;
// } = {
//   color: "white",
//   size: clothSize,
// };
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
function sayHello() {
    console.log("hello");
}
let tmp;
let tmpNull;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = (num) => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, (doubleNum) => {
    return doubleNum;
});
