// Change button colors on mouseover

let buttons = document.querySelectorAll("button");
function changeButton(button) {
  button.style.color = "yellow";
}

buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    changeButton(button);
  });
});

// Change headers color on mouseover

let headers = document.querySelectorAll(".sectionheader");
function changeHeader(header) {
  header.style.color = "darkred";
}

headers.forEach(header => {
  header.addEventListener("mouseover", () => {
    changeHeader(header);
  });
});

// Highlight text on mouseover

let highlights = document.querySelectorAll("strong");
function changeColor(highlight) {
  highlight.style.backgroundColor = "yellow";
}
highlights.forEach(highlight => {
  highlight.addEventListener("mouseover", () => {
    changeColor(highlight);
  });
});


