const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  h2: document.querySelectorAll("h2"),
  box: document.querySelector("#container-box"),
}

/* DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2.forEach((element) => element.textContent = DOMSelectors.firstName.value);
}); */

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = DOMSelectors.firstName.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
  DOMSelectors.firstName.value = "";
});