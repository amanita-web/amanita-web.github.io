let guess;
let gameText = document.getElementById("gameText");
let round = 0;
let gameOver = false;
const solutions = [
    "apple", "bread", "chair", "table", "house", "plant", "water", "smile", "happy", "light",
  "sound", "clock", "stone", "grass", "cloud", "mouse", "phone", "paper", "heart", "sleep",
  "drink", "river", "beach", "fruit", "green", "white", "black", "sweet", "round", "clean",
  "quiet", "music", "laugh", "bread", "candy", "peace", "earth", "dream", "sharp", "watch",
  "dance", "smoke", "train", "sunny", "storm", "flame", "wheel", "smell", "fresh", "sunny"
];
let solution;

function revealAnswer(){
    if(solution == undefined){
        solution = generateSolution(solutions);
    }
gameText.textContent = `the answer was: ${solution}`;
}


function reset(){
    guess = "xxxxx";
    round = 0;
    gameOver = false;
    solution = undefined;
    gameText.textContent = "enter a 5 letter word";
    gameText.style.color = "white";
    for(i = 0; i < 5; i++){
        for(j = 0; j < 5; j++){
            tBlock = document.getElementById(`block${i}${j}`);
            tBlock.style.backgroundColor = "gray";
            tText = document.getElementById(`letter${i}${j}`);
            tText.textContent = "---";
        }
    }
    for(i = 0; i < 5; i++){
        tBlock = document.getElementById(`block5${i}`);
        tBlock.style.backgroundColor = "gray";
        tText = document.getElementById(`letter5${i}`);
        tText.textContent = "---";
    }
}

function generateSolution(solution){
    return solutions[Math.floor(Math.random() * solutions.length)];
}

function submitGuess(){
    if(solution == undefined){
        solution = generateSolution(solutions);
    }

    guessInput = document.getElementById("inputGuess");
    guess = guessInput.value;
    let length = guess.length;
    if(gameOver == false){
        if(length < 5 || length > 5){
            gameText.textContent = "that,s... not a 5 letter word......";
            return;
        }
        else{
            for(let i = 0; i < 5; i++){
                let tempLetter = document.getElementById(`letter${round}${i}`);
                tempLetter.textContent = guess.charAt(i);
                for(let j = 0; j < 5; j++){
                    if(guess.charAt(i) == solution.charAt(j)){
                        let tempBlock = document.getElementById(`block${round}${i}`);
                        tempBlock.style.backgroundColor = "yellow";
                    } 
                }
                if(solution.charAt(i) == guess.charAt(i)){
                    let tempBlock = document.getElementById(`block${round}${i}`);
                    tempBlock.style.backgroundColor = "green";
                }
            }
        }
    }
    round += 1;
    console.log(round);
    if(guess == solution){
        gameText.textContent = "you winned!";
        gameText.style.color = "green";
        gameOver = true;
    }  
    if(round == 6){
        gameText.textContent = "you losed...";
        gameText.style.color = "red";
        gameOver = true;
    }
    
    

}









