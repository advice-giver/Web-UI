// Change button colors on mouseover

let buttons = document.querySelectorAll("button");
function changeButton(button, color) {
  button.style.color = `${color}`; 
}

buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    changeButton(button, "yellow");
  });

    button.addEventListener("mouseleave", () => { 
    changeButton(button, "#33cccc"); 
  })
    
});


// Change headers color on mouseover

let headers = document.querySelectorAll(".sectionheader");
function changeHeader(header, color) {
  header.style.color = `${color}`; 
}

headers.forEach(header => {
  header.addEventListener("mouseover", () => {
    changeHeader(header, "darkred");
  });

  header.addEventListener("mouseleave", () => { 
    changeHeader(header, "black"); 
  })
    
});


// Highlight text on mouseover




let highlights = document.querySelectorAll("strong");
function changeColor(highlight, color) {
  highlight.style.color = `${color}`; 
}

highlights.forEach(highlight => {
  highlight.addEventListener("mouseover", () => {
    changeColor(highlight, "darkred");
  });

  highlight.addEventListener("mouseleave", () => { 
    changeColor(highlight, "black"); 
  })
    
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

