const btns = document.querySelectorAll(".big-five-button");
const newLi = document.createElement("li");
const luAsParent = document.querySelector("#spotted-animals-list");
console.log(newLi); //<li></li>

//Stap 1: event aan buttons
// btns.addEventListener("click",XXX );

// //Stap 2: function on click
const addNewAnimal = () => {
  newLi.classList.add("spotted-animals-list-items");
  newLi.innerHTML = animal;
  luAsParent.appendChild(newLi);
};
// console.log(luAsParent); //<lu id=.....</lu>

// //Stap 3: event aan functie koppelen elke button
// btns.forEach(button => addEventListener("click", addNewAnimal));

//stap 4: toegang tot waardes
btns.forEach((button) => {
  let animal = button.innerHTML;
  console.log(animal);
});

btns.forEach((button2) => {
  button2.addEventListener("click", (newLiValue) => {
    addNewAnimal(animal);
    console.log(newLiValue);
  });
});
