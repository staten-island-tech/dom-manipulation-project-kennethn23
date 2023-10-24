const DOMSelectors = {
  form: document.querySelector("#form"),
  albumName: document.querySelector(".album-name"),
  artistName: document.querySelector(".artist-name"),
  albumImage: document.querySelector(".album-image"),
  box: document.querySelector("#container-box"),
}

function Enter () {
  DOMSelectors.box.insertAdjacentHTML("beforeend", 
  `<div class="entry">
    <img src=${DOMSelectors.albumImage.value} alt="Image" class="card-img">
    <h1>${DOMSelectors.albumName.value} ${DOMSelectors.artistName.value}</h1>
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
  DOMSelectors.albumName.value = "";
  DOMSelectors.artistName.value = "";
  DOMSelectors.albumImage.value = "";
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  Enter();
  Remove();
  Clear();
});

