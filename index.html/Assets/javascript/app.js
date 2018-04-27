

// start with start button
// $("#startQuiz").click.hide();


// have a countdown clock from 10sec (1000*10) per question
function tenSeconds() {
    setTimeout(tenSeconds, 1000 * 10);
}
// remember guesses
var guesses = 0
// need a way to convey each question, an array
var multipleChoiceQs = [
    {
        question: "What is a group of Bats called?(a) batses, (b) Bat, (c) cauldron",
        correctAnswer: "c"
    },
    {
        question: "What is a group of Salamanders called? (a) torrent, (b) maelstorm, (c) blaze",
        correctAnswer: "b"
    },
    {
        question: "What is a group of Rhinos called? (a) crash, (b) thunder, (c) horn",
        correctAnswer: "a"
    }
];
console.log("these are the questions", multipleChoiceQs)
// get the array to show in the DOM

var showsOnTheScreen = document.getElementsByName('multipleChoiceQs');

// for loop to cycle through the questions and answers
var i;
for (i = 0; i < multipleChoiceQs.length; i++) {

}
console.log(multipleChoiceQs.length);
// reset clock after each guess to 10sec (1000*10)
setTimeout(tenSeconds, 1000 * 10); {
    // with new clock add new question
    setTimeout(multipleChoiceQs, 1000 * 10);
}
console.log("timer" + tenSeconds)
    // don't let the player pick more than one option
    (function radioControls() {
        var radios = document.getElementsByName('choice');
        console.log(radios);
        for (var i = 0; i < radios.length; i++) {
            radios[i].onclick = function () {
                document.getElementById('choiceLabel').innerText = this.value;

            }
        }
    })();
// Reveal the number of 
// questions that players answer correctly and incorrectly

// when time runs out the game ends 



