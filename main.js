// Magic 8 Ball

//HTML Variables
let outputE1 = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  // Generate a radnom answer
  let randNum = Math.random();
  console.log(randNum);

  // Question
  if (randNum < 0.2) {
    outputE1.innerHTML = "Of course";
  } else if (randNum < 0.4) {
    outputE1.innerHTML = "As i see it, yes.";
  } else if (randNum < 0.6) {
    outputE1.innerHTML = "without a doubt";
  } else if (randNum < 0.8) {
    outputE1.innerHTML = "Concentrate and ask again";
  } else if (randNum < 0.9) {
    outputE1.innerHTML = "dont count on it";
  } else if (randNum < 1) {
    outputE1.innerHTML = "outlook not so good";
  } else if ((randNum = 0)) [(outputE1.innerHTML = "Please ask a question ")];
}
