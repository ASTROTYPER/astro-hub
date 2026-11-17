const games = [
  {
    name: "Space Runner",
    category: "Arcade",
    image: "https://placehold.co/400x220/172554/ffffff?text=Space+Runner"
  },
  {
    name: "Galaxy Puzzle",
    category: "Puzzle",
    image: "https://placehold.co/400x220/312e81/ffffff?text=Galaxy+Puzzle"
  },
  {
    name: "Astro Quest",
    category: "Adventure",
    image: "https://placehold.co/400x220/164e63/ffffff?text=Astro+Quest"
  }
];

const gameGrid = document.getElementById("gameGrid");
const gameSearch = document.getElementById("gameSearch");

function displayGames(list) {
  gameGrid.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>${game.category}</p>
      <button disabled>Coming Soon</button>
    `;

    gameGrid.appendChild(card);
  });
}

function filterGames(category) {
  const filtered = category === "All"
    ? games
    : games.filter(game => game.category === category);

  displayGames(filtered);
}

gameSearch.addEventListener("input", () => {
  const search = gameSearch.value.toLowerCase();

  displayGames(
    games.filter(game =>
      game.name.toLowerCase().includes(search) ||
      game.category.toLowerCase().includes(search)
    )
  );
});

displayGames(games);
