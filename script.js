const userCardTemplate = document.querySelector("[data-recipe-template]");
const userCardContainer = document.querySelector(
  "[data-recipe-cards-container]"
);
const searchInput = document.querySelector("[data-search]");

let recipes = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  recipes.forEach((recipe) => {
    const isVisible =
      recipe.name.includes(value) || recipe.email.includes(value);
    recipe.element.classList.toggle("hide", !isVisible);
  });
});

// API NOT WORKING
// user is switched with recipe and be sure to align with API
fetch(
  "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes"
)
  .then((res) => res.json())
  .then((data) => {
    recipe = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = recipe.name;
      body.textContent = recipe.list;
      userCardContainer.append(card);

      // FIX THIS - data needs to match with API
      return {
        name: recipe.name,
        ingredients: recipe.ingredients,
        element: card,
      };
    });
  });
