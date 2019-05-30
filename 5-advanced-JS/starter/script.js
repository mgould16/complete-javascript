// Function
var Person = function (name, yearOfBirth, sex) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.sex = sex;
  this.calculateAge =
    2019 - this.yearOfBirth;
};

var mark = new Person ('Mark', 1929, "male");
console.log(mark.calculateAge);




// console.log(mark);

// there are 2 ways of attaching a method to work out the age of a person instance. We can
  // 1/ add a method to the var Person,
  // var Person = function (name, yearOfBirth, sex) {
  //   this.name = name;
  //   this.yearOfBirth = age;
  //   this.sex = sex;
  //   this.calculateAge = function () {
  //     2019 - this.yearOfBirth;
  //   };
  // }
  // 2/ add the method to the Person prototype such that it works via inheritance of a prototype.
  //    Person.prototype.calculateAge = function () {
          // 2019 - this.yearOfBirth;
          // };

var currentTime = new Date();
var nowYear = currentTime.getFullYear();

var Film = function (title, year, director, rating) {
  this.title = title;
  this.year = year;
  this.director = director;
  this.rating = rating;
  this.age = nowYear - this.year;
};



var batman = new Film ("Batman", 1995, 'Wes Anderson', 4);
console.log(batman.year);


//new lecture on functions. we continue to use the arrayCalc function
// throughout the next few functions, to make use of iterating over an array
// and returning a new array, based off a "call back function"

var years = [1990, 1985, 1987, 1996, 2003, 1982];

// fn is a callback function. A callback is a function that is to be executed
// after another function has finished executing — hence the name ‘call back’

function arrayCalc(arr, fn) {
  var results = [];
  for (i = 0; i< arr.length; i++) {
    results.push(fn(arr[i]));
  };
  return results;
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18) {
    return Math.round(206.9 - (0.67* el));
  }
  else {
    return -1;
  }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);


























