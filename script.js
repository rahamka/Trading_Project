let modeBtn = document.getElementById("modeDiv");
let container = document.getElementById("container");
let featureBtn = document.getElementById("features-container");
// here querySelectorAll isn't working?
let cards = document.querySelectorAll(".card");
modeBtn.addEventListener("click", () => {
  // modeBtn innerText
  if (modeBtn.innerText == "Dark Mode") {
    container.style.background = "rgba(112, 112, 112, 1)";
    container.style.color = "white";
    featureBtn.style.background = "white";
    modeBtn.style.background = "white";
    featureBtn.style.color = "black";
    modeBtn.style.color = "black";
    modeBtn.innerText = "Light Mode";

    // loop through each card
    cards.forEach((card) => {
      card.style.backgroundColor = "rgba(75, 75, 75, 1)";
      card.style.color = "white";
    });
  } else if (modeBtn.innerText == "Light Mode") {
    modeBtn.innerText = "Dark Mode";
    container.style.background = "#ffffffc5";
    container.style.color = "black";
    featureBtn.style.background = "black";
    featureBtn.style.color = "white";
    modeBtn.style.color = "white";
    modeBtn.style.backgroundColor = "black";

    // loop through each card
    cards.forEach((card) => {
      card.style.backgroundColor = "#fff";
      card.style.color = "black";
    });
  }
});

// Note in this code querySelectorAll isn't working because of that cards color isn't changing?
// fix this error, teach me in simple words why querySelectorAll isn't working?
