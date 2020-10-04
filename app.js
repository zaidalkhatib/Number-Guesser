const inputValue = document.querySelector("#exampleEmailInput");
let randomNumber = Math.floor(Math.random() * 10) + 1;
let count = 3;
const playAgain = document.createElement("button");
playAgain.className = "button";
playAgain.textContent = "Play Again";
document.querySelector(".button-primary").addEventListener("click", (e) => {
  count--;
  console.log(randomNumber);
  if (Number(inputValue.value) !== randomNumber && count === 0) {
    document.querySelector(
      ".message"
    ).innerHTML = `<h4 style='color:red'> Game Over</h4>`;
    document.querySelector("#exampleEmailInput").disabled = true;
    document.querySelector(".button-primary").textContent = "Play Again";
    document.querySelector(".button-primary").className = "button";
  } else if (Number(inputValue.value) === randomNumber) {
    document.querySelector(".message").innerHTML =
      "<p style='color:teal'>Your Guess is Correct</p>";
    document.querySelector("#exampleEmailInput").disabled = true;
    document.querySelector(".button-primary").textContent = "Play Again";
    document.querySelector(".button-primary").className = "button";
  } else if (Number(inputValue.value) !== randomNumber) {
    document.querySelector(
      ".message"
    ).innerHTML = `<p style='color:red'>${Number(
      inputValue.value
    )} is Wrong, You Have ${count} Guesses Left</p>`;
  }
});

document.body.addEventListener("mousedown", (e) => {
  if (e.target.className === "button") {
    window.location.reload();
    document.querySelector(".message").innerHTML =
      " <p style='color:red'> </p>";
  }
});
