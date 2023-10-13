const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  h2: document.querySelectorAll("h2"),
}

DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2.forEach((element) => element.textContent = DOMSelectors.firstName.value);
});
