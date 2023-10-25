const DOMSelectors = {
  form: document.querySelector("#form"),
  agentName: document.querySelector(".agent-name"),
  agentType: document.querySelector(".agent-type"),
  agentImage: document.querySelector(".agent-image"),
  box: document.querySelector("#container-box"),
}

function insert () {
  DOMSelectors.box.insertAdjacentHTML("beforeend", 
  `<div class="entry">
    <img src=${DOMSelectors.agentImage.value} alt="Image" class="card-img">
    <h1 class="agent-name-card">${DOMSelectors.agentName.value}</h1>
    <h2>${DOMSelectors.agentType.value}</h2>
    <button class="remove">Remove</button>
  </div>`);
}

function remove () {
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function (button) {
      button.target.parentElement.remove();
    })
  });
}

function clearInputs () {
  DOMSelectors.agentName.value = "";
  DOMSelectors.agentType.value = "";
  DOMSelectors.agentImage.value = "";
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  insert();
  remove();
  clearInputs();
});
