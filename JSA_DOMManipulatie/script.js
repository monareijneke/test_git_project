const btns = document.querySelectorAll(".big-five-button");
const newLi = document.createElement("li");
const luAsParent = document.querySelector("#spotted-animals-list");
console.log(newLi); //<li></li>

//Stap 1: event aan buttons
// btns.addEventListener("click",XXX );

//Stap 2: function on click
const addNewAnimal = () => {
  newLi.classList.add("spotted-animals-list-items");
  newLi.innerHTML = animals; ///hier gaat het fout, denk ik
  luAsParent.appendChild(newLi);
  console.log(addNewAnimal);
};
// // console.log(luAsParent); //<lu id=.....</lu>
// //Stap 3: event aan functie koppelen
// btns.addEventListener("click", addNewAnimal);

//stap 4: toegang tot waardes
btns.forEach((button) => {
  const animals = button.innerHTML;
  console.log(animals);
});

// Stap 5: creeer nieuwe list item
// zie boven

// Stap 6: creeer parent element
// zie boven

// Stap 7: koppel Child (newLi) aan Parent
luAsParent.appendChild(newLi);

// Array.from(btns).forEach((button1) => {
//   // const animals1 = button1.innerHTML;
//   console.log(button1);
// });
