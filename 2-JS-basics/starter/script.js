console.log ("Hello World");
// var massMark = 75; //kg
// var heightMark = 2; //meters
// var massJohn = 95; //kg
// var heightJohn = 1.9; //meters

// var bmiMark = massMark / heightMark^2;
// var bmiJohn = massJohn / heightJohn^2;

// console.log(bmiMark, bmiJohn);

// var isMarkBmiMore = bmiMark > bmiJohn;

// console.log("Is Mark's BMI greater than John's? " + isMarkBmiMore);
//--------------------

// var firstName = "John";
// var civilStatus = "single";
// if (civilStatus == "married") {
//     console.log(firstName + " is married.");
// } else {
//     console.log(firstName + " is not married.");
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log("John's team score " + scoreJohn + ". ", "Mike's team score " + scoreMike + ". ", "Mary's team score " + scoreMary + ". ");

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
// console.log("John's average team score is the highest at " + scoreJohn + " points. ");
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log("Mike's average team score is the highest at " + scoreMike + " points. ");
//     } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//         console.log("Mary's average team score is the highest at " + scoreMary + " points. ");
//     } else {
//         console.log("The average team score is a draw.")
//     }

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
