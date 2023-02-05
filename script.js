const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1ceed61d7cmshbb898d593945536p104570jsn6c6039b6fd9b",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

// formtest is just for testing
const formtest = document.querySelector("form");

formtest.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = document.querySelector("#searchTerm").value;

  fetchRecipes(searchTerm);
});

fetch(
  "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

function displayRecipes(recipes) {
  const recipeList = document.querySelector("#recipe-list");
  recipeList.innerHTML = "";

  recipes.forEach((recipe) => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${recipe.recipe.label}</h3>
                    <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">`;
    recipeList.appendChild(li);
  });
}
