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


/*****************************
* CODING CHALLENGE 2
*/

// /*
// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points
// , while Mike's team scored 116, 94 and 123 points.

// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console.
// Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account
// there might be a draw (the same average score)

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before,
// log the average winner to the console. HINT: you will need the && operator to take the decision.
// If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

// GOOD LUCK 😀
// */

// var mike_team_average = (116+94+123)/3;
// var john_team_average = (89+120+123)/3;
// var mary_team_average = (97+134+105)/3;

// if (mike_team_average > john_team_average && mike_team_average > mary_team_average) {
//   console.log("Mike's team has a higher average, they average: " + mike_team_average);
// } else if (john_team_average > mike_team_average && john_team_average > mary_team_average) {
//   console.log("John's team has. the higher average, they average: " + john_team_average);
// } else if (mary_team_average > mike_team_average && mary_team_average > john_team_average) {
//   console.log("Mary's team has a higher average, they average:" + mary_team_average)
// }
// else {
//   console.log("Mike, Mary and John have the same average, which is: " + mike_team_average);
// }

// /*****************************
// * CODING CHALLENGE 3
// */

// /*
// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

// To tip the waiter a fair amount, John created a simple tip calculator (as a function).
// He likes to tip 20% of the bill when the bill is less than $50,
// 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bill + tip).

// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

// GOOD LUCK 😀
// */



// var tipArray = []
// var tips = function(bill) {
//   if (bill < 50) {
//     tip = bill * 0.2;
//     tipArray.push(tip);
//     return tipArray;
//   }
//   else {
//     return "no se";
//   }
// };

// console.log(tips(40));
// console.log(tips(5));

// var tipCalculator = function(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage =  0.1;
//   }
//   return percentage * bill
// }

// var tips = [tipCalculator(tipArray[0]),
//             tipCalculator(tipArray[1]),
//             tipCalculator(tipArray[2])];

// console.log(tips);

// var final_amount = [tips[0] + tipArray[0],
//                    tips[1] + tipArray[1],
//                    tips[2] + tipArray[2]];




// console.log(final_amount);

// Let's remember the first coding challenge where Mark and John compared their BMIs.
// Let's now implement the same functionality with objects and methods.
// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the
// object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI,
// together with the full name and the respective BMI. Don't forget they might have the same BMI.

// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

// GOOD LUCK 😀


// var mark = {
//   fullName: "Mark Alexander",
//   mass: 76,
//   height: 1.75,
//   calcBMI: function() {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//   }
// }


// console.log(mark.calcBMI());



// var john = {
//   fullName: "John Wayne",
//   mass: 84,
//   height: 1.67,
//   calcBMI: function() {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//   }
// }

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }

// * CODING CHALLENGE 5
// */

// /*
// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

// This time, John and his family went to 5 different restaurants.
// The bills were $124, $48, $268, $180 and $42.
// // John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is
// between $50 and $200, and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts
// (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


// EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

// 5. Implement the same functionality as before, this time using Mark's tipping rules
// 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
// 7. Calculate the average tip for each family
// 8. Log to the console which family paid the highest tips on average

// GOOD LUCK 😀

bills = [124, 48, 268, 180, 42]
tips = []
final = []

var tipCalculator = function(bill) {
  var tip;
  for (var i = 0; i < bill.length; i++) {
    if (bill[i] < 50) {
      tip = bill[i] * 0.2;
      tips.push(tip);

    } else if (bill[i] > 50 && i < 200) {
      tip = bill[i] * 0.15;
      tips.push(tip);

    } else {
      tip = bill[i] * 0.1;
      tips.push(tip);
      final.push(tip + bill[i]);
    }
  }
  return tips;
}

var finalAmount = function(tipCalculator) {
  var amount;
  for (var i = 0; i < tipCalculator.length; i++) {
    amount = (tipCalculator[i] + bills[i])
    final.push(amount);
  }
  return final;
}

console.log(finalAmount(tipCalculator(bills)))







