class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const jon = new Person("jon");
console.log(jon);
