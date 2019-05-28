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
