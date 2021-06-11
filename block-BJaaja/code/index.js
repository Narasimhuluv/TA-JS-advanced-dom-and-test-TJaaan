/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
// const name = 'chinna';
// console.log(name);

let count = 1;
// eslint-disable-next-line no-constant-condition
if (true) {
  count += 1;
}
console.log(count);

// 1)
let num = 10;

// eslint-disable-next-line no-plusplus
const increaseNumber = () => num++;
// eslint-disable-next-line no-plusplus
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

// 2)

const animalMethods = {
  // eslint-disable-next-line func-names
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary() {
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};

function createAnimal(location, numberOfLegs) {
  const obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

// eslint-disable-next-line no-unused-vars
function createDog(location, numberOfLegs, name, color) {
  const obj = createAnimal(location, numberOfLegs);
  // eslint-disable-next-line no-use-before-define
  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

// eslint-disable-next-line vars-on-top
// eslint-disable-next-line no-var
// eslint-disable-next-line vars-on-top
var dogsMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(dogsMethods, animalMethods);

// eslint-disable-next-line no-unused-vars
function createCat(location, numberOfLegs, name, colorOfEyes) {
  const obj = createAnimal(location, numberOfLegs);
  // eslint-disable-next-line no-use-before-define
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

let catsMethods = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(catsMethods, animalMethods);

// 3)

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// eslint-disable-next-line no-unused-vars
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// 4)

// eslint-disable-next-line no-unused-vars
function getFullName(user) {
  const { firstName } = user;
  const { lastName } = user;

  return `${firstName} ${lastName}`;
}
