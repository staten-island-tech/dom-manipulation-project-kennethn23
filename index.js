const DOMSelectors = {
    button: document.getElementById("button"), // getElementById looks for the id that is passed through it, in this case being "btn"
    text: document.querySelector("#text"), // queryselectors look for elements based on parameters, being '.' or '#'
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"), // querySelectorAll will access multiple elements with the same class, in this case being "point"
    null: document.getElementById("point"), // if you try to access a class with getElementById, it will result in "null"
    empty: document.querySelector(".nothing"),
  };
  
  console.log(DOMSelectors.box);
  console.log(DOMSelectors.button);
  console.log(DOMSelectors.text);
  console.log(DOMSelectors.points); 
  console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
  console.log(DOMSelectors.null);
  console.log(DOMSelectors.nothing);