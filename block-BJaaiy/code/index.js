const lodash = require("lodash");
let characters = ["a", "b", "c", "d", "e", "i"];
let chunk = lodash.chunk(characters, 2);
console.log(chunk);
console.log(lodash.difference([2, 3], [3, 4]));
console.log(lodash.compact([0, 1, false, 2, "", 3]));

var array = [1, 2, 3];
console.log(lodash.concat(array, 2, [3], [[4]]));
console.log(lodash.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// drop

console.log(lodash.drop([1, 2, 3]));
console.log(lodash.drop([1, 2, 3], 2));
console.log(lodash.drop([1, 2, 3], 5));
console.log(lodash.drop([1, 2, 3], 0));

// dropRight

console.log(lodash.dropRight([1, 2, 3]));
console.log(lodash.dropRight([1, 2, 3], 2));
console.log(lodash.dropRight([1, 2, 3], 5));
console.log(lodash.dropRight([1, 2, 3], 0));

// array

var array = [1, 2, 3];
console.log(lodash.fill(array, "a"));

// moment js/////////////////////////////////////////////////

const moment = require("moment");
let moment1 = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(moment1);

let day = moment().format("Do");
console.log(day);

let MAYear = moment().format("MMMM Do YY");
console.log(MAYear);

//stubtract///////////////////////

// add///
let addDays = moment().add(7, "days").calendar();
let addMonths = moment().add(7, "months").calendar();
let addYear = moment().add(7, "years").calendar();
console.log(addDays);
console.log(addMonths);
console.log(addYear);

// subtract ///

let subtractsDays = moment().subtract(7, "days").calendar();
let subtractsMonths = moment().subtract(7, "months").calendar();
let subtractsYear = moment().subtract(7, "years").calendar();
console.log(subtractsDays);
console.log(subtractsMonths);
console.log(subtractsYear);

// gap ////////////////////
let gap1 = moment("20141111", "YYYYMMDD").fromNow();
let gap2 = moment("20150911", "YYYYMMDD").fromNow();
console.log(gap1);
console.log(gap2);

// //////////////////////////
