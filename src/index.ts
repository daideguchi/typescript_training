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

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(1, 2);

function sayHello(): void {
  console.log("hello");
}
let tmp: undefined;
let tmpNull: null;

const anotherAdd: (n1: number, n2: number) => number = function (
  num1,
  num2
): number {
  return num1 + num2;
};

const doubleNumber: (num: number) => number = (num) => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(num * 2);
}

doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});
