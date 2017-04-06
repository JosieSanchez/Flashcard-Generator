
var inquirer = require ("inquirer");

function Basic(question, answer) {
    this.question = question;
    this.answer = answer;
}

Basic.prototype.printInfo = function() {
    console.log("Question: " + this.question + "\nAnswer: " + this.answer );
    
};

// 	var firstPresident = new BasicCard(
//  "Who was the first president of the United States?", "George Washington");

// this.printInfo = function () {
// 	console.log ("Question: " + this.front + "\nAnswer: " + this.back);
	


// "Who was the first president of the United States?",
// console.log(firstPresident.question); 
// "George Washington"
// console.log(firstPresident.answer);
//  };
// };

// ask question
// triggers response
// tell them if its incorrect
// game over
// your score is 
// incorrect answer
// each flash card is a constructor
// working with a inquirer








