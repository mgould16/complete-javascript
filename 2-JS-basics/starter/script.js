console.log("Hello World!!")

var mark_height, john_height;
mark_height = 1.72;
john_height = 1.66;

var mark_weight, john_weight;
mark_weight = 76;
john_weight = 77;


//  bmi = mass / height^2
// bmi = mass / (height * height)

var mark_bmi = mark_weight / (mark_height^2)
var john_bmi = john_weight / (john_height^2)

// var mark_greater = mark_bmi > john_bmi

// console.log(mark_greater)


if (mark_bmi > john_bmi) {
  console.log("Mark has a greater BMI than John");
} else {
  console.log("John has a greater BMi than Mark")
};
