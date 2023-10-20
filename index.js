const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  lastName: document.querySelector(".last-name"),
  height: document.querySelector(".height"),
  // h2: document.querySelectorAll("h2"),
  box: document.querySelector("#container-box"),
}

/* DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2.forEach((element) => element.textContent = DOMSelectors.firstName.value);
}); */

function Enter () {
  DOMSelectors.box.insertAdjacentHTML("beforeend", 
  `<div class="entry">
    <img src=${DOMSelectors.height.value} alt="Image" class="card-img">
    <h1>${DOMSelectors.firstName.value} ${DOMSelectors.lastName.value}</h1>
    <button class="remove">Remove</button>
  </div>`);
}

function Remove () {
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function (button) {
      button.target.parentElement.remove();
    })
  });
}

function Clear () {
  DOMSelectors.firstName.value = "";
  DOMSelectors.lastName.value = "";
  DOMSelectors.height.value = "";
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  Enter();
  Remove();
  Clear();
});