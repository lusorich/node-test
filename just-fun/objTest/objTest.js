const person = {
  name: "Eugen",
  age: 27,
  haveGf: false,
  allInfo() {
    return `${this.name} + ${this.age} + ${this.haveGf}`;
  },
};

console.log(person.allInfo());

let { age } = person;
console.log(age);