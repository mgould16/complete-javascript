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

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points
, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account
there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before,
log the average winner to the console. HINT: you will need the && operator to take the decision.
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var mike_team_average = (116+94+123)/3;
var john_team_average = (89+120+123)/3;
var mary_team_average = (97+134+105)/3;

if (mike_team_average > john_team_average && mike_team_average > mary_team_average) {
  console.log("Mike's team has a higher average, they average: " + mike_team_average);
} else if (john_team_average > mike_team_average && john_team_average > mary_team_average) {
  console.log("John's team has. the higher average, they average: " + john_team_average);
} else if (mary_team_average > mike_team_average && mary_team_average > john_team_average) {
  console.log("Mary's team has a higher average, they average:" + mary_team_average)
}
else {
  console.log("Mike, Mary and John have the same average, which is: " + mike_team_average);
}






















