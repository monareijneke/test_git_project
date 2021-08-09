async function getGenres() {
  const genre = await getData();
  return genre;
}

console.log(getData());

const genresParent = document.querySelector(".genres");
console.log(genresParent);

getData().then(function (data) {
  data.forEach((genre) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `genre naam:  + ${genre.name} + ", id: " + ${genre.id}`;
    genresParent.appendChild(newLi);
  });

  console.log(data);
});
getData();
