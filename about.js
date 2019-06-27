// Change color of header when mouseover

let mission = document.querySelector("h3");

function changeColor() {
  mission.style.color = "darkred";
}

mission.addEventListener("mouseover", changeColor);

let mission2 = document.querySelector("#header2");

function changeColor2() {
  mission2.style.color = "darkred";
}

mission2.addEventListener("mouseover", changeColor2);

let meetTeam = document.querySelector(".teamheader");

function changeColor3() {
  meetTeam.style.color = "darkred";
}

meetTeam.addEventListener("mouseover", changeColor3);
