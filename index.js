// node start to start server
const button = document.querySelector("button");
const guess = document.querySelector(".hidden");
const message = document.querySelector(".message");
// holds the scrambled word
let chosenWordScram = "";
//holds the hidden word
let anagram = "";
// no of guesses
let guesses = 0;
// starts game false to begin, before button is presses
let playGame = false;
// the array for the words to stored in
let gameWords = ["horses", "dogs", "pigs", "sheep", "hens"];
button.addEventListener("click", function() {
  if (!playGame) {
    // if start game is false, then make true;
    playGame = true;
    // always re-starts at zero
    guesses = 0;
    // change button to guess after pressed
    button.innerHTML = "Guess";
    // button also when clicked show input box
    guess.classList.toggle("hidden");
    anagram = WordToUse();
    // turns any string(word) into an array, we then loop (randomWordArray function)
    // and then it is scrambled by being split eg .split() and rejoined with .join()
    chosenWordScram = randomWordArray(anagram.split("")).join("");
    message.innerHTML = chosenWordScram;
    // message.innerHTML = chosenWordScram + " " + anagram;
    console.log(WordToUse());
    console.log(chosenWordScram);
  } else {
    // Check to see that the guesses match
    let tempGuess = guess.value;
    guesses++;
    console.log(tempGuess);
    // check to see if guess matches anagram of word scrambled
    if (tempGuess === anagram) {
      console.log("correct");
      // if correct play is stopped
      inplay = false;
      message.innerHTML =
        "Correct it was " + anagram + ", it took " + guesses + " guesses";
      button.innerHTML = "Start";
      guess.classList.toggle("hidden");
    } else {
      console.log("guess again");
      message.innerHTML = "Wrong, guess again " + chosenWordScram;
    }
  }
});

// Word is picked from the array
//Word is randomised
function WordToUse() {
  // randomises the word of the array, counting the length of it
  // outputs a decimal number, but with math.floor rounds it up
  let randomIndex = Math.floor(Math.random() * gameWords.length);
  // random index value of the array will be stored here
  let tempWord = gameWords[randomIndex];
  // let rand = randomWordArray(tempWord.split(""));
  // console.log(rand);
  return tempWord;
}

function randomWordArray(arr) {
  //loop to loop throught the contents of the array
  // let i will be the value of the array.length-1, index values
  // goes below 0 the loop stops
  // i is above the value, we decrease the value of i
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    //randomise the array words to be displayed
    // picked word is compared
    let j = Math.floor(Math.random() * (i + 1));
    console.log(temp);
    console.log(i);
    console.log(j);
    // swopping the order between the 2 different arrays
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
