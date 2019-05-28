// Function
var Person = function (name, yearOfBirth, sex) {
  this.name = name;
  this.yearOfBirth = age;
  this.sex = sex;
};

var mark = new Person ('Mark', 1929, "male");

console.log(mark);

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
  //    Person.prototype.calculateAge = function {
          // 2019 - this.yearOfBirth;
          // };
