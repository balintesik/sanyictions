var selectedTiles = 0;

var solutions = ["dog", "chicken", "cat", "pig"].sort();
var word1Synonyms = ["hound", "puppy", "canine", "cur"].sort();
var word2Synonyms = ["fowl", "biddy", "capon", "hen"].sort();
var word3Synonyms = ["puss", "kitten", "tom", "mouser"].sort();
var word4Synonyms = ["hog", "sow", "swine", "baconer"].sort();

const combinedArray = word1Synonyms.concat(word2Synonyms, word3Synonyms, word4Synonyms);
const words = shuffleArray(combinedArray);

const buttons = document.querySelectorAll('.tile');

buttons.forEach((button, index) => {
    button.textContent = words[index];
});

document.addEventListener('DOMContentLoaded', (event) => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const clickedTiles = document.querySelectorAll('.clicked');
            // Get the number of elements
            const count = clickedTiles.length;
            if(!button.classList.contains('clicked') && count < 4){
                button.classList.add('clicked');
            } else if(button.classList.contains('clicked')){
                button.classList.remove('clicked');
            }
            
        });
    });
});





// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function tileSelect() {
    console.log("tile select function")
};

function checkAnswer(){
    var answerList = [];
    var clickedTiles = document.querySelectorAll('.clicked');
    var numOfTiles = clickedTiles.length;

    for(let i = 0; i < numOfTiles; i++){
        answerList.push(clickedTiles[i].innerHTML)
    }
            
    
    var sortedAnswers = answerList.sort();
    console.log("Sorted answers: " + sortedAnswers);
    console.log("Sorted solution: " + word1Synonyms);
    if (JSON.stringify(sortedAnswers) === JSON.stringify(word1Synonyms)) {
        console.log("SUCCESS");
        removeWords();
    }

    

}

function removeWords() {
    $(".clicked").slideUp('fast', function() {
        $("#sol1").slideDown('fast');
    });
}
