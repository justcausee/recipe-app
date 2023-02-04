// const recipeCardTemplate = document.querySelector("[data-recipe-template]");
// const userCardContainer = document.querySelector(
//   "[data-recipe-cards-container]"
// );
// const searchInput = document.querySelector("[data-search]");
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1ceed61d7cmshbb898d593945536p104570jsn6c6039b6fd9b',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// let recipes = [];

// searchInput.addEventListener("input", (e) => {
//   const value = e.target.value.toLowerCase();
//   recipes.forEach((recipe) => {
//     const isVisible =
//       recipe.name.includes(value) || recipe.email.includes(value);
//     recipe.element.classList.toggle("hide", !isVisible);
//   });
// });

// // API WORKS
// // user is switched with recipe and be sure to align with API
// fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
// 	.then(response => response.json())
//   .then(data => {
// 	// .then(response => console.log(response))
// 	// .catch(err => console.error(err));
//   //   recipes = data.map((recipe) => {
//       const card = recipeCardTemplate.content.cloneNode(true).children[0];
//       const header = card.querySelector("[data-header]");
//       const body = card.querySelector("[data-body]");
//       header.textContent = recipes.list; // FIX parameter
//       body.textContent = recipes.list-similarities; // FIX parameter
//       userCardContainer.append(card);
//       return { // FIX THIS - data needs to match with API
//         name: recipes.name, 
//         ingredients: recipes.list,
//         element: card,
//       };
//     });

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ceed61d7cmshbb898d593945536p104570jsn6c6039b6fd9b',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));