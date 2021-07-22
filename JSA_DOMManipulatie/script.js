const btns = document.querySelectorAll(".big-five-button");
const newLi = document.createElement("li");
const luAsParent = document.querySelector("#spotted-animals-list");
// console.log(newLi); //<li></li>

//Deel 1 -Stap 2: functie wanneer er geklikt wordt
const addNewAnimal = (event) => {
  //Stap 3: met (event) koppeling maken
  newLi.classList.add("spotted-animals-list-item"); //class meegeven aan nieuwe list item
  newLi.innerHTML = event.target.innerHTML; //stap 4: specifieke waarde meegeven aan nieuwe list item
  luAsParent.appendChild(newLi); //stap 7: nieuwe list item  aan parent koppelen
  // console.log(newLi);
};

//Deel 1 - Stap 1: event toevoegen aan alle buttons apart!
btns.forEach((button) => {
  button.addEventListener("click", addNewAnimal);
});

//Deel 2 - Remove first
const buttonRemove = document.querySelector("#remove-first-item-button");
const parent = document.querySelector("#spotted-animals-list");
const child = document.querySelector(".spotted-animals-list-item");
// console.log(parent);

const removeFirst = () => {
  parent.removeChild(child);
};
buttonRemove.addEventListener("click", removeFirst);

//Deel 3 - Remove all
const buttonAllRemove = document.querySelector("#remove-all-button");
// console.log(buttonAllRemove);
const removeAll = () => {
  parent.innerHTML = " ";
};

buttonAllRemove.addEventListener("click", removeAll);
