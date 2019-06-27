// Changing buttons when moused over

let button = document.querySelector("button");

function changeButton() {
  button.style.color = "yellow";
}

button.addEventListener("mouseover", changeButton);

let button2 = document.querySelector("#footerbutton");

function changeButton2() {
  button2.style.color = "yellow";
}

button2.addEventListener("mouseover", changeButton2);

// Changing headers color when moused over 

let header = document.querySelector("#worksheader");

function changeHeader() {
  header.style.color = "darkred";
}

header.addEventListener("mouseover", changeHeader);


let header2 = document.querySelector(".agheader");

function changeHeader2() {
  header2.style.color = "darkred";
}

header2.addEventListener("mouseover", changeHeader2);

let header3 = document.querySelector(".helpedheader");

function changeHeader3() {
  header3.style.color = "darkred";
}

header3.addEventListener("mouseover", changeHeader3);


// Increase card size on mouseover 

let card = document.querySelector("#border");

function changeCard() {
  card.style.width = "75rem";
  card.style.height= "20rem";
}

card.addEventListener("mouseover", changeCard);

let card2 = document.querySelector(".border2");

function changeCard2() {
  card2.style.width = "75rem";
  card2.style.height= "20rem";
}

card2.addEventListener("mouseover", changeCard2);

let card3 = document.querySelector(".border3");

function changeCard3() {
 card3.style.width = "75rem";
 card3.style.height= "20rem";
}

card3.addEventListener("mouseover", changeCard3);
