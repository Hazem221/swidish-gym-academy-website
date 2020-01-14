const inputSearch = document.createElement("input");
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "Search");
inputSearch.setAttribute("class", "add-input");
inputSearch.style.marginBottom = "2px";

const addInput = document.querySelector(".navbar .navbar-nav");

const search = document.querySelector(".navbar .navbar-nav li i:first-child");
search.style.cursor = "pointer";
search.addEventListener("click", function() {
  addInput.appendChild(inputSearch);
  if (inputSearch.style.visibility === "hidden") {
    inputSearch.style.visibility = "visible";
  } else {
    inputSearch.style.visibility = "hidden";
  }
});
