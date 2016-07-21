/*
* @description
*  This code takes a number grade from 0 through 100,
*  uses several conditions and assign a respective letter grade based on the number range.
*  and display the proper letter grade in the browser window
*  This code is for an assigment in my class
* @author
*  Muatasim Qazi
*/

// create a main function to call from the form button
function gradeConvert(form) {
	this.form = form;

	// declare variables that get hold of two nodes based on their id's
	var elGradeNum = document.getElementById("gradeNum");
	var elGradeChar = document.getElementById("gradeChar");

	// create a function that can be called to each time a statement is true
	var gradeMessage = function(num, char ) {

		// provided arguments values will be displayed in the window
		elGradeNum.textContent = num;
		elGradeChar.textContent = char;
	}

	// initialize the variable for letter grade
	var lettGrade = "";

	// capture number input for the number grade using the form in the html
	var numGrade = parseInt(this.form.inputbox.value);

	// check if the number grade is greater or equal to 88
	if (numGrade >= 88 && numGrade <= 100) {

		lettGrade = "A"; // assign the letter grade A
		gradeMessage(numGrade, lettGrade); // display the number and letter grades on the window

	// check if the number grade is greater than 80 but less tahn 87
	} else if(numGrade >= 80 && numGrade <= 87) {

		lettGrade = "B"; // assign the letter grade B
		gradeMessage(numGrade, lettGrade); // display the number and letter grades on the window

	// check if the number grade is between 68 and 79
	} else if (numGrade >= 68 && numGrade <= 79) {
		lettGrade = "C"; // assign the letter grade C
		gradeMessage(numGrade, lettGrade); // display the number and letter grades on the window
 
	// check if the number grade is between 60 and 67
	} else if (numGrade >= 60 && numGrade <= 67) {
		lettGrade = "D"; // assign the letter grade D
		gradeMessage(numGrade, lettGrade); // display the number and letter grades on the window

	// check if the number grade is less than 60
	} else if (numGrade < 60) {
		lettGrade = "F" // assign the letter grade F
		gradeMessage(numGrade, lettGrade); // display the number and letter grades on the window

	} else if (numGrade > 100 || typeof this.form.inputbox.value === 'string') {
	
		alert("Please enter a number that is between 0 and 100"); // prompt the user to follow the instructions
	}
		
// end of gradeConvert function
}
