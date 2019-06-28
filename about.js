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


//Dropdown component 

class Dropdown {
  constructor(element) {
    
    
    this.element = element;
    
 
    
   
    this.button = this.element.querySelector('.dropdown-button');

    
    this.content = this.element.querySelector('.dropdown-content');

   
    
    this.button.addEventListener('mouseover', () => {
      this.toggleContent();
    })
  }

  toggleContent() {

    this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

