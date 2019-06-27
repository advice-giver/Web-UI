// Change Lambda School text size and font on mouseover

let lambda = document.querySelector(".lambda");

function changeText() {
  lambda.style.fontSize = "large";
  lambda.style.fontFamily = "arial black";
}

lambda.addEventListener("mouseover", changeText);

// Change color of headers on mouseover

let aboutHeaders = document.querySelectorAll("#aboutHeaders");
function aboutHeaderColor(aboutHeader) {
  aboutHeader.style.color = "darkred";
}

aboutHeaders.forEach(aboutHeader => {
  aboutHeader.addEventListener("mouseover", () => {
    aboutHeaderColor(aboutHeader);
  });
});

// Change team names to cursive w/ bottom border on click

let teamNames = document.querySelectorAll("h4");
function changeTeamName(personName) {
  personName.style.borderBottom = "thin solid black";
  personName.style.fontFamily = "cursive";
}

teamNames.forEach(personName => {
  personName.addEventListener("click", () => {
    changeTeamName(personName);
  });
});
