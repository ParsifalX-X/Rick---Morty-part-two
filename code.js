const REST_API = "https://rickandmortyapi.com/api/character";

function fetchData(page) {
  fetch(`${REST_API}/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      // Generate the HTML for the character cards
      const cards = data.results.map((character) => {
        return `
          <div class="s1_1">
            <img
              src="${character.image}"
              alt="${character.name}"
              class="main__img"
            />
            <div class="section1__text">
              <h2>${character.name}</h2>
              <p>${character.species}</p>
            </div>
          </div>
        `;
      });

      // Insert the generated HTML into the main__content div
      const mainContent = document.querySelector(".main__content section");
      mainContent.innerHTML = cards.join("");
    })
    .catch((error) => console.error("Error fetching data:", error));
}

const count_minus = document.querySelector("#count_minus");
const count_plus = document.querySelector("#count_plus");
let count = 1;

count_minus.addEventListener("click", (e) => {
  if (count > 1) {
    count -= 1;
    fetchData(count);
    console.log(count);
  }
});

count_plus.addEventListener("click", (e) => {
  count+= 1;
  fetchData(count);
  console.log(count);
});

fetchData(count);